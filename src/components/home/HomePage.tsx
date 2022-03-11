import * as React from 'react'
import clsx from 'clsx'
import useStyles from './HomePageStyles'
import { Container, Theme, useMediaQuery } from '@mui/material'
import Pagination from './Pagination'

import HomeSchoolCardSkeleton from '../HomeSchoolCard/HomeSchoolCardSkeleton'
import FilterBox from '../filter/FilterBox'
import FilterDrawer from '../filter/FilterDrawer'

import HomeSchoolCard from '../HomeSchoolCard/HomeSchoolCard'
import MetaTitle from '../common/MetaTitle'
import { PageMetaTitles } from '../../util/constants'
import { useGetSchoolsQuery } from '../../features/schoolsAPISlice'
import queryParamsBuilder from '../../util/queryParamsBuilder'
import { School } from '../../model/School'
import ScrollTopFab from '../common/ScrollTopFab'
import SortByBox from '../sort/SortByBox'
import NoSchoolsFound from './NoSchoolsFound'
import { useAppSelector } from '../../hooks/useFilter'

const Home = () => {
  const params = useAppSelector(state => state.params)

  const sm_down = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const c = useStyles()
  const { data, isLoading, isError, isSuccess } = useGetSchoolsQuery(
    queryParamsBuilder(params)
  )

  const mapSchools = (schools: School[]) =>
    schools.map(school => (
      <HomeSchoolCard key={school.ipeds_unitid} general={school} />
    ))

  const renderSchools = React.useMemo(
    () => !!data && mapSchools(data.schools),
    [data]
  )

  return (
    <div className={c.root}>
      <MetaTitle title={PageMetaTitles.HOME} />
      <FilterDrawer />
      <div className={c.filterContainer}>
        <FilterBox />
      </div>
      <Container className={clsx(c.cardsContainer, isLoading && c.rootLoading)}>
        {isLoading ? (
          <HomeSchoolCardSkeleton />
        ) : isError ? (
          'エラー発生'
        ) : data && data.totalSchoolsFound === 0 ? (
          <React.Fragment>
            {/*{sm_down ? <SortByScroller /> : <SortByBox />}*/}
            {!sm_down && <SortByBox data={data} />}
            <NoSchoolsFound />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {!sm_down && <SortByBox data={data} />}
            {console.log(data!.schools)}
            {renderSchools}
            hello
          </React.Fragment>
        )}
        {isSuccess && <Pagination totalSchoolsFound={data.totalSchoolsFound} />}
      </Container>
      <ScrollTopFab />
    </div>
  )
}
export default Home
