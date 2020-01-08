const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");
const uploadRouter = require("../api/images/images-router");
const restaurantsRouter = require("../api/restaurants/restaurants-router");
const restricted = require("../middleware/authenticate-middleware");

const server = express();

// Public folder for images
server.use(express.static("./public"));

server.use(helmet());
server.use(
  cors({
    credentials: true,
    origin: "https://foodie-fun-4.firebaseapp.com/",
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.options("*", cors());
server.use(express.json());
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/user", restricted, restaurantsRouter);
server.use("/upload", uploadRouter);

server.get("/", (req, res) => {
  res.send("Hello from the api");
});

module.exports = server;
