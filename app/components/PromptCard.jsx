'use client'
import Image from "next/image"
import { useState } from "react"

const PromptCard = ({post,handleTagClick,handleEdit,hnadleDelete}) => {
  const[copied,setCopied]=useState('')
  return (
    <div className="prompt_card"> 
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
      <Image src={post.creator.image}
        alt="user_image"
        width={40}
        height={40}
        className="rounded-full object-contain"/>
        <div className="flex flex-col">
          <h3>{post.creator.username}</h3>
          <p>{post.creator.email}</p>
        </div>
        </div>
        <div className="copy_btn"
        onClick={()=>{}}>
          <Image src={copied==post.prompt?
          '/assets/icons/tick.svg':
          '/assets/icons.copy.svg'}
          width={12}
          height={12}></Image>
        </div>
      </div>
      <p>{post.prompt}</p>
      <p>{post.tag}</p>
       
    </div>
  )
}

export default PromptCard
