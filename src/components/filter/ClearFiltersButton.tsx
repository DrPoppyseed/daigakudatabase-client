import { Button } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'
import React from 'react'
import { useAppDispatch } from '../../hooks/useFilter'
import { clearFilter } from '../../features/filterSlice'
import useStyles from './ClearFiltersButtonStyles'

const ClearFiltersButton = () => {
  const c = useStyles()
  const dispatch = useAppDispatch()

  const handleClearFilter = () => {
    dispatch(clearFilter())
  }

  return (
    <Button
      variant='outlined'
      startIcon={<DeleteIcon />}
      className={c.filterSearchButton}
      onClick={handleClearFilter}
    >
      条件をクリアする
    </Button>
  )
}

export default ClearFiltersButton
