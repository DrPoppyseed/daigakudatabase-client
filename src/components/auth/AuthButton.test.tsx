import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthButton from './AuthButton'
import { I18nProvider } from '@/config/i18nProvider'

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
    <I18nProvider>
      <AuthButton
        isLoading={false}
        labelMessageId='auth.auth_button.button_label.signin'
      />
    </I18nProvider>
  )
  getByText('Sign In')
})
