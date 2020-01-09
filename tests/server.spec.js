const request = require("supertest");
const server = require("../api/server");

describe("server.js", () => {
  describe("environment", () => {
    it("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /", () => {
    it("should return a 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });
});
