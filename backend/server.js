const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 5000

app.use(express.json())
app.use(cors())
const uri=process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,
    useUnifiedTopology:true
  })

const connection=mongoose.connection
connection.once('open',()=>{
    console.log("Connection To DB Open")
})

const signupPath=require("./routes/signupRoute/signup")
const loginPath=require("./routes/loginRoute/login")
app.use("/login",loginPath)
app.use("/signup",signupPath)

app.listen(PORT,(s)=>{
    console.log(`Server Running on port${PORT}`)
})