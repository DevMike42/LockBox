require('dotenv').config();

module.exports = {
  mongoURI: "mongodb+srv://mike123:mike123@lockbox-bnvet.mongodb.net/test?retryWrites=true&w=majority",
  jwtSecret: "bologna1",
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY
};
