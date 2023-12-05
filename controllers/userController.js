const User = require('../models/userModelv2.js');
const Book = require('../models/bookModel.js');

const addToCart = async (req, res) => {
    const { userId, bookID } = req.body.data;
    console.log(req.body)

    try {
        const user = await User.findById(userId);
        if (user) {
            user.cart.set(bookID, user.cart.get(bookID) + 1 || 1);
            const response = await user.save();
            console.log('Saved');
            console.log(req.body.data);
            res.send(user.cart);
        } else {
            console.log('User not found');
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log('Error saving user:', error);
        res.status(500).send('Error saving user');
    }
};

const clearCart = async (req, res) => {
    const { userId } = req.body.data;
    try {
        const user = await User.findById(userId);
        if (user) {
            user.cart.clear();
            try {
                const response = await user.save();
                console.log('Cleared');
                res.send(user.cart);
            } catch (error) {
                console.log('Error saving user:', error);
                res.status(500).send('Error saving user');
            }
        } else {
            console.log('User not found');
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log('Error finding user:', error);
        res.status(500).send('Error finding user');
    }
};

const getCart = async (req, res) => {
    const cartItems = [];
    const { userId } = req.body.data;
    try {
        const user = await User.findById(userId);
        console.log(user)
        if (user) {
            console.log(user.cart)
            for (let [bookId, quantity] of user.cart) {
                const book = await Book.findOne({ _id: bookId });
                if (book) {
                    cartItems.push({ book, quantity });
                }
            }
            res.send(cartItems);
        } else {
            console.log('User not found');
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log('Error finding user:', error);
        res.status(500).send('Error finding user');
    }
};

const removeItem = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body.data;
    try {
        const user = await User.findById(userId);
        if (user) {
            user.cart.delete(id);
            try {
                const response = await user.save();
                console.log(user.cart);
                res.send(user.cart);
            } catch (error) {
                console.log('Error saving user:', error);
                res.status(500).send('Error saving user');
            }
        } else {
            console.log('User not found');
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log('Error finding user:', error);
        res.status(500).send('Error finding user');
    }
};

module.exports = [addToCart, clearCart, getCart, removeItem];