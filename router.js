import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user INDEX'))
userRouter.get("/edit", (req, res) => res.send('user EDIT'))
userRouter.get("/password", (req, res) => res.send('user pw'))
// anonymous func

