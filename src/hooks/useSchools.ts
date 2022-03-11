import { useQuery } from 'react-query'
import { getMajorsById, getSchoolById } from '../api/schools'

export const useGetSchoolById = (schoolId: string) => {
  return useQuery(['schoolPage', schoolId], () => getSchoolById(schoolId), {
    enabled: !!schoolId,
  })
}

export const useGetMajorsById = (uuid: string) => {
  return useQuery(['majors', uuid], () => getMajorsById(uuid), {
    enabled: !!uuid,
  })
}
