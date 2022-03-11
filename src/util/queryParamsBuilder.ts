import { DEFAULT_SAT_RANGE_HIGH, DEFAULT_SAT_RANGE_LOW } from './constants'
import { Params } from '../types/Params'

const queryParamsBuilder = ({
  filter: {
    satRange,
    tuitionRange,
    state,
    major,
    schoolType,
    urbanizationLevel,
  },
  sortBy,
  page,
}: Params) => {
  let params = `page=${page}&sortby=${sortBy}&`

  for (const [key, value] of Object.entries(schoolType)) {
    if (value) params += `${key}=${value}&`
  }

  if (
    satRange[0] !== DEFAULT_SAT_RANGE_LOW ||
    satRange[1] !== DEFAULT_SAT_RANGE_HIGH
  ) {
    params += `sat=${satRange[0]},${satRange[1]}&`
  }
  // if (
  //   tuitionRange[0] !== DEFAULT_TUITION_RANGE_LOW ||
  //   tuitionRange[1] !== DEFAULT_TUITION_RANGE_HIGH
  // ) {
  params += `tuition=${tuitionRange[0]},${tuitionRange[1]}&`
  // }
  if (state) {
    params += `state=${state}&`
  }
  if (major) {
    params += `major=${major}&`
  }
  if (urbanizationLevel) {
    params += `urban=${urbanizationLevel}&`
  }

  // remove & at end
  params = params.slice(0, -1)

  return params
}

export default queryParamsBuilder
