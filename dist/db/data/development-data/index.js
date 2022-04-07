"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersData = exports.studiosData = exports.commentsData = exports.cartoonsData = exports.charactersData = void 0;
const characters_1 = __importDefault(require("./characters"));
exports.charactersData = characters_1.default;
const cartoons_1 = __importDefault(require("./cartoons"));
exports.cartoonsData = cartoons_1.default;
const comments_1 = __importDefault(require("./comments"));
exports.commentsData = comments_1.default;
const studios_1 = __importDefault(require("./studios"));
exports.studiosData = studios_1.default;
const users_1 = __importDefault(require("./users"));
exports.usersData = users_1.default;
