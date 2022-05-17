import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseAuthSignOut,
  getAuth,
} from 'firebase/auth'
import { googleProvider } from '@/config/firebase'
import {
  useAuthenticateWithEmailMutation,
  useAuthenticateWithGoogleMutation,
} from '@/features/apiSlice'
import { SignUpForm } from '@/types/SignUpForm'

export const useSignUpWithEmail = () => {
  const [authenticateWithEmail, result] = useAuthenticateWithEmailMutation()

  const signUpWithEmail = async (formData: SignUpForm) => {
    const auth = getAuth()
    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
    await authenticateWithEmail()
  }

  return { signUpWithEmail, ...result }
}

export const useSignInWithEmail = () => {
  const [authenticateWithEmailMutation, result] =
    useAuthenticateWithEmailMutation()

  const signInWithEmail = async (formData: SignUpForm) => {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, formData.email, formData.password)
    await authenticateWithEmailMutation()
  }

  return { signInWithEmail, ...result }
}

export const useSignInWithGoogle = () => {
  const [authenticateWithGoogleMutation, result] =
    useAuthenticateWithGoogleMutation()

  const authenticateWithGoogle = async () => {
    const auth = getAuth()
    await signInWithPopup(auth, googleProvider)
    await authenticateWithGoogleMutation()
  }

  return { authenticateWithGoogle, ...result }
}

export const signOut = async () => {
  const auth = getAuth()
  await firebaseAuthSignOut(auth)
}
