//User Booking API:-



//Create Booking API:-
export const CreateBooking = async (data) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/user-dashboard/createBooking', {
            method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (!response.ok) {
            return { success: false, message: result.message };
        }
        return { success: true, message: result.message, result};
    } catch (error) {
        return { success: false, message: error.message };
    }
}









//Get Booking API:-
export const GetBooking = async () => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/user-dashboard/yourBooking', { method: "GET", headers: { Authorization: `Bearer ${token}` } })
        const result = await response.json();
        if (!response.ok) {
            return { success: false, message: result.message };
        }
        return { success: true, message: result.message, result};
    } catch (error) {
        return { success: false, message: error.message };
    }
}