

declare namespace CounterpartModule {

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

}

