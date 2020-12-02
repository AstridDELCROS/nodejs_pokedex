const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const detailsController = require('./controllers/detailsController');


router.get('/', homeController.homePage);
router.get('/:id', detailsController.getDetails);

// router.use(homeController.notFound);

module.exports = router;