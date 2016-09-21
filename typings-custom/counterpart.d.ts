
declare namespace CounterpartModule {
  type _CounterpartConstructor = {
    prototype: Counterpart
  }
  type _LocaleChangedHandler = (locale: string) => void
  type _Translations = { [key: string]: string }
}

declare interface Counterpart {
  registerTranslations(locale: string, translations: CounterpartModule._Translations): void
  translate(key: string, options?: Object): string
  setLocale(nextLocale: string): string // returns previousLocale
  getLocale(): string
  onLocaleChange(handler: CounterpartModule._LocaleChangedHandler): void
  offLocaleChange(handler: CounterpartModule._LocaleChangedHandler): void
}

declare module 'counterpart' {
  interface TranslateFunction extends Counterpart {
    (key: string, params?: {}): string
    Instance: CounterpartModule._CounterpartConstructor
  }
  const translate: TranslateFunction
  export default translate
}
