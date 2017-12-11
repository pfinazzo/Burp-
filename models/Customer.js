const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = Schema({
  name: String,
  cust_id: String
})

module.exports = mongoose.model('Customer', customerSchema);