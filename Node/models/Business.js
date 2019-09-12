const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  item_code: {
    type: String
  },
  vendor_code: {
    type: String
  },
  plant_code: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
