import * as React from 'react'
import { Paper } from '@mui/material'
import useStyles from './styles'
import FilterInner from '../FilterCommon/FilterInner'

const FilterBox = () => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <FilterInner />
    </Paper>
  )
}

export default FilterBox
