const path = require('path')
const webpack = require('webpack')
const passport = require('passport')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const { MongoClient } = require('mongodb')
const { BasicStrategy } = require('passport-http');

const router = require('./router')
const config = require('./config/config')
const swaggerSpec = require('./config/swagger')
const { authenticate } = require('./app/auth/model');

const app = express()
const port = config.port
let db;

app.use(cors({
  origin: config.clientUrl,
  optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(config.dbHost, (err, client) => {
  if (err) {
		throw err;
	} else {
    db = client.db(config.dbName);
    console.log('API connected to mongodb')
  }
})

// configure basic authentication
const strategy = new BasicStrategy((username, password, done) => {
  authenticate(db, username, password, done)
})
app.use(passport.initialize());
passport.use(strategy);

// make DB available to all routes
const exposeDb = (req, res, next) => {
	req.db = db
	next()
}
app.use('/api', exposeDb, router)

// add swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(port, (err) => {
  if (err) {
    return console.error(error)
  }
  console.log('Server is listening at http://localhost:' + port)
})
