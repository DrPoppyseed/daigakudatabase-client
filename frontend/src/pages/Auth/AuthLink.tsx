import React, { FC, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Typography } from '@mui/material'

export interface AuthLinkProps {
  type?: string
  text: string | ReactNode
  to: string
}

const AuthLink: FC<AuthLinkProps> = ({ to, text, type = 'default' }) => (
  <Typography variant='caption'>
    <Link
      component={RouterLink}
      to={to}
      sx={
        type === 'legal'
          ? {
              color: 'palette.shared.black',
              paddingLeft: 2,
              opacity: 0.5,
            }
          : null
      }
    >
      {text}
    </Link>
  </Typography>
)

export default AuthLink
