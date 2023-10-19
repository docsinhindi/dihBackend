const express = require("express");
const router = express.Router();

const ContactModel =require("../models/contact")

const handleContact = require("../controller/contact");

router.post("/contact", async(req,res)=>{
    console.log("connect ls")
    const result = new ContactModel(req.body);
    result.save().then(()=>{
        res.json({
            "success":true,
            "mssg":"data save in successfully."
        })
    })
    .catch((err)=>{
        res.json({
            "success":false,
            "mssg":"data not save"
        })
    });
})


module.exports = router;