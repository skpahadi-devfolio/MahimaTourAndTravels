//Booking Routes:-

import express from "express";
import { CreateBookingUser, GetBookingUser } from "../../Controllers/Users/BookingController.js"
import { AuthMiddleware } from "../../Middleware/AuthMiddleware.js"
const router = express.Router();

router.get("/user-dashboard/yourBooking", AuthMiddleware, GetBookingUser);              //Fetch user Booking Route
router.post("/user-dashboard/createBooking", AuthMiddleware, CreateBookingUser);       //Create user Booking Route

export default router;