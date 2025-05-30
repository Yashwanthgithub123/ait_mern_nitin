const Flight = require('./models/flightModel');

// Create a flight
exports.createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body);
        const savedFlight = await flight.save();
        res.status(201).json(savedFlight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all flights
exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};