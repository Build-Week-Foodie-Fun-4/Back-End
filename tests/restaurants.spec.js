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

  it("adds a restaurant", async () => {
    const res = await request(server)
      .post("/user/1/restaurants")
      .send({
        user_id: 1,
        restaurant_name: "Occhato",
        city: "philly",
        state: "PA",
        zip: "19143",
        street_address: "Chestnut st",
        cuisine: "Sushi"
      });
    expect(res.status).toBe(201);
  });

  it("gets restaurant by id", async () => {
    const res = await request(server).get("/user/1/restaurants/1");
    expect(res.status).toBe(200);
  });
});
