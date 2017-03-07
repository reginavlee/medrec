// server starting poing

const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const db = require('./data/config');
const entryCtrl = require('./controllers/entryCtrl');

const port = process.env.PORT || 2000;

//middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client')));

// app.use(express.static('client')); 

//routes
app.get('/entries', entryCtrl.entryController.get);
app.post('/entries', entryCtrl.entryController.post);

app.listen(port, 'localhost', () => {
  console.log('listening on port ', port);
})
