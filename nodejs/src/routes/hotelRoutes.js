const express = require("express");

const {
    getHotels,
    searchHotels
} = require("../controllers/hotelController");

const router = express.Router();

router.get("/", getHotels);

router.get("/search", searchHotels);

module.exports = router;