import req from 'supertest';

import server from "../server";
test("[GET] /", async () => {
    const res = await req(server).get("/hello");
    expect(res.text).toBe("Hello node!");
});