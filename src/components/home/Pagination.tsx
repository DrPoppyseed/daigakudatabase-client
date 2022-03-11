import * as React from 'react'
import { ChangeEvent, FC } from 'react'
import { Pagination as MuiPagination } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setPage } from '../../features/paramsSlice'

export interface PaginationProps {
  totalSchoolsFound: number
}

const Pagination: FC<PaginationProps> = ({ totalSchoolsFound }) => {
  const page = useAppSelector(state => state.params.page)
  const dispatch = useAppDispatch()

  const handlePageChange = async (e: ChangeEvent<unknown>, num: number) => {
    dispatch(setPage(num))
  }

  return (
    <MuiPagination
      count={Math.ceil(totalSchoolsFound / 10)}
      page={page}
      sx={{ marginTop: 2 }}
      onChange={handlePageChange}
    />
  )
}

export default Pagination
