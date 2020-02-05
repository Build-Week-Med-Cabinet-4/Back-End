const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


/// REGISTER
describe('auth-router', () => {
  describe('POST /api/auth/register', () => {

    beforeEach(async () => {
      await db('users')
        .truncate();
    });

    it('Should register a new user', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          "username": "Raymond",
          "password": "test23",
          "full_name": "RUTUTU RUTUTU RUTUTU that's the sound of a goblin charging you with his big axe",
          "email": "gobbo@mordor.shadow"
        })
        .then(res => {
          expect(res.status).toBe(201);
        })
    })

    it('Should return a JSON object', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          "username": "Raymond",
          "password": "test23",
          "full_name": "RUTUTU RUTUTU RUTUTU that's the sound of a goblin charging you with his big axe",
          "email": "gobbo@mordor.shadow"
        })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  })


  // LOGIN

  describe('POST /api/auth/login', () => {

    it('Should result in a successful login', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: "Raymond",
          password: "test23"
        })
        .then(res => {
          expect(res.status).toBe(200);
        })
    });

    it('Should returns JSON', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: "Raymond",
          password: "test23"
        })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
})
