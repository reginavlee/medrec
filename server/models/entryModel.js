// where the database schema are created

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  author: String,
  text: String,
  category: String
}, { versionKey: false });

const Entry = mongoose.model('Entry', entrySchema);

module.exports = {
  entry: Entry
}
