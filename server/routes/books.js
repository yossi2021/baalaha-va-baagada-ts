var express = require('express');
var router = express.Router();
const books = require('../controllers/books');

router.get('/', books.getAll);
router.get('/:id', books.getItem);
router.post('/', books.add);
router.put('/:id', books.edit);
router.delete('/:id', books.delete);

module.exports = router;