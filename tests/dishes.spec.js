const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");
const authenticate = require("../middleware/authenticate-middleware");
jest.mock("../middleware/authenticate-middleware");

beforeEach(() => db.seed.run());

describe("dishes", () => {
  it("adds a dish", async () => {
    const res = await request(server)
      .post("/user/1/restaurants/1/dishes")
      .send({
        restaurant_id: 1,
        dish_name: "spoohetti",
        price: "10.00",
        dish_review: "meh",
        dish_rating: 3
      });
    expect(res.status).toBe(201);
  });

  it("updates a dish", async () => {
    const res = await request(server)
      .put("/user/1/restaurants/1/dishes/1")
      .send({
        dish_review: "it was very expensive"
      });
    expect(res.status).toBe(201);
  });

  it("errors if user sent incomplete data when adding a dish", async () => {
    const res = await request(server)
      .post("/user/1/restaurants/1/dishes")
      .send({
        dish_name: "tacos",
        price: "10.00",
        dish_review: "meh",
        dish_rating: 3
      });
    expect(res.status).toBe(401);
  });

  it("errors if user adds dish that already exists for a restaurant", async () => {
    const res = await request(server)
      .post("/user/1/restaurants/1/dishes")
      .send({
        restaurant_id: 2,
        dish_name: "burger",
        price: "10.00",
        dish_review: "meh",
        dish_rating: 3
      });
    expect(res.status).toBe(401);
  });

  it("gets a dish by id", async () => {
    const res = await request(server).get("/user/1/restaurants/1/dishes/1");
    expect(res.status).toBe(200);
  });

  it("gets dishes by restaurant id", async () => {
    const res = await request(server).get("/user/1/restaurants/1/dishes");
    expect(res.status).toBe(200);
  });
});
