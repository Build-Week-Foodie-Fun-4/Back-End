const server = require("../api/server");
const request = require("supertest");
const db = require("../database/db-config");
const authenticate = require("../middleware/authenticate-middleware");
jest.mock("../middleware/authenticate-middleware");

let testFilePath = null;

describe("images", () => {
  const filePath = "./public/test-upload/test-img.jpg";
  it("should upload the dishes test file to the uploads folder", async () => {
    const res = await request(server)
      .post("/upload/dishes/1")
      .attach("image", filePath);
    expect(res.status).toBe(201);
  });
});
