var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://admin:admin@ds044887.mlab.com:44887/burp");



var db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
