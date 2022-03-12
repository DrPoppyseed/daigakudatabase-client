import { Typography } from '@mui/material'
import * as React from 'react'

const NoDataText = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 60,
        width: 220,
        height: 210,
      }}
    >
      <Typography variant='caption'>データがありません。</Typography>
    </div>
  )
}

export default NoDataText
