import React, { useContext } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { styled } from '@mui/system'
import { AuthContext } from '../../contexts/AuthContext'
import HeaderLogo from './HeaderLogo'
import FlexGrow from '../common/FlexGrow'
import AuthButtonsBlock from './AuthButtonsBlock'
import AccountBlock from './AccountBlock'

const Header = () => {
  const { user } = useContext(AuthContext)

  return (
    <FlexGrow id='back-to-top-anchor'>
      <AppBarRoot position='static'>
        <ToolbarRoot>
          <ContentContainer>
            <HeaderLogo />
            <FlexGrow />
            <Box sx={{ marginLeft: 2 }}>
              {user.uid ? <AccountBlock /> : <AuthButtonsBlock />}
            </Box>
          </ContentContainer>
        </ToolbarRoot>
      </AppBarRoot>
    </FlexGrow>
  )
}

const AppBarRoot = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  zIndex: 999,
  padding: `0 ${theme.spacing(4)}`,
  display: 'grid',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1020px 1fr',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    gridTemplateColumns: '1fr 800px 1fr',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: `${theme.spacing(2)} auto ${theme.spacing(2)}`,
  },
}))

const ToolbarRoot = styled(Toolbar)(() => ({
  gridColumn: 2,
}))

const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}))

export default Header
