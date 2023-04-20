import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const AuthContext = ({children}) => {
  const [ user, setUser ] = useState(null)
  const [adminType, setAdminType] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) 
        setUser(user)
      else 
        setUser(null)
        
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <Context.Provider
        value={{
          user, setUser,
          adminType, setAdminType
        }}
    >{loading ? <div>Loading...</div> : children}</Context.Provider>  
  )
}

export const useAuthContext = () => useContext(Context)