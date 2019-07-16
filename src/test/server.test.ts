import req from 'supertest';

import server from "../server";
test("Hello node test", async () => {
    const res = await req(server).get("/hello");
    expect(res.text).toBe("Hello node!");
});

test("Deverá ser possível incluir usuário.", async () => {
    const res = await req(server).post("/user")
        .send({name: 'alexsandro'})
        .expect('teste')


    //expect(res.text).toBe("Hello node!");
});