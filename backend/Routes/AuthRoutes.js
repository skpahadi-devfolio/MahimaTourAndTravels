//Routes for Auth for both Signup and Login Page:-

import express from "express";
import { LoginUser, SignupUser } from "../Controllers/AuthController.js";
const router = express.Router();


router.post("/auth/signup", SignupUser);    //Signup Route
router.post("/auth/login", LoginUser);     //Login Route

export default router;