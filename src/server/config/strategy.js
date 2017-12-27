const { BasicStrategy } = require('passport-http');
const { auth } = require('../app/auth/model');

const strategy = new BasicStrategy(
  (username, password, callback) => {
    auth(username, password, (isMatch) => {
      if (!isMatch) {
        return callback(null, false);
      }
      return callback(null, { username, password });
    });
  }
)

module.exports = strategy
