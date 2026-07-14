import { ToastContainer } from "react-toastify";
import useUserProfile from "../../Hooks/UserHooks/useUserProfile.js";
import { FaCamera } from "react-icons/fa";

const UserProfile = () => {

  const {saveProfile, profileImage, isProfileCreated, EditProfile, createdprofileHandle, SaveprofileHandle, EditProfileHandle, UpdateProfileHandle, UploadImageHandle} = useUserProfile();

  return (

    <div className="container flex justify-center items-center flex-col gap-6 text-white">
      <div className='md:text-3xl text-xl my-8'>
        {isProfileCreated ? <p>Edit Your Profile</p> : <p>Create Your Profile</p>}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />


      <div className="relative img-section md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full ">

        <div className="h-full w-full rounded-full overflow-hidden">
          <img className='h-full w-full object-cover ' src={profileImage} alt="sachin user" />
        </div>
        
          
          <label htmlFor="profileImage">
            <FaCamera className='absolute z-50 right-5 bottom-2 text-3xl text-pink-700'/>
          </label>
          <input type="file" name="profileImage" id="profileImage" accept='image/*' hidden onChange={UploadImageHandle} />
      </div>


      <div className="User-Profile-details flex flex-col gap-3 w-[90vw] md:max-w-xl">

        <div className='flex flex-col gap-2'>
          <label htmlFor="username">Username</label>
          <input disabled={isProfileCreated && !EditProfile} className='p-4 bg-gradient-to-r from-pink-900 to-slate-950' onChange={createdprofileHandle} value={saveProfile.username} type="text" name='username' placeholder='_________________________________________________' required />
        </div>


        <div className='flex flex-col gap-2'>
          <label htmlFor="bioDesc">Add Your Bio</label>
          <input disabled={isProfileCreated && !EditProfile} className='p-4 bg-gradient-to-r from-pink-900 to-slate-950' onChange={createdprofileHandle} value={saveProfile.bioDesc} type="text" name='bioDesc' placeholder='_________________________________________________' required />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input disabled={isProfileCreated && !EditProfile} className='p-4 bg-gradient-to-r from-pink-900 to-slate-950' onChange={createdprofileHandle} value={saveProfile.email} type="email" name='email' placeholder='_________________________________________________' required />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="phone">Mobile</label>
          <input disabled={isProfileCreated && !EditProfile} className='p-4 bg-gradient-to-r from-pink-900 to-slate-950' onChange={createdprofileHandle} value={saveProfile.phone} type="phone" name='phone' placeholder='_________________________________________________' required />
        </div>

        <div className="button">
          <button onClick={() => {if(!isProfileCreated){SaveprofileHandle();} else if(!EditProfile){EditProfileHandle();} else{UpdateProfileHandle();}}} className='p-4 rounded-full w-full bg-gradient-to-r from-blue-700 to-pink-600' type="submit">{!isProfileCreated?"Create Profile":EditProfile?"Update Profile":"Edit Profile"}</button>
        </div>
      </div>
    </div>


  )
}

export default UserProfile
