const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:       {type: String, required: true},
    lastName:        {type: String, required: true},
    streetName:      {type: String, required: true},
    postalCode:      {type: String, required: true},
    city:            {type: String, required: true},
    mobile:          {type: String, required: true},
    email:           {type: String, required: true},
    passwordHash:    {type: String, required: true},
    // ratings:         {}
    // Add created at såhär -> underscore created_at
})



const User = mongoose.model('User', userSchema)

module.exports = User;