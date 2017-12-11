const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = Schema({
  beers: ({
    type: Schema.Types.ObjectId,
    ref: "Beer"
  })
})

module.exports = mongoose.model("Beer", cartSchema)