import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { CreateBooking } from '../../Services/User/UserBookingServices.js'

const UserBooking = () => {
    const [addTicket, setaddTicket] = useState(0)
    const [BookingDetails, setBookingDetails] = useState({source: "", destination: ""});

    //BookingDetails Handle:-
    const AddBooking = async(e) => {
      setBookingDetails({...BookingDetails, [e.target.name]:e.target.value});
    }


    //AddTicket Handle:-
    const AddTicketHandle = async() => {
      if(!BookingDetails.source || !BookingDetails.destination || addTicket === 0){
        return toast.error("Please Field Empty Column");
      }
      
      const BookingData = {...BookingDetails, seats: addTicket, amount: addTicket * 1200};

      try {
        const result = await CreateBooking(BookingData);
        if(!result.success){
          return toast.error(result.message);
        }
        toast.success(result.message);
        setBookingDetails({source: "", destination: ""});
        setaddTicket(0);
      } catch (error) {
        toast.error(error.message);
      }
    }

  return (
    <div className='container my-16'>
      <h1 className='bg-gradient-to-r from-blue-900 to-gray-800 bg-clip-text text-transparent md:text-4xl text-2xl text-center font-bold'>Booking Your Seat</h1>

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

      <div className="TourCard md:p-7 p-3 flex flex-col gap-5 bg-gradient-to-r from-gray-800 to-cyan-600 w-full md:max-w-3xl mx-auto my-6 md:rounded-2xl rounded-xl text-xs md:text-lg">
        
        <div className="source flex flex-col">
            <label htmlFor="source">Add Source</label>
            <input className='py-4 px-1 border border-slate-950 rounded-md' type="text" name='source' value={BookingDetails.source} onChange={AddBooking} placeholder='Enter Your Source' required/>
        </div>

        <div className="destination flex flex-col">
            <label htmlFor="destination">Add Destination</label>
            <input className='py-4 px-1 border border-slate-950 rounded-md' type="text" name='destination' value={BookingDetails.destination} onChange={AddBooking} placeholder='Enter Your Destination' required/>
        </div>
        


        <div className="amount flex flex-col gap-5">
            <p>Fare Amount:- Rs 1200/- Initial</p>
        <div className="addticket bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-full flex justify-center items-center gap-5">
            <button className='bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-1 rounded-3xl' onClick={()=>{if(addTicket>0){ setaddTicket(addTicket-1)}}}>-</button>
            <span onClick={AddTicketHandle}>Add Ticket {addTicket}</span>
            <button className='bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-1 rounded-3xl' onClick={()=>{setaddTicket(addTicket+1)}}>+</button>
        </div>
            <p>ToTal Amount:- {addTicket * 1200}</p>
        </div>
      </div>
    </div>
  )
}

export default UserBooking
