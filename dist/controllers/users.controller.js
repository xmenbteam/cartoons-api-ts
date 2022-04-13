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
exports.deleteUser = exports.postNewUser = exports.getUserByUsername = exports.getAllUsers = void 0;
const users_model_1 = require("../models/users.model");
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_model_1.fetchUsers)();
        res.status(200).send({ users });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUsers = getAllUsers;
const getUserByUsername = ({ params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = params;
        const user = yield (0, users_model_1.fetchUserByUsername)(username);
        res.status(200).send({ user });
    }
    catch (error) {
        next(error);
    }
});
exports.getUserByUsername = getUserByUsername;
const postNewUser = ({ body }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username, avatar_url } = body;
        const user = yield (0, users_model_1.insertUser)({ name, username, avatar_url });
        res.status(201).send({ user });
    }
    catch (error) {
        next(error);
    }
});
exports.postNewUser = postNewUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        yield (0, users_model_1.removeUser)(username);
        res.status(204).send({ msg: "User deleted!" });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
