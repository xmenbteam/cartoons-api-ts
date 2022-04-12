"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartoons_router_1 = __importDefault(require("./cartoons.router"));
const characters_router_1 = __importDefault(require("./characters.router"));
const studios_router_1 = __importDefault(require("./studios.router"));
const users_router_1 = __importDefault(require("./users.router"));
const apiRouter = express_1.default.Router();
apiRouter.use("/studios", studios_router_1.default);
apiRouter.use("/users", users_router_1.default);
apiRouter.use("/cartoons", cartoons_router_1.default);
apiRouter.use("/characters", characters_router_1.default);
exports.default = apiRouter;
