//Admin Manage Booking Controller:-

import BookingUserTicket from "../../Models/BookingModel.js"


//All Booking List Controller Logic:-
export const GetAllBookingList = async(req, res) => {
    try {
        //fetch all booking list:-
        const FetchAllBooking = await BookingUserTicket.find().populate("userId", "name email");
        if(FetchAllBooking.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Booking List Available"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All Booking List",
            FetchAllBooking
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server Error Fetch Failed for All Bookings"
        })
    }
}






//Accepted Booking:-
export const AcceptedBooking = async(req, res) => {
    try {
        const {bookingId} = req.params;

        //Accept and Update Booking:-
        const AcceptUpdate = await BookingUserTicket.findById(bookingId);


        //CheckBooking:-
        if(!AcceptUpdate){
            return res.status(404).json({
                success: false,
                message: "No Booking Found"
            })
        }


        if(AcceptUpdate.status !== "Pending"){
            return res.status(400).json({
                success: false,
                message: "Accepted Booking is already Processed !"
            })
        }

        //AccepUpdate Saved:-
        AcceptUpdate.status = "Accepted";
        await AcceptUpdate.save();

        return res.status(200).json({
            success: true,
            message: "Accepted Booking Confirmed !*!",
            AcceptUpdate
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to Accept Booking"
        })
    }
}








//Rejected Booking:-
export const RejectBooking = async(req, res) => {
    try {
        const {bookingId} = req.params;

        //Reject and Update:-
        const RejectUpdate = await BookingUserTicket.findById(bookingId);

        //checking bookibg:-
        if(!RejectUpdate){
            return res.status(404).json({
                success: false,
                message: "No Booking Found"
            })
        }

        if(RejectUpdate.status !== "Pending"){
            return res.status(400).json({
                success: false,
                message: "Rejected Booking is already Processed !?//!$"
            })
        }

        RejectUpdate.status = "Rejected";
        await RejectUpdate.save();


        return res.status(200).json({
            success: true,
            message: "Booking Rejected !??!",
            RejectUpdate
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to Reject Booking"
        })
    }
}