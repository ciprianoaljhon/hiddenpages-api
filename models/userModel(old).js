const mongoose = require('mongoose');

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
        required: true
    },
    firstName: String,
    lastName: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    defaultAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    email: String,
    themePreference: String,
    imgURL: String,
    orders: [String],
    rented: [String],
    renting: [String],
    ordersHistory: [String],
    cart: [String],
    wishlist: [String],
    posts: [String],

}, { timestamps: true });

// module.exports = mongoose.model('users', userSchema);