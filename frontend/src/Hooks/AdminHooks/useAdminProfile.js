import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Mahima from "../../assets/Mahima Image.jpg";
import { CreateAdminProfile, GetAdminProfile, UpdateAdminProfile } from "../../Services/Admin/AdminProfileServices.js"
const useAdminProfile = () => {

    //All state:-
    const [isProfileCreated, setisProfileCreated] = useState(false);
    const [saveProfile, setsaveProfile] = useState({ username: "", bioDesc: "", email: "", phone: "" });
    const [EditProfile, setEditProfile] = useState(false);
    const [profileImage, setprofileImage] = useState(Mahima);
    const [selectFile, setselectFile] = useState(null);


    //CreatedProfile Handle:-
    const createdprofileHandle = async (e) => {
        setsaveProfile({ ...saveProfile, [e.target.name]: e.target.value });
    }



    //Fetch profile:-
    const fetchProfile = async () => {
        try {
            const result = await GetAdminProfile();
            if (!result.success) {
                return;
            }
            const profile = result.result.fetchprofile;
            setsaveProfile({ username: profile.username, bioDesc: profile.bioDesc, phone: profile.phone, email: profile.email });

            if (profile.profileImage) {
                setprofileImage(`http://localhost:3000/${profile.profileImage}`);
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
        try {
            const result = await CreateAdminProfile(saveProfile, selectFile);
            if (!saveProfile.username || !saveProfile.bioDesc || !saveProfile.email || !saveProfile.phone) {
                return toast.error(result.message);
            }
            toast.success(result.message);
            setisProfileCreated(true);
            setEditProfile(false);
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
            const result = await UpdateAdminProfile(saveProfile, selectFile);
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
export default useAdminProfile;