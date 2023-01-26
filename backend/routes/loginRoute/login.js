const express=require("express")
const router=express.Router()
const {login}=require("../../controller/controller")


router.route("/").post(login)

module.exports=router