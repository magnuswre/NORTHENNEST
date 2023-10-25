const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User' }, // Reference to the User model
  package: { type: mongoose.Types.ObjectId, ref: 'Package' }, // Reference to the Package model
  product: { type: mongoose.Types.ObjectId, ref: 'Product' }, // Reference to the Package model
  // price
  // created at? 
  bookingDateArrival: Date, // Like this 2002-12-09 (or this 2002-12-09T00:00:00.000+00:00)
  bookingDateDeparture: Date, // Like this 2002-12-09 (or this 2002-12-09T00:00:00.000+00:00)
  guest: Number,
  status: String,
  bookingReference: String
  
  // Other order-specific fields
});

module.exports = mongoose.model('Order', orderSchema);



