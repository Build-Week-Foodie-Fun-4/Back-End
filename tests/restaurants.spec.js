const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");
const authenticate = require("../middleware/authenticate-middleware");
jest.mock("../middleware/authenticate-middleware");

beforeEach(() => db.seed.run());

describe("restaurants", () => {
  it("get all user's restaurants", async () => {
    const res = await request(server).get("/user/2/restaurants");
    expect(res.status).toEqual(200);
  });
});
