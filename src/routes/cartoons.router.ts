import express, { Router } from "express";
import {
  getCartoonById,
  getCartoons,
  patchCartoonById,
  postCartoon,
} from "../controllers/cartoons.controller";

const cartoonsRouter: Router = express.Router();

cartoonsRouter.route("/").get(getCartoons).post(postCartoon);
cartoonsRouter
  .route("/:cartoon_id")
  .get(getCartoonById)
  .patch(patchCartoonById);

export default cartoonsRouter;
