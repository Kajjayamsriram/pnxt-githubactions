const express = require("express");
const cors = require("cors");
const path = require("path");

const flightRoutes = require("./src/routes/flightRoutes");
const hotelRoutes = require("./src/routes/hotelRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "Travel Booking Application"
    });
});

app.use("/api/flights", flightRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}