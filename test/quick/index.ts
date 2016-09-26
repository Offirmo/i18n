#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../../node_modules/.bin/ts-node "$0" "$@"
'use strict';

import { polyfill_intl_for_locales } from '../../src/node/auto-intl-polyfiller'
polyfill_intl_for_locales([ 'en', 'fr'])

console.log('Hello world !')


import { factory } from '../../src/index'

const i18n = factory()

i18n.addTranslations('fr', {
	hello: 'Bonjour',
	x_items: `{count, plural, zero {Pas d’éléments.} one {Un élément.} other {{count} éléments.}}`
})

i18n.addTranslations('en', {
	hello: 'Hello',
 x_items: `{count, plural, zero {No items.} one {One item.} other {{count} items.}}`
})

console.log('*** fr ***')
i18n.setLocale('fr')
console.log(i18n.translate('hello'))
console.log(i18n.translate('x_items', { count: 0  }))
console.log(i18n.translate('x_items', { count: 1  }))
console.log(i18n.translate('x_items', { count: 42 }))
console.log(i18n.translate('foo'))


console.log('*** en ***')
i18n.setLocale('en')
console.log(i18n.translate('hello'))
console.log(i18n.translate('x_items', { count: 0  }))
console.log(i18n.translate('x_items', { count: 1  }))
console.log(i18n.translate('x_items', { count: 42 }))
console.log(i18n.translate('foo'))
