const express = require("express");

const {
    getFlights,
    searchFlights
} = require("../controllers/flightController");

const router = express.Router();

router.get("/", getFlights);

router.get("/search", searchFlights);

module.exports = router;