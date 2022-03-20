import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import { Container, styled } from '@mui/material'
import { AuthContext } from './contexts/AuthContext'

import Header from './components/header/Header'
import Home from './components/home/HomePage'
import PageLoading from './components/common/PageLoading'

const SignIn = loadable(() => import('./components/auth/SignInPage'))
const SignUp = loadable(() => import('./components/auth/SignUpPage'))
const Footer = loadable(() => import('./components/common/Footer'))
const NoMatch = loadable(() => import('./components/common/NotFoundPage'))

const App = () => {
  const { globalLoading, currentPath } = useContext(AuthContext)

  const isNotAuth = !currentPath.match(/(auth\/signin|auth\/signup)/)

  return !globalLoading ? (
    <>
      {isNotAuth && <Header />}
      <AppContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/signin' element={<SignIn />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route element={<NoMatch />} />
        </Routes>
      </AppContainer>
      {isNotAuth && <Footer />}
    </>
  ) : (
    <PageLoading />
  )
}

const AppContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(14),
  [theme.breakpoints.down('lg')]: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}))

export default App
