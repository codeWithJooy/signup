const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const userSchema=new Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
},
{
    timestamps:true,
})

const User=mongoose.model('User',userSchema)

module.exports = User;