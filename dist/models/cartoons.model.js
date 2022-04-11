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
exports.fetchCartoons = exports.fetchCartoonById = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const fetchCartoonById = (cartoon_id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryStr = `SELECT cartoons.*, 
  COUNT(characters.cartoon_id) :: INT AS character_count
  FROM cartoons 
  LEFT JOIN characters ON characters.cartoon_id = cartoons.cartoon_id
  WHERE cartoons.cartoon_id = $1 
  GROUP BY cartoons.cartoon_id
  LIMIT 1`;
    const values = [cartoon_id];
    const response = yield connection_1.default.query(queryStr, values);
    if (!response.rows[0])
        return Promise.reject({ status: 404, msg: "Cartoon not found!" });
    return response.rows[0];
});
exports.fetchCartoonById = fetchCartoonById;
const fetchCartoons = ({ sort_by = "created_at", order_by = "asc", limit = 10, page = 1, }) => __awaiter(void 0, void 0, void 0, function* () { });
exports.fetchCartoons = fetchCartoons;
