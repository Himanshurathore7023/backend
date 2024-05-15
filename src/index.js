//import mongoose from "mongoose";
//import {DB_NAME} from "./constant";
//import express from "express";

// require('dotenv).config({path: './env'})  As early as possible in your application, import and configure dotenv:

import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({path: './.env'})
connectDB()
















/*
const app=express()


;(async ()=>{
       try {
               await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
               app.on("error",(error)=>{
                     console.log("error",error)
                     throw error
              
               })

               app.listen(process.env.PORT,()=>{
                     console.log(`App is listing on 
                     port ${process.env.PORT}`);
               })
       } catch (error) {
              console.error("ERROR:",error)  //this is same apporach
              throw error
              
       }
} )()
*/