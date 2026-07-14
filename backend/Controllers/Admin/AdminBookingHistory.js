//Manage Booking History:-

import BookingUserTicket from "../../Models/BookingModel.js"

//Fetch all History Controller Logic:-
export const FetchHistoryBooking = async(req, res) => {
    try {
        
        //fetch History:-
        const fetchHistory = await BookingUserTicket.find({status: {$in: ["Accepted", "Rejected"]}}).populate("userId", "name email");

        //check history exist or not:-
        if(fetchHistory.length === 0){
            return res.status(404).json({
                success: false,
                message: "No History Available"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All Booking History",
            fetchHistory
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Loading Failed to Fetch all history !??"
        })
    }
}