const { Product } = require('../models/models');

module.exports = {
//==   C R E A T E   ==||
    // http://localhost:8000/api/create
    create: (req,res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

//==   R E A D   ==||
    // http://localhost:8000/api/all
    all: (req,res) => {
        Product.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    // http://localhost:8000/api/:id
    one: (req,res) => {
        Product.find({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

//==   U P D A T E   ==||
    // http://localhost:8000/api/:id/update
    update: (req,res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false, new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

//==   D E L E T E   ==||
    // http://localhost:8000/api/:id/delete
    delete: (req,res) => {
        Product.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}