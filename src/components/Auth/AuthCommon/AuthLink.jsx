import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  default: {
    textDecoration: 'none',
  },
  toLegalText: {
    color: alpha(theme.palette.common.black, 0.5) + ' !important',
    paddingLeft: theme.spacing(2),
  },
}))

const AuthLink = ({ variant = 'caption', to, text, type = 'default' }) => {
  const c = useStyles()

  return (
    <Typography variant={variant}>
      <Link
        component={RouterLink}
        to={to}
        className={type === 'legal' ? c.toLegalText : c.default}
      >
        {text}
      </Link>
    </Typography>
  )
}

export default AuthLink
