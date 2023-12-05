
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: String,
    genre: [String],
    description: String,
    productDetails: String,
    rentalAvailability: {
        type: Boolean,
        default: false
    },

    bookTypes: [
        {
            type: String,
            enum: ['eBook', 'Hard Cover', 'Paperback'],
            required: true
        }
    ],
    condition: {
        type: String,
        enum: ['New', 'Used'],
        required: true
    },
    publicationDate: Date,
    image: String,
    prices: [
        {
            bookType: {
                type: String,
                enum: ['eBook', 'Hard Cover', 'Paperback'],
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    discountedPrice: Number,
    stocks: Number,
    ratings: Number,
    ratingsCount: Number
});

module.exports = mongoose.model('Book', bookSchema);

