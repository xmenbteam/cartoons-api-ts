import express, { Router } from "express";
import {
  deleteCartoonById,
  getCartoonById,
  getCartoons,
  patchCartoonById,
  postCartoon,
} from "../controllers/cartoons.controller";
import { getCharacters } from "../controllers/characters.controller";
import { getComments } from "../controllers/comments.controller";

const cartoonsRouter: Router = express.Router();

cartoonsRouter.route("/").get(getCartoons).post(postCartoon);
cartoonsRouter
  .route("/:cartoon_id")
  .get(getCartoonById)
  .patch(patchCartoonById)
  .delete(deleteCartoonById);

cartoonsRouter.route("/:cartoon_id/characters").get(getCharacters);
cartoonsRouter.route("/:cartoon_id/comments").get(getComments);

export default cartoonsRouter;
