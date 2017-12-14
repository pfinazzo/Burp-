const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = Schema({
  beers: ({
    type: Schema.Types.ObjectId,
    ref: "Beer",
    name: String,
    price: Number,
    quantity: Number
  })
})

module.exports = mongoose.model('Cart', cartSchema);