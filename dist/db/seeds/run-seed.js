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
const connection_1 = __importDefault(require("../connection"));
const seed_1 = require("./seed");
const index_1 = require("../data/development-data/index");
const runSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, seed_1.seed)({
            studiosData: index_1.studiosData,
            usersData: index_1.usersData,
            commentsData: index_1.commentsData,
            charactersData: index_1.charactersData,
            cartoonsData: index_1.cartoonsData,
        });
        yield connection_1.default.end();
    }
    catch (err) {
        console.log("-->", err, "<--");
    }
});
runSeed();
