import express, { Router } from "express";
import { getStudios } from "../controllers/studios.controller";

const studiosRouter: Router = express.Router();

studiosRouter.route("/").get(getStudios);

export default studiosRouter;
