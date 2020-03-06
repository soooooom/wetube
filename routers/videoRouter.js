import express from "express";
import routes from "../routes";
import { videos,upload, videoDetail, editVideo, delVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos)
videoRouter.get(routes.upload, upload)
videoRouter.get(routes.videoDetail, videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.delVideo, delVideo)

//export default 는 파일로 export 하는 것
//export const는 변수만 export
export default videoRouter;