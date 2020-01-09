const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");

beforeEach(() => db.seed.run());

describe("authentication", () => {
  it("registers a user", async () => {
    const res = await request(server)
      .post("/auth/register")
      .send({
        username: "Maxy",
        email: "maxy@max.org",
        password: "123456",
        city: "philly",
        state: "PA"
      });
    expect(res.status).toBe(201);
  });

  it("logs in registered user", async () => {
    const res = await request(server)
      .post("/auth/login")
      .send({ username: "Maxy", password: "123456" });
    expect(res.status).toBe(200);
  });
});
