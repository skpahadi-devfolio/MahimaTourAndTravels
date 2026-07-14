//Checking Role of admin then open admin dashboard:-

export const AdminMiddleware = async(req, res, next) => {
    if(req.user.role !== "admin"){
        return res.status(403).json({
            success: false,
            message: "Admin Access Denied !"
        })
    }
    next();
}