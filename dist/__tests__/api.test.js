"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const seed_1 = require("../db/seeds/seed");
const testData = __importStar(require("../db/data/test-data/index"));
const supertest_1 = __importDefault(require("supertest"));
const connection_1 = __importDefault(require("../db/connection"));
const app = require("../app");
beforeEach(() => (0, seed_1.seed)(testData));
afterAll(() => connection_1.default.end());
describe("Welcome", () => {
    test("Returns welcome message", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = yield (0, supertest_1.default)(app).get("/").expect(200);
        const message = "Welcome to the cartoons API! Go to /api to see possible endpoints!";
        expect(body.msg).toBe(message);
    }));
});
describe("Studios", () => {
    describe("GET studios", () => {
        test("200 - GET all studios", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app).get("/api/studios").expect(200);
            const { studios } = body;
            expect(Array.isArray(studios)).toBe(true);
            expect(studios.length).toBe(3);
            studios.forEach((studio) => {
                expect(studio).toEqual(expect.objectContaining({
                    studio_id: expect.any(Number),
                    name: expect.any(String),
                    img_url: expect.any(String),
                    description: expect.any(String),
                    votes: expect.any(Number),
                }));
            });
        }));
        test("200 - GET studio by id", () => __awaiter(void 0, void 0, void 0, function* () {
            const studio_id = 1;
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/studios/${studio_id}`)
                .expect(200);
            const { studio } = body;
            expect(studio).toEqual({
                studio_id: 1,
                name: "Studio 1",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
                description: "Great",
                votes: 3,
            });
        }));
        test("404 - Studio not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const studio_id = 1000;
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/studios/${studio_id}`)
                .expect(404);
            const { msg } = body;
            expect(msg).toBe("Studio not found!");
        }));
        test("400 - Bad Request", () => __awaiter(void 0, void 0, void 0, function* () {
            const studio_id = "cheese";
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/studios/${studio_id}`)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
    });
    describe("PATCH studio", () => {
        test("200 - inc_votes", () => __awaiter(void 0, void 0, void 0, function* () {
            const studio_id = 1;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/studios/${studio_id}`)
                .send({ inc_votes: 3 })
                .expect(200);
            const { studio } = body;
            expect(studio.votes).toBe(6);
        }));
        test("400 - Bad Request", () => __awaiter(void 0, void 0, void 0, function* () {
            const studio_id = "cheese";
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/studios/${studio_id}`)
                .send({ inc_votes: "cheese" })
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
    });
    describe("POST studio", () => {
        test("201 - studio created", () => __awaiter(void 0, void 0, void 0, function* () {
            const newStudio = {
                name: "New Studio",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
                description: "Great",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/studios")
                .send(newStudio)
                .expect(201);
            const { studio } = body;
            expect(studio).toEqual({
                name: "New Studio",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
                description: "Great",
                votes: 0,
                studio_id: 4,
            });
        }));
        test("400 - bad request", () => __awaiter(void 0, void 0, void 0, function* () {
            const newStudio = {
                name: "New Studio",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
                // description: "Great",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/studios")
                .send(newStudio)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Field description cannot be null!");
        }));
    });
    describe("DELETE studio", () => {
        test("204 - delete studio", () => __awaiter(void 0, void 0, void 0, function* () {
            const studio_id = 2;
            yield (0, supertest_1.default)(app).delete(`/api/studios/${studio_id}`).expect(204);
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/studios/${studio_id}`)
                .expect(404);
            const { msg } = body;
            expect(msg).toBe("Studio not found!");
        }));
    });
});
