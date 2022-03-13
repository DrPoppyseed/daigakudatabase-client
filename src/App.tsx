import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import { Container, styled } from '@mui/material'
import { AuthContext } from './contexts/AuthContext'

import Header from './components/header/Header'
import MyPage from './components/MyPage'
import Home from './components/home/HomePage'
import PageLoading from './components/common/PageLoading'

const SignIn = loadable(() => import('./components/auth/SignInPage'))
const SignUp = loadable(() => import('./components/auth/SignUpPage'))
const Footer = loadable(() => import('./components/common/Footer'))
const SchoolPage = loadable(() => import('./components/SchoolPage'))
const NoMatch = loadable(() => import('./components/common/NotFoundPage'))

const App = () => {
  const { globalLoading, currentPath } = React.useContext(AuthContext)

  const isNotAuth = !currentPath.match(/(auth\/signin|auth\/signup)/)

  return (
    <React.StrictMode>
      {!globalLoading ? (
        <React.Fragment>
          {isNotAuth && <Header />}
          <AppContainer>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/account' element={<MyPage />} />
              <Route path='/auth/signin' element={<SignIn />} />
              <Route path='/auth/signup' element={<SignUp />} />
              <Route path='/schools/:schoolId' element={<SchoolPage />} />
              <Route element={<NoMatch />} />
            </Routes>
          </AppContainer>
          {isNotAuth && <Footer />}
        </React.Fragment>
      ) : (
        <PageLoading />
      )}
    </React.StrictMode>
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
