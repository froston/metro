const { ObjectID } = require('mongodb')

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
  collection.findOne({ _id: ObjectID(id) }, (err, user) => {
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
      cb(err, user)
    } else {
      cb(err, false)
    }
  })
}


const create = (db, user, cb) => {
  const collection  = db.collection(usersCollection)
  collection.save(user, (err, user) => {
    if (err) {
      return console.log(err)
    }
    return cb(user)
  })
};

const update = (db, id, user, cb) => {
  const collection  = db.collection(usersCollection)
  collection.update({ _id: ObjectID(id) }, { $set: user }, (err, user) => {
    if (err) {
      return console.log(err)
    }
    return cb(user)
  })
};

const remove = (db, id, cb) => {
  const collection  = db.collection(usersCollection)
  collection.remove({ _id: ObjectID(id) }, (err, user) => {
    if (err) {
      return console.log(err)
    }
    return cb(user)
  })
}

module.exports = {
  getAll,
  getById,
  getByUsername,
  create,
  update,
  remove,
}
