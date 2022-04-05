const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    user_id:{type:String,required:true},
    username:{type:String,required:true},
    created_at: { type: Date, default: Date.now }
})

const Recipe = mongoose.model("Recipe",recipeSchema)
module.exports = Recipe;