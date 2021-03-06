var user = require('./../models/User');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  var token = req.body.token || req.query.token || req.get('Authorization');
  if (token) {
    // removes 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // checks if token is valid and not expired
    jwt.verify(token, SECRET, function(err, decoded) {
      if (!err) {
        // valid token, so add user to req
        req.user = decoded.user;    
        next();
      }
    });
  } else {
    next();
  }
}