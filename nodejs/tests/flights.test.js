const request = require("supertest");

const app = require("../server");

describe("Flight APIs", () => {

    test("GET /api/flights should return flights", async () => {

        const response = await request(app)
            .get("/api/flights");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body))
            .toBe(true);

        expect(response.body.length)
            .toBeGreaterThan(0);
    });


    test("Search Hyderabad to Delhi flight", async () => {

        const response = await request(app)
            .get("/api/flights/search")
            .query({
                from: "Hyderabad",
                to: "Delhi"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.count)
            .toBeGreaterThan(0);

        expect(response.body.flights[0].from)
            .toBe("Hyderabad");

        expect(response.body.flights[0].to)
            .toBe("Delhi");
    });


    test("Search invalid route", async () => {

        const response = await request(app)
            .get("/api/flights/search")
            .query({
                from: "Chennai",
                to: "Kolkata"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.count)
            .toBe(0);
    });

});