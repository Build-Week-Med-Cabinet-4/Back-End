const request = require("supertest");
const server = require("./server.js");

//test example
it("runs the test",()=>{
 expect(true).toBe(true);
});

describe("server.js", ()=> {
    describe("environment", ()=> {
      it("should set environment to testing", ()=> {
        expect(process.env.DB_ENV).toBe("testing");
      });
    });
});

describe("GET /", () => {
    it('Should return a 200 OK', () => {

        return request(server)
        .get("/")
        .then(res => {
            expect(res.status).toBe(200)
        });
    });
    it("should return a JSON", ()=> {
        return request(server)
            .get("/")
            .then(res => {
            expect(res.type).toMatch(/json/i);
            });
        });

        it("CONGRATULATIONS, THIS ENDPOINT DOES NOTHING!", ()=> {
            return request(server)
                .get("/")
                .then(res => {
                expect(res.body.api).toBe("CONGRATULATIONS, THIS ENDPOINT DOES NOTHING!");
                });
            });  
        });