import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { Box, Skeleton } from '@mui/material'
import { styled } from '@mui/system'

// import Overview from './Overview/Overview'
// import PageTop from './PageTop/PageTop'
// import Majors from './Majors/Majors'
// import Apply from './Apply/Apply'
import { useGetSchoolQuery } from '@/features/apiSlice'

const SchoolPage = () => {
  const { pathname } = useLocation()
  const schoolUrl = pathname.split('/')[1]
  const { data, isLoading, isError, isSuccess } = useGetSchoolQuery(schoolUrl)
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue)
  }

  useEffect(() => {
    console.log(JSON.stringify(data))
  }, [isSuccess])

  return (
    <SchoolPageRoot>
      <Helmet>
        <title>{`${
          isLoading
            ? 'ロード中...'
            : isError
            ? 'エラー...'
            : data?.school.general.name_en
        }`}</title>
      </Helmet>
      <Box
        sx={{
          gridColumn: 2,
        }}
      >
        {isLoading ? (
          <div>
            <Skeleton
              animation='wave'
              variant='rectangular'
              height={475}
              width={700}
            />
            <Skeleton
              animation='wave'
              variant='rectangular'
              height={325}
              width={700}
              style={{ marginTop: 24 }}
            />
          </div>
        ) : isError ? (
          'エラー...'
        ) : (
          <>
            {/* <PageTop */}
            {/*  handleTabChange={handleTabChange} */}
            {/*  tabIndex={tabIndex} */}
            {/*  school={data?.institutionData} */}
            {/*  isLiked={data?.isLiked} */}
            {/* /> */}
            {/* <Box */}
            {/*  sx={{ */}
            {/*    marginTop: 3, */}
            {/*  }} */}
            {/* > */}
            {/*  {tabIndex === 0 ? ( */}
            {/*    <Overview data={data?.institutionData} /> */}
            {/*  ) : tabIndex === 1 ? ( */}
            {/*    <Majors uuid={data?.uuid} /> */}
            {/*  ) : ( */}
            {/*    <Apply /> */}
            {/*  )} */}
            {/* </Box> */}
            hello
          </>
        )}
      </Box>
    </SchoolPageRoot>
  )
}

const SchoolPageRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'grid',
  gridTemplateColumns: '1fr 700px 20px 300px 1fr',
  padding: theme.spacing(4),
}))

export default SchoolPage
