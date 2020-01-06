const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");
const restaurantsRouter = require("../api/restaurants/restaurants-router");
const authenticate = require("../middleware/authenticate-middleware"); // put in router that needs authentication

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/user/:id/restaurants", restaurantsRouter);

server.get("/", (req, res) => {
  res.send("Hello from the api");
});

module.exports = server;
