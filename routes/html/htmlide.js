const router = require("express").Router();
const fs = require('fs');


//import



router.get('/html-ide', (req, res) => {
  const data = req.query;


  
  const fetchIdeCode = (htmlcode) => {
    const codeId = `${data.topic}/${data.file}/${data.id}`;

    let codeArray;
    // code ko match karega
const getCode = () => {
      // Yahan `codeArray` ke array mein har ek object ko check karte hain
      for (let i = 0; i < codeArray.length; i++) {
        for (const item of codeArray[i]) {

          if (item.id === codeId) {
            return item; // Match hua, object return karte hain
          }


        }
        return null; // Match nahi hua
      }

    }


 let matchedData;
    try {

      codeArray = [htmlcode[data.file].points_tips.arr, htmlcode[data.file].points, htmlcode[data.file].example];
      matchedData =   getCode();

    } catch (error) {

      try {
        codeArray = [htmlcode[data.file].points, htmlcode[data.file].example];
        matchedData =   getCode();

      } catch (error) {

        codeArray = [htmlcode[data.file].example];
        matchedData =   getCode();
      }
    }


    if (matchedData) {
      // console.log(matchedData); // Matched data console mein print karte hain
      res.json(matchedData); // Client ko matched data bhejte hain
    } else {
      res.json({ error: 'No matching data found' }); // Match nahi mila toh error bhejte hain
    }

  }


  // konse path ke data retrive karna hai ye spicify karta hai---
  const htmlTutorialFile = `../../data/html/${data.topic}/${data.file}`;
  const cssTutorialFile = `../../data/css/${data.topic}/${data.file}`;


  try {

    const htmlcode = require(htmlTutorialFile);
    fetchIdeCode(htmlcode);

  } catch (errHtml) {

    try {

      const csscode = require(cssTutorialFile);
      fetchIdeCode(csscode);

    } catch (errCss) {

    }
  }

});


module.exports = router;
