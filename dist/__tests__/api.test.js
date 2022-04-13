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
            test("GET all cartoons", () => __awaiter(void 0, void 0, void 0, function* () {
                const { body } = yield (0, supertest_1.default)(app).get("/api/cartoons").expect(200);
                const { cartoons } = body;
                expect(Array.isArray(cartoons.cartoons)).toBe(true);
                expect(cartoons.cartoons.length).toBe(10);
                cartoons.cartoons.forEach((cartoon) => {
                    expect(cartoon).toEqual(expect.objectContaining({
                        cartoon_id: expect.any(Number),
                        name: expect.any(String),
                        votes: expect.any(Number),
                        created_at: expect.any(String),
                        description: expect.any(String),
                        img_url: expect.any(String),
                        studio_id: expect.any(Number),
                        character_count: expect.any(Number),
                        full_count: expect.any(Number),
                    }));
                });
            }));
            test("GET all cartoons by studio_id", () => __awaiter(void 0, void 0, void 0, function* () {
                const studio_id = 2;
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?studio_id=${studio_id}`)
                    .expect(200);
                const { cartoons } = body;
                expect(cartoons.cartoons.every((cartoon) => cartoon.studio_id === 2)).toBe(true);
                expect(cartoons.cartoons.length).toBe(3);
            }));
            test("GET cartoons sorted ASC by VOTES", () => __awaiter(void 0, void 0, void 0, function* () {
                const sort_by = "votes";
                const order_by = "asc";
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?sort_by=${sort_by}&order_by=${order_by}`)
                    .expect(200);
                const { cartoons } = body;
                const newCartoons = [...cartoons.cartoons];
                const sortedCartoons = newCartoons.sort((a, b) => a.votes - b.votes);
                expect(sortedCartoons).toEqual(cartoons.cartoons);
            }));
            test("GET cartoons 2 per page", () => __awaiter(void 0, void 0, void 0, function* () {
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?limit=2`)
                    .expect(200);
                const { cartoons } = body;
                expect(cartoons.cartoons.length).toBe(2);
                expect(cartoons.currentPage).toBe(1);
                expect(cartoons.pageTotal).toBe(5);
            }));
            test("GET cartoons 3 per page, page 2", () => __awaiter(void 0, void 0, void 0, function* () {
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?limit=3&page=2`)
                    .expect(200);
                const { cartoons } = body;
                expect(cartoons.cartoons.length).toBe(3);
                expect(cartoons.currentPage).toBe(2);
                expect(cartoons.pageTotal).toBe(4);
            }));
            test("400 - Invalid sort_by query", () => __awaiter(void 0, void 0, void 0, function* () {
                const sort_by = "cheese";
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?sort_by=${sort_by}`)
                    .expect(400);
                const { msg } = body;
                expect(msg).toBe("Invalid sort_by query: cheese");
            }));
            test("400 - invalid studio_id", () => __awaiter(void 0, void 0, void 0, function* () {
                const studio_id = "cheese";
                const { body } = yield (0, supertest_1.default)(app).get(`/api/cartoons?studio_id=${studio_id}`);
                const { msg } = body;
                expect(msg).toBe("Bad request!");
            }));
            test("404 - studio_id doesn't exist", () => __awaiter(void 0, void 0, void 0, function* () {
                const studio_id = 12345;
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?studio_id=${studio_id}`)
                    .expect(404);
                const { msg } = body;
                expect(msg).toBe("Studio does not exist!");
            }));
            test("400 - invalid page/limit", () => __awaiter(void 0, void 0, void 0, function* () {
                const page = "cheese";
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?page=${page}`)
                    .expect(400);
                const { msg } = body;
                expect(msg).toBe("Bad request!");
            }));
            test("404 - invalid page/limit", () => __awaiter(void 0, void 0, void 0, function* () {
                const page = 12345;
                const { body } = yield (0, supertest_1.default)(app)
                    .get(`/api/cartoons?page=${page}`)
                    .expect(404);
                const { msg } = body;
                expect(msg).toBe("Not found!");
            }));
        });
    });
    describe("POST new cartoon", () => {
        test("201 - Cartoon created", () => __awaiter(void 0, void 0, void 0, function* () {
            const newCartoon = {
                name: "Testy new cartoon",
                description: "Wow",
                img_url: "www.google.com",
                studio_id: 2,
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/cartoons")
                .send(newCartoon)
                .expect(201);
            const { cartoon } = body;
            expect(cartoon).toEqual({
                name: "Testy new cartoon",
                description: "Wow",
                img_url: "www.google.com",
                studio_id: 2,
                votes: 0,
                created_at: expect.any(String),
                cartoon_id: 11,
            });
        }));
        test("400 - Bad Request - things missing", () => __awaiter(void 0, void 0, void 0, function* () {
            const newCartoon = {
                name: "Testy new cartoon",
                description: "Wow",
                img_url: "www.google.com",
                // studio_id: 2,
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/cartoons")
                .send(newCartoon)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Field studio_id cannot be null!");
        }));
    });
    describe("PATCH cartoons", () => {
        test("201 - Good", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = 2;
            const cartoon_id = 2;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/cartoons/${cartoon_id}`)
                .send({ inc_votes })
                .expect(201);
            const { cartoon } = body;
            expect(cartoon.votes).toBe(36);
        }));
    });
});
describe("Characters", () => {
    describe("GET Characters", () => {
        test("200 - GET character by id", () => __awaiter(void 0, void 0, void 0, function* () {
            const character_id = 7;
            const { body } = yield (0, supertest_1.default)(app).get(`/api/characters/${character_id}`);
            const { character } = body;
            const newChar = {
                character_id: 7,
                name: "P Test 7",
                votes: 2,
                cartoon_id: 3,
                img_url: "www.google.com",
            };
            expect(character).toEqual(newChar);
        }));
        test("400 - Bad request", () => __awaiter(void 0, void 0, void 0, function* () {
            const character_id = "cheese";
            const { body } = yield (0, supertest_1.default)(app).get(`/api/characters/${character_id}`);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
        test("404 - Not Found", () => __awaiter(void 0, void 0, void 0, function* () {
            const character_id = 1234567890;
            const { body } = yield (0, supertest_1.default)(app).get(`/api/characters/${character_id}`);
            const { msg } = body;
            expect(msg).toBe("Character not found!");
        }));
        test("200 - GET all characters", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app).get("/api/characters").expect(200);
            const { characters } = body;
            expect(Array.isArray(characters.characters)).toBe(true);
            expect(characters.characters.length).toBe(10);
            expect(characters.currentPage).toBe(1);
            expect(characters.charactersPerPage).toBe(10);
            expect(characters.pageTotal).toBe(3);
            expect(characters.characters[0]).toEqual({
                character_id: 12,
                name: "Test 12",
                votes: 2,
                cartoon_id: 5,
                img_url: "www.google.com",
                full_count: 30,
                cartoon_name: "Test Cartoon 5",
            });
        }));
        test("200 - GET characters by cartoon_id", () => __awaiter(void 0, void 0, void 0, function* () {
            const cartoon_id = 2;
            const { body } = yield (0, supertest_1.default)(app).get(`/api/cartoons/${cartoon_id}/characters`);
            const { characters } = body;
            expect(characters.characters.length).toBe(4);
            expect(characters.characters[0].full_count).toBe(4);
        }));
        test("200 - GET characters sorted by VOTE DESC", () => __awaiter(void 0, void 0, void 0, function* () {
            const cartoon_id = 2;
            const sort_by = "votes";
            const order_by = "desc";
            const { body } = yield (0, supertest_1.default)(app).get(`/api/cartoons/${cartoon_id}/characters?sort_by=${sort_by}&order_by=${order_by}`);
            const { characters } = body;
            const newChars = [...characters.characters];
            const sortByVotes = newChars.sort((a, b) => b.votes - a.votes);
            expect(sortByVotes).toEqual(characters.characters);
        }));
        test("400 - invalid sort_by", () => __awaiter(void 0, void 0, void 0, function* () {
            const cartoon_id = 2;
            const sort_by = "cheese";
            const order_by = "desc";
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/cartoons/${cartoon_id}/characters?sort_by=${sort_by}&order_by=${order_by}`)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Invalid sort_by query: cheese");
        }));
    });
    describe("PATCH characters", () => {
        test("201 - Successful", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = 3;
            const character_id = 3;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/characters/${character_id}`)
                .send({ inc_votes });
            const { character } = body;
            expect(character.votes).toBe(10);
        }));
        test("400 - Bad request", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = "cheese";
            const character_id = 3;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/characters/${character_id}`)
                .send({ inc_votes });
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
        test("404 - Not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = 3;
            const character_id = 3333333;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/characters/${character_id}`)
                .send({ inc_votes });
            const { msg } = body;
            expect(msg).toBe("Character not found!");
        }));
    });
    describe("POST Character", () => {
        test("201 - Character created", () => __awaiter(void 0, void 0, void 0, function* () {
            const newCharacter = {
                name: "Testington",
                cartoon_id: 2,
                img_url: "Hello",
            };
            const { body: char } = yield (0, supertest_1.default)(app)
                .post("/api/characters")
                .send(newCharacter)
                .expect(201);
            const { body: charList } = yield (0, supertest_1.default)(app)
                .get("/api/cartoons/2/characters")
                .expect(200);
            const { character } = char;
            const { characters } = charList;
            expect(characters.characters.length).toBe(5);
            expect(character).toEqual({
                character_id: 31,
                name: "Testington",
                votes: 0,
                cartoon_id: 2,
                img_url: "Hello",
            });
        }));
        test("400 - missing fields", () => __awaiter(void 0, void 0, void 0, function* () {
            const newCharacter = {
                name: "Testington",
                // cartoon_id: 2,
                img_url: "Hello",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/characters")
                .send(newCharacter)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Field cartoon_id cannot be null!");
        }));
    });
});
describe("Comments", () => {
    describe("GET comments", () => {
        test("200 - GET comment by id", () => __awaiter(void 0, void 0, void 0, function* () {
            const comment_id = 3;
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/comments/${comment_id}`)
                .expect(200);
            const { comment } = body;
            expect(comment.comment_id).toBe(comment_id);
            expect(comment).toEqual({
                comment_id: 3,
                author: "jadelandeg",
                cartoon_id: 9,
                body: "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
                votes: -97,
                created_at: "2022-02-21T20:30:29.000Z",
            });
        }));
        test("400 - invalid id", () => __awaiter(void 0, void 0, void 0, function* () {
            const comment_id = "cheese";
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/comments/${comment_id}`)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
        test("404 comment not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const comment_id = 1234567980;
            const { body } = yield (0, supertest_1.default)(app)
                .get(`/api/comments/${comment_id}`)
                .expect(404);
            const { msg } = body;
            expect(msg).toBe("Comment not found!");
        }));
        test("200 - GET comments", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app).get("/api/comments").expect(200);
            const { comments } = body;
            expect(comments.comments.length).toBe(10);
        }));
        test("200 - GET comments by cartoon_id", () => __awaiter(void 0, void 0, void 0, function* () {
            const cartoon_id = 1;
            const { body } = yield (0, supertest_1.default)(app).get(`/api/cartoons/${cartoon_id}/comments`);
            const { comments } = body;
            expect(comments.comments.length).toBe(2);
            expect(comments.comments.every((comment) => comment.cartoon_id === cartoon_id)).toBe(true);
        }));
        test("PAGINATION - 2 per page", () => __awaiter(void 0, void 0, void 0, function* () {
            const limit = 2;
            const page = 2;
            const { body } = yield (0, supertest_1.default)(app).get(`/api/comments?limit=${limit}&page=${page}`);
            const { comments } = body;
            expect(comments.comments.length).toBe(limit);
        }));
    });
    describe("PATCH comments", () => {
        test("201 - PATCH votes", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = 3;
            const comment_id = 2;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/comments/${comment_id}`)
                .send({ inc_votes })
                .expect(201);
            const { comment } = body;
            expect(comment.votes).toBe(-94);
        }));
        test("400 - bad request inc_votes", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = "cheese";
            const comment_id = 2;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/comments/${comment_id}`)
                .send({ inc_votes })
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
        test("404 - comment not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = 5;
            const comment_id = 222222222;
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/comments/${comment_id}`)
                .send({ inc_votes })
                .expect(404);
            const { msg } = body;
            expect(msg).toBe("Comment not found!");
        }));
        test("400 - bad request comment_id", () => __awaiter(void 0, void 0, void 0, function* () {
            const inc_votes = 3;
            const comment_id = "cheese";
            const { body } = yield (0, supertest_1.default)(app)
                .patch(`/api/comments/${comment_id}`)
                .send({ inc_votes })
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
    });
    describe("POST comment", () => {
        test("200 - POST Comment", () => __awaiter(void 0, void 0, void 0, function* () {
            const postingComment = {
                cartoon_id: 1,
                body: "This is a comment",
                author: "xmenbteam",
            };
            const returnedComment = Object.assign(Object.assign({}, postingComment), { comment_id: 41, votes: 0, created_at: expect.any(String) });
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/comments")
                .send(postingComment)
                .expect(200);
            const { comment } = body;
            expect(comment).toEqual(returnedComment);
        }));
        test("400 - Null field", () => __awaiter(void 0, void 0, void 0, function* () {
            const postingComment = {
                cartoon_id: 1,
                // body: "This is a comment",
                author: "xmenbteam",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/comments")
                .send(postingComment)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Field body cannot be null!");
        }));
        test("400 - INvalid User", () => __awaiter(void 0, void 0, void 0, function* () {
            const postingComment = {
                cartoon_id: 1,
                body: "This is a comment",
                author: "cheese",
            };
            const { body } = yield (0, supertest_1.default)(app)
                .post("/api/comments")
                .send(postingComment)
                .expect(400);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
    });
    describe("DELETE comment", () => {
        test("204 - deleted", () => __awaiter(void 0, void 0, void 0, function* () {
            const comment_id = 3;
            yield (0, supertest_1.default)(app).delete(`/api/comments/${comment_id}`);
            const { body } = yield (0, supertest_1.default)(app).get(`/api/comments/${comment_id}`);
            console.log(body);
            const { msg } = body;
            expect(msg).toBe("Comment not found!");
        }));
        test("404 - comment doesn't exist", () => __awaiter(void 0, void 0, void 0, function* () {
            const comment_id = 3333333;
            const { body } = yield (0, supertest_1.default)(app).delete(`/api/comments/${comment_id}`);
            const { msg } = body;
            expect(msg).toBe("Comment not found!");
        }));
        test("400 - bad request", () => __awaiter(void 0, void 0, void 0, function* () {
            const comment_id = "cheese";
            const { body } = yield (0, supertest_1.default)(app).delete(`/api/comments/${comment_id}`);
            const { msg } = body;
            expect(msg).toBe("Bad request!");
        }));
    });
});
