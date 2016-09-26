////////////////////////////////////

// standard BCP-47 locale code
type LocaleCode = string

// standard ICU message
// http://userguide.icu-project.org/formatparse/messages
type IcuMessage = string

type ExtendedIcuMessage = IcuMessage | Function /* can't use CustomFormatFunction, circular reference... */

interface IcuMessageStore {
	[key: string /* TODO type */ ]: ExtendedIcuMessage
}

// The special object needed by yahoo FormatJS
// TODO put in typings ???
interface Intl {
	locale: LocaleCode
	messages: IcuMessageStore
	formats?: Object // TODO
}

////////////
// we allow an extension (non-standard !) to the ICU standard
// to handle complicated messages
interface CustomFormatFunction {
	// TODO remove any
	(values: Object, intl: any, libs: any, debug_id: string): string
}


interface IntlChangeListener {
	(i: Intl): void
}

////////////

interface I18nError extends Error {
	src: string
	params: any
	problems: string[]
	sub_error: Error
}

type I18nErrorReporter = (e: I18nError) => void

////////////////////////////////////

export {
	LocaleCode,
	IcuMessage,
	ExtendedIcuMessage,
	CustomFormatFunction,
	IcuMessageStore,
	Intl,
	IntlChangeListener,
	I18nError,
	I18nErrorReporter,
}

////////////////////////////////////
