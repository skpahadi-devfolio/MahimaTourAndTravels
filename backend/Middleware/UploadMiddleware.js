//Upload Image Middleware:-
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

    //image kaha upload hogi destination
    destination: (req, file, cb) => {
        cb(null, "Uploads/");
    },


    //Agar 10 users image upload kare to overwrite na ho
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});
export default upload;