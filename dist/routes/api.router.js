"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studios_router_1 = __importDefault(require("./studios.router"));
const users_router_1 = __importDefault(require("./users.router"));
const apiRouter = express_1.default.Router();
apiRouter.use("/studios", studios_router_1.default);
apiRouter.use("/users", users_router_1.default);
exports.default = apiRouter;
