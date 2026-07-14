import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import userProfile from "../../assets/customerImage.jpg";
import { CreateProfile, GetProfile, UpdateProfile } from "../../Services/User/UserProfileservices.js";

const useUserProfile = () => {

    //All state:-
    const [isProfileCreated, setisProfileCreated] = useState(false);
    const [saveProfile, setsaveProfile] = useState({ username: "", bioDesc: "", email: "", phone: "" });
    const [EditProfile, setEditProfile] = useState(false);
    const [profileImage, setprofileImage] = useState(userProfile);
    const [selectFile, setselectFile] = useState(null);


    //CreatedProfile Handle:-
    const createdprofileHandle = async (e) => {
        setsaveProfile({ ...saveProfile, [e.target.name]: e.target.value });
    }



    //Fetch profile:-
    const fetchProfile = async () => {
        try {
            const result = await GetProfile();
            if (!result.success) {
                return;
            }
            const profile = result.result.fetchprofile;
            setsaveProfile({ username: profile.username, bioDesc: profile.bioDesc, phone: profile.phone, email: profile.email });

            if (profile.profileImage) {
                // const correctPath = profile.profileImage.replace(/\\g/, "/");
                setprofileImage(`https://mahimatourandtravels.onrender.com/${profile.profileImage}`);
            }
            setisProfileCreated(true);
        } catch (error) {
            toast.error(error.message);
        }
    }

    //fetch profile:-
    useEffect(() => {
        fetchProfile();
    }, [])



    //SaveProfile Handle:-
    const SaveprofileHandle = async () => {
        if (!saveProfile.username || !saveProfile.bioDesc || !saveProfile.email || !saveProfile.phone) {
            return toast.error("Please Fill Empty Field");
        }
        try {
            const result = await CreateProfile(saveProfile, selectFile);
            if(!result.success){
                return toast.error(result.message);
            }
            toast.success(result.message);
            setisProfileCreated(true);
            setEditProfile(false);
            await fetchProfile();
        } catch (error) {
            return toast.error(error.message);
        }
    }



    //Edit and Update Profile:-
    const EditProfileHandle = async () => {
        toast.info("Edit mode Enabled");
        setEditProfile(true);
    }





    //Update Profile Handle:-
    const UpdateProfileHandle = async () => {
        try {
            const result = await UpdateProfile(saveProfile, selectFile);
            if (!result.success) {
              return toast.error(result.message);
            }
            toast.success(result.message);
            await fetchProfile();
            setEditProfile(false);
        } catch (error) {
            return toast.error(error.message);
        }
    }



    //Upload Image Handle:-
    const UploadImageHandle = async (e) => {
        const file = e.target.files[0];

        console.log("Selected File:", file);

        if (file) {
            setselectFile(file);
            setprofileImage(URL.createObjectURL(file));
        }
    }



    return {
        saveProfile,
        profileImage,
        isProfileCreated,
        EditProfile,
        selectFile,

        createdprofileHandle,
        SaveprofileHandle,
        EditProfileHandle,
        UpdateProfileHandle,
        UploadImageHandle,
        fetchProfile
    }
};
export default useUserProfile;