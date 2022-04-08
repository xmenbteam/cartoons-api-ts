"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartoonsData = exports.charactersData = exports.commentsData = exports.usersData = exports.studiosData = void 0;
const test_characters_1 = __importDefault(require("./test-characters"));
exports.charactersData = test_characters_1.default;
const test_cartoons_1 = __importDefault(require("./test-cartoons"));
exports.cartoonsData = test_cartoons_1.default;
const test_comments_1 = __importDefault(require("./test-comments"));
exports.commentsData = test_comments_1.default;
const test_studios_1 = __importDefault(require("./test-studios"));
exports.studiosData = test_studios_1.default;
const test_users_1 = __importDefault(require("./test-users"));
exports.usersData = test_users_1.default;
