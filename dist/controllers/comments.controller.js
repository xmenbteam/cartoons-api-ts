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
exports.patchCommentById = exports.getComments = exports.getCommentById = void 0;
const comments_model_1 = require("../models/comments.model");
const util_functions_1 = require("../utils/util-functions");
const getCommentById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment_id } = req.params;
        const comment = yield (0, comments_model_1.fetchCommentById)(comment_id);
        res.status(200).send({ comment });
    }
    catch (error) {
        next(error);
    }
});
exports.getCommentById = getCommentById;
const getComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if ((0, util_functions_1.isQuery)(req.query) && (0, util_functions_1.isQuery)(req.params)) {
            const props = req.query;
            props.cartoon_id = req.params.cartoon_id;
            const comments = yield (0, comments_model_1.fetchComments)(props);
            res.status(200).send({ comments });
        }
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.getComments = getComments;
const patchCommentById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { inc_votes } = req.body;
        const { comment_id } = req.params;
        const comment = yield (0, comments_model_1.updateCommentById)(comment_id, inc_votes);
        res.status(201).send({ comment });
    }
    catch (error) {
        next(error);
    }
});
exports.patchCommentById = patchCommentById;
