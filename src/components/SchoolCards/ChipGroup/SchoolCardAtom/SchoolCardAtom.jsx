// @flow
import * as React from 'react'
import { Card, Typography } from '@material-ui/core'

import useStyles from './styles'

type Props = {|
  name: string,
|}

const SchoolCardAtom = (props: Props): React.Element<any> => {
  const c = useStyles()

  return (
    <Card className={c.root}>
      <Typography>{props.name}</Typography>
    </Card>
  )
}

export default SchoolCardAtom
