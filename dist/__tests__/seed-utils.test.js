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
describe("cartoonDataFormatter", () => {
    test("returns expected", () => {
        const input = [
            {
                name: "test",
                votes: 0,
                created_at: new Date(793756880000),
                description: "test",
                img_url: "test",
                studio_id: 2,
            },
        ];
        const actual = (0, seed_utils_1.cartoonDataFormatter)(input);
        const expected = [["test", 0, new Date(793756880000), "test", "test", 2]];
        expect(Array.isArray(actual)).toBe(true);
        expect(actual).toEqual(expected);
    });
});
describe("characterDataFormatter", () => {
    test("works", () => {
        const input = [
            {
                name: "test",
                votes: 2,
                cartoon_id: 3,
                img_url: "test",
            },
        ];
        const actual = (0, seed_utils_1.characterDataFormatter)(input);
        const expected = [["test", 2, 3, "test"]];
        expect(Array.isArray(actual)).toBe(true);
        expect(actual).toEqual(expected);
    });
});
describe("commentsDataFormatter", () => {
    test("works", () => {
        const input = [
            {
                author: "jadelandeg",
                cartoon_id: 18,
                body: "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur",
                votes: -46,
                created_at: new Date(793756880000),
            },
        ];
        const actual = (0, seed_utils_1.commentsDataFormatter)(input);
        const expected = [Object.values(input[0])];
        expect(actual).toEqual(expected);
    });
});
