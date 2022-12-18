import { DEFAULT_SAT_RANGE_HIGH, DEFAULT_SAT_RANGE_LOW } from './constants'
import { Params } from '@/types/Params'

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

  for (let i = 0; i < Object.entries(schoolType).length; i++) {
    const [key, value] = Object.entries(schoolType)[i]
    if (value) params += `${key}=${value}&`
  }

  if (
    satRange[0] !== DEFAULT_SAT_RANGE_LOW ||
    satRange[1] !== DEFAULT_SAT_RANGE_HIGH
  ) {
    params += `sat=${satRange[0]},${satRange[1]}&`
  }

  params += `tuition=${tuitionRange[0]},${tuitionRange[1]}&`

  if (state) {
    params += `state=${state}&`
  }
  if (major) {
    params += `major=${major}&`
  }
  if (urbanizationLevel) {
    params += `urban=${urbanizationLevel}&`
  }

  params = params.slice(0, -1)

  return params
}

export default queryParamsBuilder
