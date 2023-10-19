const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    feedback:{
        type:String
    },
    additionalFeedback:{
        type:String
    },
    url:{
        type:String
    }
},{
    timestamps:true
});


const FeedbackModel = mongoose.model("feedback",feedbackSchema);

module.exports = FeedbackModel;