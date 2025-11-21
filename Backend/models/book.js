const mongoose = require('mongoose')
const { title } = require('process')

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    status: { type: String, default: 'available'},
    issuedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dueDate: Date,
});

module.exports = mongoose.model('Book' , bookSchema)