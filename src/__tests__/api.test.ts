import { seed } from "../db/seeds/seed";
import * as testData from "../db/data/test-data/index";
import request from "supertest";
import db from "../db/connection";
import {
  DB_Studio,
  Returned_Cartoon,
  Returned_Studio,
  Returned_User,
} from "../types/data-types";

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

describe("Users", () => {
  describe("GET users", () => {
    test("200 - Get all users", async () => {
      const { body } = await request(app).get("/api/users").expect(200);
      const { users } = body;
      expect(Array.isArray(users)).toBe(true);
      expect(users.length).toBe(4);
      users.forEach((user: Returned_User) => {
        expect(user).toEqual(
          expect.objectContaining({
            username: expect.any(String),
            name: expect.any(String),
            avatar_url: expect.any(String),
          })
        );
      });
    });
    test("200 - get user by username", async () => {
      const username = "xmenbteam";
      const { body } = await request(app)
        .get(`/api/users/${username}`)
        .expect(200);
      const { user } = body;
      console.timeLog(user);
      expect(user).toEqual({
        username: "xmenbteam",
        name: "sam",
        avatar_url:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      });
    });
    test("404 - user not found", async () => {
      const username = "cheese";
      const { body } = await request(app)
        .get(`/api/users/${username}`)
        .expect(404);

      const { msg } = body;
      expect(msg).toBe("User not found!");
    });
  });
  describe("POST Owner", () => {
    test("201 - post new user", async () => {
      const newUser = {
        name: "Testy McTestFace",
        username: "testlington",
        avatar_url: "www.test.com",
      };
      const { body } = await request(app)
        .post(`/api/users`)
        .send(newUser)
        .expect(201);

      const { user } = body;

      expect(user).toEqual(newUser);
    });
    test("400 - blank field", async () => {
      const newUser = {
        name: "Testy McTestFace",
        //  username: "testlington",
        avatar_url: "www.test.com",
      };
      const { body } = await request(app)
        .post(`/api/users`)
        .send(newUser)
        .expect(400);

      const { msg } = body;

      expect(msg).toBe("Field username cannot be null!");
    });
  });
});

