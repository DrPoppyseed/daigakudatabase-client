import * as React from 'react'
import clsx from 'clsx'
import useStyles from './HomePageStyles'
import { Container } from '@mui/material'
import Pagination from './Pagination'
import FilterBox from '../filter/FilterBox'

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
import ErrorMessage from './ErrorMessage'
import HomePageCardListSkeleton from './HomePageCardListSkeleton'

const Home = () => {
  const params = useAppSelector(state => state.params)

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
      <div className={c.filterContainer}>
        <FilterBox />
      </div>
      <Container className={clsx(c.cardsContainer, isLoading && c.rootLoading)}>
        {isLoading ? (
          <HomePageCardListSkeleton />
        ) : isError ? (
          <ErrorMessage />
        ) : data && data.totalSchoolsFound === 0 ? (
          <React.Fragment>
            <SortByBox data={data} />
            <NoSchoolsFound />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SortByBox data={data} />
            {renderSchools}
          </React.Fragment>
        )}
        {isSuccess && <Pagination totalSchoolsFound={data.totalSchoolsFound} />}
      </Container>
      <ScrollTopFab />
    </div>
  )
}
export default Home
