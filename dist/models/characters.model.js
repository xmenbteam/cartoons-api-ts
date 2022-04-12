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
exports.insertCharacter = exports.updateCharacterById = exports.fetchCharacters = exports.fetchCharacterById = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const query_utils_1 = require("../utils/query-utils");
const util_functions_1 = require("../utils/util-functions");
const fetchCharacterById = (character_id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryStr = `SELECT * FROM characters WHERE character_id = $1;`;
    const values = [character_id];
    const response = yield connection_1.default.query(queryStr, values);
    if (!response.rows[0])
        return Promise.reject({ status: 404, msg: "Character not found!" });
    return response.rows[0];
});
exports.fetchCharacterById = fetchCharacterById;
const fetchCharacters = ({ sort_by = "created_at", order_by = "asc", cartoon_id, limit = 10, page = 1, }) => __awaiter(void 0, void 0, void 0, function* () {
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
  SELECT characters.*,
  COUNT(*) OVER() :: INT AS full_count,
  cartoons.name AS cartoon_name
  FROM characters
    LEFT JOIN cartoons ON characters.cartoon_id = cartoons.cartoon_id
    `;
    if (cartoon_id) {
        queryStr += `WHERE characters.cartoon_id = $3`;
        values.push(cartoon_id);
    }
    queryStr += `
  ORDER BY ${sort_by} ${order_by}
  LIMIT $1 OFFSET $2
  ;`;
    const response = yield connection_1.default.query(queryStr, values);
    const characters = response.rows;
    const returnObj = {
        characters,
        currentPage: Number(page),
        charactersPerPage: limit,
        pageTotal: Math.ceil(characters[0].full_count / limit),
    };
    return returnObj;
});
exports.fetchCharacters = fetchCharacters;
const updateCharacterById = (character_id, inc_votes) => __awaiter(void 0, void 0, void 0, function* () {
    const queryStr = `
  UPDATE characters
  SET votes = votes + $1
  WHERE character_id = $2
  RETURNING *;
  `;
    const values = [inc_votes, character_id];
    const response = yield connection_1.default.query(queryStr, values);
    if (!response.rows[0])
        return Promise.reject({ status: 404, msg: "Character not found!" });
    return response.rows[0];
});
exports.updateCharacterById = updateCharacterById;
const insertCharacter = ({ name, cartoon_id, img_url, }) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  INSERT INTO characters (name, cartoon_id, img_url)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;
    const values = [name, cartoon_id, img_url];
    const response = yield connection_1.default.query(queryStr, values);
    return response.rows[0];
});
exports.insertCharacter = insertCharacter;
