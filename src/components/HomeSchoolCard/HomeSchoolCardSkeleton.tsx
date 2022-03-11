import * as React from 'react'
import { Card, Skeleton, Theme, useMediaQuery } from '@mui/material'
import useStyles from './HomeSchoolCardSkeletonStyles'

const HomeSchoolCardSkeleton = () => {
  const c = useStyles()
  const sm_up = useMediaQuery((theme: Theme) => theme.breakpoints.up('xs'))

  const cardsMDUp = () => (
    <Card className={c.cardContainer}>
      <Skeleton
        variant='rectangular'
        width={852}
        height={48}
        className={c.titleBlock}
        animation='wave'
      />
      <div className={c.bodyBlock}>
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
      </div>
    </Card>
  )

  const cardsSMDown = () => (
    <Card className={c.cardContainer}>Skeleton sm down</Card>
  )

  return sm_up ? cardsMDUp() : cardsSMDown()
}

export default HomeSchoolCardSkeleton
