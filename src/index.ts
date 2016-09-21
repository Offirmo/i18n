/** Store i18n data needed by format-key
 */

////////////////////////////////////

import * as _ from 'lodash'

////////////

import { LocaleCode, IMessagesStore, IIntl, IIntlChangeListener } from './types'

////////////////////////////////////

function factory() {
	let locale: LocaleCode = 'en'
	let intls: {
		[k: string]: IIntl
	}
	let locale_change_listeners: IIntlChangeListener[] = []

	function ensure_intl_for_locale(locale: LocaleCode) {
		const intl: IIntl = intls[locale] || {
				locale,
				messages: {
					locale,
				},
				formats: {}
			}
		intls[locale] = intl
	}

	function set_locale(candidate_locale: LocaleCode) {
		if (candidate_locale === locale) return

		ensure_intl_for_locale(candidate_locale)
		locale = candidate_locale

		const intl: IIntl = intls[locale]
		locale_change_listeners.forEach((listener: IIntlChangeListener) => listener(intl))
	}

	function get_locale() {
		return locale
	}

	function add_translations(locale: LocaleCode, messages: IMessagesStore = {}, custom_formats: Object = {}) {
		ensure_intl_for_locale(locale)

		const intl: IIntl = intls[locale]

		Object.assign(intl.messages, messages)
		Object.assign(intl.formats, custom_formats)
	}

	function on_locale_change(listener_to_add: IIntlChangeListener) {
		if (_.includes(locale_change_listeners, listener_to_add))
			throw new Error('Trying to attach a locale change listener which is already present !')

		locale_change_listeners.push(listener_to_add)

		if (intl) {
			// call it immediately
			listener_to_add(intl)
		}
	}

	function off_locale_change(listener_to_remove: IIntlChangeListener) {
		if (!_.includes(locale_change_listeners, listener_to_remove))
			throw new Error('Trying to remove a locale change listener which is not present !')

		locale_change_listeners = _.reject(locale_change_listeners, listener => (listener === listener_to_remove))
	}

	return {
		set_locale,
		add_translations,
		get_locale,
		on_locale_change,
		off_locale_change
	}
}

const default_instance = factory()

////////////////////////////////////

export {
	LocaleCode,
	IMessagesStore,
	IIntl,
	IIntlChangeListener,
	default_instance,
	factory,
}

////////////////////////////////////
