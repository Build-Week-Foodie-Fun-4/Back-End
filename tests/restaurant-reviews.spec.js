const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");
const authenticate = require("../middleware/authenticate-middleware");
jest.mock("../middleware/authenticate-middleware");

beforeEach(() => db.seed.run());

describe("restaurant_reviews", () => {
  it("adds a restaurant review", async () => {
    const res = await request(server)
      .post("/user/1/restaurants/1/reviews")
      .send({
        restaurant_id: "1",
        visit_date: "January 7, 2020",
        restaurant_review: "so so",
        restaurant_rating: 3
      });
    expect(res.status).toBe(201);
  });

  it("gets review by restaurant id", async () => {
    const res = await request(server).get("/user/1/restaurants/1/reviews");
    expect(res.status).toBe(200);
  });
});
