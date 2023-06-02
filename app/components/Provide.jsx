"use client"
import { SessionProvider } from 'next-auth/react'
const Provide = ({children,session}) => {
  return (
    <div>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </div>
  )
}

export default Provide
