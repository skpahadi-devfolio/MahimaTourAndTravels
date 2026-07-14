import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import AuthRoutes from "./Routes/AuthRoutes.js";
import UserProfileRoutes from "./Routes/Users/UserProfileRoutes.js";
import BookingRoutes from "./Routes/Users/BookingRoutes.js";
import FeedbackRoutes from "./Routes/Users/FeedbackRoutes.js"
import AdminProfileRoutes from "./Routes/Admin/AdminProfileRoutes.js"
import AdminManageBookingRoutes from "./Routes/Admin/AdminManageBookingRoutes.js";
import AdminHistoryRoutes from "./Routes/Admin/AdminHistoryRoutes.js"
const app = express()
const port = process.env.port || 3000

app.use(express.json());

//enabled cors:-
app.use(cors());

//Datbase connection
connectDB();

//All Routes:-
app.use("/api", AuthRoutes);                                  //Auth Route:-
app.use("/api", UserProfileRoutes);                          //UserProfile Route:-
app.use("/api", BookingRoutes);                             //Booking User Route:-
app.use("/api", FeedbackRoutes);                          //Feedback Route:-
app.use("/api", AdminProfileRoutes);                     //Admin Profile Route:-
app.use("/api", AdminManageBookingRoutes);              //Admin Manage Booking Route:-
app.use("/api", AdminHistoryRoutes);                   //Admin History Route:-


//upload images:-
app.use("/Uploads", express.static("Uploads"));                    //Upload image

app.get('/', (req, res) => {
  res.send('Hello Backend Connected SuccessFUlly!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})