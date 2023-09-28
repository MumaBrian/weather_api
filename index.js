// src/app.js
const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weatherRoutes');

app.use(express.json());

// Routes
app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
