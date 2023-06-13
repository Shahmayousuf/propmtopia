import { connectToDB } from "@utils/database"

 import prompt from "@models/prompt";
   
   
   export const POST= async(req)=>{
      const {userId,prompt,tag}=await req.json()
      try {
        await connectToDB();
         const newPrompt=new prompt({
            creator:userId,tag,
            prompt
            
         })
         await newPrompt.save();
         return new Response(JSON.stringify(newPrompt),{status:201})
      } catch (error) {
        return new Response("Failed to create a new prompt",{status:500})
      }
}