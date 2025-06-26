import express from "express";
import checkAuth from "../middlewares/auth.middleware.js";
import journalController from "../controllers/journalController.js";

const journalRouter = express.Router();

journalRouter.route("/new").post(checkAuth, journalController.create);

journalRouter.route("/all").get(checkAuth, journalController.read);

journalRouter.route("/stats").get(checkAuth, journalController.stats);

export default journalRouter;
