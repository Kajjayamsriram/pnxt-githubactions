const request = require("supertest");

const app = require("../server");

describe("Hotel APIs", () => {

    test("GET /api/hotels should return hotels", async () => {

        const response = await request(app)
            .get("/api/hotels");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body))
            .toBe(true);

        expect(response.body.length)
            .toBeGreaterThan(0);
    });


    test("Search hotels in Hyderabad", async () => {

        const response = await request(app)
            .get("/api/hotels/search")
            .query({
                city: "Hyderabad"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.count)
            .toBeGreaterThan(0);

        expect(response.body.hotels[0].city)
            .toBe("Hyderabad");
    });


    test("Search hotel in invalid city", async () => {

        const response = await request(app)
            .get("/api/hotels/search")
            .query({
                city: "UnknownCity"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.count)
            .toBe(0);
    });

});