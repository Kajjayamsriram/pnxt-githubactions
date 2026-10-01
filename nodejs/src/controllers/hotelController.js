const hotels = require("../data/hotels");

const getHotels = (req, res) => {
    res.status(200).json(hotels);
};

const searchHotels = (req, res) => {
    const { city } = req.query;

    let results = hotels;

    if (city) {
        results = hotels.filter(
            hotel =>
                hotel.city.toLowerCase() === city.toLowerCase()
        );
    }

    res.status(200).json({
        count: results.length,
        hotels: results
    });
};

module.exports = {
    getHotels,
    searchHotels
};