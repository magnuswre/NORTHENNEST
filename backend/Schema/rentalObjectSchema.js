const mongoose = require('mongoose')
const { Schema } = mongoose;

const rentalObjectSchema = new Schema({
    name:        {type: String, required: true},
    description: {type: String, required: true},
    price:       {type: Number, required: true},
    imageURL:    {type: String, required: true},
    bedrooms:    {type: Number, required: true},
    category:    {type: String, required: true},
    livingarea:  {type: Number, required: true},
    
   
    tags:        {type: String},
    package:     {type: mongoose.Types.ObjectId, ref: 'Package'},
    review:      {type: mongoose.Types.ObjectId, ref: 'ReviewRating'},
    rating:      {type: mongoose.Types.ObjectId, ref: 'ReviewRating'}, 
    saved:       {type: mongoose.Types.ObjectId, ref: 'Likes'},

  },
  {
    timestamps: true, 
  })

const rentalObject = mongoose.model('rentalObject', rentalObjectSchema)

module.exports = rentalObject;