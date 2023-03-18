const express = require('express');
const router = express.Router();
const path=require('path')
const userModel = require('../Model/UserModel');

const {createUser,getUser} = require("../Controller/UserController");
router.get("/test-me",  function (req, res) {
    res.send("My first ever api!")
})
let mainfolder=path.join(__dirname,"../")
router.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"public/index.html")
})

router.post("/register",createUser)

router.get("/users",getUser)
router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:"check url"})
    })

    module.exports = router;