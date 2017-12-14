const Beer = require('../models/Beer');

function index (req, res) {
  Beer.find({})
  .then(beers => (
    res.json(beers)
  ))
}

module.exports = {
  index
};