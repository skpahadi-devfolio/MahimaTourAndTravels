//Admin Check Model:-

import mongoose from "mongoose";

export const AdminSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    role: { type: String, default:"admin"},
    username: { type: String, required: true },
    bioDesc: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String, default: "" }
},
    { timestamps: true })
const AdminRole = mongoose.model("AdminRole", AdminSchema);
export default AdminRole;