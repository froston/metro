const express = require('express');
const path = require('path');
const passport = require('passport');


const userController = require('./app/users/controller');

const router = express.Router();

router.use('/', passport.authenticate('basic', {session: false}), userController);

module.exports = router;
