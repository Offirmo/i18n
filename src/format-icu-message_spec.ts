import * as sinon from 'sinon'

import { format, I18nErrorReporter } from './format-icu-message'

const timezone_plus_1 = !!process.env.TIMEZONE_PLUS_ONE

describe('format-icu-message', function() {

	let error_reporter: I18nErrorReporter

	beforeEach(() => {
		error_reporter = sinon.spy() as I18nErrorReporter
	})

	it('should expose a function', function() {
		expect(format).to.be.a('function')
	})

	describe('format()', function() {

		context('when passed correct parameters', function() {

			afterEach(() => {
				const call: any = (error_reporter as any).firstCall
				if (call)
					console.error(call.args)

				expect(error_reporter).to.not.have.been.called
			})

			const test_cases = [
				{
					message: 'foo',
					expected: 'foo'
				},
				{
					message: 'Bonjour {name} !',
					expected: 'Bonjour M. World !',
					values: {
						name: 'M. World'
					}
				},
				{
					locale: 'fr',
					message: 'Il est {now, time, long} et tout va bien.',
					// TODO check the suspicious triple space
					expected: `Il est ${timezone_plus_1 ? 7 : 6}:56:07   et tout va bien.`,
					values: {
						now: new Date(1234567890)
					}
				},
				{
					locale: 'en',
					message: 'It’s {now, time, long} and all is well.',
					// TODO check the suspicious double space
					expected: `It’s ${timezone_plus_1 ? 7 : 6}:56:07 AM  and all is well.`,
					values: {
						now: 1234567890
					}
				},
				{
					locale: 'fr',
					message: 'J’ai {numCats, number} chats. Environ {percentBlackCats, number, percent} d’entre eux sont noirs.',
					expected: 'J’ai 5 chats. Environ 23\u00A0% d’entre eux sont noirs.',
					values: {
						numCats: 5,
						percentBlackCats: 0.234
					}
				},
				{
					locale: 'en',
					message: 'I have {numCats, number} cats. Almost {percentBlackCats, number, percent} of them are black.',
					expected: 'I have 5 cats. Almost 23% of them are black.',
					values: {
						numCats: 5,
						percentBlackCats: 0.234
					}
				},
			]

			test_cases.forEach(function(test_case: any) {
				it('should format correctly "' + test_case.message + '"', function() {
					const res = format(
						test_case.message,
						test_case.values,
						test_case.locale,
						test_case.custom_formats,
						'TC#123', // example debug id
						error_reporter
					)

					expect(res).to.equal(test_case.expected)
				})
			})
		})

		context('when passed incorrect parameters', function() {

			afterEach(() => {
				expect(error_reporter).to.have.been.calledOnce
			})

			const test_cases = [
				{
					locale: null, // will auto fallback to en
					message: 'Il est {now, time, long} et tout va bien.',
					expected: `Il est ${timezone_plus_1 ? 7 : 6}:56:07 AM  et tout va bien.`, // fr string with en formatted date
					values: {
						now: 1234567890
					}
				},
				{
					locale: 'fr',
					message: null,
					expected: '[i18n|fr|???|TC#123]'
				}
			]

			test_cases.forEach(function(test_case: any, index: number) {
				it('should return a best effort string,' +
					' as explicit as possible and containing maximum information - case #' + index, function() {
						const res = format(
							test_case.message,
							test_case.values,
							test_case.locale,
							test_case.custom_formats,
							'TC#123', // example debug id
							error_reporter
						)

						expect(res).to.equal(test_case.expected)
					})
			})
		})
	})
})
