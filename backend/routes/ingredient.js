const express = require('express');
const router = express.Router();
const IngredientController = require('../controller/IngredientController');

router.get('/getAllIngredients', IngredientController.getAllIngredients);

router.get('/findByIngredient', IngredientController.findByMeal);

router.post('/saveIngredient', IngredientController.saveIngredient);

module.exports = router;