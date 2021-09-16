// @flow
import * as React from 'react'
import { useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import useStyles from './styles'
import {
  Divider,
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core'
import {
  PasswordInput,
  SocialButton,
  BottomText,
  AuthLink,
} from '../AuthCommon'
import { signInWithEmail, signInWithGoogle } from '../../../hooks/useAuth'
import { AuthContext } from '../../../AuthContext'

const SignIn = (): React.Element<any> => {
  const { register, handleSubmit, control } = useForm()
  const { setUser } = React.useContext(AuthContext)
  const [isLoading] = React.useState(false)
  const c = useStyles()
  const useSignInWithEmail = useMutation(signInWithEmail, {
    onSuccess: data => {
      console.log(data)
      setUser({ isSignedIn: true, profile: data })
    },
  })
  const useSignInWithGoogle = useMutation(signInWithGoogle, {
    onSuccess: data => {
      setUser(data)
      console.log('🚀 ~ file: SignIn.js ~ line 33 ~ SignIn ~ data', data)
    },
  })

  const onSubmit = data => {
    useSignInWithEmail.mutate(data)
  }

  return (
    <div className={c.pageContainer}>
      <Paper className={c.container}>
        <Typography className={c.pageTitle} variant="h6">
          アメリカ大学データベースにログイン
        </Typography>

        <Box className={c.box}>
          <SocialButton
            text="Googleアカウントでログイン"
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
            <PasswordInput register={register} control={control} />
            <AuthLink to="/auth/signin" text="パスワードを忘れた場合" />
            <Button
              className={c.signInButton}
              variant="contained"
              color="primary"
              disabled={isLoading}
              type="submit">
              {isLoading ? <CircularProgress /> : 'ログイン'}
            </Button>
          </form>
          <BottomText
            before="FORISのアカウントをもっていない場合は"
            link="新規登録"
            to="/auth/signup"
            after="から。"
          />
        </Box>
      </Paper>
      <div className={c.toLegalContainer}>
        <div className={c.grow} />
        <AuthLink to="/legal/user-agreement" text="利用規約" type="legal" />
        <AuthLink to="/legal/privacy" text="プライバシー" type="legal" />
      </div>
    </div>
  )
}

export default SignIn
