"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartoons_controller_1 = require("../controllers/cartoons.controller");
const cartoonsRouter = express_1.default.Router();
cartoonsRouter.route("/").get(cartoons_controller_1.getCartoons);
cartoonsRouter.route("/:cartoon_id").get(cartoons_controller_1.getCartoonById);
exports.default = cartoonsRouter;
