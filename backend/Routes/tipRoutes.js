const express = require('express');
const { mintContent, viewContent } = require('../controllers/contentController');
const router = express.Router();

router.post('/mint', mintContent);
router.get('/:id', viewContent);

module.exports = router;