// @flow
import * as React from 'react'
import { InputAdornment, IconButton } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'

const TogglePasswordVisibility = ({
  showPassword,
  handleClickShowPassword,
}: {
  showPassword: boolean,
  handleClickShowPassword: Function,
}): React.Element<any> => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="Toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  )
}

export default TogglePasswordVisibility
