import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MahimaCustomer from '../../assets/customerImage.jpg'
import { ToastContainer, toast } from 'react-toastify'

const AdminManageBooking = () => {
  const {idbookinglist, AcceptedBookingHandle, RejectedBookingHandle} = useOutletContext();

  return (
    <div className='relative flex flex-col items-center min-h-screen w-full gap-10'>
      <h1 className='text-3xl font-semibold bg-gradient-to-r from-slate-900 to-pink-800 bg-clip-text text-transparent'>Admin Manage Booking</h1>

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
      <div className="admin-control bg-gradient-to-r from-yellow-900 to-slate-800 min-h-screen pt-5 flex gap-5 flex-col pb-8 rounded-2xl max-h-[80vh] overflow-y-scroll w-[95vw] max-w-4xl">

        {idbookinglist.filter(item => item.status === "Pending").map((item, index)=>(
          <div key={index} className="customer-detail flex flex-col md:flex-row justify-between items-center md:gap-10 gap-5 md:mx-10 mx-4 my-2 bg-gradient-to-r from-slate-800 to-gray-900 p-3 rounded-md">

          <div className="flex flex-col w-full gap-3 p-2 bg-gradient-to-r from-gray-500 to-pink-900  rounded-2xl">
            <div className="user-profile flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-950 to-purple-900 w-60">
            <div className="img h-10 w-10 rounded-full overflow-hidden">
            <img className='h-full w-full object-cover' src={MahimaCustomer} alt="User" />
          </div>
            <p>{item.userId.name}</p>
          </div>

          <div className="total-seats rounded-2xl">
            <p>Seats:- {item.seats} Seats</p>
          </div>

          <div className="source-to-destination rounded-2xl">
            <p>Source:- {item.source}</p>
          </div>

           <div className="amount rounded-2xl">
            <p>Destination:- {item.destination}</p>
          </div>

          <div className="amount rounded-2xl">
            <p>Amount:- Rs {item.amount}</p>
          </div>

           <div className="amount rounded-2xl">
            <p>Status:- {item.status}</p>
          </div>

          </div>

          <div className="accept-delete-ticket flex gap-5">
            <button onClick={()=>{RejectedBookingHandle(item._id)}} className='bg-gradient-to-r from-red-500 to-red-800 px-6 py-2 rounded-md' type="submit">Reject</button>
            <button onClick={()=>{AcceptedBookingHandle(item._id)}} className='bg-gradient-to-r from-green-500 to-green-800 px-6 py-2 rounded-md' type="submit">Accept</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AdminManageBooking
