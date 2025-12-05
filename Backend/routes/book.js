const express = require('express')
const router = express.Router();
const upload = require('../middleware/multer')


const {
    getAllBooks,
    getSingleBook,
    addBook,
    updateBook,
    deleteBook,
    issueBook,
    returnBook
} = require ('../controllers/book');
const authMiddleware = require('../middleware/auth');


router.post('/', authMiddleware, upload.single('book_cover'), addBook)
router.get('/', authMiddleware, getAllBooks);
router.get('/:id', authMiddleware, getSingleBook)
router.patch('/:id', authMiddleware, updateBook);
router.delete('/:id', authMiddleware, deleteBook);
router.post('/issue/:id', authMiddleware, issueBook);
router.post('/return/:id', authMiddleware, returnBook);

module.exports = router