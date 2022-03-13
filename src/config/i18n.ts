import getBrowserLocale from '../util/getBrowserLocale'
import messagesJA from '../i18n/ja.json'
import messagesEN from '../i18n/en.json'

const browserLocale = getBrowserLocale()

const messages: {
  [key: string]: any
} = {
  en: messagesEN,
  ja: messagesJA,
}

export { browserLocale, messages }
