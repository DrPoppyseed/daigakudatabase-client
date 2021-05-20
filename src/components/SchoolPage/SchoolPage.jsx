/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import * as React from 'react'
import useStyles from './styles'
import { Helmet } from 'react-helmet'
import ScrollTop from '../Common/ScrollTop/ScrollTop.jsx'
import { Fab, Typography } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { useGetSchoolById } from '../../hooks/useSchools'
import { useLocation } from 'react-router-dom'
import { Ripple } from 'react-spinners-css'

import Overview from './Overview/Overview'
import RecommendedSchools from './RecommendedSchools/RecommendedSchools'
import PageTop from './PageTop/PageTop'
import Majors from './Majors/Majors'
import Apply from './Apply/Apply'

type Props = {
  children?: any,
}

const SchoolPage = (props: Props): React.Element<any> => {
  const c = useStyles()
  const { pathname } = useLocation()
  const schoolUrl = pathname.split('/')[2]
  const { status, data } = useGetSchoolById(schoolUrl)
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  React.useEffect(() => {
    console.log(data)
  })

  return (
    <div className={c.root}>
      <Helmet>
        <title>{`${
          status === 'loading'
            ? 'ロード中...'
            : status === 'error'
            ? 'エラー...'
            : data.name_jp
        }`}</title>
      </Helmet>
      <div className={c.reportContainer}>
        {status === 'loading' ? (
          <div className={c.loadingContainer}>
            <Typography className={c.loadingText}>ロード中...</Typography>
            <Ripple color="#2196f3" />
          </div>
        ) : status === 'error' ? (
          'エラー...'
        ) : (
          <React.Fragment>
            <PageTop
              handleTabChange={handleTabChange}
              tabIndex={tabIndex}
              school={data.institutionData}
              isLiked={data.isLiked}
            />
            <div className={c.tabContentContainer}>
              {tabIndex === 0 ? (
                <Overview data={data.institutionData} />
              ) : tabIndex === 1 ? (
                <Majors
                  majors={data.majors}
                  programsPerCredLev={data.programsPerCredLev}
                />
              ) : (
                <Apply />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
      <div className={c.recommendationContainer}>
        {status === 'loading' ? (
          ''
        ) : status === 'error' ? (
          'エラー'
        ) : (
          <RecommendedSchools currentSchoolUuid={data.uuid} />
        )}
      </div>
      <ScrollTop {...props}>
        <Fab aria-label="key arrow up" className={c.fab}>
          <KeyboardArrowUpIcon className={c.fabIcon} />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export default SchoolPage
