import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import messagesEN from '@/i18n/en.json'
import messagesJA from '@/i18n/ja.json'
import getBrowserLocale from '@/util/getBrowserLocale'

export type IntlMessageIdEN = keyof typeof messagesEN
export type IntlMessageIdJA = keyof typeof messagesJA

const browserLocale = getBrowserLocale()

const messages: {
  [key: string]: any
} = {
  en: messagesEN,
  ja: messagesJA,
}

export const I18nProvider: FC = ({ children }) => {
  return (
    <IntlProvider
      locale={browserLocale}
      messages={messages[browserLocale]}
      defaultLocale='en'
    >
      {children}
    </IntlProvider>
  )
}
