const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const beers = require('./routes/api/beers')
const app = express();

require('dotenv').config();

require('./config/database');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({encoded: true}));

app.use(require('./config/auth'));

app.use('/api/beers', beers);
app.use('/api/users', require('./routes/api/users'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

