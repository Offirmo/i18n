////////////////////////////////////

type LocaleCode = string

interface IMessagesStore {
	locale?: string
	[key: string]: undefined | string | Function
}

interface IIntl {
	locale: LocaleCode
	messages: IMessagesStore
	formats?: Object
}

////////////

interface ICustomFormatFunction {
	(values: Object, intl: IIntl, libs: any, debug_id: string): string
}

interface IIntlChangeListener {
	(i: IIntl): void
}

////////////

interface IError extends Error {
	src: string
	params: any
	problems: string[]
	sub_error: Error
}

type IErrorReporter = (e: IError) => void

////////////////////////////////////

export {
	LocaleCode,
	IMessagesStore,
	IIntl,
	ICustomFormatFunction,
	IIntlChangeListener,
	IError,
	IErrorReporter,
}

////////////////////////////////////
