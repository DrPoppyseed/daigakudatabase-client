import axios from 'axios'
import { firebaseAuth, googleProvider } from '../config/firebase'
import { api } from '../util/api'

export const signUpWithEmail = async ({ email, password }) => {
  const user = await firebaseAuth.createUserWithEmailAndPassword(
    email,
    password
  )
  const token = await user.getIdToken(true)
  const { data } = await api.put(
    `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/users/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Is-Google-SignIn': false,
      },
    },
    user
  )
  return data
}

export const signInWithEmail = async ({ email, password }) => {
  const { user } = await firebaseAuth.signInWithEmailAndPassword(
    email,
    password
  )
  const token = await user.getIdToken(true)
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/users/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Is-Google-SignIn': false,
      },
    }
  )
  return data.user
}

export const signInWithGoogle = async () => {
  const { user } = await firebaseAuth.signInWithPopup(googleProvider)
  const token = await user.getIdToken(true)
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/users/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Is-Google-SignIn': true,
      },
    }
  )
  return data
}

// TODO: implement
// export const forgotPassword = async () => {}

export const signOut = async () => {
  await firebaseAuth.signOut()
}

// TODO: implement
// export const deleteAccount = () => {}

export const likeSchoolById = async ipeds_unitid => {
  const user = await firebaseAuth.currentUser
  const token = await user.getIdToken(true)
  const { data } = await axios.get(
    `${
      import.meta.env.VITE_BACKEND_API_ENDPOINT
    }/users/like?ipeds_unitid=${ipeds_unitid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return data
}

export const unlikeSchoolById = async ipeds_unitid => {
  const user = await firebaseAuth.currentUser
  const token = await user.getIdToken()
  const { data } = await axios.get(
    `${
      import.meta.env.VITE_BACKEND_API_ENDPOINT
    }/users/unlike?ipeds_unitid=${ipeds_unitid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return data
}
