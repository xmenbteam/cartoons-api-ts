import express, { Router } from "express";
import { getApi } from "../controllers/api.controller";
import cartoonsRouter from "./cartoons.router";
import charactersRouter from "./characters.router";
import commentsRouter from "./comments.router";
import studiosRouter from "./studios.router";
import usersRouter from "./users.router";

const apiRouter: Router = express.Router();

apiRouter.route("/").get(getApi);
apiRouter.use("/studios", studiosRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/cartoons", cartoonsRouter);
apiRouter.use("/characters", charactersRouter);
apiRouter.use("/comments", commentsRouter);

export default apiRouter;
