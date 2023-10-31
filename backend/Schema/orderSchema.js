const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rentalObject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RentalObject'
    },
    price: {
      type: Number
    },
    bookingDateArrival: {
      type: Date
    },
    bookingDateDeparture: {
      type: Date
    },
    guest: {
      type: Number
    },
    status: {
      type: String,
      default: 'pending'
    },
    bookingReference: {
      type: String
    },
    paymentMethod: {
      type: String
    },
    cancellationProtection: {
      type: String
    },
    message: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);
