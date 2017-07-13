"use strict";
/** Store i18n data needed by format-key
 */
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////////////
const _ = require("lodash");
const format_key_1 = require("./format-key");
////////////////////////////////////
function factory() {
    const default_reporter = console.error;
    let current_locale = 'en';
    const all_intls = {};
    ensure_intl_for_locale(current_locale);
    let current_intl = all_intls[current_locale];
    let locale_change_listeners = [];
    let error_reporter = default_reporter;
    function ensure_intl_for_locale(locale) {
        const intl = all_intls[locale] || {
            locale,
            messages: {
                locale,
            },
            formats: {}
        };
        all_intls[locale] = intl;
    }
    function set_locale(candidate_locale) {
        if (candidate_locale === current_locale)
            return;
        ensure_intl_for_locale(candidate_locale);
        current_locale = candidate_locale;
        current_intl = all_intls[current_locale];
        locale_change_listeners.forEach((listener) => listener(current_intl));
    }
    function set_error_reporter(reporter) {
        error_reporter = reporter || default_reporter;
    }
    function get_locale() {
        return current_locale;
    }
    function add_translations(locale, messages = {}) {
        ensure_intl_for_locale(locale);
        const intl = all_intls[locale];
        Object.assign(intl.messages, messages);
    }
    function add_custom_formats(locale, custom_formats = {}) {
        ensure_intl_for_locale(locale);
        const intl = all_intls[locale];
        Object.assign(intl.formats, custom_formats);
    }
    function on_locale_change(listener_to_add) {
        if (_.includes(locale_change_listeners, listener_to_add))
            throw new Error('Trying to attach a locale change listener which is already present !');
        locale_change_listeners.push(listener_to_add);
        if (current_intl) {
            // call it immediately
            listener_to_add(current_intl);
        }
    }
    function off_locale_change(listener_to_remove) {
        if (!_.includes(locale_change_listeners, listener_to_remove))
            throw new Error('Trying to remove a locale change listener which is not present !');
        locale_change_listeners = _.reject(locale_change_listeners, listener => (listener === listener_to_remove));
    }
    function translate(key, values = {}) {
        return format_key_1.format_single_key(key, values, current_intl, '?', // parent_debug_id
        error_reporter);
    }
    return {
        setLocale: set_locale,
        addTranslations: add_translations,
        addCustomFormats: add_custom_formats,
        setErrorReporter: set_error_reporter,
        translate,
        getLocale: get_locale,
        onLocaleChange: on_locale_change,
        offLocaleChange: off_locale_change
    };
}
exports.factory = factory;
const default_instance = factory();
exports.default_instance = default_instance;
////////////////////////////////////
//# sourceMappingURL=index.js.map