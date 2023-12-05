const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    books: [],
    prices: [],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    recipient: String,
    deliveryAddress: {
        type: String,
    },
    modeOfPayment: String,
    contactNumber: {
        type: String
    },
    orderSubTotal: Number,
    estimatedArrival: {
        type: Date,
        default: function () {
            const oneDay = 24 * 60 * 60 * 1000;
            return new Date(this.orderDate.getTime() + oneDay);
        }
    }
});

module.exports = mongoose.model('Order', orderSchema);
