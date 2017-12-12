const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  cust_id: String
})

module.exports = mongoose.model('User', UserSchema);