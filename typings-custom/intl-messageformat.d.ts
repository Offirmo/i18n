// inpired from
// https://github.com/SitePen/mayhem/blob/master/typings/intl-messageformat/intl-messageformat.d.ts
// https://github.com/Microsoft/TypeScript/issues/6656#issuecomment-175780097

declare class IntlMessageFormat<T> {
	constructor(message: string, locales?: string | string[], formats?: {});
	public format(values?: T): string;
}

declare module 'intl-messageformat' {
	export default IntlMessageFormat
}
