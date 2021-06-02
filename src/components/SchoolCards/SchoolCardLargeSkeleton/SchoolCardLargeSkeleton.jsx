// @flow
import * as React from 'react'
import { Card } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import useStyles from './styles'

const SchoolCardTest = (): React.Element<any> => {
  const c = useStyles()

  return (
    <Card className={c.cardContainer}>
      <Skeleton animation="wave" variant="rect" height={230} width={220} />
      <div className={c.textContainer}>
        <Skeleton
          variant="rect"
          animation="wave"
          height={45}
          style={{ marginBottom: 20 }}
        />
        <Skeleton
          variant="rect"
          animation="wave"
          height={60}
          style={{ marginBottom: 20 }}
        />
        <Skeleton variant="rect" animation="wave" width={200} height={40} />
      </div>
    </Card>
  )
}

export default SchoolCardTest
