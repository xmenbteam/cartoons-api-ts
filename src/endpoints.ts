export const endPoints = {
  API: {
    "GET /api": {
      description: "All available endpoints",
    },
  },
  USERS: {
    "GET /api/users": {
      description: "serves an array of all users' usernames",
      queries: [],
      exampleResponse: {
        users: [
          { username: "butter_bridge" },
          { username: "icellusedkars" },
          { username: "rogersop" },
          { username: "lurker" },
        ],
      },
    },
    "GET /api/users/:username": {
      description: "serves an object of a user with the given username",
      queries: [],
      exampleRequest: "/api/users/coder123",
      exampleResponse: {
        username: "coder123",
        name: "Cody",
        avatar_url: "https://avatar.url",
      },
    },
    "POST /api/users/:username": {
      description:
        "accepts a body of username, name, and avatar_url and responds with the object in response",
      exampleRequest: {
        username: "sample",
        name: "sam",
        avatar_url: "http://www.google.com",
      },
      exampleResponse: {
        username: "sample",
        name: "sam",
        avatar_url: "http://www.google.com",
      },
    },
  },
  STUDIOS: {
    "GET /api/studios": {
      description:
        "Serves an object containing an array of all studios, the current page, number of items per page, and total number of pages. Serves back default 10 per page sorted by studio_id asc",
      queries: ["sort_by", "order_by", "limit", "page"],
      exampleResponse: {
        studios: [
          {
            studio_id: 1,
            name: "Studio 1",
            img_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
            description: "Great",
            votes: 3,
            cartoon_count: 2,
          },
        ],
        currentPage: 1,
        studiosPerPage: 10,
        pageTotal: 1,
      },
    },
    "GET /api/studios/:studio_id": {
      description: "Serves a single studio",
      queries: [],
      exampleResponse: {
        studio: {
          studio_id: 1,
          name: "Studio 1",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
          description: "Great",
          votes: 3,
          cartoon_count: 2,
        },
      },
    },
    "GET /api/studios/:studio_id/cartoons": {
      description:
        "Serves an array of all cartoons with the corresponding studio_id",
      exampleResponse: {
        cartoons: [
          {
            cartoon_id: 7,
            name: "Test Cartoon 7",
            votes: 100,
            created_at: "1995-02-26T00:00:07.800Z",
            description: "Wow testy",
            img_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png",
            studio_id: 3,
            character_count: 3,
            full_count: 10,
          },
        ],
        currentPage: 1,
        cartoonsPerPage: 10,
        pageTotal: 1,
      },
    },
    "POST /api/studios": {
      description: "Accepts a body and posts a new studio",
      exampleRequest: {
        name: "New Studio",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
      },
      exampleResponse: {
        name: "New Studio",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
        votes: 0,
        studio_id: 4,
      },
    },
    "PATCH /api/studios/:studio_id": {
      description:
        "acceps a body of inc_votes and updates the votes on each studio",
      exampleRequest: { inc_votes: 2 },
      exampleResponse: {
        name: "New Studio",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/200px-Cartoon_Network_2010_logo.svg.png",
        description: "Great",
        votes: 0,
        studio_id: 4,
      },
    },
    "DELETE /api/studios/:studio_id": {
      description: "Deletes studio by id. Nothing returned.",
    },
  },
  CARTOONS: {
    "GET /api/cartoons": {
      description:
        "Serves an object containing an array of all cartoons, the current page, number of items per page, and total number of pages. Serves back default 10 per page sorted by studio_id asc",
      queries: ["sort_by", "order_by", "limit", "page"],
      exampleResponse: {
        cartoons: [
          {
            cartoon_id: 5,
            name: "Test Cartoon 5",
            votes: 90,
            created_at: "1995-02-21T08:53:20.000Z",
            description: "Wow testy",
            img_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png",
            studio_id: 2,
            character_count: 2,
            full_count: 3,
          },
        ],
        currentPage: 1,
        studiosPerPage: 10,
        pageTotal: 1,
      },
    },
    "GET /api/cartoons/:cartoon_id": {
      description: "Serves a single cartoon",
      exampleResponse: {
        cartoon_id: 5,
        name: "Test Cartoon 5",
        votes: 90,
        created_at: "1995-02-21T08:53:20.000Z",
        description: "Wow testy",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png",
        studio_id: 2,
        character_count: 2,
      },
    },
    "GET /api/cartoons/:cartoon_id/comments": {
      description:
        "Serves an object containing an array of comments matching the corresponding cartoon_id, the current page, number of items per page, and total number of pages. Serves back default 10 per page sorted by created_at asc ",
      exampleResponse: {
        comments: [
          {
            comment_id: 37,
            author: "sirkevlar",
            cartoon_id: 1,
            body: "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
            votes: 22,
            created_at: "2021-03-22T18:50:26.000Z",
            full_count: 2,
          },
        ],
        currentPage: 1,
        commmentsPerPage: 10,
        pageTotal: 1,
      },
    },
    "PATCH /api/cartoons/:cartoon_id": {
      description: "Accepts a body of inc_votes to update votes property",
      exampleBody: { inc_votes: 3 },
      exampleResponse: {
        cartoon_id: 5,
        name: "Test Cartoon 5",
        votes: 90,
        created_at: "1995-02-21T08:53:20.000Z",
        description: "Wow testy",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png",
        studio_id: 2,
        character_count: 2,
        full_count: 3,
      },
    },
    "POST /api/cartoons": {
      description:
        "Accepts a body of a new cartoon and returns the new cartoon",
      exampleRequest: {
        name: "Testy new cartoon",
        description: "Wow",
        img_url: "www.google.com",
        studio_id: 2,
      },
      exampleResponse: {
        name: "Testy new cartoon",
        description: "Wow",
        img_url: "www.google.com",
        studio_id: 2,
        votes: 0,
        created_at: "SOME DATE",
        cartoon_id: 11,
      },
    },
    "DELETE /api/cartoon/:cartoon_id": {
      description: "Deletes cartoon by id. Nothing returned.",
    },
  },
  CHARACTERS: {
    "GET /api/characters": {
      description:
        "Serves an object containing an array of all characters, the current page, number of items per page, and total number of pages. Serves back default 10 per page sorted by character_id asc",
      queries: ["sort_by", "order_by", "limit", "page"],
      exampleResponse: {
        characters: [
          {
            character_id: 12,
            name: "Test 12",
            votes: 2,
            cartoon_id: 5,
            img_url: "www.google.com",
            full_count: 30,
            cartoon_name: "Test Cartoon 5",
          },
        ],
        currentPage: 1,
        charactersPerPage: 10,
        pageTotal: 1,
      },
    },
    "GET /api/characters/:character_id": {
      description: "Serves a character",
      exampleResponse: {
        character_id: 7,
        name: "P Test 7",
        votes: 2,
        cartoon_id: 3,
        img_url: "www.google.com",
      },
    },
    "POST /api/characters": {
      description: "Posts new character",
      exampleRequest: {
        name: "Testington",
        cartoon_id: 2,
        img_url: "Hello",
      },
      exampleResponse: {
        character_id: 31,
        name: "Testington",
        votes: 0,
        cartoon_id: 2,
        img_url: "Hello",
      },
    },
    "PATCH /api/characters/:character_id": {
      description: "Updates a characters votes",
      exampleRequest: { inc_votes: 2 },
      exampleResponse: {
        character_id: 31,
        name: "Testington",
        votes: 2,
        cartoon_id: 2,
        img_url: "Hello",
      },
    },
    "DELETE /api/characters/:character_id": {
      description: "Deletes character by id. Nothing returned.",
    },
  },
  COMMENTS: {
    "GET /api/comments/:comment_id": {
      description: "Serves a comment by comment_id",
      exampleResponse: {
        comment_id: 3,
        author: "jadelandeg",
        cartoon_id: 9,
        body: "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
        votes: -97,
        created_at: "2022-02-21T20:30:29.000Z",
      },
    },
    "GET /api/comments": {
      description:
        "Serves an object containing an array of all comments, the current page, number of items per page, and total number of pages. Serves back default 10 per page sorted by comment_id asc",
      queries: ["sort_by", "order_by", "limit", "page"],
      exampleResponse: {
        comments: [
          {
            comment_id: 11,
            author: "sirkevlar",
            cartoon_id: 3,
            body: "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
            votes: 5,
            created_at: "2020-12-27T23:15:01.000Z",
            full_count: 40,
          },
        ],
        currentPage: 1,
        commmentsPerPage: 10,
        pageTotal: 4,
      },
    },
    "POST /api/comments": {
      description:
        "Accepts a body and returns a new comment. author/cartoon_id must be valid",
      exampleRequest: {
        cartoon_id: 1,
        body: "This is a comment",
        author: "xmenbteam",
      },
      exampleResponse: {
        cartoon_id: 1,
        body: "This is a comment",
        author: "xmenbteam",
        comment_id: 41,
        votes: 0,
        created_at: "DATE",
      },
    },
    "PATCH /api/comments": {
      description: "Updates comment vote by comment_id",
      exampleRequest: { inc_votes: 2 },
      exampleResponse: {
        cartoon_id: 1,
        body: "This is a comment",
        author: "xmenbteam",
        comment_id: 41,
        votes: 2,
        created_at: "DATE",
      },
    },
    "DELETE /api/comments/:comment_id": {
      description: "Deletes comment by id. Nothing returned.",
    },
  },
};
