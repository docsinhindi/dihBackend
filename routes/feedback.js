const router = require("express").Router();
const FeedbackModel = require("../models/feedback")


router.post('/feedback', (req,res)=>{

    const data = new FeedbackModel(req.body);

    data.save().then(()=>{
        res.json({
            success:true
        })
    
    }).catch((err)=>{
        console.log("error hai:",err)
    })

});

module.exports = router;