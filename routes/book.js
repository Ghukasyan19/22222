const express = require('express');
const BookController = require('../controllers/BookController');
const router = express.Router();

router.get('/', BookController.getAllBooks);
router.post('/', BookController.createBook);
router.get('/author/:name', BookController.getBookByAuthor);
router.get('/category/:name', BookController.getBookByCategory);
router.get('/price/:price', BookController.getBookByPrice);
router.delete('/:id', BookController.removeBookById);
router.put('/', BookController.updateBook);


module.exports = router;
