const mongoose = require('mongoose')

const detailsSchema = new mongoose.Schema ({
    id: {
        type:Number,
        required:[true, 'Please provide an id'],
        unique: true,
    },
    titulo: {
        type: String,
        required: [true, 'Please provide a title'],
        unique: true,
        partialFilterExpression: { titulo: { $type: 'string' } },
    },
    num_paginas : {
        type: Number,
        required: [true, 'Please provide a pages Number'],
    },
    isbn : {
        type: Number,
        required: [true, 'Please provide an ISBN'],
        unique: true,
    },
    editora : {
        type : String,
        required: [true, 'Please provide an editor']
    }


})

module.exports = mongoose.model('details', detailsSchema)