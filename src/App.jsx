import React, { useEffect } from 'react'
import { AppRouter } from './router/AppRouter'
import { useUser } from './hooks/user/useUser'

function App() {

  const { setUserFromCookie } = useUser();

  useEffect(() => {
    setUserFromCookie()
  }, [])

  return (
    <AppRouter />
  )
}

export { App }
