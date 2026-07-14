//Feedback Model:-

import mongoose from "mongoose";

export const FeedbackSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    feedback: {type: String, required: true}
},
{timestamps: true})
const FeedBack = mongoose.model("FeedBack", FeedbackSchema)
export default FeedBack;