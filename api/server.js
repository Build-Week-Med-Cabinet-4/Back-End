const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const verify = require("../auth/authenticate-middleware")

const Responses = require("../responses/responses-model");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("CONGRATULATIONS, THIS ENDPOINT DOES NOTHING!");
});

server.get("/api/responses", (request, response) => {
  Responses.get()
    .then((allResponses) => {
      response.status(200).json({
        note: "This endpoint IS pulling from a live database, but CRUD is not yet supported. This endpoint will also require authentication in the future.",
        foundResponses: Object.values(allResponses)
      })
    })
})

module.exports = server;