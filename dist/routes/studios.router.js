"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartoons_controller_1 = require("../controllers/cartoons.controller");
const studios_controller_1 = require("../controllers/studios.controller");
const studiosRouter = express_1.default.Router();
studiosRouter.route("/").get(studios_controller_1.getStudios).post(studios_controller_1.postStudio);
studiosRouter
    .route("/:studio_id")
    .get(studios_controller_1.getStudioById)
    .patch(studios_controller_1.patchStudioById)
    .delete(studios_controller_1.deleteStudioById);
studiosRouter.route("/:studio_id/cartoons").get(cartoons_controller_1.getCartoons);
exports.default = studiosRouter;
