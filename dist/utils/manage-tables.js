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
exports.dropTables = exports.createTables = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const dropTables = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.query(`DROP TABLE IF EXISTS comments`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS characters`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS cartoons`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS studios`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS users`);
});
exports.dropTables = dropTables;
const createTables = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Creating users...");
    const createUsers = yield connection_1.default.query(`
  CREATE TABLE users
  (username VARCHAR(255) PRIMARY KEY NOT NULL,
  avatar_url VARCHAR(255),
  name VARCHAR(255) NOT NULL)
  `);
    const createStudios = yield connection_1.default.query(`
  CREATE TABLE studios
  (
      studio_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      description VARCHAR NOT NULL,
      votes INT DEFAULT 0
  )
  `);
    yield Promise.all([createUsers, createStudios]);
    console.log("YESSS");
    yield connection_1.default.query(`
  CREATE TABLE cartoons
  (
      cartoon_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      votes INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW(),
      description VARCHAR NOT NULL,
      img_url TEXT DEFAULT 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      studio_id INT NOT NULL,
      FOREIGN KEY (studio_id) REFERENCES studios(studio_id) ON DELETE CASCADE
  )
  `);
    yield connection_1.default.query(`
  CREATE TABLE characters
  (
      character_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR (255) NOT NULL,
      votes INT DEFAULT 0,
      cartoon_id INT NOT NULL,
      FOREIGN KEY (cartoon_id) REFERENCES cartoons(cartoon_id) ON DELETE CASCADE,
      img_url TEXT DEFAULT 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  )
  `);
    yield connection_1.default.query(`
  CREATE TABLE comments 
  (
      comment_id SERIAL PRIMARY KEY NOT NULL,
      votes INT DEFAULT 0,
      author VARCHAR(255) NOT NULL,
      FOREIGN KEY (author) REFERENCES users(username) ON DELETE CASCADE,
      cartoon_id INT NOT NULL,
      FOREIGN KEY (cartoon_id) REFERENCES cartoons(cartoon_id) ON DELETE CASCADE,
      body TEXT,
      created_at TIMESTAMP DEFAULT NOW()
  )
  `);
});
exports.createTables = createTables;
