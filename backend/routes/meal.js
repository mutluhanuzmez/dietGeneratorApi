const express = require('express');
const router = express.Router();
const MealController = require('../controller/MealController');

router.post('/saveMeal', MealController.saveMeal)

router.get('/findByMeal', MealController.findByMeal)



module.exports = router;