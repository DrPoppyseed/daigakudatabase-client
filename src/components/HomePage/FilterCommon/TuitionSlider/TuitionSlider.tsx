import * as React from 'react'
import { Slider, Typography } from '@mui/material'
import useStyles from './TuitionSliderStyles'
import formatMoney from '../../../../util/formatMoney'
import {
  DEFAULT_TUITION_RANGE_HIGH,
  DEFAULT_TUITION_RANGE_LOW,
} from '../../../../util/constants'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useFilter'
import { setTuitionRange } from '../../../../features/filter/filterSlice'
import { TuitionRange } from '../../../../types/TuitionRange'

const TuitionSlider = () => {
  const c = useStyles()
  const tuitionRange = useAppSelector(state => state.filter.tuitionRange)
  const dispatch = useAppDispatch()

  const handleTuitionRange = (_: Event, tuitionRange: TuitionRange) => {
    dispatch(setTuitionRange(tuitionRange))
  }

  return (
    <div className={c.tuitionRangeSlider}>
      <Typography variant='body2' className={c.tuitionRangeText}>
        １年間の平均学費の範囲：
        <br />${formatMoney(tuitionRange[0])} ~ $
        {tuitionRange[1] !== 60000
          ? `${formatMoney(tuitionRange[1])} / 年`
          : `${formatMoney(tuitionRange[1])} 以上 / 年`}
      </Typography>
      <Slider
        value={tuitionRange}
        onChange={(_, range) => handleTuitionRange(_, range as TuitionRange)}
        aria-labelledby='tuition range slider'
        min={DEFAULT_TUITION_RANGE_LOW}
        step={100}
        max={DEFAULT_TUITION_RANGE_HIGH}
      />
    </div>
  )
}

export default TuitionSlider
