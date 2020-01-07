const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");
const restaurantsRouter = require("../api/restaurants/restaurants-router");
const restricted = require("../middleware/authenticate-middleware");

const server = express();

server.use(helmet());
server.use(
  cors({ credentials: true, origin: "https://foodie-fun-4.firebaseapp.com/" })
);
server.use(express.json());
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/user", restricted, restaurantsRouter);

server.get("/", (req, res) => {
  res.send("Hello from the api");
});

module.exports = server;
