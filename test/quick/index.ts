#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../../node_modules/.bin/ts-node "$0" "$@"
'use strict';

import { polyfill_intl_for_locales } from '../../src/node/auto-intl-polyfiller'
polyfill_intl_for_locales([ 'en', 'fr'])

console.log('Hello world !')


import { factory } from '../../src/index'

const i18n = factory()
i18n.setErrorReporter((err: Error) => {})
i18n.addTranslations('fr', {
	hello: 'Bonjour',
	savings: '{count, number} heures économisées par an',
	security_score: 'Score {score, number, percent}',
	total_to_pay: 'Total à payer : {total, number, price}',
	joined_team: '{name} a rejoint l’équipe le {date, date, long}',
	x_items: `{count, plural, =0 {Pas d’éléments.} =1 {Un élément.} other {{count} éléments.}}`,
})
i18n.addCustomFormats('fr', {
	number: {
		price: {
			style: 'currency',
			currency: 'EUR'
		}
	}
})

i18n.addTranslations('en', {
	hello: 'Hello',
	savings: '{count, number} hours saved each year',
	security_score: 'Score {score, number, percent}',
	total_to_pay: 'Total due: {total, number, price}',
	joined_team: '{name} joined the team on {date, date, short}',
	x_items: `{count, plural, =0 {No items.} =1 {One item.} other {{count} items.}}`
})
i18n.addCustomFormats('en', {
	number: {
		price: {
			style: 'currency',
			currency: 'USD'
		}
	}
})

console.log('*** fr ***')
i18n.setLocale('fr')
console.log(i18n.translate('hello'))
console.log(i18n.translate('savings', { count: 1000  }))
console.log(i18n.translate('security_score', { score: 0.735  }))
console.log(i18n.translate('total_to_pay', { total: 1235.7  }))
console.log(i18n.translate('joined_team', { name: 'Jason', date: Date.now() - 1000000 }))
console.log(i18n.translate('x_items', { count: 0  }))
console.log(i18n.translate('x_items', { count: 1  }))
console.log(i18n.translate('x_items', { count: 42 }))
console.log(i18n.translate('foo'))


console.log('*** en ***')
i18n.setLocale('en')
console.log(i18n.translate('hello'))
console.log(i18n.translate('savings', { count: 1000  }))
console.log(i18n.translate('security_score', { score: 0.735  }))
console.log(i18n.translate('total_to_pay', { total: 1235.7  }))
console.log(i18n.translate('joined_team', { name: 'Jason', date: Date.now() - 1000000 }))
console.log(i18n.translate('x_items', { count: 0  }))
console.log(i18n.translate('x_items', { count: 1  }))
console.log(i18n.translate('x_items', { count: 42 }))
console.log(i18n.translate('foo'))
