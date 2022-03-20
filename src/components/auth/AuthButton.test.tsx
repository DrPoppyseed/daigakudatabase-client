import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { IntlProvider } from 'react-intl'
import AuthButton from './AuthButton'
import { messages } from '../../config/i18n'

afterEach(cleanup)

it('shows circular progress on load', () => {
  const { getByTestId } = render(
    <AuthButton
      isLoading
      labelMessageId='auth.auth_button.button_label.signin'
    />
  )
  expect(getByTestId('auth-button-progress'))
})

it('show text when not loading', () => {
  const { getByText } = render(
    <IntlProvider locale='en' messages={messages.en}>
      <AuthButton
        isLoading={false}
        labelMessageId='auth.auth_button.button_label.signin'
      />
    </IntlProvider>
  )
  getByText('Sign In')
})
