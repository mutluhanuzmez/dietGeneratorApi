const Ingredient = require('../models/Ingredient');

const getAllIngredients = (req, res, next) => {
    Ingredient.find({}, function (err, ingredients) {
        var ingredientsMap = {};
        ingredients.forEach(function (ingredient) {
            ingredientsMap[ingredient._id] = ingredient;
        });
        res.send(ingredientsMap);
    });
}

const findByMeal = (req, res, next) => {
    Ingredient.find({ name: req.body.name })
        .then((doc) => {
            res.send(doc[0].name);
        })
        .catch((err) => {
            res.json({ message: err })
        });
}

const saveIngredient = (req, res, next) => {
    const ingredient = new Ingredient({
        protein: req.body.protein,
        fat: req.body.fat,
        carbonhydrate: req.body.carbonhydrate,
        calorie: req.body.calorie,
        name: req.body.name
    })
    ingredient.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })
}

module.exports = {
    getAllIngredients, findByMeal, saveIngredient
}