const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = Schema({
  name: String,
  sku: String,
  description: String,
  price: Number
})

module.exports = mongoose.model('Cart', cartSchema);