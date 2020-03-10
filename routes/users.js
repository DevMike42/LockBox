const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post('/', [
  // Validation checks on user input using express-validator
  check('name', 'Please add a name')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email')
    .isEmail(),
  check('masterPassword', 'Please enter a password with 6 or more characters')
    .isLength({ min: 6 })
], async (req, res) => {
  // Checks if validation checks are empty
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure needed input from req.body
  const { name, email, masterPassword, passwordReminder } = req.body;

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
      masterPassword,
      passwordReminder
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
    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 36000
    }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    })

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;