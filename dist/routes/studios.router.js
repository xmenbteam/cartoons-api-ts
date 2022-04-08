"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studios_controller_1 = require("../controllers/studios.controller");
const studiosRouter = express_1.default.Router();
studiosRouter.route("/").get(studios_controller_1.getStudios);
exports.default = studiosRouter;
