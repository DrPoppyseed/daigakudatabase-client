import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import { InfinitySpin } from 'react-loader-spinner'
import { Container, Typography } from '@mui/material'
import useStyles from './AppStyles'
import { AuthContext } from '../../AuthContext'

import Header from '../header/Header'
import MyPage from '../MyPage'
import Home from '../home/HomePage'

const SignIn = loadable(() => import('../Auth/SignIn'))
const SignUp = loadable(() => import('../Auth/SignUp'))
const Footer = loadable(() => import('../common/Footer'))
const SchoolPage = loadable(() => import('../SchoolPage'))
const NoMatch = loadable(() => import('../NoMatch'))

const App = () => {
  const c = useStyles()
  const { globalLoading, currentPath } = React.useContext(AuthContext)

  const isNotAuth = !currentPath.match(/(auth\/signin|auth\/signup)/)

  return (
    <React.StrictMode>
      {!globalLoading ? (
        <React.Fragment>
          {isNotAuth ? <Header /> : null}
          <Container className={c.appContainer}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/account' element={<MyPage />} />
              <Route path='/auth/signin' element={<SignIn />} />
              <Route path='/auth/signup' element={<SignUp />} />
              <Route path='/schools/:schoolId' element={<SchoolPage />} />
              <Route element={<NoMatch />} />
            </Routes>
          </Container>
          {isNotAuth ? <Footer /> : null}
        </React.Fragment>
      ) : (
        <div className={c.loadingContainer}>
          <Typography className={c.loadingText}>
            新しいスタートはすぐそこ...
          </Typography>
          <InfinitySpin color='#2196f3' width='100' />
        </div>
      )}
    </React.StrictMode>
  )
}

export default App
