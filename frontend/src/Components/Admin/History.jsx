import React from 'react'
import { useOutletContext } from 'react-router-dom'

const History = () => {
    const {idbookinglist, AcceptedBookingHandle, RejectedBookingHandle} = useOutletContext();
  return (
    <div className='relative flex flex-col min-h-screen items-center w-full p-4 gap-10'>
      <h1 className='bg-gradient-to-r from-slate-600 to-pink-700 bg-clip-text text-transparent text-3xl font-semibold text-center'>Manage History</h1>

      <div className="Manage-history bg-gradient-to-r from-black to-gray-900 text-white flex flex-col gap-5 md:p-6 p-4 w-[92vw] md:max-w-4xl max-h-[90vh] overflow-y-scroll">
        {idbookinglist.filter(item => item.status !== "Pending").map((item, index) => (
            <div key={index} className='flex justify-between flex-col md:flex-row items-center md:gap-5 gap-3 bg-gradient-to-r from-slate-950 to-gray-900 border-2 border-gray-700 rounded-3xl p-4 text-xs md:text-lg w-full'>
                <div className="flex flex-col bg-gradient-to-r from-slate-800 to-gray-900 p-4 md:px-4 px-8 rounded-xl md:w-65 w-50">
                <p>Name:- {item.userId.name}</p>
                <p>Seats:- {item.seats} Seats</p>
                <p>Source:- {item.source}</p>
                <p>Desitination:- {item.destination}</p>
                <p>Amount:- Rs {item.amount}</p>
                </div>
                <div className="flex justify-end">
                  <button className={`p-3 px-4 rounded-xl md:w-30 w-40 ${item.status === "Accepted"?"bg-gradient-to-r from-green-500 to-green-800":"bg-gradient-to-r from-red-500 to-red-800"}`}>{item.status}</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default History
