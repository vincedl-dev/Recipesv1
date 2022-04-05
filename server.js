const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const cors = require("cors")
const userRouter = require('./router/userRouter')
const cookieParser = require("cookie-parser")
const {auth,checkUser} = require('./middlewares/authMiddleware')
dotenv.config()
//set up server
const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started'))
//middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
  
  ],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());






mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err) => {
    if(err) return console.log(err)
    console.log("Connected to mongodb")
})


app.get('/isloggedin',checkUser)
app.use("/recipe",auth, require("./router/recipeRouter"));
app.use(userRouter)




