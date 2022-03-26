import React, { useEffect, useState, createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import firebaseApp from '../config/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [globalLoading, setGlobalLoading] = useState(true)
  const [currentPath, setCurrentPath] = useState('')
  const [user, setUser] = useState({
    uid: '',
  })

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth, user => {
      if (user) {
        if (user.uid !== user.uid) {
          setUser(user)
          setGlobalLoading(false)

          if (currentPath.match(/(auth\/signin|auth\/signup)/)) {
            navigate('/')
          }
        } else {
          setGlobalLoading(false)
        }
      } else {
        setGlobalLoading(false)
      }
    })
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        globalLoading,
        setGlobalLoading,
        currentPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer
export { AuthContext, AuthProvider, AuthConsumer }
