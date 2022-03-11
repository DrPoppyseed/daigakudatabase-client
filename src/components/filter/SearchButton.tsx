import { Button } from '@mui/material'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setParams } from '../../features/paramsSlice'

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
      条件がけで検索
    </Button>
  )
}

export default SearchButton
