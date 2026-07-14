import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Mahima-Tour-&-Travels");
        console.log("MongoDB Connected SuccessFully!");
    } catch (error) {
        console.log("Connection Failed");
    }
}

export default connectDB;