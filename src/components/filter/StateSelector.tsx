import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import useStyles from './StateSelectorStyles'
import { States } from '../../constants/States'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setState } from '../../features/filterSlice'
import { FormattedMessage } from 'react-intl'

const StateSelector = () => {
  const c = useStyles()
  const state = useAppSelector(state => state.filter.state)
  const dispatch = useAppDispatch()

  const handleState = (e: SelectChangeEvent) => {
    dispatch(setState(e.target.value))
  }

  return (
    <FormControl className={c.selectStateContainer}>
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
        {States.map(state => (
          <MenuItem key={state.en} value={state.en}>
            {state.ja}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default StateSelector
