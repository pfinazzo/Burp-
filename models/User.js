var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next){
  var user = this;
  if (!user.isModified('password')) return next();
  // password changed, now salt and hash
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash){
    user.password = hash;
    next();
  })
});

module.exports = mongoose.model('User', userSchema);