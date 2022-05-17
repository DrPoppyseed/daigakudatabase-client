import { styled, Typography, CircularProgress } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const PageLoading = () => (
  <LoadingContainer>
    <Typography sx={{ marginBottom: 2 }}>
      <FormattedMessage id='page_loading.message' />
    </Typography>
    <CircularProgress />
  </LoadingContainer>
)

const LoadingContainer = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export default PageLoading
