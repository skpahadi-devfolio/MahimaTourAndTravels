import React from 'react'
import Navbar from '../Components/Navbar'
import mahimaImage from "../assets/Mahima Image.jpg"
import goljiyuImage from "../assets/goljiyu.png"
import Footer from '../Components/Footer'
import TypeAnimationText from '../Components/TypeAnimationText'

const Home = () => {
  return (
    <>
        <div className="relative min-h-screen w-full bg-slate-950 flex flex-col overflow-hidden">
            <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

           {/* Navbar section */}
           <Navbar/>      
          
          <div className="relative my-8 container mx-auto flex-1">

            <div className="top-text text-white md:text-4xl text-2xl text-center flex gap-8 flex-col">
                
                <div className='flex justify-center items-center h-[17vh]'>
                <img className='md:h-[8vh] md:w-[6vw] h-10 w-15 opacity-55 animate-pulse' src={goljiyuImage} alt="" />
                <span className='md:text-5xl text-xl'>JAI GOLJIYU MAHARAJ</span>
                <img className='md:h-[8vh] md:w-[6vw] h-10 w-15 opacity-55 animate-pulse' src={goljiyuImage} alt="" />
                </div>
                
                <p><TypeAnimationText texts={[
                    'Welcome to Mahima Tour & Travels',
                    'Book Your Seat and Enjoy your Journey',
                    'Gaadi Stand Mahima garage Chakhutiya',
                    'Vinod Nagar, Madangiri'
                ]}/></p>
            </div>


            <div className="md:absolute left-text grid grid-cols-1 w-[90vw] md:max-w-lg gap-5 my-10 text-white mx-auto md:text-lg text-xs">
                
                <div className='flex flex-col bg-gradient-to-r from-violet-950 to-slate-900 p-5 rounded-2xl shadow-lg shadow-cyan-700'>
                <p>24 X 7</p>
                <p>Daily Services</p>
                <p>Delhi & Chakhutiya, Char Dham yatra, Shaadi Booking</p>
                </div>
                
                <div className='flex flex-col bg-gradient-to-r from-violet-950 to-slate-900 p-4 rounded-2xl shadow-lg shadow-cyan-700 gap-3'>
                    <p className='underline text-black text-xl font-bold'>Contact</p>
                    <p>Hemant Kaira (Hemu):- 8395026861</p>
                    <p>Nandan Manral:- 7065275343</p>
                    <p>Pradeep Singh Kaira:- 9761626367</p>
                </div>

                <div className='flex flex-col bg-gradient-to-r from-violet-950 to-slate-900 p-5 rounded-2xl shadow-lg shadow-cyan-700'>
                    <p>Mahima Office:- MadanGiri (Delhi)</p>
                    <p>Mahima Office:- Ganai (chakhutiya)</p>
                </div>
                
            </div>


            <div className="absolute md:right-text md:right-10 right-4 md:my-8 opacity-70">
                <div className="Mahima-Image md:h-[59vh] h-76 w-76 md:w-[28vw] rounded-full overflow-hidden">
                    <img className='object-cover md:h-[60vh] md:w-[59vw] h-full w-full' src={mahimaImage} alt="Mahima" />
                </div>
            </div>

        
            <div className='bottom-text text-white text-center mt-96 py-40'>
            <p>Book your Seat Immediately</p>
            <p>Enjoy Your Journey</p>
            <p><TypeAnimationText texts={[
            'Mahima Tour and Travels',
            'Office Ganai & MadanGiri',
            'Daily Services'
            ]}/></p>
            </div>
          </div>

            <Footer/>
      </div>
    </>
  )
}

export default Home
