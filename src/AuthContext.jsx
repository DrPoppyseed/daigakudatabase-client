import * as React from 'react'
import { firebaseAuth } from './util/firebase'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

const AuthProvider = ({
  children,
}) => {
  const navigate = useNavigate()
  const [globalLoading, setGlobalLoading] = React.useState(true)
  const [currentPath, setCurrentPath] = React.useState('')
  const location = useLocation()
  const [user, setUser] = React.useState({
    uid: '',
  })

  React.useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  React.useEffect(() => {
    firebaseAuth.onAuthStateChanged(result => {
      if (result) {
        if (result.uid !== user.uid) {
          setUser(result)
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
      }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer
export { AuthContext, AuthProvider, AuthConsumer }
