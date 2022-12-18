import { Button } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useAppDispatch } from '@/hooks/useFilter'
import { clearFilter } from '@/features/filterSlice'

const ClearFiltersButton = () => {
  const dispatch = useAppDispatch()

  const handleClearFilter = () => {
    dispatch(clearFilter())
  }

  return (
    <Button
      variant='outlined'
      startIcon={<DeleteIcon />}
      sx={{ width: '100%' }}
      onClick={handleClearFilter}
    >
      <FormattedMessage id='filter.clear_filter_button.label' />
    </Button>
  )
}

export default ClearFiltersButton
