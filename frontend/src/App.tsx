import React, { lazy, Suspense, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container, styled } from '@mui/material'
import { Theme } from '@mui/system'
import { AuthContext } from './contexts/AuthContext'

import Header from '@/components/Header/Header'
import Home from './pages/Home/HomePage'
import PageLoading from '@/components/shared/PageLoading'

const SignIn = lazy(() => import('./pages/Auth/SignInPage'))
const SignUp = lazy(() => import('./pages/Auth/SignUpPage'))
const Footer = lazy(() => import('./components/shared/Footer'))
const NoMatch = lazy(() => import('./components/shared/NotFoundPage'))

const App = () => {
  const { globalLoading, currentPath } = useContext(AuthContext)

  const isNotAuth = !currentPath.match(/(auth\/signin|auth\/signup)/)

  return !globalLoading ? (
    <Suspense fallback={<div />}>
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
    </Suspense>
  ) : (
    <PageLoading />
  )
}

const AppContainer = styled(Container)(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(14),
  [theme.breakpoints.down('lg')]: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}))

export default App
