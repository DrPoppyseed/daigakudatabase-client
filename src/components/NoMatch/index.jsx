// @flow
import * as React from 'react'
import useStyles from './styles'

const NoMatch = (): React.Element<any> => {
  const c = useStyles()
  return <div className={c.root}>404 page not found</div>
}

export default NoMatch
