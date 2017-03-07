// server starting poing
//comment
const path = require('path');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();
const db = require('./server/data/config');
const entryCtrl = require('./server/controllers/entryCtrl');

const port = process.env.PORT || 8000;

//middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname + '/client'));
// app.use(express.static('client')); 

//routes
app.get('/entries', entryCtrl.entryController.get);
app.post('/entries', entryCtrl.entryController.post);

app.listen(port, () => {
  console.log('listening on port ', port);
})
