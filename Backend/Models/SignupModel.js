const mongoose = require("mongoose")

const signUp = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model('signupCollection', signUp)