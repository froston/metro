routes = (app) => {
  var controller = require('../controllers/users')

  app.route('/users')
    .get(controller.getAll)
    .post(controller.post)

  app.route('/users/:id')
    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)
}

module.exports = routes