const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const responseRouter = require("../responses/responses-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use("/api/responses", responseRouter);

server.get('/', (req, res) => {
  res.send("cONGRATULATIONS, THIS ENDPOINT DOES NOTHING!");
});

module.exports = server;