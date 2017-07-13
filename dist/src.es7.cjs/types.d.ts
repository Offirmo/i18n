declare type LocaleCode = string;
declare type IcuMessage = string;
interface CustomFormatFunction {
    (values: Object, intl: any, libs: any, debug_id: string): string;
}
declare type ExtendedIcuMessage = IcuMessage | Function;
interface IcuMessageStore {
    [key: string]: ExtendedIcuMessage;
}
interface Intl {
    locale: LocaleCode;
    messages: IcuMessageStore;
    formats?: Object;
}
interface IntlChangeListener {
    (i: Intl): void;
}
interface I18nError extends Error {
    src: string;
    params: any;
    problems: string[];
    sub_error: Error;
}
declare type I18nErrorReporter = (e: I18nError) => void;
export { LocaleCode, IcuMessage, ExtendedIcuMessage, CustomFormatFunction, IcuMessageStore, Intl, IntlChangeListener, I18nError, I18nErrorReporter };
