const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');
const Ingredient = require('../models/Ingredient');

router.get('/', (req, res) => {
    res.send('We are on posts');
})

router.get('/specific', (req, res) => {
    res.send('Specific posts');
})

router.post('/saveMeal', (req,res) => {
    console.log(req.body.meal)
    const meal = new Meal({
        name: req.body.meal.name,
        totalCalorie: req.body.meal.totalCalorie,
        isVegan: req.body.meal.isVegan,
        isVegeterian: req.body.meal.isVegeterian,
        isGlutenFree: req.body.meal.isGlutenFree,
        isBreakfast: req.body.meal.isBreakfast,
        ingredients: req.body.meal.ingredients,
    })

    console.log(meal)

    meal.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    })
})

router.get('/findByMeal', (req,res) => {
    Meal.find({name:req.body.meal.name})
  .then((doc)=>{
     console.log(req.body.name)
     console.log(doc);
     res.send(doc);
  })
 .catch((err)=>{
     console.log(err);
 });
 })



module.exports = router;