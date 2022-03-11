import React from 'react'
import { Paper } from '@mui/material'
import useStyles from './FilterBoxStyles'
import FilterInner from './FilterInner'

const FilterBox = () => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <FilterInner />
    </Paper>
  )
}

export default FilterBox
