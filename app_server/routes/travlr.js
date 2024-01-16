const express = require('express');
const router = express.Router();
const controller = require('../controllers/travlr');

/*GET home page. */
router.get('/', controller.travel);

module.exports = router;