const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    location: { type: String, trim: true },
    age: { type: Number, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Person', personSchema);