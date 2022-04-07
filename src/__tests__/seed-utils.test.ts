import { DB_Studio, DB_User } from "../types/dataTypes";
import { studioDataFormatter, userDataFormatter } from "../utils/seed-utils";

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

// describe('')
