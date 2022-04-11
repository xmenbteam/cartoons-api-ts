import express, { Router } from "express";
import cartoonsRouter from "./cartoons.router";
import charactersRouter from "./characters.router";
import studiosRouter from "./studios.router";
import usersRouter from "./users.router";

const apiRouter: Router = express.Router();

apiRouter.use("/studios", studiosRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/cartoons", cartoonsRouter);
apiRouter.use("/characters", charactersRouter);

export default apiRouter;
