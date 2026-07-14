import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar'
import AdminManageBooking from '../Components/Admin/AdminManageBooking'
import History from '../Components/Admin/History'
import { CgProfile } from 'react-icons/cg'
import { MdManageAccounts, MdManageHistory } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AcceptedUserBooking, GetAllBookingList, RejectUserBooking } from '../Services/Admin/AdminManageBookingServices'
import Footer from '../Components/Footer'

const AdminDashboard = () => {
  const [idbookinglist, setidbookinglist] = useState([])


    const [admincards, setadmincards] = useState([
      {
        title: "Profile",
        path: "/admin-dashboard/profile",
        icon: <CgProfile/>
      },
      {
        title: "Manage Booking",
        path: "/admin-dashboard/adminManageBooking",
        icon: <MdManageAccounts/>
      },
      {
        title: "History",
        path: "/admin-dashboard/history",
        icon: <MdManageHistory/>
      }
    ])


    //Fetch all booking List:-
    const fetchAllBooking = async() => {
      try {
        const result = await GetAllBookingList();
        if(!result.success){
          return toast.error(result.message);
        }
        toast.success(result.message);
        setidbookinglist(result.result.FetchAllBooking);
      } catch (error) {
        return toast.error(error.message);
      }
    }

    //fetch all list:-
    useEffect(() => {
      fetchAllBooking();
    }, [])

    


    //Accepted Booking Handle:-
    const AcceptedBookingHandle = async(bookingId) => {
      try {
        const result = await AcceptedUserBooking(bookingId);
        if(!result.success){
          return toast.error(result.message);
        }
        await fetchAllBooking();
      } catch (error) {
        return toast.error(error.message);
      }
    }



    //Rejected Booking Handle:-
    const RejectedBookingHandle = async(bookingId) => {
      try {
        const result = await RejectUserBooking(bookingId);
        if(!result.success){
          return toast.error(result.message);
        }
        await fetchAllBooking();
      } catch (error) {
        return toast.error(error.message);
      }
    }
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex  overflow-hidden pb-28">
      <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <DashboardSidebar role={"admin"}/>
      <main className="flex-1 p-6 overflow-y-auto">

        <div className='flex justify-center items-center text-white my-10'>
          <h1 className='md:text-5xl text-2xl'>Welcome to Admin Dashboard</h1>
        </div>

        {/* show all activity of Admin dashboard in cards */}
              <div className="activity-card grid grid-cols-1 md:grid-cols-3 mx-auto gap-5 w-full md:max-w-4xl m-10">
              {admincards.map((item, index) => (
                <div key={index} className="first-card flex justify-center items-center flex-col bg-gradient-to-r from-gray-950 to-cyan-800 p-4 md:py-16 py-12 gap-2 rounded-3xl border border-black cursor-pointer transition-all hover:duration-700 hover:ease-in-out hover:-translate-y-4">
                    <div className='h-30 w-30 rounded-full flex justify-center items-center border-2 border-slate-950'>
                      <p className='text-6xl'>{item.icon}</p>
                    </div>
                  <NavLink to={item.path} target='_blank'>{item.title}</NavLink>
                </div>
              ))}
              </div>
        <Outlet context={{idbookinglist, setidbookinglist, AcceptedBookingHandle, RejectedBookingHandle}} />
      </main>

      <Footer/>
    </div>
  )
}

export default AdminDashboard
