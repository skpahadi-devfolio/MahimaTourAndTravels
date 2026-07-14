//Admin Profile API:-


//Create Admin Profile API:-
export const CreateAdminProfile = async(data, file) => {
    try {
        const token = localStorage.getItem("Token");
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("bioDesc", data.bioDesc);
        formData.append("phone", data.phone);
        formData.append("email", data.email);

        if(file){
            formData.append("profileImage", file);
        }
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/admin-dashboard/createProfile', {method: "POST", headers: {Authorization: `Bearer ${token}`},
        body: formData});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}






//Get Admin Profile API:-
export const GetAdminProfile = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/admin-dashboard/Profile', {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}






//Update Admin Profile API:-
export const UpdateAdminProfile = async(data, file) => {
    try {
        const token = localStorage.getItem("Token");
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("bioDesc", data.bioDesc);
        formData.append("phone", data.phone);
        formData.append("email", data.email);

        if(file){
            formData.append("profileImage", file);
        }
        const response = await fetch('https://mahimatourandtravels.onrender.com/api/admin-dashboard/updateProfile', {method: "PUT", headers: {Authorization: `Bearer ${token}`},
        body: formData});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}