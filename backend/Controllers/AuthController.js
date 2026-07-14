//Controller Logic for Signup and Login:-

import User from "../Models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Controller Logic for Signup Page:-
export const SignupUser = async(req, res) => {
    try {
        const{name, email, password, confirmpassword} = req.body;
        if(!name || !email || !password || !confirmpassword){
            return res.status(400).json({
                success: false, 
                message: "Please Fill Empty Field"
            })
        }
        
        //password check:-
        if(password !== confirmpassword){
            return res.status(400).json({
                success: false,
                message: "Password not match"
            })
        }
        
        //existing user:-
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User Already Exits"
            })
        }

        //Hash password:-
        const hashpassword = await bcrypt.hash(password, 15);


        const newUser = await User.create({name, email, password: hashpassword, role: "user"});

        return res.status(201).json({
            success: true, 
            message: "You Signup SuccessFully!",
            newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server Error you Can't Signup"
        })
    }
}









//Controller Logic for Login Page:-
export const LoginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false, 
                message: "Please Fill Empty Field"
            })
        }

        const checkUser = await User.findOne({email});

        //Check User found or not
        if(!checkUser){
            return res.status(400).json({
                success: false,
                message: "No user Found"
            })
        }
        
        //Invalid Password:-
        const isMatch = await bcrypt.compare(password, checkUser.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }

        
        //Add Authenction by Json web Token:-
        const Token = jwt.sign(
            {id: checkUser._id, role: checkUser.role},
            process.env.JWT_SECRET,
            {expiresIn: "15h"}
        )

        return res.status(200).json({
            success: true,
            message: "You Login SuccessFully!",
            checkUser,
            Token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error You can't Login"
        })
    }
}