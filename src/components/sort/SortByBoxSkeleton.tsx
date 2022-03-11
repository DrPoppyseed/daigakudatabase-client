import * as React from 'react'
import { Card, Skeleton } from '@mui/material'
import useStyles from './SortByBoxSkeletonStyles'

const SortByBoxSkeleton = () => {
  const c = useStyles()
  return (
    <Card className={c.cardContainer}>
      <div className={c.hitsContainer}>
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
      </div>
      <div className={c.divider} />
      <Skeleton
        variant='rectangular'
        width={220}
        height={48}
        animation='wave'
      />
    </Card>
  )
}

export default SortByBoxSkeleton
