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
router.post('/', [auth, [
  check('sitePassword', 'Site password is required').not().isEmpty(),
  check('link', 'Site link (url) is required').not().isEmpty()
]], async (req, res) => {
  // res.send('Add password');
  // Checks if validation checks are empty
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, sitePassword, link, notes } = req.body;

  try {
    const newPassword = new Password({
      name,
      sitePassword,
      link,
      notes,
      user: req.user.id
    });

    const password = await newPassword.save();

    res.json(password);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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