import { seed } from "../db/seeds/seed";
import * as testData from "../db/data/test-data/index";
import request from "supertest";
import db from "../db/connection";
import { DB_Studio, Returned_Studio } from "../types/data-types";

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

describe("Studios", () => {
  describe("GET studios", () => {
    test("200 - GET all studios", async () => {
      const { body } = await request(app).get("/api/studios").expect(200);
      const { studios } = body;
      expect(Array.isArray(studios)).toBe(true);
      expect(studios.length).toBe(3);
      studios.forEach((studio: Returned_Studio) => {
        expect(studio).toEqual(
          expect.objectContaining({
            studio_id: expect.any(Number),
            name: expect.any(String),
            img_url: expect.any(String),
            description: expect.any(String),
            votes: expect.any(Number),
          })
        );
      });
    });
    test("200 - GET studio by id", async () => {
      const id = 1;
      const { body } = await request(app).get(`/api/studios/${id}`);
      const { studios } = body;
      console.log(body);
      expect(studios).toEqual({
        studio_id: 1,
        name: "Studio 1",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
        votes: 3,
      });
    });
  });
});
