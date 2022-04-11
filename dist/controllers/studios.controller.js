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
exports.deleteStudioById = exports.postStudio = exports.patchStudioById = exports.getStudioById = exports.getStudios = void 0;
const studios_model_1 = require("../models/studios.model");
const getStudios = ({ query }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { sort_by, order_by, limit, page } = query;
    try {
        const studios = yield (0, studios_model_1.fetchStudios)({ sort_by, order_by, limit, page });
        res.status(200).send({ studios });
    }
    catch (err) {
        next(err);
    }
});
exports.getStudios = getStudios;
const getStudioById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studio_id } = req.params;
        const studio = yield (0, studios_model_1.fetchStudioById)(studio_id);
        res.status(200).send({ studio });
    }
    catch (err) {
        next(err);
    }
});
exports.getStudioById = getStudioById;
const patchStudioById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studio_id } = req.params;
        const { inc_votes } = req.body;
        const studio = yield (0, studios_model_1.updateStudioById)(studio_id, inc_votes);
        res.status(200).send({ studio });
    }
    catch (err) {
        next(err);
    }
});
exports.patchStudioById = patchStudioById;
const postStudio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { name, img_url, description } = body;
        const studio = yield (0, studios_model_1.insertStudio)({ name, img_url, description });
        res.status(201).send({ studio });
    }
    catch (err) {
        next(err);
    }
});
exports.postStudio = postStudio;
const deleteStudioById = ({ params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studio_id } = params;
        yield (0, studios_model_1.removeStudioById)(studio_id);
        res.status(204).send({ msg: "Studio deleted!" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteStudioById = deleteStudioById;
