import * as React from 'react'
import clsx from 'clsx'
import useStyles from './styles'
import { Container, Fab, Typography, useMediaQuery } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Helmet } from 'react-helmet'
import { HomeContext } from '../../HomeContext'

import ScrollTop from '../Common/ScrollTop/ScrollTop.jsx'
import HomeSchoolCardSkeleton from '../HomeSchoolCard/HomeSchoolCardSkeleton'
import SortByBoxSkeleton from './SortByBox/SortByBoxSkeleton'
import FilterBox from './FilterBox'
import FilterDrawer from './FilterDrawer'
import SortByBox from './SortByBox'
import SortByScroller from './SortByScroller'

import HomeSchoolCard from '../HomeSchoolCard'

const Home = props => {
  const sm_down = useMediaQuery(theme => theme.breakpoints.down('md'))
  const c = useStyles()
  const {
    status,
    isFetching,
    data: schoolsData,
    totalSchoolsFound,
    pageNumber,
    handlePageChange,
  } = React.useContext(HomeContext)

  const mapSchools = schools =>
    schools.map(school => (
      <HomeSchoolCard key={school.ipeds_unitid} general={school} />
    ))

  // const mapSchoolSkeletons = [
  //   'sk_1',
  //   'sk_2',
  //   'sk_3',
  //   'sk_4',
  //   'sk_5',
  //   'sk_6',
  //   'sk_7',
  //   'sk_8',
  // ].map(id => <HomeSchoolCardSkeleton key={id} />)

  const renderSchools = React.useMemo(
    () => !!schoolsData && mapSchools(schoolsData.schools),
    [schoolsData]
  )

  return (
    <React.Fragment>
      <div className={c.root}>
        <Helmet>
          <title>アメリカ大学を検索しよう</title>
          <meta name='description' content='アメリカ大学のデータベース。' />
        </Helmet>
        <FilterDrawer />
        <div className={c.filterContainer}>
          <FilterBox />
        </div>
        <Container
          className={clsx(
            c.cardsContainer,
            status === 'loading' && c.rootLoading
          )}
        >
          {/** TODO: add chips for different university rankings and lists */}
          {status === 'loading' || isFetching ? (
            <div>
              <SortByBoxSkeleton />
              {[
                'sk_1',
                'sk_2',
                'sk_3',
                'sk_4',
                'sk_5',
                'sk_6',
                'sk_7',
                'sk_8',
              ].map(id => (
                <HomeSchoolCardSkeleton key={id} />
              ))}
            </div>
          ) : status === 'error' ? (
            'エラー発生'
          ) : totalSchoolsFound === 0 ? (
            <React.Fragment>
              {sm_down ? <SortByScroller /> : <SortByBox />}
              <Typography
                variant='caption'
                style={{ textAlign: 'center', marginTop: 20 }}
              >
                条件にあった学校は見つかりませんでした。
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {!sm_down && <SortByBox />}
              {renderSchools}
            </React.Fragment>
          )}
          {status === 'success' && !isFetching && (
            <Pagination
              count={Math.ceil(schoolsData.totalSchoolsFound / 10)}
              page={pageNumber}
              className={c.pagination}
              onChange={handlePageChange}
            />
          )}
        </Container>
        <ScrollTop {...props}>
          <Fab aria-label='key arrow up' className={c.fab}>
            <KeyboardArrowUpIcon className={c.fabIcon} />
          </Fab>
        </ScrollTop>
      </div>
    </React.Fragment>
  )
}
export default Home
