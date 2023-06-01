"use client"; // This is a client component 

  import Link from "next/link"
import Image from "next/image"
import {  useState, useEffect } from "react"
import{signIn,signOut,useSession,getProviders}from 'next-auth/react'

const Nav = () => {
      
    const isUserLoggedIn=true
    const [providers,setProviders]=useState(null)
    const[toggleDropdown,setTogleDropdown]=useState(false)
    useEffect(()=>{
        const setProviders=async()=>{
            const response=await getProviders()
            setProviders(response)
        }
        setProviders();
    },[])
    // console.log(providers);
  return (
   <nav className="flex-between w-full mb-16 pt-3">
<Link href="/" className="flex-gap-2 flex-center">
    <Image src='/assets/images/logo.svg'alt="logo"
     width={30}
     height={30} className="object-contain">

     </Image>
     <p className="logo_text">Promptopia</p>
</Link> 
{/* desktop navigation */}
       <div className="sm:flex hidden ">
        {isUserLoggedIn?(
            <div className="flex gap-3 md:gap-5">
                <Link href='/create-prompt'className="black_btn">
                    Create post
                </Link>
                <button type="button" onClick={signOut}className="outline_btn">SignOut</button>
                <Link href='/profile'>
                    <Image src= '/assets/images/logo.svg' alt="profileimg"
                     width={37}
                     height={37}
                     className="rounded-full"></Image>
                </Link>
            </div>
        ):(
            <>
            {providers&&
            Object.values(providers).map((provider)=>(
                <button 
                type="button"
                key={provider.name}
                onClick={()=>signIn(provider.id)}
                className="black_btn"></button>
            ))}
            
            </>
        )}
       </div>
       {/* mobile navigation */}
       <div
       className="sm:hidden flex relative">
       {isUserLoggedIn?(
              <div className="flex">
                <Image src= '/assets/images/logo.svg' alt="profileimg"
                     width={37}
                     height={37}
                     className="rounded-full"
                     onClick={()=>setTogleDropdown((prev)=>!prev)}
                     ></Image>
                     {toggleDropdown &&(
                        <div className="dropdown">
                            <Link href='/profile'
                            className="dropdown_link"
                            onClick={()=>setTogleDropdown(false)}
                            >       My Profile
                            </Link>
                            <Link href='/create-prompt'
                            className="dropdown_link"  onClick={()=>setTogleDropdown(false)}
                            >       Create prompt</Link>
                     
                        </div>
                     )}
                     </div>
                   
       
       ):(
        <>
        {providers&&
        Object.values(providers).map((provider)=>(
            <button 
            type="button"
            key={provider.name}
            onClick={()=>signUp(provider.id)}
            className="black_btn"></button>
        ))}
        
        </>
    )}
    
       </div>
   </nav>
  )
}

export default Nav
