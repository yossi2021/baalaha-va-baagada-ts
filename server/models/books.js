const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    date: {
        type: Date,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
});

const Books = mongoose.model('Books', booksSchema);

exports.Books = Books;