import * as React from 'react'
import { Paper, Typography } from '@mui/material'

import useStyles from './styles'

const Apply = () => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <Typography variant='h6'>大学への応募方法</Typography>
    </Paper>
  )
}

export default Apply
