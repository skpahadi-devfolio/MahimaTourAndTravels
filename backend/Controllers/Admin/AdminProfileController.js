//AdminProfile Admin Controller Logic:-

import AdminRole from "../../Models/AdminModel.js";


//create profile controller:-
export const CreateAdminProfileRole = async(req, res) => {
    try {
        const userId = req.user.id;
        const {username, bioDesc, phone, email} = req.body;
        const profileImage = req.file ? req.file.path.replace(/\\/g, "/") : "";
        if(!username || !bioDesc || !phone || !email || !profileImage){
            return res.status(400).json({
                success: false,
                message: "Please Fill the empty Column"
            })
        }

        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "Please Upload a Profile Image"
            })
        }

        const cleanImagePath = req.file.path.replace(/\\/g, "/");

        //check profile exist or not:-
        const existProfile = await AdminRole.findOne({userId});
        if(existProfile){
            return res.status(400).json({
                success: false,
                message: "Profile Exist Already"
            })
        }
        const newUserprofile = await AdminRole.create({userId, username, bioDesc, phone, email, profileImage: cleanImagePath});
        return res.status(200).json({
            success:  true,
            message: "Your profile Created SuccessFully!",
            newUserprofile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error Profile Created SuccessFully!"
        })
    }
}





//Fetch Profile Controller:-
export const GetAdminProfileRole = async(req, res) => {
    try {
        const userId = req.user.id;
        
        //find user profile by id:-
        const fetchprofile = await AdminRole.findOne({userId});
        if(!fetchprofile){
            return res.status(404).json({
                success: false,
                message: "No Profile Found"
            })
        }
        return res.status(200).json({
            success: true, 
            message: "Profile Got SuccessFully!",
            fetchprofile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed Fetch to Profile"
        })
    }
}






//Update Profile Controller:-
export const UpdateAdminProfileRole = async(req, res) => {
    try {
        const userId = req.user.id;
        const {username, bioDesc, phone, email} = req.body;

        if(!username || !bioDesc || !phone || !email){
            return res.status(400).json({
                success: false,
                message: "Please Fill Empty Field"
            })
        }

        const updateData = {username, bioDesc, phone, email};

         if(req.file){
            updateData.profileImage = req.file.path.replace(/\\/g, "/");
        }

        //Updating:-
        const UpdateProfile = await AdminRole.findOneAndUpdate({userId}, updateData, {returnDocument: "after"});
        if(!UpdateProfile){
            return res.status(404).json({
                success: false,
                message: "Profile Not Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Profile Has Been Updated SuccessFully!",
            UpdateProfile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed To fetch Updation"
        })
    }
}