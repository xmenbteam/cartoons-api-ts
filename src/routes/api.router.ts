import express, { Router } from "express";
import studiosRouter from "./studios.router";
import usersRouter from "./users.router";

const apiRouter: Router = express.Router();

apiRouter.use("/studios", studiosRouter);
apiRouter.use("/users", usersRouter);

export default apiRouter;
