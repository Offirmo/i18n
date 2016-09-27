/** Store i18n data needed by format-key
 */

////////////////////////////////////

import * as _ from 'lodash'

////////////

import {
	LocaleCode,
	IcuMessageStore,
	Intl,
	IntlChangeListener,
	//I18nError,
	I18nErrorReporter,
} from './types'

import {
	format_single_key
} from './format-key'

////////////////////////////////////

function factory() {
	const default_reporter: I18nErrorReporter = console.error

	let current_locale: LocaleCode = 'en'
	const all_intls: {
		[k: string]: Intl
	} = {}
	ensure_intl_for_locale(current_locale)
	let current_intl: Intl = all_intls[current_locale]
	let locale_change_listeners: IntlChangeListener[] = []
	let error_reporter: I18nErrorReporter = default_reporter

	function ensure_intl_for_locale(locale: LocaleCode) {
		const intl: Intl = all_intls[locale] || {
				locale,
				messages: {
					locale,
				},
				formats: {}
			}
		all_intls[locale] = intl
	}

	function set_locale(candidate_locale: LocaleCode) {
		if (candidate_locale === current_locale) return

		ensure_intl_for_locale(candidate_locale)

		current_locale = candidate_locale
		current_intl = all_intls[current_locale]

		locale_change_listeners.forEach((listener: IntlChangeListener) => listener(current_intl))
	}

	function set_error_reporter(reporter?: I18nErrorReporter) {
		error_reporter = reporter || default_reporter
	}

	function get_locale() {
		return current_locale
	}

	function add_translations(locale: LocaleCode, messages: IcuMessageStore = {}) {
		ensure_intl_for_locale(locale)

		const intl: Intl = all_intls[locale]

		Object.assign(intl.messages, messages)
	}

	function add_custom_formats(locale: LocaleCode, custom_formats: Object = {}) {
		ensure_intl_for_locale(locale)

		const intl: Intl = all_intls[locale]

		Object.assign(intl.formats, custom_formats)
	}

	function on_locale_change(listener_to_add: IntlChangeListener) {
		if (_.includes(locale_change_listeners, listener_to_add))
			throw new Error('Trying to attach a locale change listener which is already present !')

		locale_change_listeners.push(listener_to_add)

		if (current_intl) {
			// call it immediately
			listener_to_add(current_intl)
		}
	}

	function off_locale_change(listener_to_remove: IntlChangeListener) {
		if (!_.includes(locale_change_listeners, listener_to_remove))
			throw new Error('Trying to remove a locale change listener which is not present !')

		locale_change_listeners = _.reject(locale_change_listeners, listener => (listener === listener_to_remove))
	}

	function translate(key: string, values: any = {}) {
		return format_single_key(
			key,
			values,
			current_intl,
			'?', // parent_debug_id
			error_reporter
		)
	}

	return {
		setLocale: set_locale,
		addTranslations: add_translations,
		addCustomFormats: add_custom_formats,
		setErrorReporter: set_error_reporter,
		translate,
		getLocale: get_locale,
		onLocaleChange: on_locale_change,
		offLocaleChange: off_locale_change
	}
}

const default_instance = factory()

////////////////////////////////////

export {
	LocaleCode,
	IcuMessageStore,
	Intl,
	IntlChangeListener,
	default_instance,
	factory,
}

////////////////////////////////////
