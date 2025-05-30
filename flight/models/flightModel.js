const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    duration: { type: Number, required: true },
    fare: { type: Number, required: true },
    capacity: { type: Number, required: true }
});

module.exports = mongoose.model('Flight', flightSchema);