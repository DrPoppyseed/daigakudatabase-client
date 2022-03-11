import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { firebaseAuth } from '../config/firebase'
import { School } from '../model/School'

export type SchoolsResponse = {
  totalSchoolsCount: number
  schools: School[]
}

export const schoolsAPI = createApi({
  reducerPath: 'schoolsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_API_ENDPOINT}`,
    prepareHeaders: async headers => {
      const user = await firebaseAuth.currentUser
      const token = await user?.getIdToken(true)
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: builder => ({
    getSchools: builder.query<School, string>({
      query: queryParams => `/schools?${queryParams}`,
    }),
    getSchoolsWithFilter: builder.mutation<SchoolsResponse, string>({
      query: queryParams => ({
        url: `/schools?${queryParams}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetSchoolsQuery, useGetSchoolsWithFilterMutation } =
  schoolsAPI
