import req from 'supertest';
import server from "../server";

let schemaValidUser = {name: 'testePost', email: 'testePost@teste.com.br'};
let schemaWithoutEmail = {email: 'testePost@teste.com.br'};
let schemaWithoutName = {name: 'testePost'};

describe('Comportamento o usuário', () => {
    test("Deverá ser possível incluir usuário.", (done) => {
        req(server).post("/user")
            .send(schemaValidUser)
            .expect(201);
        done();
    });
    test("Deverá ser possível buscar usuário.", (done) => {
        req(server).post("/user").send(schemaValidUser);
        req(server).get("/user")
            .expect(200);
        done();
    });
    test("Não deverá ser possível incluir usuário sem email", (done) => {
        req(server).post("/user").send(schemaWithoutEmail)
            .expect(400);
        done();
    });
    test("Não deverá ser possível incluir usuário sem name", (done) => {
        req(server).post("/user").send(schemaWithoutName)
            .expect(400);
        done();
    });
    test("Não deverá ser possível incluir usuário body nulo", (done) => {
        req(server).post("/user").send(null)
            .expect(400);
        done();
    });

});