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
exports.deleteCartoonById = exports.patchCartoonById = exports.postCartoon = exports.getCartoons = exports.getCartoonById = void 0;
const cartoons_model_1 = require("../models/cartoons.model");
const getCartoonById = ({ params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartoon_id } = params;
        const cartoon = yield (0, cartoons_model_1.fetchCartoonById)(cartoon_id);
        res.status(200).send({ cartoon });
    }
    catch (error) {
        next(error);
    }
});
exports.getCartoonById = getCartoonById;
const getCartoons = ({ query, params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let studio_id;
        const { sort_by, order_by, page, limit, studio_id: studioIdQuery, } = query;
        const { studio_id: studioIdParams } = params;
        if (studioIdQuery)
            studio_id = studioIdQuery;
        if (studioIdParams)
            studio_id = studioIdParams;
        const cartoons = yield (0, cartoons_model_1.fetchCartoons)({
            sort_by,
            order_by,
            studio_id,
            page,
            limit,
        });
        res.status(200).send({ cartoons });
    }
    catch (error) {
        next(error);
    }
});
exports.getCartoons = getCartoons;
const postCartoon = ({ body }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, img_url, studio_id } = body;
        const cartoon = yield (0, cartoons_model_1.insertCartoon)({
            name,
            description,
            img_url,
            studio_id,
        });
        res.status(201).send({ cartoon });
    }
    catch (err) {
        next(err);
    }
});
exports.postCartoon = postCartoon;
const patchCartoonById = ({ body, params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartoon_id } = params;
        const { inc_votes } = body;
        const cartoon = yield (0, cartoons_model_1.updateCartoon)({ cartoon_id, inc_votes });
        res.status(201).send({ cartoon });
    }
    catch (err) {
        next(err);
    }
});
exports.patchCartoonById = patchCartoonById;
const deleteCartoonById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartoon_id } = req.params;
        yield (0, cartoons_model_1.removeCartoonById)(cartoon_id);
        res.status(204).send({ msg: "Cartoon deleted!" });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCartoonById = deleteCartoonById;
