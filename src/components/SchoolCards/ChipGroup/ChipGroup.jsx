import * as React from 'react'
import { Chip } from '@mui/material'
import useStyles from './styles'

const ChipGroup = (props) => {
  const c = useStyles()

  const renderChips = props.chips.map((chip) => (
    <Chip
      key={chip.chipId}
      className={c.chipItem}
      variant="outlined"
      size="small"
      // component="a"
      // href={chip.link}
      label={chip.label}
    />
  ))

  return <div className={c.chipGroup}>{renderChips}</div>
}

export default ChipGroup
