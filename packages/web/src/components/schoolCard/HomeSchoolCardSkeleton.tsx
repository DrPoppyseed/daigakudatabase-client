import * as React from 'react'
import { Card, Skeleton, styled } from '@mui/material'

const HomeSchoolCardSkeleton = () => (
  <CardContainer>
    <Skeleton
      variant='rectangular'
      width={852}
      height={48}
      sx={{ marginBottom: 2 }}
      animation='wave'
    />
    <BodyBlock>
      <Skeleton
        variant='rectangular'
        width={350}
        height={261}
        animation='wave'
      />
      <Skeleton
        variant='rectangular'
        width={450}
        height={241}
        animation='wave'
      />
    </BodyBlock>
  </CardContainer>
)

const CardContainer = styled(Card)(({ theme }) => ({
  width: 900,
  marginBottom: theme.spacing(1),
  padding: theme.spacing(3),
  height: 373,
}))

const BodyBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

export default HomeSchoolCardSkeleton
