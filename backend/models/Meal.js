const mongoose = require('mongoose');
const MealSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalCalorie:  {
        type: Number,
        required: false
    },
    isVegan:  {
        type: Boolean,
        default: false
    },
    isVegeterian:  {
        type: Boolean,
        default: false
    },
    isGlutenFree:  {
        type: Boolean,
        default: false
    },
    isBreakfast:  {
        type: Boolean,
        default: false
    },
    ingredients: [{
        quantityAmount: {
            type: Number,
            required: true
        },
        quantityType: {
            type: String,
            required: true
        },
        ingredient: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'ingredient'
        }
    }]
})

module.exports = mongoose.model('meal', MealSchema);