import express from "express";
import eraController from "../controllers/eraController.js";
import checkAuth from "../middlewares/auth.middleware.js";

const eraRouter = express.Router();

eraRouter.route("/new").post(checkAuth, eraController.create);

export default eraRouter;
