const express = require('express')
const router = express.Router();

const {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
    issueBook,
    returnBook
} = require ('../controllers/book');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, getAllBooks);
router.post('/', authMiddleware, addBook);
router.patch('/:id', authMiddleware, updateBook);
router.delete('/:id', authMiddleware, deleteBook);
router.post('/issue/:id', authMiddleware, issueBook);
router.post('/return/:id', authMiddleware, returnBook);

module.exports = router