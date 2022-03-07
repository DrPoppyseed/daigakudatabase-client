import * as React from 'react'
import { IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const TogglePasswordVisibility = ({
  showPassword,
  handleClickShowPassword,
}) => {
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
