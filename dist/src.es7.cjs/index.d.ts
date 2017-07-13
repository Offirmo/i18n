import { LocaleCode, IcuMessageStore, Intl, IntlChangeListener, I18nErrorReporter } from './types';
declare function factory(): {
    setLocale: (candidate_locale: string) => void;
    addTranslations: (locale: string, messages?: IcuMessageStore) => void;
    addCustomFormats: (locale: string, custom_formats?: Object) => void;
    setErrorReporter: (reporter?: I18nErrorReporter | undefined) => void;
    translate: (key: string, values?: any) => string;
    getLocale: () => string;
    onLocaleChange: (listener_to_add: IntlChangeListener) => void;
    offLocaleChange: (listener_to_remove: IntlChangeListener) => void;
};
declare const default_instance: {
    setLocale: (candidate_locale: string) => void;
    addTranslations: (locale: string, messages?: IcuMessageStore) => void;
    addCustomFormats: (locale: string, custom_formats?: Object) => void;
    setErrorReporter: (reporter?: I18nErrorReporter | undefined) => void;
    translate: (key: string, values?: any) => string;
    getLocale: () => string;
    onLocaleChange: (listener_to_add: IntlChangeListener) => void;
    offLocaleChange: (listener_to_remove: IntlChangeListener) => void;
};
export { LocaleCode, IcuMessageStore, Intl, IntlChangeListener, default_instance, factory };
