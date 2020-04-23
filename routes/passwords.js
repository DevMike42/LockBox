const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const passwordsController = require('../controllers/passwords');
const { check } = require('express-validator');

// @route     GET api/passwords
// @desc      Get all users passwords
// @access    Private
router.route('/').get(auth, passwordsController.findAll);

// @route     POST api/passwords
// @desc      Add new password
// @access    Private
router.post('/', [auth, [
  check('sitePassword', 'Site password is required').not().isEmpty(),
  check('link', 'Site link (url) is required').not().isEmpty()
]], passwordsController.create);

// @route     GET api/passwords/:id
// @desc      Find specific User password
// @access    Private
router.get('/:id', auth, passwordsController.findById);

// @route     PUT api/passwords/:id
// @desc      Update password
// @access    Private
router.put('/:id', auth, passwordsController.update);


// @route     DELETE api/passwords/:id
// @desc      Delete password
// @access    Public
router.delete('/:id', auth, passwordsController.remove);

module.exports = router;