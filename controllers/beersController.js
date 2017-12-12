const Beer = require('../models/Beer');

function get (req, res) {
  Beer.find({})
  .then(beer => {
    res.json(beer)
  })
}

module.exports = {
  get
};