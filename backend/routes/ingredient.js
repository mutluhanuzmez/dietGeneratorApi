const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');

router.get('/', (req, res) => {
    res.send('We are on posts');
    console.log("data data data")
})

router.get('/specific', (req, res) => {
    res.send('Specific posts');
})


router.get('/getAllIngredients', (req,res) => {
    Ingredient.find({}, function(err, ingredients) {
        var ingredientsMap = {};
    
        ingredients.forEach(function(ingredient) {
            ingredientsMap[ingredient._id] = ingredient;
        });
    
        res.send(ingredientsMap);  
      });
})

router.get('/findByMeal', (req,res) => {
    Ingredient.find({name:req.body.name})
  .then((doc)=>{
     console.log(req.body.name)
     console.log(doc);
     res.send(doc[0].name);
  })
 .catch((err)=>{
     console.log(err);
 });
 })








router.post('/saveIngredient', (req, res) => {
    console.log(req.body)
    const ingredient = new Ingredient({
        protein: req.body.protein,
        fat: req.body.fat,
        carbonhydrate: req.body.carbonhydrate,
        calorie: req.body.calorie,
        name: req.body.name
    })

    console.log(ingredient)

    ingredient.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    })
});

module.exports = router;