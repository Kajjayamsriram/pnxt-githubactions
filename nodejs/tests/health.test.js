const request = require("supertest");

const app = require("../server");

describe("Health API", () => {

    test("GET /api/health should return UP", async () => {

        const response = await request(app)
            .get("/api/health");

        expect(response.statusCode).toBe(200);

        expect(response.body.status)
            .toBe("UP");

        expect(response.body.application)
            .toBe("Travel Booking Application");
    });

});