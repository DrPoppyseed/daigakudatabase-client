import * as React from 'react'
import { Card, Skeleton } from '@mui/material'
import useStyles from './HomeSchoolCardSkeletonStyles'

const HomeSchoolCardSkeleton = () => {
  const c = useStyles()

  return (
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
}

export default HomeSchoolCardSkeleton
