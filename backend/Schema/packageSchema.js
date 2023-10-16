const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  imageURL: String,
  
  //BUDGET
  breakfeast: String, 
  wifi: Boolean,
  ac: Boolean,
  electricCarCharge: Boolean,
  privateParking: Boolean,
  kitchen: Boolean,
  bedsize: String,
  towels: String,
  washingMachine: Boolean,
  tv: Boolean,
  petsAllowed: Boolean,
  //STANDARD

  //DELUXE
  champagne: Boolean,
  hottub: Boolean,
  sauna: Boolean,
  outdoorKitchen: Boolean,
  beautyProducts: String
});

module.exports = mongoose.model('Package', packageSchema);
