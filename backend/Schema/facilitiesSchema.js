const mongoose = require('mongoose')

const  facilitiesSchema = mongoose.Schema({
    text: { type: String, required: true },
    icon: { type: String, required: true },
},
{
  timestamps: true, 
})

const Facility = mongoose.model(' Facility',  facilitiesSchema)

module.exports =  Facility;