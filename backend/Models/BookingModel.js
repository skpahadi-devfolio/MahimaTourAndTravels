//Booking Model:-

import mongoose from "mongoose";

export const BookingSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    source: {type: String, required: true},
    destination: {type: String, required: true},
    seats: {type: Number, required: true},
    amount: {type: Number, required: true},
    status: {type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending"}
},
{timestamps: true})

const BookingUserTicket = mongoose.model("BookingUserTicket", BookingSchema);
export default BookingUserTicket;