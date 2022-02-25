// @flow
import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'block',
    bottom: '0',
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(1),
  },
}))

const FooterSub = (): React.Element<any> => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <Typography variant="overline">
        質問・フィードバックは <strong>peaske16180@gmail.com</strong> へ
      </Typography>
    </div>
  )
}

export default FooterSub
