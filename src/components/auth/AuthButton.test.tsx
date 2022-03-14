import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthButton from './AuthButton'
import { IntlProvider } from 'react-intl'
import { messages } from '../../config/i18n'

afterEach(cleanup)

it('shows circular progress on load', () => {
  const { getByTestId, getByRole } = render(
    <AuthButton
      isLoading={true}
      labelMessageId='auth.auth_button.button_label.signin'
    />
  )
  expect(getByRole('button')).toBeDisabled()
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
