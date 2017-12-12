const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = Schema({
  name: String,
  tagline: String,
  description: String,
  abv: Number,
  ibu: Number,
  food_pairing: String,
  image_url: String,
  id: Number,
  price: Number
})

module.exports = mongoose.model('Beer', beerSchema)