#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../../node_modules/.bin/ts-node "$0" "$@"
'use strict';

console.log('Hello world !')

/// <reference path="../../typings-custom/counterpart.d.ts" />
//import * as counterpart from 'counterpart'
const i18n = require('counterpart')

// https://github.com/martinandert/counterpart/issues/12#issuecomment-110858568
const fr_defaults = {
	counterpart: {
		pluralize: (entry: any, count: number) => entry[
			(count === 0 && 'zero' in entry)
				? 'zero' : (count === 1) ? 'one' : 'other'
			],
		formats: {
			date: {
				'default':  '%a, %e. %b %Y',
				'long':     '%A, %e. %B %Y',
				'short':    '%d.%m.%y'
			},
			time: {
				'default':  '%H:%M',
				'long':     '%H:%M:%S %z',
				'short':    '%H:%M'
			},
			datetime: {
				'default':  '%a, %e. %b %Y, %H:%M',
				'long':     '%A, %e. %B %Y, %H:%M:%S %z',
				'short':    '%d.%m.%y %H:%M'
			}
		}
	}
}
i18n.registerTranslations('fr', fr_defaults)

i18n.registerTranslations('fr', {
	hello: 'Bonjour',
	savings: '%(count)s heures économisées par an',
	security_score: 'Score %(score)s%%',
	total_to_pay: 'Total à payer : %(total)s',
	x_items: {
		zero:  'Pas d’éléments.',
		one:   'Un élément.',
		other: '%(count)s éléments.'
	}
})

i18n.registerTranslations('en', {
	hello: 'Hello',
	savings: '%(count)s hours saved each year',
	security_score: 'Score %(score)s%%',
	total_to_pay: 'Total due: %(total)s',
	x_items: {
		zero:  'No items.',
		one:   'One item.',
		other: '%(count)s items.'
	}
})

console.log('*** fr ***')
i18n.setLocale('fr')
console.log(i18n.translate('hello'))
console.log(i18n.translate('savings', { count: 1000  }))
console.log(i18n.translate('security_score', { score: 0.735 * 100  }))
console.log(i18n.translate('total_to_pay', { total: 1235.7  }))
console.log(i18n.translate('x_items', { count: 0  }))
console.log(i18n.translate('x_items', { count: 1  }))
console.log(i18n.translate('x_items', { count: 42 }))
console.log(i18n.translate('foo'))

console.log('*** en ***')
i18n.setLocale('en')
console.log(i18n.translate('hello'))
console.log(i18n.translate('savings', { count: 1000  }))
console.log(i18n.translate('security_score', { score: 0.735 * 100  }))
console.log(i18n.translate('total_to_pay', { total: 1235.7  }))
console.log(i18n.translate('x_items', { count: 0  }))
console.log(i18n.translate('x_items', { count: 1  }))
console.log(i18n.translate('x_items', { count: 42 }))
console.log(i18n.translate('foo'))
