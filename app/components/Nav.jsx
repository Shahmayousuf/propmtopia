"use client"; // This is a client component 

  import Link from "next/link"
import Image from "next/image"
import {  useState, useEffect } from "react"
import{signIn,signOut,useSession,getProviders}from 'next-auth/react'

const Nav = () => {
  return (
   <nav className="flex-between w-full mb-15 pt-3">
<Link href="/" className="flex-gap-2 flex-center">
    <Image src='/assets/images/logo.svg'alt="logo"
     width={30}
     height={30} className="object-contain">

     </Image>
     <p className="logo_text">Promptopia</p>
</Link> 
   </nav>
  )
}

export default Nav
