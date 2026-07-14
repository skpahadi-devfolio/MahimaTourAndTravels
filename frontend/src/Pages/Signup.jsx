import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { SignupUser } from '../Services/authservices.js'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const result = await SignupUser(data);
      if (!result.success) {
        return toast.error(result.message);
      }
      toast.success(result.message);
      setTimeout(() => {
        navigate("/login")
      }, 2000);
    } catch (error) {
      return toast.error(error.message);
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col overflow-hidden pb-28">
      <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <Navbar />

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

      <h1 className='text-center bg-gradient-to-r from-violet-300 to-cyan-400 bg-clip-text text-transparent font-bold md:text-2xl text-xl my-8'>Welcome to Signup Page</h1>

          {isSubmitting && <div className='bg-gradient-to-r from-black to-gray-900 text-white text-center font-bold p-2 w-[15vw] md:max-w-2xl flex justify-center items-center flex-col gap-3 mx-auto'>
            <p className='border-6 border-gray-400 border-t-transparent animate-spin h-10 w-10 rounded-full'></p>
            <p>Sign in</p>
            </div>}

      <div className="login-Page bg-gradient-to-r from-violet-400 to-gray-600 w-[90vw] md:max-w-lg mx-auto p-5 md:rounded-2xl rounded-md text-xs md:text-base my-4">

        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)} action="">
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Name</label>
            <input className='bg-gradient-to-r from-slate-400 to-white rounded-md p-4' type="text" name='name' placeholder='Enter Your Name' {...register("name", { required: true, message: "Please Field Empty Column", minLength: { value: 4, message: "Minimum 4 Length Required" }, maxLength: { value: 25, message: "Maximum 25 Length is Available" } })} />
            {errors.name && <div className="text-black">{errors.name.message}</div>}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input className='bg-gradient-to-r from-slate-400 to-white rounded-md p-4' type="email" name='email' placeholder='Enter Your Email' {...register("email", { required: true, message: "Please Field Empty Column", maxLength: { value: 30, message: "Max Character upto 30th" } })} />
            {errors.email && <div className="text-black">{errors.email.message}</div>}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input className='bg-gradient-to-r from-slate-400 to-white rounded-md p-4' type="password" name='password' placeholder='Enter Your Password' {...register("password", { required: true, message: "Please Field Empty Column", minLength: { value: 8, message: "Minimum 8th Character of Password" }, maxLength: { value: 20, message: "Password more than 20th Character not allowed" } })} />
            {errors.password && <div className="text-black">{errors.password.message}</div>}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input className='bg-gradient-to-r from-slate-400 to-white rounded-md p-4' type="password" name='confirmpassword' placeholder='Re Enter Password' {...register("confirmpassword", { required: true, message: "Re-enter password" })} />
            {errors.confirmpassword && <div className="text-black">{errors.confirmpassword.message}</div>}
          </div>

          <div className='my-4'>
            <button className='bg-gradient-to-r from-blue-800 to-cyan-600 text-lg p-4 w-full rounded-md' disabled={isSubmitting} type="submit">Signup</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
