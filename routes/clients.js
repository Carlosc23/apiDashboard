const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController');
router.route('/')
  .get(
    clientsController.retrieveClientsInfo);

module.exports = router;