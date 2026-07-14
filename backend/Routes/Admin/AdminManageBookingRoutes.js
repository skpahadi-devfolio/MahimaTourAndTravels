//Admin Manage Booking Route:-

import express from "express";
import { AcceptedBooking, GetAllBookingList, RejectBooking } from "../../Controllers/Admin/AdminManageBooking.js";
import { AuthMiddleware } from "../../Middleware/AuthMiddleware.js";
import { AdminMiddleware } from "../../Middleware/AdminMiddleware.js";
const router = express.Router();


router.get("/admin-dashboard/manageBooking", AuthMiddleware, AdminMiddleware, GetAllBookingList);                                                    //Get Route for All booking
router.put("/admin-dashboard/acceptBooking/:bookingId", AuthMiddleware, AdminMiddleware, AcceptedBooking);                                                     //Put Route for All Accepted Booking
router.put("/admin-dashboard/rejectBooking/:bookingId", AuthMiddleware, AdminMiddleware, RejectBooking);                                                     //Put Route for All Rejected Booking


export default router;