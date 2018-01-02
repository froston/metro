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
 *         description: OK
 */
router.get('/users', (req, res) => {
  model.getAll(req.db, (users) => {
    res.status(200).send(users)
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
 *         description: OK
 */
router.get('/users/:id', (req, res) => {
  const id = req.params.id
  model.getById(req.db, id, (user) => {
    res.status(200).send(user)
  })
})

/**
 * @swagger
 * /users:
 *   post:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Create new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             name:
 *               type: string
 *             admin:
 *               type: boolean
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/users', (req, res) => {
  const user = req.params.user
  model.create(req.db, user, (user) => {
    res.status(201).send(user)
  })
})

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Create new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             name:
 *               type: string
 *             admin:
 *               type: boolean
 *     responses:
 *       200:
 *         description: OK
 */
router.patch('/users/:id', (req, res) => {
  const user = req.params.user
  model.update(req.db, user, (user) => {
    res.status(200).send(user)
  })
})

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Create new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: OK
 */
router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  model.remove(req.db, id, (user) => {
    res.status(200).send(user)
  })
})

module.exports = router;
