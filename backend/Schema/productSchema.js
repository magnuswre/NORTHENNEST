const mongoose = require('mongoose')
const { Schema } = mongoose;


const productSchema = new Schema({
    //Slug kolla likt id
    name:        {type: String, required: true},
    description: {type: String, required: true},
    price:       {type: Number, required: true},
    // price per weeek, or days??
    imageURL:    {type: String, required: true}, 
    // imageURL Array?
    // address: lat long
    saved:       {type: String, required: true},
    category:    {type: String, required: true},
    rating:      {type: String, required: true}, 
    // tags: 

     
    
 })

const Product = mongoose.model('Product', productSchema)

module.exports = Product;