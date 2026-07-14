import { useState, useEffect } from "react";
import { GetBooking } from "../../Services/User/UserBookingServices";
import { toast } from "react-toastify";

const UserMyAllBooking = () => {

  const [createTable, setcreateTable] = useState([])
  const [TotalTableElement, setTotalTableElement] = useState(null)
  
  //User Booking List:-
  const fetchAllBookingList = async(data) => {
    try {
      const result = await GetBooking(data);
      if(!result.success){
      return toast.error(result.message);
    }
    toast.success(result.message);
    setcreateTable(result.result.GetBookingTicket);
    setTotalTableElement(result.result.GetBookingTicket);
  } catch (error) {
    return toast.error(error.message);
  }
}


//fetch Booking List:-
useEffect(() => {
  fetchAllBookingList();
}, [])

  return (
    <div className="flex flex-col min-h-screen gap-12">
      
      <h1 className="text-center text-4xl bg-gradient-to-r from-slate-950 to-pink-900 bg-clip-text text-transparent font-bold">My All Booking</h1>
      
      <div className="booking-list grid grid-cols-1 bg-gradient-to-r from-slate-900 to-gray-900 w-full md:w-5xl p-2 mx-auto">
          {createTable.map((booking, index) => (
            <div key={booking._id} className="card flex flex-col my-6 mx-4 bg-gradient-to-r from-green-500 to-pink-700 p-3 rounded-xl">
              <p>Booking No:-{index + 1}</p>
              <p>Name:- {booking.userId.name}</p>
              <p>Seats:- {booking.seats}</p>
              <p>Source:- {booking.source}</p>
              <p>Destination:- {booking.destination}</p>
              <p>Amount:- Rs {booking.amount}</p>
              </div>
          ))}
        </div>
    </div>
  )
}

export default UserMyAllBooking
