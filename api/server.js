const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../api/auth/auth-router");
const authenticate = require("../middleware/authenticate-middleware"); // put in router that needs authentication

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/auth", authRouter);

module.exports = server;
