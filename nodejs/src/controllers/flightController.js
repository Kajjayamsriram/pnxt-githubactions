const flights = require("../data/flights");

const getFlights = (req, res) => {
  res.json(flights);
};

const searchFlights = (req, res) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.status(400).json({
      message: "from and to are required"
    });
  }

  const results = flights.filter(
    flight =>
      flight.from.toLowerCase() === from.toLowerCase() &&
      flight.to.toLowerCase() === to.toLowerCase()
  );

  res.json(results);
};

module.exports = {
  getFlights,
  searchFlights
};