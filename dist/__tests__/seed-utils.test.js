"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_utils_1 = require("../utils/seed-utils");
describe("userDataFormatter", () => {
    test("Returns expected", () => {
        const input = [
            { username: "test", name: "test", avatar_url: "test" },
        ];
        const expected = [["test", "test", "test"]];
        const actual = (0, seed_utils_1.userDataFormatter)(input);
        expect(Array.isArray(actual)).toBe(true);
        expect(actual).toEqual(expected);
    });
});
describe("studioDataFormatter", () => {
    test("Returns expected", () => {
        const input = [
            { name: "test", img_url: "test", description: "test", votes: 0 },
        ];
        const actual = (0, seed_utils_1.studioDataFormatter)(input);
        const expected = [["test", "test", "test", 0]];
        expect(Array.isArray(actual)).toBe(true);
        expect(actual).toEqual(expected);
    });
});
// describe('')
