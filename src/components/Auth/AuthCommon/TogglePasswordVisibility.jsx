import * as React from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const TogglePasswordVisibility = ({
  showPassword,
  handleClickShowPassword,
}) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="Toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end"
        size="large">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}

export default TogglePasswordVisibility
