var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var IngredientSchema = new Schema({
    protein: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    carbonhydrate: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isVegan:  {
        type: Boolean,
        default: false,
        required: true
    },
    isVegeterian:  {
        type: Boolean,
        default: false,
        required: true
    },
    isGlutenFree:  {
        type: Boolean,
        default: true,
        required: true
    },
    calorie: {
        type: Number,
        required: true
    },
    spoonCofactor: {
        type: Number
    },
    teaSpoonCofactor: {
        type: Number
    },
    dessertSpoonCofactor: {
        type: Number
    },
    glassCofactor: {
        type: Number
    },
    teaGlassCofactor: {
        type: Number
    }
});

module.exports = mongoose.model('ingredient', IngredientSchema);