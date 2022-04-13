"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const characters_controller_1 = require("../controllers/characters.controller");
const charactersRouter = express_1.default.Router();
charactersRouter.route("/").get(characters_controller_1.getCharacters).post(characters_controller_1.postCharacter);
charactersRouter
    .route("/:character_id")
    .get(characters_controller_1.getCharacterById)
    .patch(characters_controller_1.patchCharacterById)
    .delete(characters_controller_1.deleteCharacterById);
exports.default = charactersRouter;
