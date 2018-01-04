const { ObjectID } = require('mongodb')

const usersCollection = 'users'

const getAll = (db, cb) => {
  const collection = db.collection(usersCollection)
  collection.find({}).toArray((err, users) => {
    return cb(err, users)
  })
};

const getById = (db, id, cb) =>{
  const collection = db.collection(usersCollection)
  collection.findOne({ _id: ObjectID(id) }, (err, user) => {
    return cb(err, user)
  })
}

const getByUsername = (db, username, password, cb) => {
  const collection  = db.collection(usersCollection)
  collection.findOne({ username }, (err, user) => {
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
    return cb(err, user)
  })
};

const update = (db, id, user, cb) => {
  const collection  = db.collection(usersCollection)
  collection.update({ _id: ObjectID(id) }, { $set: user }, (err, user) => {
    return cb(err, user)
  })
};

const remove = (db, id, cb) => {
  const collection  = db.collection(usersCollection)
  collection.remove({ _id: ObjectID(id) }, (err, user) => {
    return cb(err, user)
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
