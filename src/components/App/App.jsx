// @flow
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import { Ripple } from 'react-spinners-css'
import { Typography } from '@material-ui/core'

import { Container } from '@material-ui/core'
import useStyles from './styles'
import { AuthContext } from '../../AuthContext'

import Header from '../Header/Header'
import MyPage from '../MyPage/MyPage'
import Home from '../Home/Home'

const SignIn = loadable(() => import('../Auth/SignIn/SignIn'))
const SignUp = loadable(() => import('../Auth/SignUp/SignUp'))
const Footer = loadable(() => import('../Footer/FooterSub.jsx'))
const SchoolPage = loadable(() => import('../SchoolPage/SchoolPage'))
const NoMatch = loadable(() => import('../NoMatch/NoMatch'))

const App = (): React.Element<any> => {
  const c = useStyles()
  const { globalLoading, currentPath } = React.useContext(AuthContext)

  const searchClient = algoliasearch(
    'SMKYORP5ZT',
    'c4fc6d06ee25a8e7c90de66a12e97804'
  )

  const isNotAuth = !currentPath.match(/(auth\/signin|auth\/signup)/)

  return (
    <React.StrictMode>
      <InstantSearch searchClient={searchClient} indexName="jay_uscolleges">
        {!globalLoading ? (
          <React.Fragment>
            {isNotAuth ? <Header /> : null}
            <Container className={c.appContainer}>
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
      </InstantSearch>
    </React.StrictMode>
  )
}

export default App
