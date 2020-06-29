require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  create: async (req, res) => {
    // Checks if validation checks are empty
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure needed input from req.body
    const { name, email, masterPassword } = req.body;

    try {
      // Check if email is already in db
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Create new instance of a User
      user = new User({
        name,
        email,
        masterPassword
      });

      // Generate a salt for hashing masterPassword
      const salt = await bcrypt.genSalt(10);

      // Hash masterPassword using bcryptjs to be stored in DB
      user.masterPassword = await bcrypt.hash(masterPassword, salt);

      // Save user to DB
      await user.save();

      // Store user id in jwt payload
      const payload = {
        user: {
          id: user.id
        }
      };

      // Add payload and jwtSecret to token and send back
      jwt.sign(payload, JWT_SECRET, {
        expiresIn: 36000
      }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      })

    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }
};