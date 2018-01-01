const { getByUsername } = require('../users/model');

const authenticate = (db, username, password, done) => {
  getByUsername(db, username, password, (err, user) => {
    if (err) { 
      return done(err); 
    }
    if (!user) { 
      return done(null, false); 
    }
    if (user.password !== password ) { 
      return done(null, false); 
    }
    return done(null, user);
  });
}

module.exports = {
  authenticate
} 