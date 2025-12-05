const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book tilte must br provided.']
    },

    author: {
        type: String,
        required: [ true, 'Author name must be provdied.']
    },

    category: {
        type: String,
        trim: true
    },

    coverImage: {
        type: String,
        default: 'uploads/default_cover.png'
    },

    status: { 
        type: String, 
        default: 'available'
    },

    issuedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dueDate: Date,
});

module.exports = mongoose.model('Book' , bookSchema)