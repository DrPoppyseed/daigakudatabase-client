import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './features/filterSlice'
import paramsReducer from './features/paramsSlice'
import api from './features/apiSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    params: paramsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
