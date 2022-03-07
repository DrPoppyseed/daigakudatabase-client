import * as React from 'react'
import clsx from 'clsx'
import { Paper, Typography } from '@material-ui/core'
import Students from './Students/Students'
import StatsTable from './StatsTable/StatsTable'
import Location from './Location/Location'
import useStyles from './styles'

const Overview = ({ data }) => {
  const c = useStyles()

  return (
    <div>
      <Paper className={c.paper}>
        <StatsTable basicInfo={data} />
      </Paper>
      <Paper className={clsx(c.paper, c.root)}>
        <div className={c.summaryTextArea}>
          <Typography variant='h6' className={c.textAreaTitle}>
            大学のサマリー
          </Typography>
          <Typography variant='body2' className={c.textAreaContent}>
            {data.summary.length > 0
              ? data.summary
              : 'この大学に関するサマリーはまだありません。質問等は peaske16180@gmail.com まで連絡をどうぞ。'}
          </Typography>
        </div>
      </Paper>
      <Students demographics={data.students.demographics} />
      <Location lat={data.location.lat} lon={data.location.lon} />
    </div>
  )
}
export default Overview
