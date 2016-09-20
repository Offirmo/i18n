/** Store i18n data needed by format-key
 */

////////////////////////////////////

import * as _ from 'lodash'

////////////

import { LocaleCode, IMessagesStore, IIntl, IIntlChangeListener } from './types'

////////////////////////////////////

function create_instance() {
	let intl: IIntl
	let locale_change_listeners: IIntlChangeListener[] = []

	function set_icu_data(locale: LocaleCode, messages: IMessagesStore, custom_formats: Object = {}) {
		intl = {
			locale: locale,
			messages: messages,
			formats: custom_formats || {}
		}
		intl.messages.locale = locale

		locale_change_listeners.map((listener: IIntlChangeListener) => listener(intl))
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
		// setter
		set_icu_data,

		// getters
		// locale change listeners (called at init if a lang is already avail)
		on_locale_change,
		off_locale_change
	}
}

const default_instance = create_instance()

////////////////////////////////////

export {
	LocaleCode,
	IMessagesStore,
	IIntl,
	IIntlChangeListener,
	default_instance,
	create_instance,
}

////////////////////////////////////
