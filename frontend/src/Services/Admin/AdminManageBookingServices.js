//Admin Manage Booking API:-


//Get all Booking API:-
export const GetAllBookingList = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('http://localhost:3000/api/admin-dashboard/manageBooking', {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}






//Accepted Booking User API:-
export const AcceptedUserBooking = async(bookingId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`http://localhost:3000/api/admin-dashboard/acceptBooking/${bookingId}`, {method: "PUT", headers:{Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//Rejected Booking User API:-
export const RejectUserBooking = async(bookingId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`http://localhost:3000/api/admin-dashboard/rejectBooking/${bookingId}`, {method: "PUT", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}