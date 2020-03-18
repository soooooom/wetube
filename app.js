import express from 'express';
import morgan from "morgan"; 
import helmet from "helmet"; 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser"; 
import { localMiddleware } from './middleware';
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";



const app = express();

app.set("view engine", "pug");
//app.use("/edit-profile", express.static("uploads/images"));
app.use("/uploads", express.static("uploads/"));
// 사이트의 `/uploads` 링크를 통했을 때 주어진 디렉토리("uploads")에 있는 파일을 제공하는 미들웨어
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
app.use(morgan("dev"));
app.use(localMiddleware)

app.use('/',globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;



