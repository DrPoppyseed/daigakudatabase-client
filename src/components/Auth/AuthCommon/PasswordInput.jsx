import * as React from 'react'
import { TextField } from '@mui/material'
import TogglePasswordVisibility from './TogglePasswordVisibility'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  passwordField: {
    marginTop: '1rem !important',
    width: '100%',
  },
}))

const PasswordInput = ({
  control,
  register,
  helperText = '',
}) => {
  const c = useStyles()
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword)

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      inputRef={register}
      name="password"
      label="password"
      className={c.passwordField}
      autoComplete="current-password"
      control={control}
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

export default PasswordInput
