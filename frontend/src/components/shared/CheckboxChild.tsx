import React, { ChangeEvent, FC } from 'react'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

export interface CheckboxChildProps {
  messageId: string
  name: string
  checked: boolean
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckboxChild: FC<CheckboxChildProps> = ({
  messageId,
  name,
  checked,
  onChange,
  className,
}) => (
  <FormControlLabel
    label={
      <Typography variant='subtitle2'>
        <FormattedMessage id={messageId} />
      </Typography>
    }
    control={
      <Checkbox
        name={name}
        checked={checked}
        onChange={onChange}
        className={className ?? ''}
      />
    }
  />
)

export default CheckboxChild
