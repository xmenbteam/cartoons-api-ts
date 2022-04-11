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
exports.getCartoons = exports.getCartoonById = void 0;
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
const getCartoons = ({ query }, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getCartoons = getCartoons;
