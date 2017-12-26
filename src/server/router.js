const express = require('express');
const passport = require('passport');
const userController = require('./app/users/controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to API!');
});

router.use('/', passport.authenticate('basic', {session: false}), userController);

module.exports = router;
