const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const lockBox = require('../middleware/encryption');
const { check, validationResult } = require('express-validator');

const Password = require('../models/Password');

// @route     GET api/passwords
// @desc      Get all users passwords
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const passwords = await Password.find({ user: req.user.id }).sort({ date: -1 });

    let decryptedData = [];

    passwords.forEach(item => {
      decryptedData.push({
        _id: item._id,
        name: lockBox.decrypt(item.name),
        sitePassword: lockBox.decrypt(item.sitePassword),
        link: lockBox.decrypt(item.link),
        notes: lockBox.decrypt(item.notes),
      });
    })
    res.json(decryptedData);
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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, sitePassword, link, notes } = req.body;

  try {
    const newPassword = new Password({
      name: lockBox.encrypt(name),
      sitePassword: lockBox.encrypt(sitePassword),
      link: lockBox.encrypt(link),
      notes: lockBox.encrypt(notes),
      user: req.user.id
    });

    const password = await newPassword.save();

    res.json(password);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/passwords/:id
// @desc      Find specific User password
// @access    Private
router.get('/:id', auth, async (req, res) => {

  try {
    let password = await Password.findById(req.params.id);

    // Make sure user owns password
    if (password.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    let decryptedData = {
      _id: password._id,
      name: lockBox.decrypt(password.name),
      sitePassword: lockBox.decrypt(password.sitePassword),
      link: lockBox.decrypt(password.link),
      notes: lockBox.decrypt(password.notes),
      user: password.user
    };

    res.json(decryptedData);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/passwords/:id
// @desc      Update password
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, sitePassword, link, notes } = req.body;

  // Build password object
  const passwordFields = {};
  if (name) passwordFields.name = lockBox.encrypt(name);
  if (sitePassword) passwordFields.sitePassword = lockBox.encrypt(sitePassword);
  if (link) passwordFields.link = lockBox.encrypt(link);
  if (notes) passwordFields.notes = lockBox.encrypt(notes);

  try {
    let password = await Password.findById(req.params.id);

    if (!password) {
      return res.status(404).json({ msg: 'Password not found' });
    }

    // Make sure user owns password
    if (password.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    password = await Password.findByIdAndUpdate(req.params.id,
      { $set: passwordFields },
      { new: true });

    res.json(password);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route     DELETE api/passwords/:id
// @desc      Delete password
// @access    Public
router.delete('/:id', auth, async (req, res) => {
  try {
    let password = await Password.findById(req.params.id);

    if (!password) {
      return res.status(404).json({ msg: 'Password not found' });
    }

    // Make sure user owns password
    if (password.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Password.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Password removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;