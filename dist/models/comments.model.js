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
exports.removeComment = exports.sendComment = exports.updateCommentById = exports.fetchComments = exports.fetchCommentById = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const query_utils_1 = require("../utils/query-utils");
const util_functions_1 = require("../utils/util-functions");
const fetchCommentById = (comment_id) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
    SELECT * FROM comments
    WHERE comment_id = $1
    LIMIT 1;
    `;
    const values = [comment_id];
    const { rows } = yield connection_1.default.query(queryStr, values);
    if (!rows[0])
        return Promise.reject({ status: 404, msg: "Comment not found!" });
    return rows[0];
});
exports.fetchCommentById = fetchCommentById;
const fetchComments = ({ sort_by = "created_at", order_by = "asc", cartoon_id, limit = 10, page = 1, }) => __awaiter(void 0, void 0, void 0, function* () {
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
    SELECT comments.*,
     COUNT(*) OVER() :: INT AS full_count
     FROM comments
   `;
    if (cartoon_id) {
        queryStr += `WHERE cartoon_id = $3`;
        values.push(cartoon_id);
    }
    queryStr += `
     ORDER BY ${sort_by} ${order_by}
     LIMIT $1 OFFSET $2;`;
    const { rows } = yield connection_1.default.query(queryStr, values);
    const returnedObject = {
        comments: rows,
        currentPage: Number(page),
        commmentsPerPage: limit,
        pageTotal: Math.ceil(rows[0].full_count / limit),
    };
    return returnedObject;
});
exports.fetchComments = fetchComments;
const updateCommentById = (comment_id, inc_votes) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  UPDATE comments
  SET votes = votes + $1
  WHERE comment_id = $2
  RETURNING *;
  `;
    const values = [inc_votes, comment_id];
    const { rows } = yield connection_1.default.query(queryStr, values);
    if (!rows[0])
        return Promise.reject({ status: 404, msg: "Comment not found!" });
    return rows[0];
});
exports.updateCommentById = updateCommentById;
const sendComment = ({ cartoon_id, body, author, }) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  INSERT INTO comments
  (cartoon_id, body, author)
  VALUES ($1, $2, $3)
  RETURNING *
  `;
    const values = [cartoon_id, body, author];
    const { rows } = yield connection_1.default.query(queryStr, values);
    return rows[0];
});
exports.sendComment = sendComment;
const removeComment = (comment_id) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  DELETE FROM comments
  WHERE comment_id = $1
  `;
    const values = [comment_id];
    const result = yield connection_1.default.query(queryStr, values);
    // rowCount === number of deleted rows
    const { rowCount } = result;
    if (!rowCount)
        return Promise.reject({ status: 404, msg: "Comment not found!" });
    return result;
});
exports.removeComment = removeComment;
