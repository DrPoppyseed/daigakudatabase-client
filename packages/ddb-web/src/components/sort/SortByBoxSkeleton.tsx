import React from 'react'
import { Card, Skeleton, styled } from '@mui/material'
import FlexGrow from '../common/FlexGrow'

const SortByBoxSkeleton = () => (
    <CardContainer>
      <HitsContainer>
        <Skeleton
          variant='rectangular'
          width={251.86}
          height={32}
          animation='wave'
        />
        <Skeleton
          variant='rectangular'
          width={141}
          height={19}
          animation='wave'
        />
      </HitsContainer>
      <FlexGrow />
      <Skeleton
        variant='rectangular'
        width={220}
        height={48}
        animation='wave'
      />
    </CardContainer>
  )

const CardContainer = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  width: 900,
}))

const HitsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}))

export default SortByBoxSkeleton
