import express, { Router } from "express";
import {
  deleteStudioById,
  getStudioById,
  getStudios,
  patchStudioById,
  postStudio,
} from "../controllers/studios.controller";

const studiosRouter: Router = express.Router();

studiosRouter.route("/").get(getStudios).post(postStudio);
studiosRouter
  .route("/:studio_id")
  .get(getStudioById)
  .patch(patchStudioById)
  .delete(deleteStudioById);

export default studiosRouter;
