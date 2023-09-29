require('dotenv').config();
const express = require('express');
const app = express();
const weatherRoutes = require('./src/routes/weatherRoutes');
const geolocation=require('./src/routes/geolocationRoutes')
const connectDB = require('./src/db/connect');



app.use(express.json());

// Routes
app.use('/weather', weatherRoutes);
app.use('/geolocation', geolocation);

const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
