import * as React from 'react'
import { styled, Typography } from '@mui/material'

const Footer = () => (
  <FooterContainer>
    <Typography variant='overline'>Made with ❤️ by DrPoppyseed</Typography>
  </FooterContainer>
)

const FooterContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  flexGrow: 1,
  display: 'block',
  bottom: '0',
  textAlign: 'center',
  width: '100%',
  padding: theme.spacing(2),
}))

export default Footer
