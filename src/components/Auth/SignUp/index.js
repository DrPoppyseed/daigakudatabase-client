import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import {
  Divider,
  Paper,
  Typography,
  TextField,
  Box,
  Link,
  Button,
  CircularProgress,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { PasswordInput, SocialButton, BottomText } from '../AuthCommon'
import { signUpWithEmail, signInWithGoogle } from '../../../hooks/useAuth'
import useStyles from './styles'
import { AuthContext } from '../../../AuthContext'

const SignUp = () => {
  const { register, handleSubmit, control } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [isLegalChecked, setIsLegalChecked] = useState(false)
  const { setUser } = React.useContext(AuthContext)
  const c = useStyles()

  const useSignUpWithEmail = useMutation(signUpWithEmail, {
    onSuccess: data => {
      setUser(data)
      console.log('🚀 ~ file: SignUp.js ~ line 31 ~ SignUp ~ data', data)
    },
  })
  const useSignInWithGoogle = useMutation(signInWithGoogle, {
    onSuccess: data => {
      setUser(data)
      console.log('🚀 ~ file: SignUp.js ~ line 37 ~ SignUp ~ data', data)
    },
  })

  const handleChange = event => {
    setIsLegalChecked(prevIsLegalChecked => !prevIsLegalChecked)
  }

  const onSubmit = data => {
    setIsLoading(true)
    if (isLegalChecked) {
      useSignUpWithEmail.mutate(data)
      setIsLoading(false)
    } else {
      setSubmitError('利用規約とプライバシーポリシーに同意してください。')
      console.log('submit error: ' + submitError)
      setIsLoading(false)
    }
  }

  return (
    <div className={c.pageContainer}>
      <Paper className={c.container}>
        <Typography className={c.pageTitle} variant="h6">
          FORISを無料で始める
        </Typography>

        <Box className={c.box}>
          <SocialButton
            text="Googleアカウントで登録"
            onButtonClick={useSignInWithGoogle.mutate}
          />
          <Divider className={c.divider} />
          <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
            <TextField
              name="email"
              label="email"
              type="text"
              inputRef={register}
              className={c.emailField}
              autoComplete="username"
              variant="outlined"
              control={control}
              defaultValue=""
              required
            />
            <PasswordInput
              control={control}
              register={register}
              helpterText="8字以上のパスワード"
            />
            <FormControlLabel
              className={c.formControl}
              control={
                <Checkbox
                  checked={isLegalChecked}
                  onChange={handleChange}
                  color="primary"
                  name="legal"
                />
              }
              label={
                <Typography variant="body2">
                  <Link
                    className={c.toLegalText}
                    component={RouterLink}
                    to="/legal/user-agreement">
                    利用規約
                  </Link>
                  と
                  <Link
                    className={c.toLegalText}
                    component={RouterLink}
                    to="/legal/privacy">
                    プライバシーポリシー
                  </Link>
                  に同意する。
                </Typography>
              }
            />
            <Button
              className={c.signUpButton}
              variant="contained"
              color={isLoading || !isLegalChecked ? 'default' : 'primary'}
              disabled={isLoading || !isLegalChecked ? true : false}
              type="submit">
              {isLoading ? <CircularProgress /> : 'FORISを始める'}
            </Button>
          </form>
          <BottomText
            before="既存のアカウントでFORISに"
            link="ログイン"
            to="/auth/signin"
            after="する。"
          />
        </Box>
      </Paper>
    </div>
  )
}

export default SignUp
