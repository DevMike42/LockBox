const express = require('express');
const router = express.Router();

// @route     GET api/passwords
// @desc      Get all users passwords
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all passwords');
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