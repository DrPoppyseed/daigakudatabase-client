//@flow
import * as React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const Apply = (): React.Element<any> => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <Typography variant="h6">大学への応募方法</Typography>
    </Paper>
  )
}

export default Apply
