import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Params } from '@/types/Params'
import { initialFilterState } from './filterSlice'
import { SortByTypes } from '@/types/SortByTypes'

export const initialParamsState: Params = {
  filter: initialFilterState,
  page: 1,
  sortBy: 'default',
}

const paramsSlice = createSlice({
  name: 'params',
  initialState: initialParamsState,
  reducers: {
    setParams: (state, action: PayloadAction<Params>) => {
      state.filter = action.payload.filter
      state.page = action.payload.page
      state.sortBy = action.payload.sortBy
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    changeSortBy: (state, action: PayloadAction<SortByTypes>) => {
      state.sortBy = action.payload
    },
  },
})

export const { setParams, setPage, changeSortBy } = paramsSlice.actions
export default paramsSlice.reducer
