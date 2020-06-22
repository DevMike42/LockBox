const express = require('express');
const connectDB = require('./config/db');

// Initialize express
const app = express();

// Connect MongoDB
connectDB();

// Init Middleware to accept json data in req.body
app.use(express.json({ extended: false }));

// Root endpoint
app.get('/', (req, res) => res.json({ msg: 'Welcome to the LockBox API...' }));


// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/passwords', require('./routes/passwords'));

// Sets PORT to environment variable for production / 5050 for dev
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));