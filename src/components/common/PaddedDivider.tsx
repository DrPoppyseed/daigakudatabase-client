import { Divider, styled } from '@mui/material'
import React from 'react'

const PaddedDivider = () => <DividerBase />

const DividerBase = styled(Divider)(({ theme }) => ({
  width: '100%',
  height: 1,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}))

export default PaddedDivider
