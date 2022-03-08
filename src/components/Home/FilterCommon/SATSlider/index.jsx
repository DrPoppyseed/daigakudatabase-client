import * as React from 'react'
import { Slider, Typography } from '@mui/material'
import useStyles from './styles.js'
import { HomeContext } from '../../../../HomeContext'

const SATSlider = () => {
  const c = useStyles()
  const { satRange, handleSatRange } = React.useContext(HomeContext)
  return (
    <div className={c.satRangeSlider}>
      <Typography variant='body2' className={c.satRangeText}>
        SATの点数範囲：
        {`${satRange[0]} ~ ${satRange[1]}`}
      </Typography>
      <Slider
        value={satRange}
        onChange={handleSatRange}
        aria-labelledby='sat range slider'
        min={600}
        step={50}
        max={1600}
      />
    </div>
  )
}

export default SATSlider
