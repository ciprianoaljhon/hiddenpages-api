const Book = require('../models/bookModel.js')

const getBook = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findOne({ _id: id })
        res.send(data)
    } catch (error) {
        res.send('Error' + error)
    }
}



const updateBookPrices = async (req, res) => {

};
const getBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        const booksByCategory = {};
        const images = []
        books.forEach((book) => {
            images.push(book.image)
            const { genre, rentalAvailability } = book;
            if (!booksByCategory[genre]) {
                booksByCategory[genre] = [];
            }
            booksByCategory[genre].push({
                _id: book._id,
                title: book.title,
                rentalAvailability: rentalAvailability
            });
        });
        res.send({
            books: books,
            booksByCategory: booksByCategory
        })
    } catch (error) {
        res.send('error getting books line 18: bookController.js')
    }
}

const getGenres = async (req, res) => {

}


module.exports = [getBook, getBooks, getGenres] 