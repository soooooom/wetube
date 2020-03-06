// home, login, join 등을 다루기 위한 전역 라우터
// 독점적으로 "url" 다룸
import express from "express";
import routes from "../routes";
import { logout, join, login } from "../controllers/userController";
import { search, home } from "../controllers/videoController";
const globalRouter = express.Router();

// auto import from controllers
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
export default globalRouter;