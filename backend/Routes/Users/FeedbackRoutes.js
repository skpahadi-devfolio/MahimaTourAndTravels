//Feedback Routes:-

import express from "express";
import { CreateFeedbackUser, DeleteFeedbackUser, GetFeedbackUser, UpdateFeedbackUser } from "../../Controllers/Users/FeedbackUserController.js"
import { AuthMiddleware } from "../../Middleware/AuthMiddleware.js";
const router = express.Router();

router.get("/user-dashboard/yourFeedback", AuthMiddleware, GetFeedbackUser);            //Get Route For Feedback
router.post("/user-dashboard/createFeedback", AuthMiddleware, CreateFeedbackUser);     //Create Route for Feedback
router.put("/user-dashboard/updateFeedback/:feedbackId", AuthMiddleware, UpdateFeedbackUser);     //Update Route for Feedback
router.delete("/user-dashboard/deleteFeedback/:feedbackId", AuthMiddleware, DeleteFeedbackUser);      //Delete Route for Feeback


export default router;