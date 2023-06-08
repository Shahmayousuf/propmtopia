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
