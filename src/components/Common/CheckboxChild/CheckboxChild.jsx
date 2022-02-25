// @flow
import * as React from 'react'
import { Checkbox, Typography, FormControlLabel } from '@material-ui/core'

const CheckboxChild = ({
  label,
  name,
  checked,
  onChange,
}: {
  label: string,
  name: string,
  checked: any,
  onChange?: Function,
}): React.Element<any> => {
  const renderLabel = <Typography variant="subtitle2">{label}</Typography>
  const renderControl = (
    <Checkbox
      color="primary"
      name={name}
      checked={checked}
      onChange={onChange}
    />
  )
  return <FormControlLabel label={renderLabel} control={renderControl} />
}

export default CheckboxChild
