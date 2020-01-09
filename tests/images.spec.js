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

//     .post('/api/v1/documentations/upload')           // Attach the file with key 'file' which is corresponding to your endpoint setting.
//     .attach('file', filePath)
//     .then((res) => {
//       const { success, message, filePath } = res.body;
//       expect(success).toBeTruthy();
//       expect(message).toBe('Uploaded successfully');
//       expect(typeof filePath).toBeTruthy();            // store file data for following tests
//       testFilePath = filePath;
//     })
//     .catch(err => console.log(err));
// })
