const express=require("express")
const router=express.Router()
const {signup}=require("../../controller/controller")
const User =require("../../models/user")

router.route("/").post(signup)
module.exports=router