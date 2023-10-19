module.exports.EmbeddingRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "EmbeddingRule",
      hCode: `public abstract class <a href="#EmbeddingRule">EmbeddingRule</a>`,
  
      des: 
        `
        <p>EmbeddingRule class ka use Window embedding scenario mein hota hai, jahan pe ek window ko dusre window ke andar embed kiya jata hai, jaise ki Split-Screen mode mein ya multi-window environment mein.</p>
        
  
        <p>Is class ki madad se aap embedded window ke behavior aur properties ko customize kar sakte hain. Aap embedded window ka type, arguments, aur behavior ko define karke specific use cases ke liye tailor kar sakte hain.</p>
  
       
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
              name: "equals",
              id: "equals()",
              dataTypeName: `boolean`,
              code: `<a href="#equals()">equals</a>(Object other)`,
  
              fullCode: `public boolean <a href="#equals()">equals</a>(Object other)`,

              des: `Is method ka use objects ke properties ko compare karne aur unke equality ko determine karne ke liye hota hai.`,
  
              longDes: `
              <p>equals() method ka use objects ke properties ko compare karne aur unke equality ko determine karne ke liye hota hai. Yadi dono objects ke properties ek dusre se match karte hain, to equals() method true return karega, indicating ki objects equal hain. Agar dono objects ke properties match nahi karte hain, to method false return karega, indicating ki objects unequal hain.</p>
  
              <p>Method ka return type boolean hota hai. Agar compared objects ek dusre se equal hote hain, to true, nahi to false return hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Ye parameter ek Object type ka hai, jiska saath comparison karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "getTag",
              id: "getTag()",
              dataTypeName: `final String`,
              code: `<a href="#getTag()">getTag</a>()`,
  
              fullCode: `public final String <a href="#getTag()">getTag</a>()`,

              des: `getTag() method ka use rule ke saath associate kiye gaye tag (identifier) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTag() method ka use rule ke saath associate kiye gaye tag (identifier) ko retrieve karne ke liye hota hai. Tags ki madad se aap ek rule ko easily recognize aur categorize kar sakte hain.</p>
  
              <p>Method ka return type String hota hai, jo rule ke associated tag (identifier) ko represent karta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "hashCode",
              id: "hashCode()",
              dataTypeName: `int`,
              code: `<a href="#hashCode()">hashCode</a>()`,
  
              fullCode: `public int <a href="#hashCode()">hashCode</a>()`,

              des: `hashCode() method ka use objects ke identity aur properties ko hash code ke roop mein represent karne ke liye hota hai.`,
  
              longDes: `
              <p>hashCode() method ka use objects ke identity aur properties ko hash code ke roop mein represent karne ke liye hota hai. Hash code ideally unique hona chahiye, yani ki do equal objects ke liye unke hash codes bhi equal hote hain. Agar do objects equal nahi hote hain, to unke hash codes bhi different hote hain.</p>
  
              <p>Method ka return type integer hota hai, jo object ka hash code represent karta hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  