// @flow
import * as React from 'react'
import { Slider, Typography } from '@material-ui/core'
import useStyles from './styles.js'

type Props = {
  states: any,
  handleTuitionRange: () => null,
}

const TuitionSlider = (props: Props) => {
  const c = useStyles()

  const formatMoney = num => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      currency: 'USD',
    }).format(num)
  }

  return (
    <div className={c.tuitionRangeSlider}>
      <Typography variant="body2" className={c.tuitionRangeText}>
        １年間の平均学費の範囲：
        <br />
        {`${`$ ${formatMoney(props.states.tuitionRange[0])}`} ~ ${
          props.states.tuitionRange[1] !== 60000
            ? `$ ${formatMoney(props.states.tuitionRange[1])} / 年`
            : `$ ${formatMoney(props.states.tuitionRange[1])} 以上 / 年`
        }`}
      </Typography>
      <Slider
        value={props.states.tuitionRange}
        onChange={props.handleTuitionRange}
        aria-labelledby="tuition range slider"
        min={0}
        step={100}
        max={60000}
      />
    </div>
  )
}

export default TuitionSlider
