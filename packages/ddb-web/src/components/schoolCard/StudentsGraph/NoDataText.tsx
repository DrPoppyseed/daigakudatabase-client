import { FormattedMessage } from 'react-intl'
import React from 'react'
import { styled } from '@mui/material'

const NoDataText = () => {
  return (
    <NullStudentsGraphContainer>
      <FormattedMessage id='school_card.datacard.students.no_data_text.label' />
    </NullStudentsGraphContainer>
  )
}

const NullStudentsGraphContainer = styled('div')(() => ({
  height: 210,
  width: 450,
  display: 'flex',
  justifyContent: 'center',
}))

export default NoDataText
