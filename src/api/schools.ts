import axios from 'axios'
import { firebaseAuth } from '../config/firebase'
import { api } from '../util/api'
import queryParamsBuilder from '../util/queryParamsBuilder'
import { Params } from '../types/Params'

export const getSchools = async (params: Params) => {
  const queryParams = queryParamsBuilder(params)
  const user = await firebaseAuth.currentUser
  if (user) {
    const token = await user.getIdToken(true)
    const { data } = await axios.get(`${api}/schools?${queryParams}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  }
  const { data } = await axios.get(`${api}/schools?${queryParams}`, {
    headers: { Authorization: 'Bearer' },
  })
  return data
}

export const getSchoolById = async (id: string) => {
  let merged
  const user = await firebaseAuth.currentUser
  if (user) {
    const token = await user.getIdToken(true)
    const { data } = await axios.get(`${api}/schools/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    merged = {
      ...data.schoolReport[0],
      isLiked: data.schoolReport.isLiked,
    }
    return merged
  }
  const { data } = await axios.get(`${api}/schools/${id}`, {
    headers: { Authorization: 'Bearer null' },
  })
  merged = {
    ...data.schoolReport[0],
    isLiked: false,
  }
  return merged
}

export const getMajorsById = async (id: string) => {
  const { data } = await axios.get(`${api}/schools/${id}/majors`)
  const majors = {
    ...data,
  }
  return majors
}
