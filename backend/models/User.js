const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: false,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('user', UserSchema);