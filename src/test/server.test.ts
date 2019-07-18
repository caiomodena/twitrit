import req from 'supertest';
import server from "../server";

describe('Comportamento do usuário', () => {
    test("Hello node test", async () => {
        const res = await req(server).get("/hello");
            expect(res.text).toBe("Hello node!");
    });

    test("Deverá ser possível incluir usuário.", async () => {
        req(server).post("/user")
            .send({name: 'testeNome', email: 'teste@teste.com.br'})
            .expect(201)
    });
}