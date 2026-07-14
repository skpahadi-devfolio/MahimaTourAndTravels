import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ImProfile } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { BiBookAdd } from 'react-icons/bi'
import { MdFeedback, MdManageAccounts, MdManageHistory } from 'react-icons/md'
import { FaRegListAlt } from 'react-icons/fa'

const DashboardSidebar = ({role}) => {
  const [openDashboard, setopenDashboard] = useState(false);

  const Usermenu = [
    {
      name: "Profile",
      path: "profile",
      icon: <CgProfile/>
    },
    {
      name: "Ticket Booking",
      path: "mybooking",
      icon: <BiBookAdd/>
    },
    {
      name: "My All Bookings",
      path: "allbooking",
      icon: <FaRegListAlt/>
    },
    {
      name: "Feedback",
      path: "feedback",
      icon: <MdFeedback/>
    }
  ]


  const AdminMenu = [
    {
      name: "Profile",
      path: "profile",
      icon: <CgProfile/>
    },
    {
      name: "Manage Booking",
      path: "adminManageBooking",
      icon: <MdManageAccounts/>
    },
    {
      name: "History",
      path: "history",
      icon: <MdManageHistory/>
    }
  ]

  const menu = role === "admin"?AdminMenu:Usermenu
  return (
    <>
      <button onClick={() => setopenDashboard(!openDashboard)} className='md:hidden fixed top-4 z-60'>
        {openDashboard ? <FaXmark className='text-3xl text-white fixed left-4' /> : <FaBars className='text-3xl text-white' />}
      </button>
      <div className={`flex flex-col bg-gradient-to-r from-white to-cyan-200 md:w-60 w-50 p-3 min-h-screen fixed md:static z-50 transition-all duration-200 ${openDashboard ? "left-0" : "left-[-200px] md:left-0"}`}>
        <div className="dashboard-icon flex gap-5">
          <h1 className='text-2xl font-semibold'>{role === "admin"?"Admin Panel":"DashBoard"}</h1>
        </div>

        <div className='w-full my-6'>
          <ul className='flex flex-col gap-4 rounded-3xl'>
            {menu.map((item,index)=>(
              <NavLink key={index} to={item.path} className={({ isActive }) => (`flex items-center gap-4 px-4 py-2 rounded-full ${isActive ? "bg-gradient-to-r from-slate-600 to-gray-700" : ""}`)}>
              {item.icon}
              {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default DashboardSidebar
