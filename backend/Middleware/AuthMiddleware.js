//Add Middleware for Verifying The Token is Valid or not:-
import jwt from "jsonwebtoken";

export const AuthMiddleware = async(req, res, next) => {
    const Authorization = req.headers.authorization;

    if(!Authorization){
        return res.status(400).json({
            success:  false,
            message: "No Token Provided"
        })
    }

    const Token = Authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(Token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Invalid or Expired Token"
        })
    }
}