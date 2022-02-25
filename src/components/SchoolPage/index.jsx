/* eslint-disable */
// @flow
import * as React from 'react'
import useStyles from './styles'
import { Helmet } from 'react-helmet'
import ScrollTop from '../Common/ScrollTop/ScrollTop.jsx'
import { Fab, Card } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { useGetSchoolById } from '../../hooks/useSchools'
import { useLocation } from 'react-router-dom'

import Overview from './Overview/Overview'
import RecommendedSchools from './RecommendedSchools/RecommendedSchools'
import SchoolCardMiniSkeleton from '../SchoolCards/SchoolCardMini/SchoolCardMiniSkeleton'
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

  return (
    <div className={c.root}>
      <Helmet>
        <title>{`${
          status === 'loading'
            ? 'ロード中...'
            : status === 'error'
            ? 'エラー...'
            : data.institutionData.name_jp
        }`}</title>
      </Helmet>
      <div className={c.reportContainer}>
        {status === 'loading' ? (
          <div className={c.loadingContainer}>
            <Skeleton
              animation="wave"
              variant="rect"
              height={475}
              width={700}
            />
            <Skeleton
              animation="wave"
              variant="rect"
              height={325}
              width={700}
              style={{ marginTop: 24 }}
            />
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
                <Majors uuid={data.uuid} />
              ) : (
                <Apply />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
      <div className={c.recommendationContainer}>
        {status === 'loading' ? (
          <div>
            <Card style={{ marginBottom: 16, borderRadius: 0 }}>
              <Skeleton
                animation="wave"
                variant="rect"
                height={58}
                width={300}
              />
            </Card>
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
            <SchoolCardMiniSkeleton />
          </div>
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
