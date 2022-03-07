import * as React from 'react'
import { Card } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    height: 230,
    width: 700,
  },
  textContainer: {
    height: 230,
    width: 480,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  cardTitle: {
    marginBottom: theme.spacing(2),
  },
  cardText: {},
  stats: {},
}))

const SchoolCardTest = () => {
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
