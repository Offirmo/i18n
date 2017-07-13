import { LocaleCode, IcuMessage, I18nError, I18nErrorReporter } from './types';
declare function format(message: IcuMessage, values?: Object, locale?: LocaleCode, custom_formats?: Object, parent_debug_id?: string, error_reporter?: I18nErrorReporter): string;
export { format, I18nError, I18nErrorReporter };
