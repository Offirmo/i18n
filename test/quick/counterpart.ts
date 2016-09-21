#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../../node_modules/.bin/ts-node "$0" "$@"
'use strict';

console.log('Hello world !')

/// <reference path="../../typings-custom/counterpart.d.ts" />
//import * as counterpart from 'counterpart'
const Counterpart = require('counterpart')

Counterpart.registerTranslations('fr', {
	hello: 'Bonjour',
	x_items: {
		zero:  'Pas d’éléments.',
		one:   'Un élément.',
		other: '%(count)s éléments.'
	}
})

Counterpart.registerTranslations('en', {
	hello: 'Hello',
	x_items: {
		zero:  'No items.',
		one:   'One item.',
		other: '%(count)s items.'
	}
})

console.log('*** fr ***')
Counterpart.setLocale('fr')
console.log(Counterpart.translate('hello'))
console.log(Counterpart.translate('x_items', { count: 0  }))
console.log(Counterpart.translate('x_items', { count: 1  }))
console.log(Counterpart.translate('x_items', { count: 42 }))

console.log('*** en ***')
Counterpart.setLocale('en')
console.log(Counterpart.translate('hello'))
console.log(Counterpart.translate('x_items', { count: 0  }))
console.log(Counterpart.translate('x_items', { count: 1  }))
console.log(Counterpart.translate('x_items', { count: 42 }))
