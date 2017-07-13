/** Resolve an ICU MessageFormat to a string.
 */

////////////////////////////////////

import * as _ from 'lodash'
//import * as IntlMessageFormat from 'intl-messageformat'
const IntlMessageFormat = require('intl-messageformat')

////////////

import { LocaleCode, IcuMessage, I18nError, I18nErrorReporter } from './types'

////////////////////////////////////

const default_error_reporter: I18nErrorReporter = (err: I18nError) => {
	console.error(err)
}

////////////

function format(
	message: IcuMessage,
	values?: Object,
	locale: LocaleCode = 'en',
	custom_formats: Object = {},
	parent_debug_id: string = '?',
	error_reporter: I18nErrorReporter = default_error_reporter
): string {
	// errors while resolving the message
	const problems: string[] = []
	let underlying_error: Error | undefined

	// fix parameters without crashing
	// message: can't be fixed, see later
	if (!_.isString(locale)) {
		problems.push('invalid locale')
		locale = 'en'
	}
	if (!_.isObject(values)) {
		// value may not be needed, don't report a problem
		values = {}
	}
	if (!_.isObject(custom_formats)) {
		problems.push('invalid custom formats')
		custom_formats = {}
	}
	if (!_.isString(parent_debug_id)) {
		parent_debug_id = '?'
	}
	if (!_.isFunction(error_reporter)) {
		error_reporter = default_error_reporter
	}

	// final result
	let formatted_msg = '[unknown localized message]' // for now

	// debugging
	const debug = {
		id: '',
		prefix: '[i18n|' + locale + '|',
		message: message || '???',
		suffix: (parent_debug_id ? ('|' + parent_debug_id) : '') + ']',
		locale,
		values
	}
	function update_with_best_available_data_so_far() {
		debug.id = debug.prefix + debug.message + debug.suffix
		formatted_msg = debug.id // so far : only a debug message
	}
	update_with_best_available_data_so_far()

	// try to resolve stuff
	resolution: {
		if (!_.isString(message)) {
			problems.push('invalid message')
			break resolution
		}

		let message_format: IntlMessageFormat<any>
		try {
			message_format = new IntlMessageFormat(message, locale, custom_formats)
		}
		catch (err) {
			problems.push('unable to parse message format (*)')
			underlying_error = err
			break resolution
		}

		// eventually
		try {
			formatted_msg = message_format.format(values)
		}
		catch (err) {
			problems.push('unable to compile message (*)')
			underlying_error = err
			break resolution
		}
	}

	if (underlying_error || problems.length) {
		const err: I18nError = new Error('Unable to properly format the given ICU message !') as I18nError
		err.src = 'format-icu-message.format'
		err.params = {
			message,
			values,
			locale,
			custom_formats,
			parent_debug_id
		}
		err.problems = problems
		err.sub_error = (underlying_error as Error)
		error_reporter(err)
	}

	return formatted_msg
}

export {
	format,
	I18nError,
	I18nErrorReporter,
}
