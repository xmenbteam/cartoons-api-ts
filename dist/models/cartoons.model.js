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
exports.updateCartoon = exports.insertCartoon = exports.fetchCartoons = exports.fetchCartoonById = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const query_utils_1 = require("../utils/query-utils");
const util_functions_1 = require("../utils/util-functions");
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
const fetchCartoons = ({ sort_by = "created_at", order_by = "asc", studio_id, limit = 10, page = 1, }) => __awaiter(void 0, void 0, void 0, function* () {
    const offset = (0, util_functions_1.pageOffsetCalc)(page, limit);
    const values = [limit, offset];
    if (!(0, util_functions_1.checkIfValid)(order_by, query_utils_1.orderByValues))
        return Promise.reject({
            status: 400,
            msg: `Invalid order_by query: ${order_by}`,
        });
    if (!(0, util_functions_1.checkIfValid)(sort_by, query_utils_1.sortByValues))
        return Promise.reject({
            status: 400,
            msg: `Invalid sort_by query: ${sort_by}`,
        });
    let queryStr = `
  SELECT cartoons.*, 
  COUNT(characters.character_id) :: INT AS character_count,
  COUNT(*) OVER() :: INT AS full_count
  FROM cartoons
  LEFT JOIN characters ON characters.cartoon_id = cartoons.cartoon_id
  `;
    if (studio_id) {
        queryStr += `WHERE cartoons.studio_id = $3`;
        values.push(studio_id);
    }
    queryStr += `GROUP BY cartoons.cartoon_id
  ORDER BY ${sort_by} ${order_by}
  LIMIT $1 OFFSET $2
  `;
    const response = yield connection_1.default.query(queryStr, values);
    const cartoons = response.rows;
    if (studio_id && !cartoons[0])
        return Promise.reject({ status: 404, msg: "Studio does not exist!" });
    if (!cartoons[0])
        return Promise.reject({ status: 404, msg: "Not found!" });
    const returnedObject = {
        cartoons,
        currentPage: Number(page),
        cartoonsPerPage: limit,
        pageTotal: Math.ceil(cartoons[0].full_count / limit),
    };
    return returnedObject;
});
exports.fetchCartoons = fetchCartoons;
const insertCartoon = ({ name, description, img_url, studio_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  INSERT INTO cartoons (name,
  description,
  img_url,
  studio_id) 
  VALUES ($1,$2,$3,$4) RETURNING *;
  `;
    const values = [name, description, img_url, studio_id];
    const response = yield connection_1.default.query(queryStr, values);
    return response.rows[0];
});
exports.insertCartoon = insertCartoon;
const updateCartoon = ({ cartoon_id, inc_votes, }) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  UPDATE cartoons
  SET votes = votes + $1
  WHERE cartoon_id = $2
  RETURNING *;  
  `;
    const values = [inc_votes, cartoon_id];
    const response = yield connection_1.default.query(queryStr, values);
    return response.rows[0];
});
exports.updateCartoon = updateCartoon;
