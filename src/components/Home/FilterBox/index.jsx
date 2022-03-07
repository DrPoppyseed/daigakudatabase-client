import * as React from 'react'
import { Paper } from '@material-ui/core'
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
