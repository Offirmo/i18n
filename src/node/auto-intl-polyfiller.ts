'use strict';

/** Auto polyfill current javascript environment Intl so that it supports given locales
 * http://formatjs.io/guides/runtime-environments/#server
 */

import { are_Intl_locales_supported } from '../are-intl-locales-supported'

// complete polyfilling (node <= 0.10)
// This one doesn't need user infos
if (!global.Intl) {
	// use and load the polyfill.
	console.log('* [offirmo-formatjs] polyfilling entire Intl...')
	global.Intl = require('intl')
}

// basic auto check
const USUAL_LOCALES = ['en', 'fr'];
if (!are_Intl_locales_supported(USUAL_LOCALES)) {
	console.warn('! [offirmo-formatjs] Current Intl doesn’t support usual locales !', USUAL_LOCALES)
}

function polyfill_intl_for_locales(locales_my_app_needs: string[]) {
	// Determine if current `Intl` has the locale data we need.
	if (!are_Intl_locales_supported(locales_my_app_needs)) {
		// `Intl` exists, but it doesn't have the data we need
		// ex. node >= 0.12 only has en
		// so load the polyfill and replace the constructors which need it with the polyfill's
		console.log(`* [offirmo-formatjs] polyfilling partial intl for [${locales_my_app_needs}]...`)
		const Intl_polyfill = require('intl')
		Intl.NumberFormat = Intl_polyfill.NumberFormat
		Intl.DateTimeFormat = Intl_polyfill.DateTimeFormat
	}
}

export {
polyfill_intl_for_locales
}
