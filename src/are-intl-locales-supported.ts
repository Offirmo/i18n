'use strict';

/** Check if current javascript Intl support the given locales
 *
 * code taken from:
 * https://github.com/yahoo/intl-locales-supported/blob/master/index.js
 * Copyright 2015, Yahoo Inc.
 */

interface ITestableForLocales {
	supportedLocalesOf(locales: string[]): string[]
	supportedLocalesOf(locale: string): string[]
}


function are_Intl_locales_supported(locales: string | string[]): boolean {
	if (typeof Intl === 'undefined')
		return false

	if (!locales)
		throw new Error('areIntlLocalesSupported - locales must be supplied.')

	if (!Array.isArray(locales))
		locales = [(locales as string)]

	const intlConstructors: ITestableForLocales[] = [
		Intl.Collator,
		Intl.DateTimeFormat,
		Intl.NumberFormat
	].filter(intlConstructor => !!intlConstructor)

	if (intlConstructors.length === 0)
		return false

	return intlConstructors.every(intlConstructor => {
		const supportedLocales = intlConstructor.supportedLocalesOf(locales as string[])
		return supportedLocales.length === locales.length
	})
}

export {
	are_Intl_locales_supported
}
