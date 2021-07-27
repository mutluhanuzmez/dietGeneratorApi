const Meal = require('../models/Meal');

const saveMeal = (req, res, next) => {
    const meal = new Meal({
        name: req.body.meal.name,
        totalCalorie: req.body.meal.totalCalorie,
        isVegan: req.body.meal.isVegan,
        isVegeterian: req.body.meal.isVegeterian,
        isGlutenFree: req.body.meal.isGlutenFree,
        isBreakfast: req.body.meal.isBreakfast,
        ingredients: req.body.meal.ingredients,
    })

    meal.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })
}


const findByMeal = (req, res, next) => {
    Meal.find({ name: req.body.meal.name })
        .then((doc) => {
            console.log(req.body.name)
            console.log(doc);
            res.send(doc);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    saveMeal, findByMeal
}