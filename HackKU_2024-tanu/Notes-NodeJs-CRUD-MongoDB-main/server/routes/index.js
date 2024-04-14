const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes 
*/
router.get('/', mainController.homepage);
router.get('/therapist', mainController.therapist);
router.get('/resources', mainController.resources);
router.get('/hotline', mainController.hotline);


module.exports = router;