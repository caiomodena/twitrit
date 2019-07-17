import req from 'supertest';

import server from "../server";
test("Hello node test", async () => {
    const res = await req(server).get("/hello");
    expect(res.text).toBe("Hello node!");
});
