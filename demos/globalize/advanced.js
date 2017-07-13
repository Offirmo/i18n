const Globalize = require('globalize')
Globalize.load(require('cldr-data').entireSupplemental())
Globalize.load(require('cldr-data').entireMainFor('en', 'fr'))
Globalize.loadTimeZone(require( 'iana-tz-data'))

Globalize.loadMessages({
	en: {
		greetings: {
			hello: "Hello",
			bye: "Bye"
		}
	},
	fr: {
		greetings: {
			hello: "Bonjour",
			bye: "Au revoir"
		}
	}
})

//Globalize.locale('fr')

console.log(
	Globalize('en').formatMessage('greetings/hello')
)
console.log(
	Globalize('fr').formatMessage('greetings/hello')
)

