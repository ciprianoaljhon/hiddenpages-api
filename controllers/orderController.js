const Order = require('../models/orderModel.js');

const getOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(userId)
        const orders = await Order.find({ user: userId });
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

const placeOrder = async (req, res) => {
    try {
        const { books, user, recipient, deliveryAddress, contactNumber, prices, modeOfPayment, orderSubTotal } = req.body;
        const newOrder = new Order({
            books,
            prices,
            user,
            recipient,
            deliveryAddress,
            contactNumber,
            modeOfPayment,
            orderSubTotal,
        });

        const savedOrder = await newOrder.save();
        console.log(savedOrder)
        res.status(201).json({ success: true, data: savedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

module.exports = [getOrders, placeOrder];
