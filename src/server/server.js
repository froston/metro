const path = require('path')
const webpack = require('webpack')
const passport = require('passport')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');

const router = require('./router');
const config = require('./config/config');
const strategy = require('./config/strategy');
const swaggerSpec = require('./config/swagger');

const app = express()
const port = config.port

app.use(cors({
  origin: config.clientUrl,
  optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
passport.use(strategy);

app.use('/api', router);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, (err) => {
  if (err) {
    return console.error(error)
  }
  console.log('Server is listening at http://localhost:' + port)
})
