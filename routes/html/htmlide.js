const router = require("express").Router();



//import



router.post('/html-ide', (req , res)=>{
    const data = req.body;
    // console.log(req.body)

    // konse path ke data retrive karna hai ye spicify karta hai---
    const htmlcode = require(`../../data/html/${data.whichType}/${data.whichHeading}`)

    
    const codeId = `${data.whichType}/${data.whichHeading}/${data.id}`;

    

    const codeArray = htmlcode[data.whichHeading].points || htmlcode[data.whichHeading].example;
    

    const getCode = () => {
        // Yahan `codeArray` ke array mein har ek object ko check karte hain
        for (const item of codeArray) {
           
                 if (item.id === codeId) {
                return item; // Match hua, object return karte hain
            }
           
        }
        return null; // Match nahi hua
    }

    const matchedData =  getCode();
    // console.log(matchedData)

    if (matchedData) {
        // console.log(matchedData); // Matched data console mein print karte hain
        res.json(matchedData); // Client ko matched data bhejte hain
    } else {
        res.json({ error: 'No matching data found' }); // Match nahi mila toh error bhejte hain
    }

});


module.exports = router;
