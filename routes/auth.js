const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
  // Finds user using auth middleware by searching req.user.id
  // and returns user without masterPassword
  try {
    const user = await User.findById(req.user.id).select('-masterPassword');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post('/', [
  check('email', 'Please include a valide email')
    .isEmail(),
  check('masterPassword', 'Password is required')
    .exists()
],
  async (req, res) => {
    // Checks if validation checks are empty
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure email & masterPassword from req.body
    const { email, masterPassword } = req.body;

    // Check if user is registered
    try {
      let user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials: A user with that email does not exist' });
      }

      // If registered > check if masterPassword input matches stored data
      const isMatch = await bcrypt.compare(masterPassword, user.masterPassword);

      // If masterPassword is incorrect > send error message
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials: Password is incorrect' });
      }

      // If registers and password matches > login and return token
      // Store user id in jwt payload
      const payload = {
        user: {
          id: user.id
        }
      };

      // Add payload and jwtSecret to token and send back
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 36000
      }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  });

module.exports = router;