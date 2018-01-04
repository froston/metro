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
  model.getAll(req.db, (err, users) => {
    if (err) {
      res.status(500).send(err)
    }
    if (users || users.length) {
      res.status(users.length ? 200 : 404).send(users)
    } else {
      res.status(404).end()
    }
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
  model.getById(req.db, id, (err, user) => {
    if (err) {
      res.status(500).send(err)
    }
    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).end()
    }
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
 *       - name: user
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             username:
 *               type: string
 *             admin:
 *               type: boolean
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/users', (req, res) => {
  const user = req.body
  model.create(req.db, user, (err, response) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(201).send(response)
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
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *       - name: user
 *         in: body
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
  const id = req.params.id
  const user = req.body
  model.update(req.db, id, user, (err, response) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).send(response)
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
 *       200:
 *         description: OK
 */
router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  model.remove(req.db, id, (err, response) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).send(response)
  })
})

module.exports = router;
