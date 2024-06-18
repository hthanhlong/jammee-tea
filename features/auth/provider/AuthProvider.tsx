import React, { useState } from "react"

interface AuthContextProps {
  isAuth: boolean
  setIsAuth: (value: boolean) => void
  isDisabledVerification: boolean
  setIsDisabledVerification: (value: boolean) => void
}

export const AuthContext = React.createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {},
  isDisabledVerification: false,
  setIsDisabledVerification: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [isDisabledVerification, setIsDisabledVerification] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isDisabledVerification,
        setIsDisabledVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
