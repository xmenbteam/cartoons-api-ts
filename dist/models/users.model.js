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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.insertUser = exports.fetchUserByUsername = exports.fetchUsers = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `SELECT * FROM users`;
    const response = yield connection_1.default.query(queryStr);
    return response.rows;
});
exports.fetchUsers = fetchUsers;
const fetchUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `SELECT * FROM users WHERE username = $1 LIMIT 1`;
    const values = [username];
    const response = yield connection_1.default.query(queryStr, values);
    if (!response.rows[0])
        return Promise.reject({ status: 404, msg: "User not found!" });
    return response.rows[0];
});
exports.fetchUserByUsername = fetchUserByUsername;
const insertUser = ({ name, username, avatar_url }) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `INSERT INTO users (name, username, avatar_url) VALUES ($1,$2,$3) RETURNING *`;
    let values = [name, username, avatar_url];
    const response = yield connection_1.default.query(queryStr, values);
    return response.rows[0];
});
exports.insertUser = insertUser;
const removeUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  DELETE FROM users
  WHERE username = $1
  `;
    const values = [username];
    const result = yield connection_1.default.query(queryStr, values);
    // rowCount === number of deleted rows
    const { rowCount } = result;
    if (!rowCount)
        return Promise.reject({ status: 404, msg: "User not found!" });
    return result;
});
exports.removeUser = removeUser;
