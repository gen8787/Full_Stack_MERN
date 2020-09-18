const mongoose = require('mongoose');
const { BookSchema } = require('./book.model');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field is required."],
        minlength: [3, "Must be 3 characters or more."]
    },
    books: [BookSchema]
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = {
    Author
}