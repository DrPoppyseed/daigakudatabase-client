import * as React from 'react'
import { Typography } from '@mui/material'

const NoSchoolsFound = () => {
  return (
    <Typography
      variant='caption'
      style={{ textAlign: 'center', marginTop: 20 }}
    >
      条件にあった学校は見つかりませんでした。
    </Typography>
  )
}

export default NoSchoolsFound
