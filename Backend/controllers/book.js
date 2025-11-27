const { error } = require('console');
const Book = require('../models/book');
const User = require('../models/user');
const book = require('../models/book');
const mongoose = require('mongoose')

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('issuedTo', 'username');
        res.json({books : books})
        console.log(books)
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

const getSingleBook = async (req, res) => {
    const { id: bookId} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(bookId)) {
    return res.status(404).json({ msg: `Book not found(invalid Id Format)`})
    }

    try {
        const book = await Book.findById(bookId)

        if(!book) {
            return res.status(404).json({ msg: `Book not found with ID : ${bookId}`})
        }

        res.status(200).json({ book })
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: 'Server error while fetching book details.'})
    }
}

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

    const { userId, dueDate} = req.body;

    const bookId = req.params.id
    if(!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ error: 'Invalid Book ID format.'})
    }


    try {
        
        const bookPromise = Book.findById(bookId)
        const userPromise = User.findById(userId)

        const [ book, user] = await Promise.all([bookPromise, userPromise])


        if(!book) return res.status(404).json({ error: 'Book Nor found'})
        if (book.status === 'issued' || book.status === 'Borrowed'){
            return res.status(400).json({ error: 'Book already issued'})
        }
        if (!user) return res.status(404).json({ error: 'user not found'})

        book.status = 'Borrowed';
        book.issuedTo = user._id;
        book.dueDate = dueDate;
        await book.save();

        res.json({ message: `Book Issused to ${user.username}`, book : book })
    } catch (error) {
        console.error('Issue Book Error :' , error.message)
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: `Validation error ${error.message}`})
        }
        res.status(500).json({ error: error.message })
    }
};

const returnBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if(!book) return res.status(404).json({ msg: 'book is not found'})
            
        if (book.status === 'available') {
            return res.status(400).json({ error: 'Book is already avialelable . cannot be returned again'})  
        }

        if (book.status !== 'Borrowed') {
            return res.status(400).json({ mgs: `Book status is '${book.status}'. cannot return.`})
        }

        
        book.status = 'available';
        book.issuedTo = null;
        book.dueDate = null;
        await book.save()

        res.json({ msg : 'Book sucessfully returned', book })
    } catch (error) {
        console.error('Backend Return Error: ', error)
        res.status(400).json({ error: error.message})
    }
};

module.exports = { getAllBooks, addBook, updateBook, deleteBook, issueBook, returnBook ,getSingleBook}