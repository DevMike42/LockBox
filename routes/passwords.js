const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Password = require('../models/Password');

// @route     GET api/passwords
// @desc      Get all users passwords
// @access    Private
router.get('/', auth, async (req, res) => {
  // res.send('Get all passwords');
  try {
    const passwords = await Password.find({ user: req.user.id }).sort({ date: -1 });
    res.json(passwords);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/passwords
// @desc      Add new password
// @access    Private
router.post('/', (req, res) => {
  res.send('Add password');
});

// @route     PUT api/passwords/:id
// @desc      Update password
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update password');
});

// @route     DELETE api/passwords/:id
// @desc      Delete password
// @access    Public
router.delete('/:id', (req, res) => {
  res.send('Delete password');
});


module.exports = router;