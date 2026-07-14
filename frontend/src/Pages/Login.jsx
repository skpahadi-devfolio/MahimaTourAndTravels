import { useForm } from 'react-hook-form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import { LoginUser } from '../Services/authservices'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const onSubmit = async(data) => {
    try {
      const result = await LoginUser(data);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      const role = result.result.checkUser.role;
      if(role === "admin"){
        setTimeout(() => {
        navigate("/admin-dashboard")
      }, 2000);
      }
      else{
        setTimeout(() => {
        navigate("/user-dashboard")
      }, 2000);
      }
    } catch (error) {
      return toast.error(error.message);
    }
  }


  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col overflow-hidden pb-40">
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

      <h1 className='bg-gradient-to-r from-pink-700 to-violet-700 bg-clip-text text-transparent md:text-2xl text-lg font-bold text-center my-10'>Welcome to Login Page</h1>

      {isSubmitting && <div className='bg-gradient-to-r from-black to-gray-900 text-white text-center font-bold p-2 w-[15vw] md:max-w-2xl flex justify-center items-center flex-col gap-3 mx-auto'>
            <p className='border-6 border-gray-400 border-t-transparent h-10 w-10 rounded-full animate-spin'></p>
            <p>Login in</p>
            </div>}

      <div className="login-page bg-gradient-to-r from-violet-500 to-cyan-300 w-[90vw] md:max-w-lg mx-auto p-5 md:text-base text-xs md:rounded-2xl rounded-md my-4">
        <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)} action="">

          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input className='bg-gradient-to-r from-white to-gray-500 p-4 rounded-md' type="email" name='email' placeholder='Enter Your Email' {...register("email", { required: true, maxLength: { value: 30, message: "Max 30th Character Allow" } })} />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input className='bg-gradient-to-r from-white to-gray-500 p-4 rounded-md' type="password" placeholder='Enter Your Password' {...register("password", { required: true, minLength: { value: 8, message: "Minimum 8 Length Required" }, maxLength: { value: 20, message: "Maximum 20 Length Available" } })} />
          </div>

          <div className='bg-gradient-to-r from-blue-800 to-cyan-700 w-full flex justify-center items-center my-4 rounded-md'>
            <button disabled={isSubmitting} className='p-3 text-lg' type="submit">Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login
