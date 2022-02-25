// @flow
import * as React from 'react'
import {
  Card,
  // useMediaQuery
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './styles.js'

const HomeSchoolCardSkeleton = (): React.Node => {
  const c = useStyles()
  // const sm_up = useMediaQuery(theme => theme.breakpoints.up('xs'))

  // const cardsMDUp = () => (
  //   <Card className={c.cardContainer}>
  //     <Skeleton
  //       variant="rect"
  //       width={852}
  //       height={48}
  //       className={c.titleBlock}
  //       animation="wave"
  //     />
  //     <div className={c.bodyBlock}>
  //       <Skeleton variant="rect" width={350} height={261} animation="wave" />
  //       <Skeleton variant="rect" width={450} height={241} animation="wave" />
  //     </div>
  //   </Card>
  // )

  // const cardsSMDown = () => (
  //   <Card className={c.cardContainer}>Skeleton sm down</Card>
  // )

  return (
    <Card className={c.cardContainer}>
      <Skeleton
        variant="rect"
        width={852}
        height={48}
        className={c.titleBlock}
        animation="wave"
      />
      <div className={c.bodyBlock}>
        <Skeleton variant="rect" width={350} height={261} animation="wave" />
        <Skeleton variant="rect" width={450} height={241} animation="wave" />
      </div>
    </Card>
  )

  // return <React.Fragment>{sm_up ? cardsMDUp : cardsSMDown}</React.Fragment>
}

export default HomeSchoolCardSkeleton
