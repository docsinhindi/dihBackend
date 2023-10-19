module.exports.SplitRule_FinishBehavior = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitRule.FinishBehavior",
      hCode: `public final class <a href="#SplitRule.FinishBehavior">SplitRule.FinishBehavior</a>`,
  
      des: 
        `
        <p>SplitRule.FinishBehavior enum class ka use Split-Screen mode ke rules mein finish behavior define karne ke liye hota hai. Jab aap ek embedded window ko finish karte waqt SplitRule mein specify ki gayi finish behavior set karte hain, to wo behavior embedded window ko kaise handle karega, wo define hota hai.</p>
  
       
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
  
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `Yeh method ek string value return karta hai, jo SplitRule.FinishBehavior object ka human-readable representation hota hai.`,
  
              longDes: `
              <p>Yeh method ek string value return karta hai, jo SplitRule.FinishBehavior object ka human-readable representation hota hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  