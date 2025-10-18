const express = require('express')
const router = express.Router();

const {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
    issueBook,
    returnBook
} = require ('../controllers/book')

router.get('/', getAllBooks);
router.post('/', addBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/issue/:id', issueBook);
router.post('/return/:id', returnBook);

module.exports = router