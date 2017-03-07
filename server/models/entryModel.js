// where the database schema are created

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: String,
  text: String,
  category: String,
  gender: String,
  dob: String
}, { versionKey: false });

const Entry = mongoose.model('Entry', entrySchema);

module.exports = {
  entry: Entry
}
