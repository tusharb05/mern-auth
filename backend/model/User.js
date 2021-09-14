const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        requird: true
    }
})

module.exports = mongoose.model('User', userSchema)