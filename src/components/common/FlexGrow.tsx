import React, { FC } from 'react'
import { styled } from '@mui/material'

export interface FlexGrowProps {
  id?: string
}

const FlexGrow: FC<FlexGrowProps> = ({ children, id = '' }) => {
  return <Grow id={id}>{children}</Grow>
}

const Grow = styled('div')`
  flex-grow: 1;
`

export default FlexGrow
