"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCharacter = exports.patchCharacterById = exports.getCharacters = exports.getCharacterById = void 0;
const characters_model_1 = require("../models/characters.model");
const util_functions_1 = require("../utils/util-functions");
const getCharacterById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { character_id } = req.params;
        const character = yield (0, characters_model_1.fetchCharacterById)(character_id);
        res.status(200).send({ character });
    }
    catch (error) {
        next(error);
    }
});
exports.getCharacterById = getCharacterById;
const getCharacters = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if ((0, util_functions_1.isQuery)(req.query) && (0, util_functions_1.isQuery)(req.params)) {
            const props = req.query;
            props.cartoon_id = req.params.cartoon_id;
            const characters = yield (0, characters_model_1.fetchCharacters)(props);
            res.status(200).send({ characters });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getCharacters = getCharacters;
const patchCharacterById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { inc_votes } = req.body;
        const { character_id } = req.params;
        const character = yield (0, characters_model_1.updateCharacterById)(character_id, inc_votes);
        res.status(200).send({ character });
    }
    catch (err) {
        next(err);
    }
});
exports.patchCharacterById = patchCharacterById;
const postCharacter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, cartoon_id, img_url } = req.body;
        const character = yield (0, characters_model_1.insertCharacter)({ name, cartoon_id, img_url });
        res.status(201).send({ character });
    }
    catch (err) {
        next(err);
    }
});
exports.postCharacter = postCharacter;
