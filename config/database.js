var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/beers", {useMongoClient: true});

var db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to ${db.name} at ${db.host} : ${db.port}`);
});

