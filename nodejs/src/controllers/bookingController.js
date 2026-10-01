const flights = require("../data/flights");
const hotels = require("../data/hotels");

const bookings = [];

const createBooking = (req, res) => {

    const {
        type,
        itemId,
        customerName,
        email
    } = req.body;

    if (!type || !itemId || !customerName || !email) {
        return res.status(400).json({
            message:
                "type, itemId, customerName and email are required"
        });
    }

    let item;

    if (type === "flight") {
        item = flights.find(
            flight => flight.id === Number(itemId)
        );
    }

    if (type === "hotel") {
        item = hotels.find(
            hotel => hotel.id === Number(itemId)
        );
    }

    if (!item) {
        return res.status(404).json({
            message: "Flight or hotel not found"
        });
    }

    const booking = {
        bookingId: `TB-${Date.now()}`,
        type,
        item,
        customerName,
        email,
        status: "CONFIRMED",
        createdAt: new Date().toISOString()
    };

    bookings.push(booking);

    res.status(201).json({
        message: "Booking created successfully",
        booking
    });
};

const getBookings = (req, res) => {
    res.status(200).json(bookings);
};

module.exports = {
    createBooking,
    getBookings
};