const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { auth } = require('../app/auth/model');

passport.use(new BasicStrategy(
  (username, password, callback) => {
    auth(username, password, (isMatch) => {
      if (!isMatch) {
        return callback(null, false);
      }
      return callback(null, { username, password });
    });
  }
));

module.exports = passport
