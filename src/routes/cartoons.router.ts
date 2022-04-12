import express, { Router } from "express";
import {
  getCartoonById,
  getCartoons,
  patchCartoonById,
  postCartoon,
} from "../controllers/cartoons.controller";
import { getCharacters } from "../controllers/characters.controller";

const cartoonsRouter: Router = express.Router();

cartoonsRouter.route("/").get(getCartoons).post(postCartoon);
cartoonsRouter
  .route("/:cartoon_id")
  .get(getCartoonById)
  .patch(patchCartoonById);

cartoonsRouter.route("/:cartoon_id/characters").get(getCharacters);

export default cartoonsRouter;
