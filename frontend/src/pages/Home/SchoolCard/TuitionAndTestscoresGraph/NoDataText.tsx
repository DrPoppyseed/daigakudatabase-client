import { styled, Typography } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const NoDataText = () => (
    <Root>
      <Typography variant='caption'>
        <FormattedMessage id='school_card.datacard.tuition_and_testscores_graph.no_data_text.label' />
      </Typography>
    </Root>
  )

const Root = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 60,
  width: 220,
  height: 210,
}))

export default NoDataText
