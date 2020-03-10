const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the LockBox API...' }));


// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/passwords', require('./routes/passwords'));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));