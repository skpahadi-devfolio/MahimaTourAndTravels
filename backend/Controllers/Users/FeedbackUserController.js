//Feedback user Controller Logic:-

import FeedBack from "../../Models/FeedbackModel.js";


//Create Feedback User Logic Controller:-
export const CreateFeedbackUser = async(req, res) => {
    try {
        const userId = req.user.id;
        const {feedback} = req.body;

        if(!feedback){
            return res.status(400).json({
                success: false,
                message: "Please Enter Your Feedback Message"
            })
        }
        //create user feedback:-
        const CreateUserFeedback = await FeedBack.create({userId, feedback});
        return res.status(201).json({
            success: true,
            message: "Your Feedback Sent SuccessFully",
            CreateUserFeedback
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Feedback Failed to sent Internal Error"
        })
    }
}





//Fetch or access Feeback User Controller Logic:-
export const GetFeedbackUser = async(req, res) => {
    try {
        const userId = req.user.id;

        //fetch user feedback:-
        const GetUserFeedback = await FeedBack.find({userId}).populate("userId", "name email");
        if(GetUserFeedback.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Feedback Available"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Post Your FeedBack",
            GetUserFeedback
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server"
        })
    }
}








//Update Feedback user Logic controller:-
export const UpdateFeedbackUser = async(req, res) => {
    try {
        const userId = req.user.id;
        const {feedbackId} = req.params;
        const {feedback} = req.body;

        if(!feedback){
            return res.status(400).json({
                success: false,
                message: "Please Fill Empty Field"
            })
        }
        //Feedback Updation:-
        const UpdateUserFeedback = await FeedBack.findOneAndUpdate({userId, _id:feedbackId}, {feedback}, {new: true});

        //Updatefeedback is exist or not:-
        if(!UpdateUserFeedback){
            return res.status(404).json({
                success: false,
                message: "No Feedback Found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Update SuccessFully Your FeedBack !!",
            UpdateUserFeedback
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !!*!*!*"
        })
    }
}







//Delete Feedback Controller Logic:-
export const DeleteFeedbackUser = async(req, res) => {
    try {
        const userId = req.user.id;
        const {feedbackId} = req.params;
        
        //Delete user Feedback:-
        const DeleteUserFeedback = await FeedBack.findOneAndDelete({userId, _id: feedbackId});
        if(!DeleteUserFeedback){
            return res.status(404).json({
                success: false,
                message: "No Feeback Message for Deletion"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Posted Feedback Delete !*!*",
            DeleteUserFeedback
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Internal Server Deletion Failed !&$%****!*!*!"
        })
    }
}