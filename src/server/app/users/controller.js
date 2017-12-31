const express = require('express');
const model = require('./model')

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Get All Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: users
 */
router.get('/users', (req, res) => {
  model.getAll(req.db, (users) => {
    res.send(users)
  })
})

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Get User by Id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user
 */
router.get('/users/:id', (req, res) => {
  const id = req.params.id
  model.getById(req.db, id, (user) => {
    res.send(user)
  })
})

router.put('/users/:id', (req, res) => {
  res.status(504)
})

router.delete('/users/:id', (req, res) => {
  res.status(504)
})

module.exports = router;
