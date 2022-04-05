const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:'This field is required'},
    password:{type:String,required:'This field is required'},
  
})

const User = mongoose.model("user",userSchema)
module.exports = User;