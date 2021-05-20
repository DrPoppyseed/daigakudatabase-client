// @flow
import clsx from 'clsx'
import * as React from 'react'
import { Breadcrumbs, Typography } from '@material-ui/core'
import {
  AttachMoney as AttachMoneyIcon,
  BarChart as BarChartIcon,
} from '@material-ui/icons'
import useStyles from './styles'

type Props = {
  tuitionLow: number,
  tuitionHigh: number,
  // toeflRange: number,
  SATHigh: number,
  SATLow: number,
}

const TestStatsBreadcrumb = (props: Props): React.Node => {
  const c = useStyles()

  return (
    <Breadcrumbs className={c.statGroup}>
      <div className={c.statItemContainer}>
        <BarChartIcon
          fontSize="small"
          className={clsx(c.statItemIcon, c.blue)}
        />
        <Typography variant="caption">
          {/* {`TOEFL ${props.toeflRange}+ ・ SAT ${props.SATLow} ~ ${props.SATHigh}`} */}
          {`SAT ${props.SATLow || '未測定'} ~ ${props.SATHigh || '未測定'}`}
        </Typography>
      </div>
      <div className={c.statItemContainer}>
        <AttachMoneyIcon
          fontSize="small"
          className={clsx(c.statItemIcon, c.yellow)}
        />
        <Typography variant="caption">
          {/* {`${props.tuitionLow}万円 ~ ${props.tuitionHigh}万円 / 年`} */}
          {`$${props.tuitionLow} ~ $${props.tuitionHigh} / 年`}
        </Typography>
      </div>
    </Breadcrumbs>
  )
}

export default TestStatsBreadcrumb
