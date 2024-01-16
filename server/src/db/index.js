import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const DB_LINK = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Error in MongoDB-Connection", error);
    }
}

export default connectDB
