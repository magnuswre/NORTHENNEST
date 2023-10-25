const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  imageURL: String,
  // icons: [],
  budget: {},
  standard: {},
  deluxe: {}
});

module.exports = mongoose.model('Package', packageSchema);
