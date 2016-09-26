#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../../node_modules/.bin/ts-node "$0" "$@"
'use strict';

console.log('Hello world !')

/// <reference path="../../typings-custom/counterpart.d.ts" />
//import * as counterpart from 'counterpart'
const i18n = require('counterpart')

i18n.registerTranslations('fr', {
	hello: 'Bonjour',
	x_items: {
		zero:  'Pas d’éléments.',
		one:   'Un élément.',
		other: '%(count)s éléments.'
	}
})

i18n.registerTranslations('en', {
	hello: 'Hello',
	x_items: {
		zero:  'No items.',
		one:   'One item.',
		other: '%(count)s items.'
	}
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
