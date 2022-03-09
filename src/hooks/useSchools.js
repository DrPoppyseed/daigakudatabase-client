import { useQuery } from 'react-query'
import axios from 'axios'
import { firebaseAuth } from '../config/firebase'
import {
  DEFAULT_SAT_RANGE_HIGH,
  DEFAULT_SAT_RANGE_LOW,
  DEFAULT_TUITION_RANGE_HIGH,
  DEFAULT_TUITION_RANGE_LOW,
} from '../util/constants'

const _INITIAL_SEARCH_STATE = {
  satRange: [DEFAULT_SAT_RANGE_LOW, DEFAULT_SAT_RANGE_HIGH],
  tuitionRange: [DEFAULT_TUITION_RANGE_LOW, DEFAULT_TUITION_RANGE_HIGH],
  stateLocation: '',
  selectMajor: '',
  sortSelection: 'default',
  filterState: {},
}

export const getSchools = async (pageNumber = 1, searchCriteria) => {
  /** TODO: refactor if statements and make function readable and compact */
  const {
    satRange,
    tuitionRange,
    stateLocation,
    selectMajor,
    filterState,
    sortSelection,
    urbanizationLevel,
  } = searchCriteria
  let params = ''

  for (const [key, value] of Object.entries(filterState)) {
    if (value) params += `${key}=${value}&`
  }

  if (
    satRange[0] !== DEFAULT_SAT_RANGE_LOW ||
    satRange[1] !== DEFAULT_SAT_RANGE_HIGH
  ) {
    params += `sat=${satRange[0]},${satRange[1]}&`
  }
  params += `tuition=${tuitionRange[0]},${tuitionRange[1]}&`
  if (stateLocation) {
    params += `state=${stateLocation}&`
  }
  if (selectMajor) {
    params += `major=${selectMajor}&`
  }
  if (urbanizationLevel) {
    params += `urban=${urbanizationLevel}&`
  }
  params += `sortby=${sortSelection}`

  console.log(process.env.REACT_APP_BACKEND_API_ENDPOINT)

  try {
    const user = await firebaseAuth.currentUser
    if (user) {
      const token = await user.getIdToken(true)
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/schools?page=${pageNumber}&${params}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      return data
    } else {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/schools?page=${pageNumber}&${params}`,
        {
          headers: { Authorization: 'Bearer' },
        }
      )
      return data
    }
  } catch (err) {
    console.log('🚀 ~ file: useSchools.js ~ getSchools() try-catch ~ err', err)
  }
}

export const useGetSchools = (
  pageNumber = 1,
  searchCriteria = _INITIAL_SEARCH_STATE
) => {
  return useQuery(
    ['schools', pageNumber, searchCriteria],
    () => getSchools(pageNumber, searchCriteria),
    { keepPreviousData: true }
  )
}

const getSchoolById = async id => {
  let merged
  try {
    const user = await firebaseAuth.currentUser
    if (user) {
      const token = await user.getIdToken(true)
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/schools/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      merged = {
        ...data.schoolReport[0],
        isLiked: data.schoolReport.isLiked,
      }
      return merged
    } else {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/schools/${id}`,
        {
          headers: { Authorization: 'Bearer null' },
        }
      )
      merged = {
        ...data.schoolReport[0],
        isLiked: false,
      }
      return merged
    }
  } catch (err) {
    console.log('🚀 ~ file: useSchools.js ~ getSchools() try-catch ~ err', err)
  }
}

export const useGetSchoolById = schoolId => {
  return useQuery(['schoolPage', schoolId], () => getSchoolById(schoolId), {
    enabled: !!schoolId,
  })
}

const getMajorsOfSchoolById = async uuid => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/schools/${uuid}/majors`
    )
    const majors = {
      ...data,
    }
    console.log(majors)
    return majors
  } catch (err) {
    console.log(
      '🚀 ~ file: useSchools.js ~ getMajorsOfSchoolById() try-catch ~ err',
      err
    )
  }
}

export const useGetMajorsOfSchoolById = uuid => {
  return useQuery(['majors', uuid], () => getMajorsOfSchoolById(uuid), {
    enabled: !!uuid,
  })
}
