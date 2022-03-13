import * as React from 'react'
import { useMutation } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signInWithEmail } from '../../hooks/useAuth'
import { AuthContext } from '../../contexts/AuthContext'
import AuthPasswordField from './AuthPasswordField'
import AuthLink from './AuthLink'
import AuthBottomText from './AuthBottomText'
import AuthButton from './AuthButton'
import AuthPageContainer from './AuthPageContainer'
import AuthEmailField from './AuthEmailField'
import { SignInForm } from '../../types/SignInForm'

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm<SignInForm>()
  const { setUser } = React.useContext(AuthContext)
  const [isLoading, setIsLoading] = React.useState(false)

  const useSignInWithEmail = useMutation(signInWithEmail, {
    onSuccess: data => {
      reset()
      setIsLoading(false)
      setUser({ isSignedIn: true, profile: data })
    },
    onError: () => {
      reset()
      setIsLoading(false)
    },
  })

  const onSubmit: SubmitHandler<SignInForm> = data => {
    useSignInWithEmail.mutate(data)
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
