const request = require("supertest");

const app = require("../server");

describe("Booking APIs", () => {

    test("Create flight booking", async () => {

        const response = await request(app)
            .post("/api/bookings")
            .send({
                type: "flight",
                itemId: 1,
                customerName: "John",
                email: "john@example.com"
            });

        expect(response.statusCode)
            .toBe(201);

        expect(response.body.message)
            .toBe("Booking created successfully");

        expect(response.body.booking.status)
            .toBe("CONFIRMED");
    });


    test("Create hotel booking", async () => {

        const response = await request(app)
            .post("/api/bookings")
            .send({
                type: "hotel",
                itemId: 1,
                customerName: "John",
                email: "john@example.com"
            });

        expect(response.statusCode)
            .toBe(201);

        expect(response.body.booking.type)
            .toBe("hotel");
    });


    test("Booking should fail without customer information", async () => {

        const response = await request(app)
            .post("/api/bookings")
            .send({
                type: "flight",
                itemId: 1
            });

        expect(response.statusCode)
            .toBe(400);

        expect(response.body.message)
            .toContain("required");
    });


    test("Booking should fail for invalid item", async () => {

        const response = await request(app)
            .post("/api/bookings")
            .send({
                type: "flight",
                itemId: 999,
                customerName: "John",
                email: "john@example.com"
            });

        expect(response.statusCode)
            .toBe(404);
    });


    test("GET bookings should return bookings", async () => {

        const response = await request(app)
            .get("/api/bookings");

        expect(response.statusCode)
            .toBe(200);

        expect(Array.isArray(response.body))
            .toBe(true);
    });

});