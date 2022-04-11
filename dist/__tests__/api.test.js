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
describe("Users", () => {
    describe("GET users", () => {
        test("200 - Get all users", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app).get("/api/users").expect(200);
            const { users } = body;
            expect(Array.isArray(users)).toBe(true);
            expect(users.length).toBe(4);
            users.forEach((user) => {
                expect(user).toEqual(expect.objectContaining({
                    username: expect.any(String),
                    name: expect.any(String),
                    avatar_url: expect.any(String),
                }));
            });
        }));
        test("200 - get user by username", () => __awaiter(void 0, void 0, void 0, function* () {
            const username = "xmenbteam";
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/users/${username}`)
                .expect(200);
            const { user } = body;
            console.timeLog(user);
            expect(user).toEqual({
                username: "xmenbteam",
                name: "sam",
                avatar_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            });
        }));
        test("404 - user not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const username = "cheese";
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/users/${username}`)
                .expect(404);
            const { msg } = body;
            expect(msg).toBe("User not found!");
        }));
    });
    describe("POST Owner", () => {
        test("201 - post new user", () => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                name: "Testy McTestFace",
                username: "testlington",
                avatar_url: "www.test.com",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post(`/api/users`)
                .send(newUser)
                .expect(201);
            const { user } = body;
            expect(user).toEqual(newUser);
        }));
        test("400 - blank field", () => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                name: "Testy McTestFace",
                //  username: "testlington",
                avatar_url: "www.test.com",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post(`/api/users`)
                .send(newUser)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Field username cannot be null!");
        }));
    });
});
describe("Studios", () => {
    describe("GET studios", () => {
        test("200 - GET all studios", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app).get("/api/studios").expect(200);
            const { studios } = body;
            expect(Array.isArray(studios.studios)).toBe(true);
            expect(studios.studios.length).toBe(3);
            studios.studios.forEach((studio) => {
                expect(studio).toEqual(expect.objectContaining({
                    studio_id: expect.any(Number),
                    name: expect.any(String),
                    img_url: expect.any(String),
                    description: expect.any(String),
                    votes: expect.any(Number),
                    cartoon_count: expect.any(Number),
                    full_count: 3,
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
                cartoon_count: 2,
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
describe("Cartoons", () => {
    describe("GET cartoons", () => {
        describe("GET cartoon by Id", () => {
            test("200 - GET Cartoon By ID", () => __awaiter(void 0, void 0, void 0, function* () {
                const cartoon_id = 2;
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons/${cartoon_id}`)
                    .expect(200);
                const { cartoon } = body;
                expect(cartoon).toEqual({
                    cartoon_id: 2,
                    name: "Test Cartoon 2",
                    votes: 34,
                    created_at: "1995-02-26T00:00:04.000Z",
                    description: "Wow testy",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png",
                    studio_id: 1,
                    character_count: 4,
                });
            }));
            test("400 - bad request", () => __awaiter(void 0, void 0, void 0, function* () {
                const cartoon_id = "cheese";
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons/${cartoon_id}`)
                    .expect(400);
                const { msg } = body;
                expect(msg).toBe("Bad request!");
            }));
            test("404 - review not found", () => __awaiter(void 0, void 0, void 0, function* () {
                const cartoon_id = 123456;
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons/${cartoon_id}`)
                    .expect(404);
                const { msg } = body;
                expect(msg).toBe("Cartoon not found!");
            }));
        });
        describe("GET more cartoons", () => {
            test.only("GET all cartoons", () => __awaiter(void 0, void 0, void 0, function* () {
                const { body } = yield (0, supertest_1.default)(app).get("/api/cartoons").expect(200);
                const { cartoons } = body;
                console.log(cartoons);
            }));
        });
    });
});
