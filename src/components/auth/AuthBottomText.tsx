import { Link, styled, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

export interface AuthBottomTextProps {
  beforeMessageId: string
  linkTextMessageId: string
  to: string
  afterMessageId: string
}

const AuthBottomText: FC<AuthBottomTextProps> = ({
  beforeMessageId,
  linkTextMessageId,
  to,
  afterMessageId,
}) => {
  return (
    <AuthText variant='caption'>
      <FormattedMessage id={beforeMessageId} />
      <Link component={RouterLink} to={to}>
        <FormattedMessage id={linkTextMessageId} />
      </Link>
      <FormattedMessage id={afterMessageId} />
    </AuthText>
  )
}

const AuthText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.common.black, 0.5),
}))

export default AuthBottomText
