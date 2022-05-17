import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { States } from '@/constants/States'
import { useAppDispatch, useAppSelector } from '@/hooks/useFilter'
import { setState } from '@/features/filterSlice'

const StateSelector = () => {
  const state = useAppSelector(_state => _state.filter.state)
  const dispatch = useAppDispatch()

  const handleState = (e: SelectChangeEvent) => {
    dispatch(setState(e.target.value))
  }

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='select-state-label'>
        <FormattedMessage id='filter.state_selector.input_label' />
      </InputLabel>
      <Select
        labelId='select-state-label'
        id='select-state'
        value={state}
        onChange={handleState}
      >
        <MenuItem value=''>
          <FormattedMessage id='filter.state_selector.select_item.default_value' />
        </MenuItem>
        {States.map(_state => (
          <MenuItem key={_state.en} value={_state.en}>
            {_state.ja}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default StateSelector
