import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import { Ripple } from 'react-spinners-css'
import { Container, Typography } from '@material-ui/core'
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/mypage" component={MyPage} />
              <Route exact path="/auth/signin" component={SignIn} />
              <Route exact path="/auth/signup" component={SignUp} />
              <Route path="/schools/:schoolId" component={SchoolPage} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
          {isNotAuth ? <Footer /> : null}
        </React.Fragment>
      ) : (
        <div className={c.loadingContainer}>
          <Typography className={c.loadingText}>
            新しいスタートはすぐそこ...
          </Typography>
          <Ripple color="#2196f3" />
        </div>
      )}
    </React.StrictMode>
  )
}

export default App
