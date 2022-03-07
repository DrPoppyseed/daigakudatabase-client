import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  cardRoot: {
    marginBottom: theme.spacing(1),
    width: 300,
    borderRadius: 0,
  },
  textArea: {
    height: 70,
    width: '100%',
    paddingTop: theme.spacing(1.3),
    paddingBottom: theme.spacing(1.3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}))

const SchoolCardMiniSkeleton = () => {
  const c = useStyles()

  return (
    <Card className={c.cardRoot}>
      <Skeleton animation="wave" variant="rect" height={100} width={300} />
      <div className={c.textArea}>
        <Skeleton
          animation="wave"
          variant="rect"
          height={16}
          width={200}
          style={{ marginBottom: 13 }}
        />
        <Skeleton animation="wave" variant="rect" height={11} width={100} />
      </div>
    </Card>
  )
}

export default SchoolCardMiniSkeleton
