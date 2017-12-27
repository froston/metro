let data = require('../../data.json')
data = data.users

const getAll = (req, res) => {
  res.status(200).send(data)
};

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

const post = (req, res) => {
  console.log(req)
  data.push(req.data)
  res.status(201).send(data);
};

const update = (req, res) => {
  res.status(200).send([{id: 1, name: 'Test'}])
};

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
