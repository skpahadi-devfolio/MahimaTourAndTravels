//User Feedback Route:-


//Create Feedback  API:-
export const CreateFeedback = async(data) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/user-dashboard/createFeedback', {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(data)})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}






//Get Feedback API:-
export const GetFeedback = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/user-dashboard/yourFeedback', {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}







//Update Feedback API:-
export const UpdateFeedback = async(feedbackId, data) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`https://mahimatourandtravels.onrender.com/api/user-dashboard/updateFeedback/${feedbackId}`, {method: "PUT", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(data)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//Delete Feedback API:-
export const DeleteFeedback = async(feedbackId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`https://mahimatourandtravels.onrender.com/api/user-dashboard/deleteFeedback/${feedbackId}`, {method: "DELETE", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}