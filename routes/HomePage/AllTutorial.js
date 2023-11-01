const router = require("express").Router();


const {all_tutorial} = require("../../data/HomePage/AllTutorial")


router.get("/",(req,res)=>{
    res.json(all_tutorial)
})

module.exports = router;