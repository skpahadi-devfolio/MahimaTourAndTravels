//Auth Model for Both Signup and Login Page:-

import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: String, enum:["admin", "user"], default: "user", required: true}
},
{timestamps: true})

const User = mongoose.model("User", UserSchema);
export default User;