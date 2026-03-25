import React from 'react'
import { SessionProvider } from 'next-auth/react'
const SessionProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}

export default SessionProvider