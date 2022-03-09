import React, { ChangeEvent, FC } from 'react'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'

export interface CheckboxChildProps {
  label: string
  name: string
  checked: boolean
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckboxChild: FC<CheckboxChildProps> = ({
  label,
  name,
  checked,
  onChange,
  className = '',
}) => {
  return (
    <FormControlLabel
      label={<Typography variant='subtitle2'>{label}</Typography>}
      control={
        <Checkbox
          color='primary'
          name={name}
          checked={checked}
          onChange={onChange}
          className={className}
        />
      }
    />
  )
}

export default CheckboxChild
