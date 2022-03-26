import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import { Checkbox, FormControlLabel, Link, Typography } from '@mui/material'
import { useSignUpWithEmail } from '@/hooks/useAuth'
import { AuthContext } from '@/contexts/AuthContext'
import AuthPasswordField from './AuthPasswordField'
import AuthBottomText from './AuthBottomText'
import AuthPageContainer from './AuthPageContainer'
import AuthButton from './AuthButton'
import AuthEmailField from './AuthEmailField'
import { SignUpForm } from '@/types/SignUpForm'

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<SignUpForm>()
  // const [isLoading, setIsLoading] = useState(false)
  const [isLegalChecked, setIsLegalChecked] = useState(false)
  const { signUpWithEmail, isLoading } = useSignUpWithEmail()

  // const useSignUpWithEmail = useMutation(signUpWithEmail, {
  //   onSuccess: data => {
  //     reset()
  //     setIsLoading(false)
  //     setUser(data)
  //   },
  //   onError: () => {
  //     reset()
  //     setIsLoading(false)
  //   },
  // })

  const handleChange = () => {
    setIsLegalChecked(prevIsLegalChecked => !prevIsLegalChecked)
  }

  const onSubmit: SubmitHandler<SignUpForm> = data => {
    if (isLegalChecked) signUpWithEmail(data)
  }

  return (
    <AuthPageContainer pageTitleMessageId='auth.auth_page_container.title.signup'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthEmailField register={register} />
        <AuthPasswordField
          register={register}
          helperText='8字以上のパスワード'
        />
        <FormControlLabel
          sx={{ paddingTop: 1 }}
          control={
            <Checkbox
              checked={isLegalChecked}
              onChange={handleChange}
              color='primary'
              name='legal'
            />
          }
          label={
            <Typography variant='body2'>
              <Link component={RouterLink} to='/legal/user-agreement'>
                利用規約
              </Link>
              と
              <Link component={RouterLink} to='/legal/privacy'>
                プライバシーポリシー
              </Link>
              に同意する。
            </Typography>
          }
        />
        <AuthButton
          color={isLoading || !isLegalChecked ? 'inherit' : 'primary'}
          disabled={isLoading || !isLegalChecked}
          isLoading={isLoading}
          labelMessageId='auth.auth_button.button_label.signup'
        />
      </form>
      <AuthBottomText
        beforeMessageId='auth.auth_bottom_text.before_message.signup'
        linkTextMessageId='auth.auth_bottom_text.link_text.signup'
        afterMessageId='auth.auth_bottom_text.after_message.signup'
        to='/auth/signin'
      />
    </AuthPageContainer>
  )
}

export default SignUp
