const Globalize = require( "globalize" )

Globalize.load( require( "cldr-data" ).entireSupplemental() )
Globalize.load( require( "cldr-data" ).entireMainFor( "en", "es" ) )
Globalize.loadTimeZone( require( "iana-tz-data" ) )

console.log(
	Globalize("en").formatDate(new Date())
)
// > "11/27/2015"

console.log(
	Globalize("es").formatDate(new Date())
)
// > "27/11/2015"
