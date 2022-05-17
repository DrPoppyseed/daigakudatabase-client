import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const HeaderLogo = () => (
  <Link
    component={RouterLink}
    to='/'
    sx={{
      color: 'palette.shared.black',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <img
      src='assets/logo.png'
      alt='logo'
      style={{
        height: '40px',
        width: '40px',
      }}
    />
  </Link>
)

export default HeaderLogo
