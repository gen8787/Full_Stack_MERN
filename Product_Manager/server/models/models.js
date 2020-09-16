const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Field is required."],
        minlength: [2, "Must be 2 characters or more."]
    },
    price: {
        type: Number,
        required: [true, "Field is required."],
        minlength: [2, "Must be 2 characters or more."]
    },
    description: {
        type: String,
        required: [true, "Field is required."],
        minlength: [5, "Must be 5 characters or more."]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
    Product
}