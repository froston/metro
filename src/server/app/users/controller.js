const express = require('express');
const passport = require('passport');
const model = require('./model')

const router = express.Router();

router.route('/users')
  .get(model.getAll)
  .post(model.post)

router.route('/users/:id')
  .get(model.getById)
  .put(model.update)
  .delete(model.remove)

module.exports = router;
