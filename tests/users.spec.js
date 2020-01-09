const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");

beforeEach(() => db.seed.run());

describe("Users", () => {
  it("get all users", async () => {
    const res = await request(server).get("/users");
    expect(res.status).toBe(200);
    expect(res.body[1]).toEqual({
      id: 2,
      username: "mara",
      email: "mara@mara.org",
      city: "philly",
      state: "PA"
    });
  });

  it("get user by id", async () => {
    const res = await request(server).get("/users/1");
    expect(res.status).toBe(200);
    expect(res.body.username).toBe("rasha");
  });

  it("edit user", async () => {
    const res = await request(server)
      .put("/users/2")
      .send({
        email: "mara@mara.com"
      });
  });

  it("delete user", async () => {
    const res = await request(server).delete("/users/2");
    expect(res.status).toBe(200);
  });
});
