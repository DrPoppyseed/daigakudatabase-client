// @flow
import * as React from 'react'
import { TextField } from '@material-ui/core'
import TogglePasswordVisibility from '../TogglePasswordVisibility/TogglePasswordVisibility'
import { makeStyles } from '@material-ui/core/styles'

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
}: {
  control: any,
  register: any,
  helperText: string,
}): React.Element<any> => {
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
