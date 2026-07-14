//Booking Controller Logic:-

import BookingUserTicket from "../../Models/BookingModel.js";

//Create Booking Controller Logic:-
export const CreateBookingUser = async(req, res) => {
    try {
        const userId = req.user.id;
        const {source, destination, seats, amount} = req.body;

        if(!source || !destination || !seats || !amount){
            return res.status(400).json({
                success: false,
                message: "Please Fill empty field"
            })
        }

        //createUserTicket:-
        const createUserTicket = await BookingUserTicket.create({userId, source, destination, seats, amount});
        return res.status(201).json({
            success: true,
            message: "Your Ticket Booked Confirmed",
            createUserTicket
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Crash Ticket Booking give not Response"
        })
    }
}






//Fetch or access Booked ticket Controller Logic:-
export const GetBookingUser = async(req, res) => {
    try {
        const userId = req.user.id;
        
        //fetch booking of user:-
        const GetBookingTicket = await BookingUserTicket.find({userId}).populate("userId", "name email");
        if(GetBookingTicket.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Ticket Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Ticket Gots SuccessFully!",
            GetBookingTicket
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Failed to Fetch Your Ticket"
        })
    }
}

