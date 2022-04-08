import {
  DB_Cartoon,
  DB_Character,
  DB_Comment,
  DB_Studio,
  DB_User,
} from "../types/dataTypes";
import {
  cartoonDataFormatter,
  characterDataFormatter,
  commentsDataFormatter,
  studioDataFormatter,
  userDataFormatter,
} from "../utils/seed-utils";

describe("userDataFormatter", () => {
  test("Returns expected", () => {
    const input: DB_User[] = [
      { username: "test", name: "test", avatar_url: "test" },
    ];
    const expected = [["test", "test", "test"]];
    const actual = userDataFormatter(input);
    expect(Array.isArray(actual)).toBe(true);
    expect(actual).toEqual(expected);
  });
});

describe("studioDataFormatter", () => {
  test("Returns expected", () => {
    const input: DB_Studio[] = [
      { name: "test", img_url: "test", description: "test", votes: 0 },
    ];
    const actual = studioDataFormatter(input);
    const expected = [["test", "test", "test", 0]];
    expect(Array.isArray(actual)).toBe(true);
    expect(actual).toEqual(expected);
  });
});

describe("cartoonDataFormatter", () => {
  test("returns expected", () => {
    const input: DB_Cartoon[] = [
      {
        name: "test",
        votes: 0,
        created_at: new Date(793756880000),
        description: "test",
        img_url: "test",
        studio_id: 2,
      },
    ];
    const actual = cartoonDataFormatter(input);
    const expected = [["test", 0, new Date(793756880000), "test", "test", 2]];
    expect(Array.isArray(actual)).toBe(true);
    expect(actual).toEqual(expected);
  });
});

describe("characterDataFormatter", () => {
  test("works", () => {
    const input: DB_Character[] = [
      {
        name: "test",
        votes: 2,
        cartoon_id: 3,
        img_url: "test",
      },
    ];
    const actual = characterDataFormatter(input);
    const expected = [["test", 2, 3, "test"]];
    expect(Array.isArray(actual)).toBe(true);
    expect(actual).toEqual(expected);
  });
});

describe("commentsDataFormatter", () => {
  test("works", () => {
    const input: DB_Comment[] = [
      {
        body: "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur",
        votes: -46,
        author: "jadelandeg",
        cartoon_id: 18,
        created_at: "2021-07-16T13:33:01.000Z",
      },
    ];
    const actual = commentsDataFormatter(input);
    const expected = [Object.values(input[0])];

    expect(actual).toEqual(expected);
  });
});
