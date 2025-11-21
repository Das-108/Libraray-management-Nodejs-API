const { error } = require('console');
const Book = require('../models/book');
const User = require('../models/user');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('issuedTo', 'username');
        res.json(books)
    }catch (error) {
        res.status(500).json({error: error.message })
    }
};

const addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save()
        res.json(book)
    }catch (error) {
        res.status(400).json({error: error.message });
    }
};

const updateBook = async (req, res) => {
    try { 
        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updateBook) {
            return res.status(404).json({ error: 'Book not found' })
        }
        res.json(updateBook)
    }catch (error) {
        res.status(400).json({ error: error.message})
    }
};

const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete( req.params.id)
        if(!deleteBook) {
            return res.status(404).json({ error: 'Book not found'})
        }
        res.json({ message : 'Book deleted Successfully' })
    }catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const issueBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        const { userId, dueData } = req.body

        if(!book) return res.status(404).json({ error: 'Book Nor found'})
        if (book.status === 'issued'){
            return res.status(400).json({ error: 'Book already issued'})
        }
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'user not found'})

        book.status = 'issued';
        book.issusedTo = user._id;
        book.dueDate = dueDate;
        await book.save();

        res.json({ message: `Book Issused to ${user.username}`, book })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const returnBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({ error: 'book is not found'})

        if (book.status !== 'issued') {
            return res.status(400).json({ error: 'Book is not currently issued'})
        }

        book.status = 'available';
        book.issusedTo = null;
        book.dueDate = null;
        await book.save()

        res.json({ msg : 'Book sucessfully returned', book })
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};

module.exports = { getAllBooks, addBook, updateBook, deleteBook, issueBook, returnBook}