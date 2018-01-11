// main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require("mongoose");
const config = require('./config/configuration')

//DB setup
mongoose.connect(config.mongoConnectionString);

//App setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: '*/*'}));
router(app);

//Server setup
const port = process.env.PORT || 3030;
const server = http.createServer(app);

server.listen(port);
console.log("Server listening on:", port);