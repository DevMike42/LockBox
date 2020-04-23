const mongoose = require('mongoose');

const PasswordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String
  },
  loginId: {
    type: String,
    required: true
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

const Password = mongoose.model('password', PasswordSchema);

module.exports = Password;