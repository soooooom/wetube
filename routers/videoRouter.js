import express from "express";
import routes from "../routes";
import { postUpload,getUpload, videoDetail, getEditVideo, postEditVideo, delVideo } from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, uploadVideo, postUpload)

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail)

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo)
videoRouter.post(routes.editVideo(), postEditVideo)
//Delete Video
videoRouter.get(routes.delVideo(), delVideo)

//export default 는 파일로 export 하는 것
//export const는 변수만 export
export default videoRouter;