import React from 'react'
import { Slider, Typography } from '@mui/material'
import useStyles from './SATSliderStyles'
import {
  DEFAULT_SAT_RANGE_HIGH,
  DEFAULT_SAT_RANGE_LOW,
} from '../../util/constants'
import { SATRange } from '../../types/SATRange'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setSATRange } from '../../features/filterSlice'

const SATSlider = () => {
  const c = useStyles()
  const satRange = useAppSelector(state => state.filter.satRange)
  const dispatch = useAppDispatch()

  const handleSatRange = (_: Event, satRange: SATRange) => {
    dispatch(setSATRange(satRange))
  }

  return (
    <div className={c.satRangeSlider}>
      <Typography variant='body2' className={c.satRangeText}>
        SATの点数範囲：
        {`${satRange[0]} ~ ${satRange[1]}`}
      </Typography>
      <Slider
        value={satRange}
        onChange={(e, range) => handleSatRange(e, range as SATRange)}
        aria-labelledby='sat range slider'
        min={DEFAULT_SAT_RANGE_LOW}
        step={50}
        max={DEFAULT_SAT_RANGE_HIGH}
      />
    </div>
  )
}

export default SATSlider
