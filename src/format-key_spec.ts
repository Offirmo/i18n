import * as _ from 'lodash'
import * as sinon from 'sinon'

const timezone_plus_1 = !!process.env.TIMEZONE_PLUS_ONE

import {
	IIntl,
	IErrorReporter,
	format
} from './format-key'


describe('format-key', function() {

	let error_reporter: IErrorReporter

	beforeEach(() => {
		error_reporter = sinon.spy() as IErrorReporter
	})

	const test_values = {
		name: 'M. World',
		now: 1234567890,
		numCats: 5,
		percentBlackCats: 0.234,
		weapon_key: 'weapon_sword',
		weapon_qualif_1_key: 'weaponqualif1_sinister',
		weapon_qualif_2_key: 'weaponqualif2_apprentice',
	}

	const intl_fr: IIntl = {
		locale: 'fr',
		messages: {
			foo: 'foo',
			hello: 'Bonjour {name} !',
			now: 'Il est {now, time, long} et tout va bien.',
			cats: 'J’ai {numCats, number} chats. Environ {percentBlackCats, number, percent} d’entre eux sont noirs.',
			weapon_sword: 'épée',
			weaponqualif1_sinister: 'sinistre',
			weaponqualif2_apprentice: 'd’apprenti',
			fn: function build_weapon_name(values: any, intl: IIntl, libs: any, debug_id: string): string {
				const parts = libs.format_multiple([
					values.weapon_key,
					values.weapon_qualif_1_key,
					values.weapon_qualif_2_key,
				], values)

				return parts.join(' ')
			},
			broken_fn: function build_weapon_name() {
				// returns nothing !
			},
		}
	}

	const intl_en: IIntl = {
		locale: 'en',
		messages: {
			foo: 'foo',
			hello: 'Hello {name}!',
			now: 'It’s {now, time, long} and all is well.',
			cats: 'I have {numCats, number} cats. Almost {percentBlackCats, number, percent} of them are black.',
			weapon_sword: 'sword',
			weaponqualif1_sinister: 'sinister',
			weaponqualif2_apprentice: 'apprentice’s',
			fn: function build_weapon_name(values: any, intl: IIntl, libs: any, debug_id: string) {
				const parts = libs.format_multiple([
					values.weapon_qualif_2_key,
					values.weapon_qualif_1_key,
					values.weapon_key,
				], values)
					.map(libs._s.capitalize)

				return parts.join(' ')
			},
			broken_fn: function build_weapon_name() {
				// returns nothing !
			},
		}
	}

	const expected_fr = {
		foo: 'foo',
		hello: 'Bonjour M. World !',
		now: `Il est ${timezone_plus_1 ? 7 : 6}:56:07   et tout va bien.`,
		cats: 'J’ai 5 chats. Environ 23\u00A0% d’entre eux sont noirs.',
		fn: 'épée sinistre d’apprenti',
		//broken_fn: '[i18n|fr|?!?|test fr]'
	}

	const expected_en = {
		foo: 'foo',
		hello: 'Hello M. World!',
		now: `It’s ${timezone_plus_1 ? 7 : 6}:56:07 AM  and all is well.`,
		cats: 'I have 5 cats. Almost 23% of them are black.',
		fn: 'Apprentice’s Sinister Sword',
		//broken_fn: '[i18n|en|?!?|test en]'
	}

	it('should expose a function', function() {
		expect(format).to.be.a('function')
	})

	describe('format() with a single key', function() {

		context('when passed correct parameters', function() {

			afterEach(() => {
				const call: any = (error_reporter as any).firstCall
				if (call)
					console.error(call.args)

				expect(error_reporter).to.not.have.been.called
			})

			it('should format correctly for fr', function() {
				_.forEach(expected_fr, function(value, key) {
					const res = format(key as string, test_values, intl_fr, 'test fr', error_reporter)
					expect(res, 'test ' + key + '@fr').to.equal(value)
				})
			})

			it('should format correctly for en', function() {
				_.forEach(expected_en, function(value, key) {
					const res = format(key as string, test_values, intl_en, 'test en', error_reporter)
					expect(res, 'test ' + key + '@en').to.equal(value)
				})
			})
		})

		context('when passed incorrect parameters', function() {
			it('should handle it')
			// TODO test broken_xy
		})

	})

	describe('format() with multiple keys', function() {

		context('when passed correct parameters', function() {

			afterEach(() => {
				const call: any = (error_reporter as any).firstCall
				if (call)
					console.error(call.args)

				expect(error_reporter).to.not.have.been.called
			})

			it('should format correctly for fr', function() {
				const res = format(
					['weapon_sword', 'weaponqualif1_sinister', 'weaponqualif2_apprentice'],
					test_values, intl_fr, 'test fr', error_reporter
				)

				expect(res).to.deep.equal(['épée', 'sinistre', 'd’apprenti'])
			})

			it('should format correctly for en', function() {
				const res = format(
					['weapon_sword', 'weaponqualif1_sinister', 'weaponqualif2_apprentice'],
					test_values, intl_en, 'test en', error_reporter
				)

				expect(res).to.deep.equal(['sword', 'sinister', 'apprentice’s'])
			})
		})

		context('when passed incorrect parameters', function() {
			it('should handle it')
		})
	})
})
