import { SUPPORTED_LOCALES } from '../constants/SupportedLocales'

export type KeyValueObject = { [key: string]: any }

export type GraphicsObject = {
  [key: string]: {
    color: string
    ja: string
  }
}

export type SupportedLocalesTuple = typeof SUPPORTED_LOCALES
export type SupportedLocale = SupportedLocalesTuple[number]
