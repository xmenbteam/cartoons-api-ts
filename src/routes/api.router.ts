import express, { Router } from "express";
import studiosRouter from "./studios.router";

const apiRouter: Router = express.Router();

apiRouter.use("/studios", studiosRouter);

export default apiRouter;
