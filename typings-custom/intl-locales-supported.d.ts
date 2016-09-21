// https://github.com/yahoo/intl-locales-supported

declare module 'intl-locales-supported' {
	const areIntlLocalesSupported: (localesMyAppSupports: string[]) => boolean
	export default areIntlLocalesSupported
}
