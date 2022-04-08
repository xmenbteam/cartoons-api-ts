import { seed } from "../db/seeds/seed";
import * as testData from "../db/data/test-data/index";
import request from "supertest";
import db from "../db/connection";

const app = require("../app");

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("Welcome", () => {
  test("Returns welcome message", async () => {
    const { body } = await request(app).get("/").expect(200);

    const message =
      "Welcome to the cartoons API! Go to /api to see possible endpoints!";
    expect(body.msg).toBe(message);
  });
});
