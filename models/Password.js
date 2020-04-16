const mongoose = require('mongoose');

const PasswordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String
  },
  sitePassword: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('password', PasswordSchema);