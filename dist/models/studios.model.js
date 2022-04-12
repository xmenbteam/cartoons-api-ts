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
exports.removeStudioById = exports.insertStudio = exports.updateStudioById = exports.fetchStudioById = exports.fetchStudios = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const query_utils_1 = require("../utils/query-utils");
const util_functions_1 = require("../utils/util-functions");
const fetchStudios = ({ sort_by = "studio_id", order_by = "asc", limit = 10, page = 1, }) => __awaiter(void 0, void 0, void 0, function* () {
    const offset = (0, util_functions_1.pageOffsetCalc)(page, limit);
    const values = [limit, offset];
    if (!(0, util_functions_1.checkIfValid)(sort_by, query_utils_1.sortByValues)) {
        return Promise.reject({
            status: 400,
            msg: `Invalid sort_by query: ${sort_by}`,
        });
    }
    if (!(0, util_functions_1.checkIfValid)(order_by, query_utils_1.orderByValues)) {
        return Promise.reject({
            status: 400,
            msg: `Invalid order_by query: ${order_by}`,
        });
    }
    let query = `SELECT studios.*, COUNT(cartoons.studio_id) :: INT AS cartoon_count,
  COUNT(*) OVER() :: INT AS full_count  
  FROM studios
  LEFT JOIN cartoons ON cartoons.studio_id = studios.studio_id
  GROUP BY studios.studio_id
  ORDER BY ${sort_by} ${order_by}
  LIMIT $1 OFFSET $2
  `;
    const response = yield connection_1.default.query(query, values);
    const studios = response.rows;
    const totalStudiosObject = {
        studios,
        currentPage: page,
        studiosPerPage: limit,
        pageTotal: Math.ceil(studios[0].full_count / limit),
    };
    return totalStudiosObject;
});
exports.fetchStudios = fetchStudios;
const fetchStudioById = (studio_id) => __awaiter(void 0, void 0, void 0, function* () {
    let query = `SELECT studios.*, 
  COUNT(cartoons.studio_id) :: INT AS cartoon_count
  FROM studios
  LEFT JOIN cartoons ON cartoons.studio_id = studios.studio_id
  WHERE studios.studio_id = $1
  GROUP BY studios.studio_id
  LIMIT 1;
  `;
    const values = [studio_id];
    const studio = yield connection_1.default.query(query, values);
    if (!studio.rows[0])
        return Promise.reject({ status: 404, msg: "Studio not found!" });
    return studio.rows[0];
});
exports.fetchStudioById = fetchStudioById;
const updateStudioById = (studio_id, inc_votes) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  UPDATE studios 
  SET votes = votes + $1
  WHERE studio_id = $2
  RETURNING *
  `;
    let values = [inc_votes, studio_id];
    const studio = yield connection_1.default.query(queryStr, values);
    if (!studio.rows[0])
        return Promise.reject({ status: 404, msg: "Studio not found!" });
    return studio.rows[0];
});
exports.updateStudioById = updateStudioById;
const insertStudio = ({ name, img_url, description, }) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  INSERT INTO studios (name, img_url, description) VALUES ($1,$2,$3) RETURNING *;
  `;
    const values = [name, img_url, description];
    const response = yield connection_1.default.query(queryStr, values);
    return response.rows[0];
});
exports.insertStudio = insertStudio;
const removeStudioById = (studio_id) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  DELETE FROM studios * WHERE studio_id = $1
  `;
    const values = [studio_id];
    const response = yield connection_1.default.query(queryStr, values);
    return response.rows;
});
exports.removeStudioById = removeStudioById;
