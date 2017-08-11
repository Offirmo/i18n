const Globalize = require('globalize')
Globalize.load(require('cldr-data').entireSupplemental())
Globalize.load(require('cldr-data').entireMainFor('en', 'fr'))
Globalize.loadTimeZone(require( 'iana-tz-data'))

Globalize.loadMessages(require('./messages'))

const g = Globalize.locale('fr')

console.log(
	g.formatMessage('title')
)
console.log(
	g.formatMessage('title')
)

