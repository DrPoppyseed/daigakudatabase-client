import * as React from 'react'
import { Box, Slider, Typography } from '@mui/material'
import formatMoney from '../../util/formatMoney'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setTuitionRange } from '../../features/filterSlice'
import { TuitionRange } from '../../types/TuitionRange'
import { FormattedMessage } from 'react-intl'
import {
  DEFAULT_TUITION_RANGE_HIGH,
  DEFAULT_TUITION_RANGE_LOW,
} from '../../util/constants'

const TuitionSlider = () => {
  const tuitionRange = useAppSelector(state => state.filter.tuitionRange)
  const dispatch = useAppDispatch()

  const handleTuitionRange = (_: Event, tuitionRange: TuitionRange) => {
    dispatch(setTuitionRange(tuitionRange))
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='body2' sx={{ marginBottom: 1 }}>
        <FormattedMessage id='filter.tuition_range_slider.tuition_range_pre_text' />
        <br />${formatMoney(tuitionRange[0])} ~
        {tuitionRange[1] !== 60000 ? (
          <>
            ${formatMoney(tuitionRange[1])}
            <FormattedMessage id='filter.tuition_range_slider.tuition_low_post_text' />
          </>
        ) : (
          <>
            ${formatMoney(tuitionRange[1])}
            <FormattedMessage id='filter.tuition_range_slider.tuition_low_post_text_max' />
          </>
        )}
      </Typography>
      <Slider
        value={tuitionRange}
        onChange={(_, range) => handleTuitionRange(_, range as TuitionRange)}
        aria-labelledby='tuition range slider'
        min={DEFAULT_TUITION_RANGE_LOW}
        step={100}
        max={DEFAULT_TUITION_RANGE_HIGH}
      />
    </Box>
  )
}

export default TuitionSlider
