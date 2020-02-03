const request = require('supertest'); 
const server = require('../api/server');
const db = require('../database/dbConfig');


describe('auth-router', () => {
    describe('POST /auth/register', () => {

        beforeEach(async () => {
          await db('users')
          .truncate();
        });

         it('Should register a new user', () => {
            return request(server)
            .post('/auth/register')
            .send({
            "username": "Raymond",
            "password": "test23"
            })
            .then(res => {
            expect(res.status).toBe(201);
            })
        })

        it('Should return a JSON object', () => {
          return request(server)
          .post('/users/register')
          .send({
              "username": "Raymond",
              "password": "test23"
          })
          .then(res => {
          expect(res.type).toMatch(/json/i);
          });
        });
    })
})