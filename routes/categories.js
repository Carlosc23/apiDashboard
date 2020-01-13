const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categoriesController');
router.route('/')
  .get(
    categoriesController.retrieveCategoriesInfo);

module.exports = router;