import * as React from 'react'
import { Paper, Typography } from '@material-ui/core'

import CustomPie from './CustomPie/CustomPie'
import useStyles from './styles'

const Students = ({
  demographics,
}) => {
  const c = useStyles()

  const data = [
    {
      id: 'アジア系',
      label: 'アジア系',
      value: demographics.asian,
    },
    {
      id: '白人',
      label: '白人',
      value: demographics.white,
    },
    {
      id: 'ヒスパニック',
      label: 'ヒスパニック',
      value: demographics.hispanic,
    },
    {
      id: '留学生',
      label: '留学生',
      value: demographics.international,
    },
    {
      id: '黒人',
      label: '黒人',
      value: demographics.black,
    },
    {
      id: 'その他',
      label: 'その他',
      value: demographics.other,
    },
  ]

  return (
    <Paper className={c.root}>
      <Typography variant="h6">学生の人種構成</Typography>
      <div className={c.pieContainer}>
        <CustomPie data={data} />
      </div>
    </Paper>
  )
}

export default Students
