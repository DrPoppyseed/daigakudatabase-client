import * as React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Card } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

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
      <Skeleton
        animation='wave'
        variant='rectangular'
        height={100}
        width={300}
      />
      <div className={c.textArea}>
        <Skeleton
          animation='wave'
          variant='rectangular'
          height={16}
          width={200}
          style={{ marginBottom: 13 }}
        />
        <Skeleton
          animation='wave'
          variant='rectangular'
          height={11}
          width={100}
        />
      </div>
    </Card>
  )
}

export default SchoolCardMiniSkeleton
