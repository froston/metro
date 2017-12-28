let data = require('../../data.json')
data = data.users

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
const getAll = (req, res) => {
  res.status(200).send(data)
};

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
const getById = (req, res) =>{
  const user = data.find((user) => {
    return user.id === Number(req.params.id)
  })
  if (user) {
    res.json(user)
    res.status(200).send(user).end()
  } else {
    res.status(404).send('User not found')
  }
}

/**
 * @swagger
 * /users:
 *   post:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Get User by Id
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: user
 */
const post = (req, res) => {
  console.log(req)
  data.push(req.data)
  res.status(201).send(data);
};

/**
 * @swagger
 * /users:
 *   patch:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Update User
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: user
 */
const update = (req, res) => {
  res.status(200).send([{id: 1, name: 'Test'}])
};

/**
 * @swagger
 * /users:
 *   delete:
 *     tags: [Users]
 *     security:
 *      - auth: basic
 *     description: Delete User
 *     produces:
 *       - application/json
 *     responses:
 *       202:
 *         description: user
 */
const remove = (req, res) => {
  const test = data.find((user) => {
    return user.id === req.params.id
  })
  //delete test
  res.status(202).send(data)
}

module.exports = {
  getAll,
  getById,
  post,
  update,
  remove
}
