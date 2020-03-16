import routes from "./routes";
import multer from "multer";

export const localMiddleware=(req,res,next) => {
    res.locals.routes= routes;
    res.locals.siteName = "WeTube";
    res.locals.user = {
        isAuthenticated : true,
        id :48
    }
    next();
}

const multerVideo = multer({ dest :"videos/"});
// dest = 서버에 있는 videos 폴더

export const uploadVideo = multerVideo.single('videoFile');