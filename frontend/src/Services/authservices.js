//API Calling Services for Auth:-

//Signup API Calling:-
export const SignupUser = async(form) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {method: "POST", headers:{"Content-Type": "application/json"},
        body: JSON.stringify(form)})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}





//Login API Calling:-
export const LoginUser = async(form) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {method: "POST", headers:{"Content-Type": "application/json"},
            body: JSON.stringify(form)})
            const result = await response.json();
            if(!response.ok){
                return {success: false, message: result.message};
            }
        localStorage.setItem("Token", result.Token);
        return {success: true, message: result.message, result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}