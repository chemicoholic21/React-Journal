import express from "express";
import authRouter from "./auth.route.js";
import journalRouter from "./journal.route.js";
import eraRouter from "./era.route.js";

const indexRouter = express.Router();

indexRouter.use("/api/auth", authRouter);

indexRouter.use("/api/journals", journalRouter);

indexRouter.use("/api/era", eraRouter);

export default indexRouter;
