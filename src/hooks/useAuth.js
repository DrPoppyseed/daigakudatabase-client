// @flow
import { googleProvider, firebaseAuth } from '../util/firebase'
import { api } from '../util/api'
import axios from 'axios'

export const signUpWithEmail = async ({
  email,
  password,
}: {
  email: string,
  password: string,
}): Function => {
  try {
    const user = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    )
    const token = await user.getIdToken(true)
    const { data } = await api.put(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/users/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Is-Google-SignIn': false,
        },
      },
      user
    )
    return data
  } catch (err) {
    console.log(err)
  }
}

export const signInWithEmail = async ({
  email,
  password,
}: {
  email: string,
  password: string,
}): Promise<any> => {
  try {
    const { user } = await firebaseAuth.signInWithEmailAndPassword(
      email,
      password
    )
    const token = await user.getIdToken(true)
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/users/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Is-Google-SignIn': false,
        },
      }
    )
    return data.user
  } catch (err) {
    console.log(err)
  }
}

export const signInWithGoogle = async (): Promise<any> => {
  try {
    const { user } = await firebaseAuth.signInWithPopup(googleProvider)
    const token = await user.getIdToken(true)
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/users/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Is-Google-SignIn': true,
        },
      }
    )
    return data
  } catch (err) {
    console.log(err)
  }
}

export const forgotPassword = async () => {}

export const signOut = () => {
  firebaseAuth.signOut()
}

export const deleteAccount = () => {}

export const likeSchoolById = async (ipeds_unitid: string): any => {
  try {
    const user = await firebaseAuth.currentUser
    const token = await user.getIdToken(true)
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/users/like?ipeds_unitid=${ipeds_unitid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    return data
  } catch (err) {
    console.log(
      '🚀 ~ line 90, file: useAuth.js ~ likeSchoolById() try-catch ~ err',
      err
    )
  }
}

export const unlikeSchoolById = async (ipeds_unitid: string): any => {
  try {
    const user = await firebaseAuth.currentUser
    const token = await user.getIdToken()
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/users/unlike?ipeds_unitid=${ipeds_unitid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    return data
  } catch (err) {
    console.log(
      '🚀 ~ file: useSchools.js ~ unlikeSchoolById() try-catch ~ err',
      err
    )
  }
}
