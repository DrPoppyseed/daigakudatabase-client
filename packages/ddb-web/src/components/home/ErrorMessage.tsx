import React from 'react'
import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const ErrorMessage = () => {
  return (
    <Typography>
      <FormattedMessage id='home.error_message' />
    </Typography>
  )
}

export default ErrorMessage
