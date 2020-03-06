import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePw } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get(routes.users, users)
userRouter.get(routes.userDetail, userDetail)
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePw, changePw)

export default userRouter;
/*
userRouter.get("/", (req, res) => res.send('user INDEX'))
userRouter.get("/edit", (req, res) => res.send('user EDIT'))
userRouter.get("/password", (req, res) => res.send('user pw'))
// anonymous func
*/
