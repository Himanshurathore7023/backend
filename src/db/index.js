import { DB_NAME } from "../constant.js";
import mongoose from "mongoose"

const connectDB =async ()=>{
       try {
             const connectionInstance= await mongoose.connect
             (`${process.env.MONGO_DB_URL}/${DB_NAME}`)
             console.log(`/n MongoDB connected !! DB host 
              ${connectionInstance.connection.host}`);
              
       } catch (error) {
              console.log("MONGODB connection error:",error)
              process.exit(1);
              
       }
}
 

export default  connectDB