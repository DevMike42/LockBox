const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    // Stores payload with user and token
    const decoded = jwt.verify(token, jwtSecret);

    // Assigns req.user to payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};