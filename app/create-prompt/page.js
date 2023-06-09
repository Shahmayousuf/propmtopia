"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@app/components/Form";  

const CreatePrompt = () => {
  const [submitting,setSubmitting]=useState(false)
  const [post,setpost]=useState({
    prompt:'',
    tag:''
  })
  const createPrompt=async(e)=>{
   e.preventDefault()
   setSubmitting(true)
   try {
       const response=await fetch('/api/prompt/new',
       {
        methode:'POST',
        body:JSON.stringify({
          prompt:post.prompt,
          tag:post.tag,
          userId:session?.user.id

        })
       })
       if(response.ok)
       router.push('/')
   } catch (error) {
    console.log(error);
   }
   finally{
    setSubmitting(false)
   }
  }
  return (
    <div>
     <Form type='Create'
     post={post}
       setpost={setpost}
         submitting={submitting}
         handleSubmit={createPrompt}
         />
    </div>
  )
}

export default CreatePrompt
