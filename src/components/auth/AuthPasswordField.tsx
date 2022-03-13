import React, { FC } from 'react'
import { styled, TextField } from '@mui/material'
import TogglePasswordVisibility from './TogglePasswordVisibility'

export interface AuthPasswordFieldProps {
  register: any
  helperText?: string
}

const AuthPasswordField: FC<AuthPasswordFieldProps> = ({
  register,
  helperText = '',
}) => {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword)

  return (
    <PasswordInputField
      type={showPassword ? 'text' : 'password'}
      variant='outlined'
      {...register('password')}
      label='password'
      autoComplete='current-password'
      helperText={helperText}
      required
      InputProps={{
        endAdornment: (
          <TogglePasswordVisibility
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
          />
        ),
      }}
    />
  )
}

const PasswordInputField = styled(TextField)(() => ({
  marginTop: '1rem !important',
  width: '100%',
}))

export default AuthPasswordField
