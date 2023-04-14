const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
router.post('/getIt', controller.getIt)


module.exports = router;