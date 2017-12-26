const routes = require('express').Router();
const userController = require('./users/controller');

routes.use('/users', userController);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
