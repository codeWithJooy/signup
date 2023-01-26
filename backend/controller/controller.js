const User=require("../models/user")

const signup=(req,res)=>{
    const {fullname,email,phone,password}=req.body
    
    User.findOne({email:email},(err,data)=>{
               if(data){
                   console.log("Existing User")
                   res.send("User Already Present")
               }
               else{
                    const newUser=new User({fullname,email,phone,password})
        
                    newUser.save()
                           .then(()=>res.send("User Added"))
                           .catch(err=>res.status(400).send(`Error : ${err}`))
                }
            })
}

const login=(req,res)=>{
    const {email,password}=req.body

    User.findOne({email:email},(err,present)=>{
        if(present){
            User.findOne({email:email,password:password},(err,login)=>{
                if(login){
                    console.log("User loged in")
                    res.send("ok")
                }
                else{
                    res.send("Email and Password Doest Match")
                }
            })
        }
        else{
            res.send("User doesnt Exist")
        }
    })
}

module.exports={signup,login}