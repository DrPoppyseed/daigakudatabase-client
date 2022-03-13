import React from 'react'
import { Paper } from '@mui/material'
import FilterInner from './FilterInner'

const FilterBox = () => {
  return (
    <Paper sx={{ flexGrow: 1 }}>
      <FilterInner />
    </Paper>
  )
}

export default FilterBox
