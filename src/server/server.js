const path = require('path')
const webpack = require('webpack')
const passport = require('passport')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const router = require('./router');
const strategy = require('./config/strategy');

const app = express()
const port = 8080

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
passport.use(strategy);

app.use('/api', router);

app.listen(port, (err) => {
  if (err) {
    return console.error(error)
  }
  console.log('Server is listening at http://localhost:' + port)
})
