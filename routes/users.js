const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const { check } = require('express-validator');

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.route('/')
  .post([
    // Validation checks on user input using express-validator
    check('name', 'Please add a name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email')
      .isEmail(),
    check('masterPassword', 'Please enter a password with 6 or more characters')
      .isLength({ min: 6 })
  ], usersController.create);


module.exports = router;