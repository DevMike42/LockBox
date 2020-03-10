const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  masterPassword: {
    type: String,
    required: true
  },
  passwordReminder: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('user', UserSchema);