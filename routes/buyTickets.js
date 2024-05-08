
const express = require('express');
const router = express.Router();
const buyTicketsController = require('../controllers/buyTickets');


router.post('/', buyTicketsController.purchaseTickets);

module.exports = router;
