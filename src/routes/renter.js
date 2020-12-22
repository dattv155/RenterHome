const express = require('express');
const router = express.Router();

const renterController = require('../app/controllers/RenterController');

// renterController.index

router.use('/:slug', renterController.show);
router.use('/', renterController.index);

module.exports = router;
