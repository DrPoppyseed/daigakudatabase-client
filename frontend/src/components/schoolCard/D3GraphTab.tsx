import React, { FC } from 'react'
import { styled } from '@mui/material'
import { FormattedMessage } from 'react-intl'

export interface D3GraphTabProps {
  activeGraph: number
  handleActiveGraphChange: (state: number) => void
  tabNumber: number
  messageId: string
}

const D3GraphTab: FC<D3GraphTabProps> = ({
  activeGraph,
  handleActiveGraphChange,
  tabNumber,
  messageId,
}) => (
    <Tab
      sx={{
        color: activeGraph === 0 ? 'palette.primary' : 'inherit',
      }}
      onClick={() => handleActiveGraphChange(tabNumber)}
    >
      <FormattedMessage id={messageId} />
    </Tab>
  )

const Tab = styled('button')(() => ({
  backgroundColor: 'white',
  border: 'none',
  background:
    'linear-gradient(currentColor 0 0) bottom/var(--d, 0) 1px no-repeat',
  transition: '0.2s',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    opacity: 1,
    '--d': '100%',
    color: '#2196f3',
  },
}))

export default D3GraphTab
