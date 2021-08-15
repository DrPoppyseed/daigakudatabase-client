// @flow
import * as React from 'react'
import { Slider, Typography } from '@material-ui/core'
import useStyles from './styles.js'
import { HomeContext } from '../../../../HomeContext'

const TuitionSlider = () => {
  const c = useStyles()
  const { tuitionRange, handleTuitionRange } = React.useContext(HomeContext)

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
        {`${`$ ${formatMoney(tuitionRange[0])}`} ~ ${
          tuitionRange[1] !== 60000
            ? `$ ${formatMoney(tuitionRange[1])} / 年`
            : `$ ${formatMoney(tuitionRange[1])} 以上 / 年`
        }`}
      </Typography>
      <Slider
        value={tuitionRange}
        onChange={handleTuitionRange}
        aria-labelledby="tuition range slider"
        min={0}
        step={100}
        max={60000}
      />
    </div>
  )
}

export default TuitionSlider
