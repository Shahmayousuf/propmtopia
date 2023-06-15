'use client'

import Profile from "@app/components/Profile"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";

const MyProfile = () => {
    const{data:session}=useSession();
    const router=useRouter()
    const[posts,setPosts]=useState([])
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        };
       if(session?.user.id)
        fetchPosts();
      }, []);
    const handleEdit=(post)=>{
    router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete= async (post)=>{
          
    }
  return (
    <div>
      <Profile name='My'
      desc='welcome to personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}/>
    </div>
  )
}

export default MyProfile
