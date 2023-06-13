'use client'

import { useState } from "react"
import PromptCard from "./PromptCard"
  const PromptCardList=(
    {data,handleTagClick}
  )=>{
    return 
    <div className=""></div>
  }
const Feed = () => {
     const [searchTeaxt,setSearchText]=useState('')
     const handleSearchChange=()=>{

     }
  return (
  
      <section className="feed">
        <form className="realative w-full flex-center">
          <input 
          type="text"
          placeholder="search for a tag or a username"
          value={searchTeaxt}
          onChange={handleSearchChange}
          required
          className="search_input peer"/>
        </form>
        
        <PromptCardList
        data={[]}     
        handleTagClick={()=>{}}/>
      </section>
    
  )
}

export default Feed
