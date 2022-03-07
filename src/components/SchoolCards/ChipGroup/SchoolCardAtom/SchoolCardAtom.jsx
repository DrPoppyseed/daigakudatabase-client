import * as React from 'react'
import { Card, Typography } from '@material-ui/core'

import useStyles from './styles'

const SchoolCardAtom = (props) => {
  const c = useStyles()

  return (
    <Card className={c.root}>
      <Typography>{props.name}</Typography>
    </Card>
  )
}

export default SchoolCardAtom
