const express = require('express');
const parser = require('body-parser');

const app = express();
const db = require('./data/config');

const port = process.env.PORT || 2000;

//middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('client')); 

//routes
// app.use('/entries', )

app.listen(port, 'localhost', () => {
  console.log('listening on port ', port);
})