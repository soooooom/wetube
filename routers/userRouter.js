import express from "express";
import routes from "../routes";
import { userDetail, changePw, getEditProfile, postEditProfile } from "../controllers/userController";
import { uploadImage } from "../middleware";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, getEditProfile)
userRouter.post(routes.editProfile, uploadImage, postEditProfile)

// Change Password
userRouter.get(routes.changePw, changePw)

// User Profile
userRouter.get(routes.userDetail(), userDetail)

export default userRouter;
/*
userRouter.get("/", (req, res) => res.send('user INDEX'))
userRouter.get("/edit", (req, res) => res.send('user EDIT'))
userRouter.get("/password", (req, res) => res.send('user pw'))
// anonymous func
*/

