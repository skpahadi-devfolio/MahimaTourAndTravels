//User Profile Routes:-
import express from "express";
import { CreateProfileRole, GetProfileRole, UpdateProfileRole } from "../../Controllers/Users/UserProfileController.js"
import { AuthMiddleware } from "../../Middleware/AuthMiddleware.js";
import upload from "../../Middleware/UploadMiddleware.js";
const router = express.Router();

router.get("/user-dashboard/Profile", AuthMiddleware, GetProfileRole);              //Get Profile Route
router.post("/user-dashboard/createProfile", AuthMiddleware, upload.single("profileImage"), CreateProfileRole);   //Create Profile Route
router.put("/user-dashboard/updateProfile", AuthMiddleware, upload.single("profileImage"), UpdateProfileRole);    //Update Profile Route

export default router;