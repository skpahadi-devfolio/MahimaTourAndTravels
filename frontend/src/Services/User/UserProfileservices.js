//API Calling For UserProfile:-

//Create UserProfile API:-
export const CreateProfile = async(data, file) => {
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
        const response = await fetch('http://localhost:3000/api/user-dashboard/createProfile', {method: "POST", headers: {Authorization: `Bearer ${token}`},
        body: formData})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}







//Get UserProfile API:-
export const GetProfile = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch('http://localhost:3000/api/user-dashboard/Profile', {method: "GET", headers:{Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//Update Profile API:-
export const UpdateProfile = async(data, file) => {
    try {
        const token = localStorage.getItem("Token");
        const formdata = new FormData();
        formdata.append("username", data.username);
        formdata.append("bioDesc", data.bioDesc);
        formdata.append("phone", data.phone);
        formdata.append("email", data.email);

        if(file){
            formdata.append("profileImage", file);
        }
        const response = await fetch('http://localhost:3000/api/user-dashboard/updateProfile', {method: "PUT", headers:{Authorization: `Bearer ${token}`},
        body: formdata});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}