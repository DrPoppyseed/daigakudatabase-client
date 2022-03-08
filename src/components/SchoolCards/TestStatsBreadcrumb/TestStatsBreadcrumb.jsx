import clsx from 'clsx'
import * as React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import {
  AttachMoney as AttachMoneyIcon,
  BarChart as BarChartIcon,
} from '@mui/icons-material'
import useStyles from './styles'

const TestStatsBreadcrumb = props => {
  const c = useStyles()

  const formatMoney = num => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      currency: 'USD',
    }).format(num)
  }

  return (
    <Breadcrumbs className={c.statGroup}>
      <div className={c.statItemContainer}>
        <BarChartIcon
          fontSize='small'
          className={clsx(c.statItemIcon, c.blue)}
        />
        <Typography variant='caption'>
          {`SAT ${props.SATLow || '未測定'} ~ ${props.SATHigh || '未測定'}`}
        </Typography>
      </div>
      <div className={c.statItemContainer}>
        <AttachMoneyIcon
          fontSize='small'
          className={clsx(c.statItemIcon, c.yellow)}
        />
        <Typography variant='caption'>
          {`平均：$${formatMoney(props.tuitionAvg)}/年 ($${formatMoney(
            props.tuitionHigh
          )} ~ $${formatMoney(props.tuitionLow)}/年)`}
        </Typography>
      </div>
    </Breadcrumbs>
  )
}

export default TestStatsBreadcrumb
