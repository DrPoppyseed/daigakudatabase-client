import React, { FC } from 'react'
import { styled } from '@mui/material'
import D3GraphTab from './D3GraphTab'

export interface D3GraphTabsProps {
  activeGraph: number
  setActiveGraph: (state: number) => void
}

const D3GraphTabs: FC<D3GraphTabsProps> = ({ activeGraph, setActiveGraph }) => {
  const handleActiveGraphChange = (newValue: number) => {
    if (newValue !== activeGraph) setActiveGraph(newValue)
  }

  return (
    <TabsContainer>
      <D3GraphTab
        activeGraph={activeGraph}
        handleActiveGraphChange={handleActiveGraphChange}
        tabNumber={0}
        messageId='school_card.d3_graph_tab.label.program'
      />
      <D3GraphTab
        activeGraph={activeGraph}
        handleActiveGraphChange={handleActiveGraphChange}
        tabNumber={1}
        messageId='school_card.d3_graph_tab.label.tuition_and_testscores'
      />
      <D3GraphTab
        activeGraph={activeGraph}
        handleActiveGraphChange={handleActiveGraphChange}
        tabNumber={2}
        messageId='school_card.d3_graph_tab.label.students'
      />
    </TabsContainer>
  )
}

const TabsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: theme.spacing(1),
}))

export default D3GraphTabs
