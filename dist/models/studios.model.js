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
const fetchStudios = () => __awaiter(void 0, void 0, void 0, function* () {
    let query = `SELECT * FROM studios`;
    const studios = yield connection_1.default.query(query);
    return studios.rows;
});
exports.fetchStudios = fetchStudios;
const fetchStudioById = (studio_id) => __awaiter(void 0, void 0, void 0, function* () {
    let query = `SELECT * FROM studios WHERE studio_id = $1`;
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
    const studio = yield connection_1.default.query(queryStr, values);
    return studio.rows[0];
});
exports.insertStudio = insertStudio;
const removeStudioById = (studio_id) => __awaiter(void 0, void 0, void 0, function* () {
    let queryStr = `
  DELETE FROM studios * WHERE studio_id = $1
  `;
    const values = [studio_id];
    const result = yield connection_1.default.query(queryStr, values);
    return result.rows;
});
exports.removeStudioById = removeStudioById;
