const jwt = require('jsonwebtoken');
const User = require('../models/User')


const auth = (req,res, next) =>  {

    try{
       
      
        const {token} = req.cookies
    
        if(!token) return res.status().json({errorMessage:"unauthorized"})
        const verified = jwt.verify(token,process.env.JWT_SECRET)
    
        req.user_id = verified.user_id;
        req.username = verified.username
      
       next()
    }catch(err){
     
        res.status(401).send({errorMessage:"unauthorized"})  
    }
}


// check current user
const checkUser = (req, res) => {

 
  try{
    
    const token = req.cookies.token
    if(!token ) return res.status(401).json({errorMessage:"unauthorized"})
    const verified = jwt.verify(token,process.env.JWT_SECRET)
    
    res.status(200).json({"username":verified.username})
  }
  catch(err){

    res.status(401).send({errorMessage:"unauthorized"})  
}
 
}


module.exports = { auth, checkUser };