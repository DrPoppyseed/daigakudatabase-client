import React, { useMemo } from 'react'
import { Container, styled } from '@mui/material'
import Pagination from './Pagination'
import FilterBox from '../filter/FilterBox'

import HomeSchoolCard from '../schoolCard/HomeSchoolCard'
import MetaTitle from '../common/MetaTitle'
import { PageMetaTitles } from '@/util/constants'
import { useGetSchoolsQuery } from '@/features/apiSlice'
import queryParamsBuilder from '@/util/queryParamsBuilder'
import { School } from '@/model/School'
import ScrollTopFab from '../common/ScrollTopFab'
import SortByBox from '../sort/SortByBox'
import NoSchoolsFound from './NoSchoolsFound'
import { useAppSelector } from '@/hooks/useFilter'
import ErrorMessage from './ErrorMessage'
import HomePageCardListSkeleton from './HomePageCardListSkeleton'

const Home = () => {
  const params = useAppSelector(state => state.params)

  const { data, isLoading, isError, isSuccess } = useGetSchoolsQuery(
    queryParamsBuilder(params)
  )

  const mapSchools = (schools: School[]) =>
    schools.map(school => (
      <HomeSchoolCard key={school.ipeds_unitid} general={school} />
    ))

  const renderSchools = useMemo(
    () => !!data && mapSchools(data.schools),
    [data]
  )

  return (
    <Root>
      <MetaTitle title={PageMetaTitles.HOME} />
      <FilterContainer>
        <FilterBox />
      </FilterContainer>
      <CardsContainer
        style={{
          height: isLoading ? '100vh' : 'auto',
        }}
      >
        {isLoading ? (
          <HomePageCardListSkeleton />
        ) : isError ? (
          <ErrorMessage />
        ) : data && data.totalSchoolsFound === 0 ? (
          <>
            <SortByBox data={data} />
            <NoSchoolsFound />
          </>
        ) : (
          <>
            <SortByBox data={data} />
            {renderSchools}
          </>
        )}
        {isSuccess && (
          <Pagination totalSchoolsFound={data?.totalSchoolsFound} />
        )}
      </CardsContainer>
      <ScrollTopFab />
    </Root>
  )
}

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'grid',
  gridSpacing: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '0px auto 0px',
    gridSpacing: theme.spacing(2),
  },
  [theme.breakpoints.between('md', 'xl')]: {
    gridTemplateColumns: '1fr 900px 1fr',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 300px 10px 900px 1fr',
  },
}))

const FilterContainer = styled('div')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  gridColumn: 2,
}))

const CardsContainer = styled(Container)(({ theme }) => ({
  gridColumn: 2,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: 30,
  },
  [theme.breakpoints.up('md')]: {
    width: 900,
  },
  [theme.breakpoints.up('lg')]: {
    gridColumn: 4,
  },
}))

export default Home
