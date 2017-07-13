"use strict";
/** Resolve an ICU MessageFormat to a string.
 */
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////////////
const _ = require("lodash");
//import * as IntlMessageFormat from 'intl-messageformat'
const IntlMessageFormat = require('intl-messageformat');
////////////////////////////////////
const default_error_reporter = (err) => {
    console.error(err);
};
////////////
function format(message, values, locale = 'en', custom_formats = {}, parent_debug_id = '?', error_reporter = default_error_reporter) {
    // errors while resolving the message
    const problems = [];
    let underlying_error;
    // fix parameters without crashing
    // message: can't be fixed, see later
    if (!_.isString(locale)) {
        problems.push('invalid locale');
        locale = 'en';
    }
    if (!_.isObject(values)) {
        // value may not be needed, don't report a problem
        values = {};
    }
    if (!_.isObject(custom_formats)) {
        problems.push('invalid custom formats');
        custom_formats = {};
    }
    if (!_.isString(parent_debug_id)) {
        parent_debug_id = '?';
    }
    if (!_.isFunction(error_reporter)) {
        error_reporter = default_error_reporter;
    }
    // final result
    let formatted_msg = '[unknown localized message]'; // for now
    // debugging
    const debug = {
        id: '',
        prefix: '[i18n|' + locale + '|',
        message: message || '???',
        suffix: (parent_debug_id ? ('|' + parent_debug_id) : '') + ']',
        locale,
        values
    };
    function update_with_best_available_data_so_far() {
        debug.id = debug.prefix + debug.message + debug.suffix;
        formatted_msg = debug.id; // so far : only a debug message
    }
    update_with_best_available_data_so_far();
    // try to resolve stuff
    resolution: {
        if (!_.isString(message)) {
            problems.push('invalid message');
            break resolution;
        }
        let message_format;
        try {
            message_format = new IntlMessageFormat(message, locale, custom_formats);
        }
        catch (err) {
            problems.push('unable to parse message format (*)');
            underlying_error = err;
            break resolution;
        }
        // eventually
        try {
            formatted_msg = message_format.format(values);
        }
        catch (err) {
            problems.push('unable to compile message (*)');
            underlying_error = err;
            break resolution;
        }
    }
    if (underlying_error || problems.length) {
        const err = new Error('Unable to properly format the given ICU message !');
        err.src = 'format-icu-message.format';
        err.params = {
            message,
            values,
            locale,
            custom_formats,
            parent_debug_id
        };
        err.problems = problems;
        err.sub_error = underlying_error;
        error_reporter(err);
    }
    return formatted_msg;
}
exports.format = format;
//# sourceMappingURL=format-icu-message.js.map