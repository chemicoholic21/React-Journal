import express from "express";
import authController from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/register").post(authController.register);

authRouter.route("/login").post(authController.login);

export default authRouter;
