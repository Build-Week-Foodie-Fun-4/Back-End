const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");

//clears the tables before each test
beforeEach(() => db.seed.run());

describe("GET /user/:id/restaurants", () => {
  describe("getUserRestaurants", () => {
    it("should return an array of user's restaurants", async () => {
      const res = request(server).get("user/1/restaurants");
      expect(res.status).toEqual(200);
    });
  });
});
