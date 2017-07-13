"use strict";
/** Resolve a i18n key to a string.
 */
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////////////
const _ = require("lodash");
const format_icu_message_1 = require("./format-icu-message");
////////////////////////////////////
const default_error_reporter = (err) => {
    console.error(err);
};
////////////
function format_single_key(key, values, intl, parent_debug_id = '?', error_reporter = default_error_reporter) {
    // errors while resolving the message
    const problems = [];
    let underlying_error;
    // serious, irrecoverable programming error -> we can throw
    if (!intl)
        throw new Error('missing i18n data !');
    if (!_.isObject(intl))
        throw new Error('incorrect i18n data ! (intl is not an associative array)');
    if (!_.isObject(intl.messages))
        throw new Error('incorrect i18n data ! (intl.messages is not an associative array)');
    // fix other parameters without crashing
    // key: can't be fixed, see later
    if (!_.isObject(values)) {
        // value may not be needed, don't report a problem
        values = {};
    }
    if (!_.isString(intl.locale)) {
        problems.push('invalid locale');
        intl.locale = 'en';
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
        prefix: '[i18n|' + intl.locale + '|',
        message: key || '???',
        suffix: (parent_debug_id ? ('|' + parent_debug_id) : '') + ']',
        intl: intl,
        values: values
    };
    function update_with_best_available_data_so_far() {
        debug.id = debug.prefix + debug.message + debug.suffix;
        formatted_msg = debug.id; // so far : only a debug message
    }
    update_with_best_available_data_so_far();
    // try to resolve stuff
    resolution: {
        if (!key) {
            problems.push('missing key');
            break resolution;
        }
        if (!_.isString(key)) {
            problems.push('incorrect key');
            break resolution;
        }
        if (!intl.messages[key]) {
            problems.push('key not found in intl.messages');
            break resolution;
        }
        const message = (intl.messages[key]);
        try {
            if (_.isFunction(message)) {
                debug.message = key + '<function>';
                const build_message = message;
                const exposed = {
                    _: _,
                    _s: null,
                    format: _.partialRight(format, intl, debug.id),
                    format_multiple: _.partialRight(format_multiple_keys, intl, debug.id),
                };
                formatted_msg = build_message(values, intl, exposed, parent_debug_id);
                if (!_.isString(formatted_msg)) {
                    problems.push('message as a custom formatting function didn’t return a string');
                    update_with_best_available_data_so_far();
                }
            }
            else {
                debug.message = message;
                formatted_msg = format_icu_message_1.format(message, values, intl.locale, intl.formats, parent_debug_id, error_reporter);
            }
        }
        catch (err) {
            problems.push('unable to compile message (*)');
            underlying_error = err;
            update_with_best_available_data_so_far();
            break resolution;
        }
    }
    if (underlying_error || problems.length) {
        const err = new Error('Unable to properly format the given ICU message !');
        err.src = 'format-key.format_single_key';
        err.params = {
            key,
            values,
            locale: intl.locale,
            parent_debug_id
        };
        err.problems = problems;
        err.sub_error = underlying_error;
        error_reporter(err);
    }
    return formatted_msg;
}
exports.format_single_key = format_single_key;
function format_multiple_keys(keys, values, intl, parent_debug_id = '?', error_reporter = default_error_reporter) {
    return keys.map(key => format_single_key(key, values, intl, parent_debug_id, error_reporter));
}
exports.format_multiple_keys = format_multiple_keys;
function format(key, values, intl, parent_debug_id = '?', error_reporter = default_error_reporter) {
    if (_.isArray(key))
        return format_multiple_keys(key, values, intl, parent_debug_id, error_reporter);
    else
        return format_single_key(key, values, intl, parent_debug_id, error_reporter);
}
exports.format = format;
//# sourceMappingURL=format-key.js.map