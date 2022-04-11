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
      const studio_id = 1;
      const { body } = await request(app)
        .get(`/api/studios/${studio_id}`)
        .expect(200);
      const { studio } = body;
      expect(studio).toEqual({
        studio_id: 1,
        name: "Studio 1",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
        votes: 3,
      });
    });
    test("404 - Studio not found", async () => {
      const studio_id = 1000;
      const { body } = await request(app)
        .get(`/api/studios/${studio_id}`)
        .expect(404);
      const { msg } = body;
      expect(msg).toBe("Studio not found!");
    });
    test("400 - Bad Request", async () => {
      const studio_id = "cheese";
      const { body } = await request(app)
        .get(`/api/studios/${studio_id}`)
        .expect(400);
      const { msg } = body;
      expect(msg).toBe("Bad request!");
    });
  });
  describe("PATCH studio", () => {
    test("200 - inc_votes", async () => {
      const studio_id = 1;
      const { body } = await request(app)
        .patch(`/api/studios/${studio_id}`)
        .send({ inc_votes: 3 })
        .expect(200);
      const { studio } = body;
      expect(studio.votes).toBe(6);
    });
    test("400 - Bad Request", async () => {
      const studio_id = "cheese";
      const { body } = await request(app)
        .patch(`/api/studios/${studio_id}`)
        .send({ inc_votes: "cheese" })
        .expect(400);
      const { msg } = body;
      expect(msg).toBe("Bad request!");
    });
  });
  describe("POST studio", () => {
    test("201 - studio created", async () => {
      const newStudio = {
        name: "New Studio",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
      };
      const { body } = await request(app)
        .post("/api/studios")
        .send(newStudio)
        .expect(201);

      const { studio } = body;
      expect(studio).toEqual({
        name: "New Studio",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
        votes: 0,
        studio_id: 4,
      });
    });
    test("400 - bad request", async () => {
      const newStudio = {
        name: "New Studio",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        // description: "Great",
      };
      const { body } = await request(app)
        .post("/api/studios")
        .send(newStudio)
        .expect(400);

      const { msg } = body;
      expect(msg).toBe("Field description cannot be null!");
    });
  });
  describe("DELETE studio", () => {
    test("204 - delete studio", async () => {
      const studio_id = 2;
      await request(app).delete(`/api/studios/${studio_id}`).expect(204);

      const { body } = await request(app)
        .get(`/api/studios/${studio_id}`)
        .expect(404);

      const { msg } = body;
      expect(msg).toBe("Studio not found!");
    });
  });
});
