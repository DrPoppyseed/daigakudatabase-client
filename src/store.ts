import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './features/filterSlice'
import paramsReducer from './features/paramsSlice'
import { schoolsAPI } from './features/schoolsAPISlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    params: paramsReducer,
    [schoolsAPI.reducerPath]: schoolsAPI.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(schoolsAPI.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
