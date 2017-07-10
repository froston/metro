const data = [{id: "1", name: "Test"}, {id:2, name: "test2"}]

exports.getAll = (req, res) => {
  res.status(200).send(data);
};
exports.getById = (req, res) =>{
  console.log(req.params)
  const user = data.find(function (user) { 
    return user.id === req.params.id 
  })
  console.log(user)
  res.status(200).send(user)
}
exports.post = (req, res) => {
  data.push(req.data)
  res.status(201).send(data);
};
exports.update = (req, res) => {
  res.status(200).send([{id: 1, name: "Test"}])
};
exports.delete = (req, res) => {
  const test = data.find((user) => {
    return user.id === req.params.id 
  })
  delete test
  res.status(202).send(data)
}