// @flow
import * as React from 'react'
import Card from '@material-ui/core/Card'
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './styles.js'

const HomeSchoolCardSkeleton = (): React.Node => {
  const c = useStyles()
  return (
    <Card className={c.cardContainer}>
      <Skeleton variant='rect' width={852} height={48} className={c.titleBlock} animation='wave'/>
      <div className={c.bodyBlock}>
        <Skeleton variant='rect' width={350} height={261} animation='wave'/>
        <Skeleton variant='rect' width={450} height={241} animation='wave'/>
      </div>
    </Card>
  )
}

export default HomeSchoolCardSkeleton