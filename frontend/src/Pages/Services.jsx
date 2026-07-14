import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import DelhitoChakhuitya from '../assets/delhi to chakhutiya.jpg'
import shaadiBooking from '../assets/shaadi booking.jpg'
import charDam from '../assets/chardam.jpg'

const Services = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col overflow-hidden pb-36">
            <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full overflow-hidden bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full overflow-hidden bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <Navbar/>

            <h1 className='md:text-4xl text-2xl text-center font-bold text-white my-6'>Our Services</h1>

            <div className='grid grid-cols-1 gap-14 w-[90vw] md:max-w-4xl mx-auto my-10'>

              {/* first-services */}
              <div className="outer-animation rounded-3xl shadow-2xl shadow-cyan-700 animate-glow">
                <div className="first-service text-xs md:text-base rounded-3xl flex flex-col md:flex-row justify-center gap-10 items-center bg-gradient-to-r from-violet-900 to-pink-800 p-5">
                <div className="flex justify-center items-center flex-col gap-5 w-full">
                  <div className="img md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden shrink-0">
                  <img className='md:h-[30vh] md:w-[14vw] h-full w-full object-cover' src={DelhitoChakhuitya} alt="Delhi To Chakhutiya" />
                </div>
                  <p className='md:text-2xl text-lg font-bold'>Delhi & Chakhutiya</p>
                </div>
               <div className="flex flex-col gap-5">
                 <p>Mahima Tour and Travels hamare yah daily Delhi se Uttarakhand, Uttarakhand se Delhi, services provide ki jati hai.</p>
                <p>Delhi Pickup & Dropout:- Vinod Nagar, Vaishali, Khanpur, Noida, Mehrauli, Dwarika, Khora, etc.</p>
                <p>UttaraKhand Pickup & Dropout:- Chakhutiya, Masi, Busbhira, Rampur, Bhikyasen, Janel, etc.</p>
               </div>
            </div>
              </div>


            {/* second-services */}
            <div className="outer-animation rounded-3xl shadow-2xl shadow-cyan-700 animate-glow">
              <div className="second-service rounded-3xl text-xs md:text-base flex flex-col md:flex-row justify-center gap-10 items-center bg-gradient-to-r from-violet-900 to-pink-800 p-5">
              <div className="flex flex-col gap-5">
                <p>Mahima Tour and Travels Hamare yaha Shaadi ki Booking bhi li jati h hamare pass Dulhe k liye gadiya bhi sajayi jati h especial. Hamare yaha Durr ki Shaadi ki Booking khass ki jati hai. Gadiyan hamare pass 4 seater se 26 seater tak available rehti hai.</p>
              <p>Shaadi ki Booking Location:- Delhi, Rajasthan, Dwarika, haryana etc.</p>
              </div>
               <div className='flex justify-center items-center flex-col gap-5 w-full'>
                <div className="img md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden shrink-0">
                <img className='md:h-[30vh] md:w-[14vw] h-full w-full object-cover' src={shaadiBooking} alt="Shaadi Booking" />
              </div>
                <p className='md:text-2xl text-lg font-bold'>Shaadi Booking</p>
               </div>
            </div>
            </div>


              {/* third-services */}
              <div className="outer-animation rounded-3xl shadow-2xl shadow-cyan-700 animate-glow">
              <div className="third-service rounded-3xl flex flex-col text-xs md:text-base md:flex-row justify-center gap-10 items-center bg-gradient-to-r from-violet-900 to-pink-800 p-5">
              <div className='flex justify-center items-center flex-col gap-5 w-full'>
                <div className="img md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden shrink-0">
                <img className='md:h-[30vh] md:w-[14vw] h-full w-full object-cover' src={charDam} alt="Char Dam" />
              </div>
                <p className='md:text-2xl text-lg font-bold'>CharDham Yatra</p>
              </div>
              <div className="flex flex-col gap-5">
                <p>Mahima Tour and Travels Hamare yaha CharDham ki Yatra k liye bhi gadiyan avaiable rehti hai.Hum apne customers ko ek happely and safe services provide karte h chardham mai le jane se leke Ghar wapas lane tak.</p>
              <p>CharDham Yatra Location:- Badrinath, Kedarnath, Gangotri, Yamunotri, Ayodhya, Vridhavan, etc.</p>
              </div>
            </div>
            </div>
            
            </div>
            <Footer/>
            </div>
  )
}

export default Services
