//Admin Profile Route:-
import express from "express";
import {GetAdminProfileRole, CreateAdminProfileRole, UpdateAdminProfileRole} from "../../Controllers/Admin/AdminProfileController.js"
import { AuthMiddleware } from "../../Middleware/AuthMiddleware.js";
import {AdminMiddleware} from "../../Middleware/AdminMiddleware.js"
import upload from "../../Middleware/UploadMiddleware.js";
const router = express.Router();

router.get("/admin-dashboard/Profile", AuthMiddleware, AdminMiddleware, GetAdminProfileRole);              //Get Profile Route
router.post("/admin-dashboard/createProfile", AuthMiddleware, AdminMiddleware, upload.single("profileImage"), CreateAdminProfileRole);   //Create Profile Route
router.put("/admin-dashboard/updateProfile", AuthMiddleware, AdminMiddleware, upload.single("profileImage"), UpdateAdminProfileRole);    //Update Profile Route

export default router;