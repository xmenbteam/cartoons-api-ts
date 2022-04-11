import express, { Router } from "express";

const charactersRouter: Router = express.Router();

charactersRouter.route("/").get();

export default charactersRouter;
