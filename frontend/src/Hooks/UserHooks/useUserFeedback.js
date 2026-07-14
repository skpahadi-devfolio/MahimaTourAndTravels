import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CreateFeedback, GetFeedback,  UpdateFeedback, DeleteFeedback } from "../../Services/User/UserFeedbackServices.js";


const useUserFeedback = () => {

  const [getfeedback, setgetfeedback] = useState({feedback: ""});
  const [feedbacklist, setfeedbacklist] = useState([])
  const [idEditing, setidEditing] = useState(false);
  const [feedbackId, setfeedbackId] = useState(null)

  //feedback Handle:-
  const feedbackInputHandle = async(e) => {
    setgetfeedback({...getfeedback, [e.target.name]:e.target.value});
  }

  //feedback validation:-
  const feedbackValidationHandle = async() => {
    if(!getfeedback.feedback){
      return toast.error("Please Fill Empty Field");
    }
    try {
      const result = await CreateFeedback(getfeedback);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      setgetfeedback({feedback: ""});

      await fetchAllBack();
    } catch (error) {
      return toast.error(error.message);
    }
  }


  //fetch feedback:-
  const fetchAllBack = async() => {
    try {
      const result = await GetFeedback();
      if(!result.success){
        return toast.error(result.message);
      }
      setfeedbacklist(result.result.GetUserFeedback);
    } catch (error) {
      return toast.error(error.message);
    }
  }


  //Editing validation:-
  const EditFeedbackHandle = async(feedback) => {
    toast.info("Edit Mode Enabled");
    setidEditing(true);
    setfeedbackId(feedback._id);
    setgetfeedback({feedback: feedback.feedback});
  }


  //Update Feedback:-
  const UpdateFeedbackHandle = async() => {
    try {
      const result = await UpdateFeedback(feedbackId, getfeedback);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      await fetchAllBack();
      setidEditing(false);
      setfeedbackId(null);
      setgetfeedback({feedback: ""});
    } catch (error) {
      toast.error(error.message);
    }
  }



  // Delete Feedback:-
  const DeleteFeedbackHandle = async(feedbackId) => {
    try {
      const result = await DeleteFeedback(feedbackId);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      await fetchAllBack();
    } catch (error) {
      return toast.error(error.message);
    }
  }


  //fetch all feeback:-
  useEffect(() => {
    fetchAllBack();
  }, []);
  

return {
    getfeedback,
    feedbacklist,
    idEditing,
    feedbackId,

    feedbackValidationHandle,
    fetchAllBack,
    EditFeedbackHandle,
    UpdateFeedbackHandle,
    DeleteFeedbackHandle
}

};

export default useUserFeedback;