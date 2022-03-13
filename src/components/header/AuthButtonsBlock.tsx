import { Button, Link, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import * as React from 'react'

const AuthButtonsBlock = () => {
  return (
    <ButtonsContainer>
      <AuthButton variant='outlined'>
        <Link
          to='/auth/signin'
          component={RouterLink}
          sx={{ color: 'palette.primary.main' }}
        >
          ログイン
        </Link>
      </AuthButton>
      <AuthButton variant='contained'>
        <Link to='/auth/signup' component={RouterLink} sx={{ color: 'white' }}>
          新規登録
        </Link>
      </AuthButton>
    </ButtonsContainer>
  )
}

const ButtonsContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}))

const AuthButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}))

export default AuthButtonsBlock
