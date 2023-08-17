var express = require('express');
var router = express.Router();
const Books = require('../controllers/Books');

router.get('/', Books.getAll);
router.post('/', Books.add);
router.put('/:id', Books.edit);
router.delete('/:id', Books.delete);

module.exports = router;