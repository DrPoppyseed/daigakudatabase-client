import * as React from 'react'
import { Typography } from '@material-ui/core'

const ProvidedMajor = ({
  majorTitleJap,
  programNum,
}) => {
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${majorTitleJap}`
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div style={{ cursor: 'pointer' }}>
      <Typography variant="subtitle2" onClick={handleClick}>
        {majorTitleJap} - ({programNum})
      </Typography>
    </div>
  )
}

export default ProvidedMajor
