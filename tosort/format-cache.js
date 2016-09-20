'use strict';

const IntlMessageFormat = require('intl-messageformat')

function createFormatCache() {
	// TODO one day
}

function getMsgFormat(message, locale, custom_formats) {
	var message_format;

	try {
		message_format =  new IntlMessageFormat(message, locale, custom_formats);
	}
	catch(err) {
		console.error(id + ' error : unable to parse message format !', err, debug);
	}

	return message_format;
}


module.exports = {
		libs: {
			IntlMessageFormat: IntlMessageFormat
		}
	}
