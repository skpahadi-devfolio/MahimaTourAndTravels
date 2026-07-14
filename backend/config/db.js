import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected SuccessFully!");
    } catch (error) {
        console.log("Connection Failed");
         console.log(error); 
    }
}

export default connectDB;