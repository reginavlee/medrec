const mongoose = require('mongoose');
const Entry = require('../models/entryModel').entry;

const entryController = {
  get: (req, res) => {
    Entry.find({}, (err, result) => {
      if (err) {
        throw err;
        res.status(404);
      } else {
        console.log('successful get');
        res.status(200).send(result);
      }
    })
  },
  post: (req, res) => {
    let newEntry = new Entry(req.body);
    newEntry.save((err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('successful post');
        res.status(201);
        res.json({
          name: req.body.name,
          text: req.body.text,
          category: req.body.category
        })
      }
    })
  }
}

module.exports = {
  entryController: entryController
}
