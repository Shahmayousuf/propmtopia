import mongoose from "mongoose";

let isConnencted=false
export const connectToDB=async()=>{
    mongoose.set('strictQuery',true)
    
    if(isConnencted){
         console.log('mongoDb is already connected');
         return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnencted=true
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}