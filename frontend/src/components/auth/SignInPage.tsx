import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import AuthPasswordField from './AuthPasswordField'
import AuthLink from './AuthLink'
import AuthBottomText from './AuthBottomText'
import AuthButton from './AuthButton'
import AuthPageContainer from './AuthPageContainer'
import AuthEmailField from './AuthEmailField'
import { SignInForm } from '@/types/SignInForm'
import { useSignInWithEmail } from '@/hooks/useAuth'

const SignIn = () => {
  const { register, handleSubmit } = useForm<SignInForm>()
  const { signInWithEmail, isLoading } = useSignInWithEmail()

  const onSubmit: SubmitHandler<SignInForm> = async data => {
    await signInWithEmail(data)
  }

  return (
    <AuthPageContainer pageTitleMessageId='auth.auth_page_container.title.signin'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthEmailField register={register} />
        <AuthPasswordField register={register} />
        <AuthLink to='/auth/signin' text='パスワードを忘れた場合' />
        <AuthButton
          isLoading={isLoading}
          labelMessageId='auth.auth_button.button_label.signin'
        />
      </form>
      <AuthBottomText
        beforeMessageId='auth.auth_bottom_text.before_message.signin'
        linkTextMessageId='auth.auth_bottom_text.link_text.signin'
        afterMessageId='auth.auth_bottom_text.after_message.signin'
        to='/auth/signup'
      />
    </AuthPageContainer>
  )
}

export default SignIn
