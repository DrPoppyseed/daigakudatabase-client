// @flow
import { useQuery } from 'react-query'
import axios from 'axios'
import { firebaseAuth } from '../util/firebase'
import {
  DEFAULT_SAT_RANGE_LOW,
  DEFAULT_SAT_RANGE_HIGH,
  DEFAULT_TOEFL_RANGE,
  DEFAULT_TUITION_RANGE_HIGH,
  DEFAULT_TUITION_RANGE_LOW,
} from '../util/final'

const _INITIAL_SEARCH_STATE = {
  satRange: [DEFAULT_SAT_RANGE_LOW, DEFAULT_SAT_RANGE_HIGH],
  toeflRange: DEFAULT_TOEFL_RANGE,
  tuitionRange: [DEFAULT_TUITION_RANGE_LOW, DEFAULT_TUITION_RANGE_HIGH],
  stateLocation: '',
  selectMajor: '',
  filterState: {},
}

export const getSchools = async (
  pageNumber: number = 1,
  searchCriteria: Object
): any => {
  /** TODO: refactor if statements and make function readable and compact */
  const {
    satRange,
    toeflRange,
    tuitionRange,
    stateLocation,
    selectMajor,
    filterState,
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
  if (
    tuitionRange[0] !== DEFAULT_TUITION_RANGE_LOW ||
    tuitionRange[1] !== DEFAULT_TUITION_RANGE_HIGH
  ) {
    params += `tuition=${satRange[0]},${satRange[1]}&`
  }
  if (toeflRange !== DEFAULT_TOEFL_RANGE) {
    params += `toefl=${toeflRange}&`
  }
  if (
    tuitionRange[0] !== DEFAULT_TUITION_RANGE_LOW ||
    tuitionRange[1] !== DEFAULT_TUITION_RANGE_HIGH
  ) {
    params += `tuition=${tuitionRange[0]},${tuitionRange[1]}&`
  }
  if (stateLocation) {
    params += `state=${stateLocation}&`
  }
  if (selectMajor) {
    params += `major=${selectMajor}&`
  }

  if (params) {
    params = '?' + params.slice(0, params.length - 1)
  }

  try {
    const user = await firebaseAuth.currentUser
    if (!!user) {
      const token = await user.getIdToken(true)
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/schools/?page=${pageNumber}&${params}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      return data
    } else {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/schools/?page=${pageNumber}&${params}`,
        {
          headers: { Authorization: `Bearer` },
        }
      )
      return data
    }
  } catch (err) {
    console.log('🚀 ~ file: useSchools.js ~ getSchools() try-catch ~ err', err)
  }
}

export const useGetSchools = (
  pageNumber: number = 1,
  searchCriteria: any = _INITIAL_SEARCH_STATE
): any => {
  return useQuery(
    ['schools', pageNumber, searchCriteria],
    () => getSchools(pageNumber, searchCriteria),
    { keepPreviousData: true }
  )
}

const getSchoolById = async (id: any): any => {
  try {
    const user = await firebaseAuth.currentUser
    if (!!user) {
      console.log(user, 'from useSchools')
      const token = await user.getIdToken(true)
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/schools/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const merged = {
        ...data.schoolReport[0],
        isLiked: data.schoolReport.isLiked,
      }
      return merged
    } else {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/schools/${id}`,
        {
          headers: { Authorization: `Bearer null` },
        }
      )
      const merged = {
        ...data.schoolReport[0],
        isLiked: false,
      }
      return merged
    }
  } catch (err) {
    console.log('🚀 ~ file: useSchools.js ~ getSchools() try-catch ~ err', err)
  }
}

export const useGetSchoolById = (schoolId: any): any => {
  return useQuery(['schoolPage', schoolId], () => getSchoolById(schoolId), {
    enabled: !!schoolId,
  })
}

const getMajorsOfSchoolById = async (uuid: String): any => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/schools/${uuid}/majors`
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

export const useGetMajorsOfSchoolById = (uuid: String): any => {
  return useQuery(['majors', uuid], () => getMajorsOfSchoolById(uuid), {
    enabled: !!uuid,
  })
}
