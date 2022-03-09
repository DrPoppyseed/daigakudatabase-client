import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import useStyles from './StateSelectorStyles'
import { States } from '../../../../util/constants'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useFilter'
import { setState } from '../../../../features/filter/filterSlice'

const StateSelector = () => {
  const c = useStyles()
  const state = useAppSelector(state => state.filter.state)
  const dispatch = useAppDispatch()

  const handleState = (e: SelectChangeEvent<string>) => {
    dispatch(setState(e.target.value))
  }

  return (
    <FormControl className={c.selectStateContainer}>
      <InputLabel id='select-state-label'>州別でみる</InputLabel>
      <Select
        labelId='select-state-label'
        id='select-state'
        value={state}
        onChange={handleState}
      >
        <MenuItem value=''>特になし</MenuItem>
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
