const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field is required."],
        minlength: [3, "Must be 3 characters or more."]
    },
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = {
    Author
}