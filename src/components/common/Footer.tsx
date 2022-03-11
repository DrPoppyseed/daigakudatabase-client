import * as React from 'react'
import { Theme, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'block',
      bottom: '0',
      textAlign: 'center',
      width: '100%',
      padding: theme.spacing(1),
    },
  })
)

const Footer = () => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <Typography variant='overline'>
        質問・フィードバックは <strong>peaske16180@gmail.com</strong> へ
      </Typography>
    </div>
  )
}

export default Footer
