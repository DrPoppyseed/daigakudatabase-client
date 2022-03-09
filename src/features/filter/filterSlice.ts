import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Defaults } from '../../util/constants'
import { SATRange } from '../../types/SATRange'
import { TuitionRange } from '../../types/TuitionRange'
import { SchoolType } from '../../types/SchoolType'

interface FilterState {
  state: string
  satRange: SATRange
  tuitionRange: TuitionRange
  schoolType: SchoolType
  urbanizationLevel: string
  major: string
  count: number
}

const initialFilterState: FilterState = {
  state: '',
  satRange: Defaults.SAT_RANGE,
  tuitionRange: Defaults.TUITION_RANGE,
  schoolType: Defaults.SCHOOL_TYPE,
  urbanizationLevel: '',
  major: '',
  count: 0,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setState(state, action: PayloadAction<string>) {
      state.state = action.payload
    },
    setSATRange(state, action: PayloadAction<SATRange>) {
      state.satRange = action.payload
    },
    setTuitionRange(state, action: PayloadAction<TuitionRange>) {
      state.tuitionRange = action.payload
    },
    setSchoolType(
      state,
      action: PayloadAction<{ name: string; checked: boolean }>
    ) {
      state.schoolType = {
        ...state.schoolType,
        [action.payload.name]: action.payload.checked,
      }
    },
    setUrbanizationLevel(state, action: PayloadAction<string>) {
      state.urbanizationLevel = action.payload
    },
    increment(state) {
      state.count++
    },
  },
})

export const {
  setState,
  setSATRange,
  setTuitionRange,
  setSchoolType,
  setUrbanizationLevel,
  increment,
} = filterSlice.actions
export default filterSlice.reducer
