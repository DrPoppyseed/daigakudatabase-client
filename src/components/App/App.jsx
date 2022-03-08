import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import { InfinitySpin } from 'react-loader-spinner'
import { Container, Typography } from '@mui/material'
import useStyles from './styles'
import { AuthContext } from '../../AuthContext'

import Header from '../Header'
import MyPage from '../MyPage'
import Home from '../Home'
import FilterDrawer from '../Home/FilterDrawer'

const SignIn = loadable(() => import('../Auth/SignIn'))
const SignUp = loadable(() => import('../Auth/SignUp'))
const Footer = loadable(() => import('../Footer/FooterSub'))
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
            <FilterDrawer />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/mypage" element={<MyPage />} />
                <Route exact path="/auth/signin" element={<SignIn />} />
                <Route exact path="/auth/signup" element={<SignUp /> } />
                <Route path="/schools/:schoolId" element={<SchoolPage />} />
                <Route component={NoMatch} />
              </Routes>
          </Container>
          {isNotAuth ? <Footer /> : null}
        </React.Fragment>
      ) : (
        <div className={c.loadingContainer}>
          <Typography className={c.loadingText}>
            新しいスタートはすぐそこ...
          </Typography>
          <InfinitySpin color="#2196f3" width="100" />
        </div>
      )}
    </React.StrictMode>
  )
}

export default App
