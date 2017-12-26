const router = require('express').Router();
const model = require('./model')

router.route('/')
  .get(model.getAll)
  .post(model.post)

router.route('/:id')
  .get(model.getById)
  .put(model.update)
  .delete(model.delete)

module.exports = router;
