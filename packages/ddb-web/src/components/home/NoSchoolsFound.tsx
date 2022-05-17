import React from 'react'
import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const NoSchoolsFound = () => (
    <Typography
      variant='caption'
      style={{ textAlign: 'center', marginTop: 20 }}
    >
      <FormattedMessage id='home.no_school_found_message' />
    </Typography>
  )

export default NoSchoolsFound
