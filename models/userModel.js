const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    privateID: {
        type: String,
        required: true,
        unique: true
    },
    UID: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: String,
    themePreference: String,
    imgURL: String,
    orders: [String],
    cart: [String],
    wishlist: [String],
    posts: [String],
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)