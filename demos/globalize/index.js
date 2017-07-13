const Globalize = require( "globalize" )

Globalize.load( require( "cldr-data" ).entireSupplemental() )
Globalize.load( require( "cldr-data" ).entireMainFor( "en", "fr" ) )
Globalize.loadTimeZone( require( "iana-tz-data" ) )
Globalize.locale('fr')

console.log(
	Globalize("en").formatDate(new Date())
)
// > "11/27/2015"

console.log(
	Globalize("fr").formatDate(new Date())
)
// > "27/11/2015"


const i18n = {
	fmt_number: Globalize.numberFormatter()
}

// Formatter execution (roughly 10x faster than above).
console.log(
	i18n.fmt_number( Math.PI )
)
// > 3.141

