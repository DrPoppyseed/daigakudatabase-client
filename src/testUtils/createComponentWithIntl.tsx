import React, { ReactNode } from 'react'
import renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'
import { messages } from '../config/i18n'

const createComponentWithIntl = (
  children: ReactNode,
  props = { locale: 'en', messages: messages.en }
) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>)
}

export default createComponentWithIntl
