import { beforeEach, describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";
import cleardb from "./helpers/reset-db";


// BEFORE EACH-> RUNS BEFORE EACH INDIVIDUAL CALL ( 2 tests -> runs twice)
// BEFORE ALL-> RUNS BEFORE ALL THE TESTS FOR ONCE  (2 tests -> runs once)
describe("POST /sum", () => {
    beforeEach(async () => {
        console.log("clearing db");
        await cleardb();
    });

    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });

    it("should sum add 2 negative numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: -1,
            b: -2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: -3, id: expect.any(Number) });
    });
})


// import { beforeAll, beforeEach, describe, expect, it } from "vitest";
// import { app } from "..";
// import request from "supertest";
// import resetDb from "./helpers/reset-db";

// describe("POST /sum", () => {
//     beforeAll(async () => {
//         console.log("clearing db");
//         await resetDb();
//     });

//     it("should sum add 2 numbers", async () => {
//         const { status, body } = await request(app).post('/sum').send({
//             a: 1,
//             b: 2
//         })
//         expect(status).toBe(200);
//         expect(body).toEqual({ answer: 3, id: expect.any(Number) });
//     });

//     it("should sum add 2 negative numbers", async () => {
//         const { status, body } = await request(app).post('/sum').send({
//             a: -1,
//             b: -2
//         })
//         expect(status).toBe(200);
//         expect(body).toEqual({ answer: -3, id: expect.any(Number) });
//     });
// })