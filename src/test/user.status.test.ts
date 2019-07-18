import req from 'supertest';
import server from "../server";

let validUser = {name: 'testePost', email: 'testePost@teste.com.br'};
let userWithoutEmail = {email: 'testePost@teste.com.br'};
let userWithoutName = {name: 'testePost'};

describe('Códigos de Status dos recursos do usuário', () => {
    test("Deverá ser possível incluir usuário.(201)", (done) => {
        req(server).post("/user")
            .send(validUser)
            .then((response) => {
                expect(response.status).toBe((201));
                done();
            });
    });
    test("Deverá ser possível buscar usuário.(200)", (done) => {
        req(server).post("/user").send(validUser);
        req(server).get("/user")
            .then((response) => {
                expect(response.status).toBe((200));
                done();
            });
    });
    test("Não deverá ser possível incluir usuário sem email.(400)", (done) => {
        req(server).post("/user").send(userWithoutEmail)
            .then((response) => {
                expect(response.status).toBe(400);
                done();
            });
    });
    test("Não deverá ser possível incluir usuário sem name.(400)", (done) => {
        req(server).post("/user").send(userWithoutName)
            .then((response) => {
                expect(response.status).toBe(400);
                done();
            });
    });
    test("Não deverá ser possível incluir usuário body nulo.(400)", (done) => {
        req(server).post("/user").send(null)
            .then((response) => {
                expect(response.status).toBe(400);
                done();
            });
    });
});