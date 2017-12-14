require('dotenv').config();
const mongoose = require('mongoose');
require('../config/database');
const data = require('./data');
const Beer = require('./../models/Beer');

Beer.remove({}).then(() => {
  return Beer.create(data);
})
.then(beers  => {
  console.log(beers)
  mongoose.connection.close();
  process.exit();
})
.catch(err => console.log(err));