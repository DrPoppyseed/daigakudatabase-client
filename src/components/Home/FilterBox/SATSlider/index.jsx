// @flow
import * as React from 'react'
import { Slider, Typography } from '@material-ui/core'
import useStyles from './styles.js'

type Props = {
  states: any,
  handleSatRange: () => null,
}

const SATSlider = (props: Props): React.Node => {
  const c = useStyles()
  return (
    <div className={c.satRangeSlider}>
      <Typography variant="body2" className={c.satRangeText}>
        SATの点数範囲：
        {`${props.states.satRange[0]} ~ ${props.states.satRange[1]}`}
      </Typography>
      <Slider
        value={props.states.satRange}
        onChange={props.handleSatRange}
        aria-labelledby="sat range slider"
        min={600}
        step={50}
        max={1600}
      />
    </div>
  )
}

export default SATSlider
