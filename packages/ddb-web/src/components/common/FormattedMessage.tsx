import React, { ReactNode } from 'react'
import { FormattedMessage as ReactFormattedMessage } from 'react-intl'
import { IntlMessageIdEN } from '@/config/i18nProvider'

interface FormattedMessageProps {
  id?: IntlMessageIdEN
  defaultMessage?: string
  values?: Record<string, ReactNode>
  children?: () => ReactNode
}

export const FormattedMessage = (props: FormattedMessageProps) => {
  // @ts-ignore
  return <ReactFormattedMessage {...props} />
}
