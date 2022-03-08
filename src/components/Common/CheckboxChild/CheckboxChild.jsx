import * as React from 'react'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'

const CheckboxChild = ({ label, name, checked, onChange }) => {
  const renderLabel = <Typography variant='subtitle2'>{label}</Typography>
  const renderControl = (
    <Checkbox
      color='primary'
      name={name}
      checked={checked}
      onChange={onChange}
    />
  )
  return <FormControlLabel label={renderLabel} control={renderControl} />
}

export default CheckboxChild
