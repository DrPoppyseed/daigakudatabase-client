/* eslint-disable jsx-a11y/iframe-has-title */
// @flow
import * as React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const Location = ({
  lat,
  lon,
}: {
  lat: String,
  lon: String,
}): React.Element<any> => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <Typography variant="h6" className={c.title}>
        キャンパス
      </Typography>
      <div className={c.mapsContainer}>
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCd_GHnmWwBIrlIDh7pbzFbBQzw7VA166g&center=${lat},${lon}&maptype=satellite&zoom=17`}></iframe>
      </div>
    </Paper>
  )
}

export default Location
