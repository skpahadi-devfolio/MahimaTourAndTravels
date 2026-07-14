import { NavLink, Outlet } from 'react-router-dom'
import DashboardSideBar from '../Components/Dashboard/DashboardSidebar'
import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { BiBookAdd } from 'react-icons/bi'
import { MdFeedback } from 'react-icons/md'
import { FaRegListAlt } from 'react-icons/fa'
import Footer from '../Components/Footer'

const UserDashboard = () => {
  const [cards, setcards] = useState([
    {
      title: "Profile",
      path: "/user-dashboard/profile",
      icon: <CgProfile/>
    },
    {
      title: "Ticket Booking",
      path: "/user-dashboard/mybooking",
      icon: <BiBookAdd/>
    },
    {
      title: "My All Bookings",
      path: "/user-dashboard/allbookings",
      icon: <FaRegListAlt/>
    },
    {
      title: "FeedBack",
      path: "/user-dashboard/feedback",
      icon: <MdFeedback/>
    }
  ])
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex overflow-hidden pb-32">
      <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      {/* <h1>Welcome to Your Dashboard</h1> */}


        {/* Dashboard left sidebar */}
        
            <DashboardSideBar role={"user"}/>
            <main className="flex-1 p-6 overflow-y-auto">

              <div className='flex justify-center items-center my-10'>
                <h1 className='md:text-5xl text-xl text-white font-semibold'>Welcome to User Dashboard</h1>
              </div>

              {/* show all activity of User dashboard in cards */}
              <div className="activity-card grid grid-cols-1 md:grid-cols-3 mx-auto gap-5 w-full md:max-w-4xl m-10">
              {cards.map((item, index) => (
                <div key={index} className="first-card flex justify-center items-center flex-col bg-gradient-to-r from-gray-950 to-cyan-800 p-4 md:py-16 py-12 gap-2 rounded-3xl border border-black cursor-pointer transition-all hover:duration-700 hover:ease-in-out hover:-translate-y-4">
                    <div className='h-30 w-30 rounded-full flex justify-center items-center border-2 border-slate-950'>
                      <p className='text-6xl'>{item.icon}</p>
                    </div>
                  <NavLink to={item.path} target='_blank'>{item.title}</NavLink>
                </div>
              ))}
              </div>
              <Outlet/>
            </main>
      
      <Footer/>
     </div>
  )
}

export default UserDashboard
