import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import useUserFeedback from '../../Hooks/UserHooks/useUserFeedback.js';


const UserFeedback = () => {
  const {getfeedback, feedbacklist, idEditing, feedbackId, feedbackInputHandle, feedbackValidationHandle, EditFeedbackHandle, UpdateFeedbackHandle, DeleteFeedbackHandle} = useUserFeedback();
  return (
    <div>
      <h1 className='bg-gradient-to-r from-white to-slate-900 bg-clip-text text-transparent text-2xl'>Give Your FeedBack For Mahima Tour and Travel</h1>

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

      <div className="feedback flex flex-col text-white my-16 gap-5">
        <div className='flex flex-col w-full'>
            <label htmlFor="feedback">Your FeedBack</label>
            <input value={getfeedback.feedback} onChange={feedbackInputHandle} className='p-4 pb-44 bg-gradient-to-r from-white to-slate-500 mt-4 text-black rounded-md outline-none' type="text" name='feedback' placeholder='Feedback Mahima Tour & Travels' />
        </div>

        <div className="feedback-button">
          <button onClick={idEditing ? UpdateFeedbackHandle : feedbackValidationHandle} className='bg-gradient-to-r from-cyan-700 to-pink-600 p-4 w-full rounded-full' type="submit">{idEditing ? "Update Feedback" : "Send Feedback"}</button>
        </div>

        <h1>Your All Feedback For us</h1>

        {feedbacklist.map((item, index) => (
          <div key={item._id} className="feedback-card bg-gradient-to-r flex flex-col gap-5 from-pink-900 to-violet-900 p-5 rounded-2xl">
            <p>{index + 1}</p>
            <p>{item.feedback}</p>
            <div className="actions-button flex justify-end gap-5">
              <button className='bg-gradient-to-r from-gray-950 to-green-950 p-3 px-5 rounded-4xl' onClick={()=>{EditFeedbackHandle(item)}}>Edit</button>
              <button className='bg-gradient-to-r from-gray-950 to-green-950 p-3 px-5 rounded-4xl' onClick={()=>{DeleteFeedbackHandle(item._id)}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserFeedback
