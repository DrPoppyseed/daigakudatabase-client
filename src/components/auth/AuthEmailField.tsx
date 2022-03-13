import { TextField } from '@mui/material'
import React, { FC } from 'react'

export interface AuthEmailFieldProps {
  register: any
}

const AuthEmailField: FC<AuthEmailFieldProps> = ({ register }) => {
  return (
    <TextField
      {...register('email')}
      label='email'
      type='text'
      autoComplete='username'
      defaultValue=''
      required
      sx={{
        marginTop: '.5rem !important',
        width: '100%',
      }}
    />
  )
}

export default AuthEmailField
