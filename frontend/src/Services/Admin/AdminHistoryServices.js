//Admin History API:-


//Get Admin History API:-
export const GetAdminHistory = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('http://localhost:3000/api/admin-dashboard/AllBookingHistory', {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}