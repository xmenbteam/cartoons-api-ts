import express, { Router } from "express";
import {
  getCharacterById,
  getCharacters,
  patchCharacterById,
  postCharacter,
} from "../controllers/characters.controller";

const charactersRouter: Router = express.Router();

charactersRouter.route("/").get(getCharacters).post(postCharacter);
charactersRouter
  .route("/:character_id")
  .get(getCharacterById)
  .patch(patchCharacterById);

export default charactersRouter;
