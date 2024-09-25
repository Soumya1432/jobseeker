import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const connnectDB= async()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connnectDB;