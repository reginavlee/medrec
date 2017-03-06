const mongoose = require('mongoose');

const mURI = "mongodb://user1:hrla13@ds121190.mlab.com:21190/medrecdb";

mongoose.connect(mURI, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to database');
  }
})

const db = mongoose.connection;
module.exports = db;
