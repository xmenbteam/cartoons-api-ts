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
exports.seed = void 0;
const pg_format_1 = __importDefault(require("pg-format"));
const manage_tables_1 = require("../../utils/manage-tables");
const seed_utils_1 = require("../../utils/seed-utils");
const connection_1 = __importDefault(require("../connection"));
const seed = ({ studiosData, usersData, commentsData, charactersData, cartoonsData, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, manage_tables_1.dropTables)();
    yield (0, manage_tables_1.createTables)();
    console.log("Studios...");
    const insertIntoStudios = (0, pg_format_1.default)(`
  INSERT INTO studios
  (name, img_url, description, votes)
  VALUES
  %L
  RETURNING *;
  `, (0, seed_utils_1.studioDataFormatter)(studiosData));
    const studiosQuery = yield connection_1.default.query(insertIntoStudios);
    const studios = studiosQuery.rows;
    console.log("Users...");
    const insertIntoUsers = (0, pg_format_1.default)(`
  INSERT INTO users
  (username, name, avatar_url)
  VALUES
  %L
  RETURNING *;
  `, (0, seed_utils_1.userDataFormatter)(usersData));
    const usersQuery = yield connection_1.default.query(insertIntoUsers);
    const users = usersQuery.rows;
    yield Promise.all([studios, users]);
    console.log("Cartoons...");
    const insertIntoCartoons = (0, pg_format_1.default)(`
  INSERT INTO cartoons
  (
    name,
    votes,
    created_at,
    description,
    img_url,
    studio_id
  )
  VALUES 
  %L
  RETURNING *;
  `, (0, seed_utils_1.cartoonDataFormatter)(cartoonsData));
    yield connection_1.default.query(insertIntoCartoons).then(({ rows }) => rows);
    console.log("Characters...");
    const insertIntoCharacters = (0, pg_format_1.default)(`
    INSERT INTO characters
    (
    name,
    votes,
    cartoon_id,
    img_url
    )
    VALUES
    %L
    RETURNING *;
    `, (0, seed_utils_1.characterDataFormatter)(charactersData));
    yield connection_1.default.query(insertIntoCharacters).then(({ rows }) => rows);
    console.log("Comments...");
    const insertIntoComments = (0, pg_format_1.default)(`
INSERT INTO comments
(
   author,
    cartoon_id,
    body,
    votes,
    created_at
)
VALUES
%L
RETURNING *;
`, (0, seed_utils_1.commentsDataFormatter)(commentsData));
    console.log("DONE");
    return connection_1.default.query(insertIntoComments).then(({ rows }) => rows);
});
exports.seed = seed;
