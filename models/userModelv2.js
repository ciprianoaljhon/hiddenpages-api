const mongoose = require('mongoose');

const userSchemav2 = new mongoose.Schema({
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
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    birthDate: {
        type: Date,
        default: Date.now
    },
    address: {
        street: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        region: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        },
        postalCode: {
            type: String,
            default: ''
        }
    },
    defaultAddress: {
        street: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        region: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        },
        postalCode: {
            type: String,
            default: ''
        }
    },
    email: String,
    themePreference: {
        type: String,
        default: 'dark'
    },
    imgURL: String,
    orders: [String],
    rented: [String],
    renting: [String],
    ordersHistory: [String],
    cart: {
        type: Map,
        of: Number,
        default: {}
    },
    wishlist: [String],
    posts: [String],
    orderHistory: [String]

}, { timestamps: true });

module.exports = mongoose.model('usersv2', userSchemav2);