const auth = (username, password, callback) => {
  if (username == 'pavel' && password == 'pavel123') {
    callback(true)
  }
  callback(false)
};

module.exports = {
  auth
}
