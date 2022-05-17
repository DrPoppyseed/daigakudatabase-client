import React, { FC } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export interface TogglePasswordVisibilityProps {
  showPassword: boolean
  handleClickShowPassword: () => void
}

const TogglePasswordVisibility: FC<TogglePasswordVisibilityProps> = ({
  showPassword,
  handleClickShowPassword,
}) => (
    <InputAdornment position='end'>
      <IconButton
        aria-label='Toggle password visibility'
        onClick={handleClickShowPassword}
        edge='end'
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  )

export default TogglePasswordVisibility
