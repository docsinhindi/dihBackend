const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();



mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Mongodb connected");
    }).catch((err)=>{
        console.log("err" + err)
    })



const app = express();


// import router --
const htmlIdeRouter = require("./routes/html/htmlide")
const htmlTutorialRouter = require("./routes/html/tutorial")
const androidReferenceRouter = require('./routes/android/reference')
const AllTutorialRouter = require("./routes/HomePage/AllTutorial")
const cssTutorialRouter = require("./routes/css/tutorial")

const contactRouter = require("./routes/contact");
const feedbackRouter = require("./routes/feedback");
const searchRouter = require("./routes/search")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    console.log("home")
    res.send("success")
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
// android router
app.use("/android/reference",androidReferenceRouter);


//html router
app.use('/html/tutorial', htmlTutorialRouter);

app.use('/html', htmlIdeRouter);

// css router
app.use("/css/tutorial",cssTutorialRouter);


// homepage router
app.use("/allTutorial",AllTutorialRouter);



//other
app.use("/",contactRouter);


app.use("/",feedbackRouter);

app.use("/search",searchRouter)

app.listen(PORT,()=>{
    console.log("application is running on port "+PORT)
})


