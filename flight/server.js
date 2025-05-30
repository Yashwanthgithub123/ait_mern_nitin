const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const flightController = require('./flightcontroller');

const app = express();
const mongoURI = 'mongodb://localhost:27017/nithin_db';  // You can reuse the same DB

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// Routes with Error Handling
app.post('/flights', async (req, res) => {
    try {
        await flightController.createFlight(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

app.get('/flights', async (req, res) => {
    try {
        await flightController.getAllFlights(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});