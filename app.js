import express from 'express';
import morgan from "morgan"; 
import helmet from "helmet"; 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser"; 
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
//import { userRouter } from "./router";
import routes from "./routes";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
app.use(morgan("dev"));
app.use(helmet());

app.use('/',globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
// app.use('/users', userRouter);
// user 접근하면 userRouter 사용하겠다
export default app;
// import 시 app object 주겠다


//m(data)v(data모습)c(data찾는함수)