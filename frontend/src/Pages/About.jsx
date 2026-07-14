import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import hemant from '../assets/Hemu.jpg'
import Nandan from '../assets/Nanda.jpg'
import pradeep from '../assets/Pradeep.jpg'
import lachu from '../assets/Hemu.jpg'
import jagdish from '../assets/Hemu.jpg'

const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col overflow-hidden pb-20">
            <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <Navbar/>

            <p className='md:text-4xl text-2xl my-7 font-bold text-center text-white'>About Mahima Tour and Travels</p>
           <div className="heading bg-gradient-to-r from-violet-950 to-pink-900 flex flex-col justify-center items-center gap-5 w-[95vw] md:max-w-3xl mx-auto p-4 md:p-8 my-10 rounded-3xl">
            <p className='bg-gradient-to-r animate-pulse from-cyan-800 to-purple-800 p-4 rounded-xl shadow-2xl bg-gray-950'>Mahima Tour and Travels pichle 10 Saalo se iss field mai apne kaam k liye bahoot jani jati hai yah unko customer ko enjoyment and securly pickup and dropout karti h or issi viswaas se logo k kehna yahi h chahe delhi jana ho yah gaon jana ho kahi bhi Mahima Tour and Travel is best.</p>
            <p className='bg-gradient-to-r animate-pulse from-cyan-800 to-purple-800 p-4 rounded-xl shadow-2xl bg-gray-950'>Hamare Mahima Tour and Travels mai Apko 4 seaters se leker 24 seaters tak ki gadiyan available milenge</p>
            <p className='bg-gradient-to-r animate-pulse from-cyan-800 to-purple-800 p-4 rounded-xl shadow-2xl bg-gray-950'>Hamare yaha Daily services k sath Shaadi ki Booking, Char Dham Yatra or bhi seva available hai</p>
            <p className='bg-gradient-to-r animate-pulse from-cyan-800 to-purple-800 p-4 rounded-xl shadow-2xl bg-gray-950'>Hamara yah Sabhi Driver trained and experienced hai. Jo customer ko aram se lane or chodne k kaam badi saralta se karte hai</p>
           </div>


    
           {/* Driver-heading        */}
            <p className='text-center md:text-4xl text-2xl text-white my-10 font-bold'>Works in Mahima Motors</p>
           <div className="driver-section grid grid-cols-1 md:grid-cols-3 gap-8 p-4 w-[90vw] md:max-w-5xl mx-auto">
            <div className="first flex flex-col justify-center items-center bg-gradient-to-r from-violet-950 to-pink-900 p-4 rounded-3xl gap-3">
              <div className="imge-circle md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden">
              <img className="md:h-[30vh] md:w-[14vw] h-full w-full object-cover" src={hemant} alt="Hemu kaira" />
              </div>
              <p>Hemant kaira (Hemu)</p>
              <p>Mobile:- 8395026861</p>
            </div>
            

            <div className="second flex flex-col justify-center items-center bg-gradient-to-r from-violet-950 to-pink-900 p-4 rounded-3xl gap-3">
            <div className="imge-circle md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden">
              <img className="md:h-[30vh] md:w-[14vw] h-full w-full object-top" src={Nandan} alt="Nandan manral" />
              </div>
              <p>Nandan Manral</p>
              <p>Mobile:- 7065275343</p>
            </div>

            <div className="third flex flex-col justify-center items-center bg-gradient-to-r from-violet-950 to-pink-900 p-4 rounded-3xl gap-3">
              <div className="imge-circle md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden">
              <img className="md:h-[30vh] md:w-[14vw] h-full w-full object-cover" src={pradeep} alt="pradeep kaira" />
              </div>
              <p>Pradeep Singh Kaira</p>
              <p>Mobile:- 9761626367</p>
            </div>

            <div className="fourth flex flex-col justify-center items-center bg-gradient-to-r from-violet-950 to-pink-900 p-4 rounded-3xl gap-3">
            <div className="imge-circle md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden">
              <img className="md:h-[30vh] md:w-[14vw] h-full w-full object-cover" src={lachu} alt="Lachu" />
              </div>
              <p>Laksman Singh (Lacchu)</p>
              <p>Mobile:- 7065275343</p>
            </div>

            <div className="fifth flex flex-col justify-center items-center bg-gradient-to-r from-violet-950 to-pink-900 p-4 rounded-3xl gap-3">
              <div className="imge-circle md:h-[30vh] md:w-[14vw] h-40 w-40 rounded-full overflow-hidden">
              <img className="md:h-[30vh] md:w-[14vw] h-full w-full object-cover" src={jagdish} alt="jagdish" />
              </div>
              <p>Jagdish Singh</p>
              <p>Mobile:- 7906087052</p>
            </div>

           </div>

            <Footer/>
            </div>
  )
}

export default About
