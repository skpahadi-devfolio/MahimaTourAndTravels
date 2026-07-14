//User Check Model:-

import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    role: {type: String, default: "user"},
    username: {type: String, required: true},
    bioDesc: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    profileImage: {type: String, default: ""}
},
{timestamps: true})
const UserRole = mongoose.model("UserRole", UserSchema);
export default UserRole;