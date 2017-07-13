import { Intl, I18nError, I18nErrorReporter } from './types';
declare function format_single_key(key: string, values: Object, intl: Intl, parent_debug_id?: string, error_reporter?: I18nErrorReporter): string;
declare function format_multiple_keys(keys: string[], values: Object, intl: Intl, parent_debug_id?: string, error_reporter?: I18nErrorReporter): string[];
declare function format(key: string | string[], values: Object, intl: Intl, parent_debug_id?: string, error_reporter?: I18nErrorReporter): string | string[];
export { Intl, I18nError, I18nErrorReporter, format, format_single_key, format_multiple_keys };
