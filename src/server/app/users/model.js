const usersCollection = 'users'

const getAll = (db, cb) => {
  const collection = db.collection(usersCollection)
  collection.find({}).toArray((err, users) => {
    if (err) { 
      return console.log(err)
    }
    return cb(users)
  })
};

const getById = (db, id, cb) =>{
  const collection = db.collection(usersCollection)
  collection.find({ _id: id }).toArray((err, user) => {
    if (err) { 
      return console.log(err)
    }
    return cb(user)
  })
}

const getByUsername = (db, username, password, cb) => {
  const collection  = db.collection(usersCollection)
  collection.findOne({ username }, (err, user) => {
    if (err) { 
      return console.log(err)
    }
    if (user) {
      user.validPassword = (passwd) => user.password === passwd
      cb(err, user)
    } else {
      cb(err, false)
    }
  })
}


const post = (req, res) => {
  return {}
};

const update = (req, res) => {
  return {}
};

const remove = (req, res) => {
  return {}
}

module.exports = {
  getAll,
  getById,
  getByUsername,
  post,
  update,
  remove,
}
