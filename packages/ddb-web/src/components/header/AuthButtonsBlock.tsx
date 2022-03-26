import { Button, Link, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const AuthButtonsBlock = () => (
  <ButtonsContainer>
    <AuthButton variant='outlined'>
      <Link
        to='/auth/signin'
        component={RouterLink}
        sx={{ color: 'palette.primary.main' }}
      >
        <FormattedMessage id='header.auth_button.signin' />
      </Link>
    </AuthButton>
    <AuthButton variant='contained'>
      <Link to='/auth/signup' component={RouterLink} sx={{ color: 'white' }}>
        <FormattedMessage id='header.auth_button.signup' />
      </Link>
    </AuthButton>
  </ButtonsContainer>
)

const ButtonsContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}))

const AuthButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}))

export default AuthButtonsBlock
