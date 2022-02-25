// @flow
import * as React from 'react'
import { Chip } from '@material-ui/core'
import useStyles from './styles'

type ChipObj = {
  label: string,
  link: string,
  chipId: string,
}

type Props = {
  chips: Array<ChipObj>,
}

const ChipGroup = (props: Props): React.Node => {
  const c = useStyles()

  const renderChips = props.chips.map((chip: ChipObj): React.Node => (
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
