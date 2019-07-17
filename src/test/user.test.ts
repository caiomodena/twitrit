import req from 'supertest';
import server from "../server";

test("Devera criar o usuário", async () => {
    const res = await req(server).post("/user")
        .send({
        name: 'alex',
        email: 'alexsandro@teste.com.br'
    })
        .set('Accept', 'application/json')
        .expect(201);
});
