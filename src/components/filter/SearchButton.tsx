import { Button } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useAppDispatch, useAppSelector } from '@/hooks/useFilter'
import { setParams } from '@/features/paramsSlice'

const SearchButton = () => {
  const filter = useAppSelector(state => state.filter)
  const params = useAppSelector(state => state.params)
  const dispatch = useAppDispatch()

  const handleSearchClick = () => {
    dispatch(
      setParams({
        filter,
        page: params.page,
        sortBy: params.sortBy,
      })
    )
  }

  return (
    <Button
      variant='contained'
      sx={{ width: '100%' }}
      onClick={handleSearchClick}
    >
      <FormattedMessage id='filter.search_button.label' />
    </Button>
  )
}

export default SearchButton
