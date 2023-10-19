module.exports.FoldingFeatureTestingConstants = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "FoldingFeatureTestingConstants",
      hCode: `public static class <a href="#FoldingFeatureTestingConstants">FoldingFeatureTestingConstants</a>`,
  
      des: 
        `
        <p>FoldingFeatureTestingConstants class ka use predefined constants ko test scenarios me use karne ke liye hota hai. Aap is class ke constants ko use karke folding feature ke various aspects ko test kar sakte hain.</p>
  
       
        `,
      img: [
        // {
        //   url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
        //   label: "Action bar",
        //   fig: "Figure 1.",
        // },
      ],
      summary: {
        success: true,
  
        
  
        
      constant: {
        name: "Constants",
        success: true,
        method: [
          {
            dep: true,
            name: `FOLDING_FEATURE_CENTER_DEFAULT`,
            id: "",
            dataTypeName: `static final int`,
            code: `FOLDING_FEATURE_CENTER_DEFAULT`,

            fullCode: `public static final int FOLDING_FEATURE_CENTER_DEFAULT`,

            des: `FOLDING_FEATURE_CENTER_DEFAULT ek constant hota hai jo folding feature ke center position ka default value represent karta hai. Iska use folding display feature ke mock scenarios mein default center position set karne ke liye hota hai.`,

            longDes: `
            </p>FOLDING_FEATURE_CENTER_DEFAULT ek constant hota hai jo folding feature ke center position ka default value represent karta hai. Iska use folding display feature ke mock scenarios mein default center position set karne ke liye hota hai.</p>
            `,
            parameter: [],
          },
        ],
      },
      
     
  

      },
    });
  };
  