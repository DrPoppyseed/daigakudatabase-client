import React from 'react'
import { Slider, styled, Typography } from '@mui/material'
import {
  DEFAULT_SAT_RANGE_HIGH,
  DEFAULT_SAT_RANGE_LOW,
} from '../../util/constants'
import { SATRange } from '../../types/SATRange'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setSATRange } from '../../features/filterSlice'
import { FormattedMessage } from 'react-intl'

const SATSlider = () => {
  const satRange = useAppSelector(state => state.filter.satRange)
  const dispatch = useAppDispatch()

  const handleSatRange = (_: Event, satRange: SATRange) => {
    dispatch(setSATRange(satRange))
  }

  return (
    <SatRangeSliderContainer>
      <Typography variant='body2' sx={{ marginBottom: 1 }}>
        <FormattedMessage id='filter.sat_range_slider.sat_range_pre_text' />
        {satRange[0]} ~ {satRange[1]}
      </Typography>
      <Slider
        value={satRange}
        onChange={(e, range) => handleSatRange(e, range as SATRange)}
        aria-labelledby='sat range slider'
        min={DEFAULT_SAT_RANGE_LOW}
        step={50}
        max={DEFAULT_SAT_RANGE_HIGH}
      />
    </SatRangeSliderContainer>
  )
}

const SatRangeSliderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: theme.spacing(2),
}))

export default SATSlider
