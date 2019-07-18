import req from 'supertest';
import server from "../server";

describe('Comportamento do usuário', () => {
    test("Hello node test", async (done) => {
        const res = await req(server).get("/hello");
            expect(res.text).toBe("Hello node!");
        done();
    });

    test("Deverá ser possível incluir usuário.",  (done) => {
        req(server).post("/user")
            .send({name: 'testeNome', email: 'teste@teste.com.br'})
            .expect(201);
        done();
    });
});