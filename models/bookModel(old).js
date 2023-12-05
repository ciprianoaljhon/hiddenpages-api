// const mongoose = require('mongoose');

// const priceSchema = new mongoose.Schema({
//     _id: {
//         type: mongoose.Schema.Types.ObjectId,
//         default: function () {
//             return new mongoose.Types.ObjectId();
//         }
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// });

// const bookSchema = new mongoose.Schema({
//     bookID: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     author: String,
//     genre: [String],
//     description: String,
//     productDetails: String,
//     rentalAvailability: {
//         type: Boolean,
//         default: false
//     },
//     condition: {
//         type: String,
//         enum: ['New', 'Used'],
//         required: true
//     },
//     publicationDate: Date,
//     image: String,
//     prices: {
//         new: priceSchema,
//         used: {
//             type: priceSchema,
//             default: function () {
//                 const newPrice = this.prices.new.price;
//                 return {
//                     price: newPrice - (0.3 * newPrice)
//                 };
//             }
//         },
//         rent: {
//             type: priceSchema,
//             default: function () {
//                 const newPrice = this.prices.new.price;
//                 return {
//                     price: newPrice - (0.6 * newPrice)
//                 };
//             }
//         },
//         default: {}
//     },
//     discountedPrice: Number,
//     stocks: Number,
//     ratings: Number,
//     ratingsCount: Number
// });

// module.exports = mongoose.model('Book', bookSchema);
