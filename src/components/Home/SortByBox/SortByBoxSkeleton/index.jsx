// @flow
import * as React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import useStyles from './styles'

const SortByBoxSkeleton = (): React.Node => {
  const c = useStyles()
  return (
    <Card className={c.cardContainer}>
      <div className={c.hitsContainer}>
        <Skeleton variant='rect' width={251.86} height={32} animation='wave'/>
        <Skeleton variant='rect' width={141} height={19} animation='wave'/>
      </div>
      <div className={c.divider} />
      <Skeleton variant='rect' width={220} height={48} animation='wave'/>
    </Card>
  )
}

export default SortByBoxSkeleton