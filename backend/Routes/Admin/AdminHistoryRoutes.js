//Admin history Routes:-

import express from "express";
import { AuthMiddleware } from "../../Middleware/AuthMiddleware.js";
import { AdminMiddleware } from "../../Middleware/AdminMiddleware.js";
import { FetchHistoryBooking } from "../../Controllers/Admin/AdminBookingHistory.js";
const router = express.Router();

router.get("/admin-dashboard/AllBookingHistory", AuthMiddleware, AdminMiddleware, FetchHistoryBooking);    //Get Route for Fetch All Booking History

export default router;