describe("Studios", () => {
  describe("GET studios", () => {
    test("200 - GET all studios", async () => {
      const { body } = await request(app).get("/api/studios").expect(200);
      const { studios } = body;
      expect(Array.isArray(studios.studios)).toBe(true);
      expect(studios.studios.length).toBe(3);
      studios.studios.forEach((studio: Returned_Studio) => {
        expect(studio).toEqual(
          expect.objectContaining({
            studio_id: expect.any(Number),
            name: expect.any(String),
            img_url: expect.any(String),
            description: expect.any(String),
            votes: expect.any(Number),
            cartoon_count: expect.any(Number),
            full_count: 3,
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
        cartoon_count: 2,
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

describe("Cartoons", () => {
  describe("GET cartoons", () => {
    describe("GET cartoon by Id", () => {
      test("200 - GET Cartoon By ID", async () => {
        const cartoon_id = 2;
        const { body } = await request(app)
          .get(`/api/cartoons/${cartoon_id}`)
          .expect(200);
        const { cartoon } = body;
        expect(cartoon).toEqual({
          cartoon_id: 2,
          name: "Test Cartoon 2",
          votes: 34,
          created_at: "1995-02-26T00:00:04.000Z",
          description: "Wow testy",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png",
          studio_id: 1,
          character_count: 4,
        });
      });
      test("400 - bad request", async () => {
        const cartoon_id = "cheese";
        const { body } = await request(app)
          .get(`/api/cartoons/${cartoon_id}`)
          .expect(400);
        const { msg } = body;

        expect(msg).toBe("Bad request!");
      });
      test("404 - review not found", async () => {
        const cartoon_id = 123456;
        const { body } = await request(app)
          .get(`/api/cartoons/${cartoon_id}`)
          .expect(404);
        const { msg } = body;

        expect(msg).toBe("Cartoon not found!");
      });
    });
    describe("GET more cartoons", () => {
      test("GET all cartoons", async () => {
        const { body } = await request(app).get("/api/cartoons").expect(200);
        const { cartoons } = body;

        expect(Array.isArray(cartoons.cartoons)).toBe(true);
        expect(cartoons.cartoons.length).toBe(10);
        cartoons.cartoons.forEach((cartoon: Returned_Cartoon) => {
          expect(cartoon).toEqual(
            expect.objectContaining({
              cartoon_id: expect.any(Number),
              name: expect.any(String),
              votes: expect.any(Number),
              created_at: expect.any(String),
              description: expect.any(String),
              img_url: expect.any(String),
              studio_id: expect.any(Number),
              character_count: expect.any(Number),
              full_count: expect.any(Number),
            })
          );
        });
      });
      test("GET all cartoons by studio_id", async () => {
        const studio_id = 2;
        const { body } = await request(app)
          .get(`/api/cartoons?studio_id=${studio_id}`)
          .expect(200);

        const { cartoons } = body;

        expect(
          cartoons.cartoons.every(
            (cartoon: Returned_Cartoon) => cartoon.studio_id === 2
          )
        ).toBe(true);
        expect(cartoons.cartoons.length).toBe(3);
      });
      test("GET cartoons sorted ASC by VOTES", async () => {
        const sort_by = "votes";
        const order_by = "asc";

        const { body } = await request(app)
          .get(`/api/cartoons?sort_by=${sort_by}&order_by=${order_by}`)
          .expect(200);

        const { cartoons } = body;

        const newCartoons = [...cartoons.cartoons];

        const sortedCartoons = newCartoons.sort(
          (a: Returned_Cartoon, b: Returned_Cartoon) => a.votes - b.votes
        );

        expect(sortedCartoons).toEqual(cartoons.cartoons);
      });
      test("GET cartoons 2 per page", async () => {
        const { body } = await request(app)
          .get(`/api/cartoons?limit=2`)
          .expect(200);

        const { cartoons } = body;
        expect(cartoons.cartoons.length).toBe(2);
        expect(cartoons.currentPage).toBe(1);
        expect(cartoons.pageTotal).toBe(5);
      });
      test("GET cartoons 3 per page, page 2", async () => {
        const { body } = await request(app)
          .get(`/api/cartoons?limit=3&page=2`)
          .expect(200);

        const { cartoons } = body;
        expect(cartoons.cartoons.length).toBe(3);
        expect(cartoons.currentPage).toBe(2);
        expect(cartoons.pageTotal).toBe(4);
      });
      test("400 - Invalid sort_by query", async () => {
        const sort_by = "cheese";
        const { body } = await request(app)
          .get(`/api/cartoons?sort_by=${sort_by}`)
          .expect(400);
        const { msg } = body;
        expect(msg).toBe("Invalid sort_by query: cheese");
      });
      test("400 - invalid studio_id", async () => {
        const studio_id = "cheese";
        const { body } = await request(app).get(
          `/api/cartoons?studio_id=${studio_id}`
        );
        const { msg } = body;
        expect(msg).toBe("Bad request!");
      });
      test("404 - studio_id doesn't exist", async () => {
        const studio_id = 12345;
        const { body } = await request(app)
          .get(`/api/cartoons?studio_id=${studio_id}`)
          .expect(404);
        const { msg } = body;
        expect(msg).toBe("Studio does not exist!");
      });
      test("400 - invalid page/limit", async () => {
        const page = "cheese";
        const { body } = await request(app)
          .get(`/api/cartoons?page=${page}`)
          .expect(400);

        const { msg } = body;
        expect(msg).toBe("Bad request!");
      });
      test("404 - invalid page/limit", async () => {
        const page = 12345;
        const { body } = await request(app)
          .get(`/api/cartoons?page=${page}`)
          .expect(404);

        const { msg } = body;
        expect(msg).toBe("Not found!");
      });
    });
  });
  describe("POST new cartoon", () => {
    test("201 - Cartoon created", async () => {
      const newCartoon = {
        name: "Testy new cartoon",
        description: "Wow",
        img_url: "www.google.com",
        studio_id: 2,
      };

      const { body } = await request(app)
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
    });
    test("400 - Bad Request - things missing", async () => {
      const newCartoon = {
        name: "Testy new cartoon",
        description: "Wow",
        img_url: "www.google.com",
        // studio_id: 2,
      };

      const { body } = await request(app)
        .post("/api/cartoons")
        .send(newCartoon)
        .expect(400);

      const { msg } = body;
      expect(msg).toBe("Field studio_id cannot be null!");
    });
  });
  describe("PATCH cartoons", () => {
    test("201 - Good", async () => {
      const inc_votes = 2;
      const cartoon_id = 2;

      const { body } = await request(app)
        .patch(`/api/cartoons/${cartoon_id}`)
        .send({ inc_votes })
        .expect(201);

      const { cartoon } = body;

      expect(cartoon.votes).toBe(36);
    });
  });
});
