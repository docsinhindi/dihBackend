module.exports.EmbeddingAspectRatio = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "EmbeddingAspectRatio",
      hCode: `public final class <a href="#EmbeddingAspectRatio">EmbeddingAspectRatio</a>`,
  
      des: 
        `
        <p>EmbeddingAspectRatio class ka use Window embedding scenario mein hota hai, jahan pe ek window ko dusre window ke andar embed kiya jata hai, jaise ki Split-Screen mode mein ya multi-window environment mein.</p>
        
          
        <p>Is class ka use karke aap ek window ko set aspect ratio ke sath embed kar sakte hain. Aspect ratio ek numeric value hota hai jo width aur height ke proportion ko represent karta hai. Is tarike se, jab aap ek window ko dusre window ke andar embed karte hain, aap us window ka size aur aspect ratio specify kar sakte hain.</p>
  
       
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

              des: `Ye method ek Object type ke parameter ko accept karta hai, jise aap kisi dusre object ke saath compare kar sakte hain.`,
  
              longDes: `
              <p>equals() method ka use objects ke properties aur values ko compare karne ke liye hota hai. Ye method generally overridden hota hai, jisse aap apne class ke objects ko customize karke compare kar sakte hain. By default, yeh method Object class mein define hota hai jisse har class ise inherit karti hai.</p>
  
              <p>Aap apne class mein equals() method ko override karke, apne objects ke specific properties ko compare kar sakte hain. Isse aap ek user-defined way se objects ko equal ya unequal declare kar sakte hain.</p>

              <p>Is method ka return type boolean hota hai. Agar compared objects ek dusre se equal hote hain to true, nahi to false return hota hai.</p>
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
              name: "hashCode",
              id: "hashCode()",
              dataTypeName: `int`,
              code: `<a href="#hashCode()">hashCode</a>()`,
  
              fullCode: `public int <a href="#hashCode()">hashCode</a>()`,

              des: `hashCode() method ka use objects ke identity ko hash code ke roop mein represent karne ke liye hota hai.`,
  
              longDes: `
              <p>hashCode() method ka use objects ke identity ko hash code ke roop mein represent karne ke liye hota hai. Hash code unique hona chahiye, yani ki har object ke liye alag-alag hash code generate hona chahiye. Agar do objects equal hote hain (i.e., equals() method true return karta hai), to unke hash codes bhi equal hona chahiye.</p>
  
              <p>Hash code ka use mainly data structures mein hota hai jaise ki hash tables. Hash codes se objects ko store aur retrieve karne me efficiency milti hai kyunki hash codes unko unique tareeke se identify karte hain.</p>

              <p>Method ka return type integer hota hai, jo object ka hash code represent karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "ratio",
              id: "ratio()",
              dataTypeName: `static final @NonNull EmbeddingAspectRatio`,
              code: `<a href="#ratio()">ratio</a>(@FloatRange(from = 1.0, fromInclusive = false) float ratio)`,
  
              fullCode: `public static final @NonNull EmbeddingAspectRatio <a href="#ratio()">ratio</a>(@FloatRange(from = 1.0, fromInclusive = false) float ratio)`,

              des: `Yeh method EmbeddingAspectRatio class ka ek static factory method hai jo, aapko ek object create karne mein madad karta hai jiska aspect ratio specific value se set kiya gaya hai.`,
  
              longDes: `
              <p>Yeh method EmbeddingAspectRatio class ka ek static factory method hai jo, aapko ek object create karne mein madad karta hai jiska aspect ratio specific value se set kiya gaya hai.</p>
  
              <p>Method ka return type EmbeddingAspectRatio object hai, jiska aspect ratio ratio value se define hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@FloatRange(from = 1.0, fromInclusive = false) float ratio`,
                        des:`<p>Ek float value, jo aspect ratio ka value represent karta hai. Ye value 1.0 se bada hona chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `toString() method ka use object ko human-readable string form mein represent karne ke liye hota hai.`,
  
              longDes: `
              <p>toString() method ka use object ko human-readable string form mein represent karne ke liye hota hai. Yeh method primarily debugging purposes ke liye use hota hai jisse aap object ke properties aur values ko log karte waqt dekh sakte hain.</p>
  
              <p>Is method ko default implementation ke roop mein Object class mein define kiya gaya hota hai, lekin aap is method ko apne class mein override karke apne object ka custom string representation bana sakte hain.</p>

              <p>Method ka return type String hota hai, jo EmbeddingAspectRatio object ka string representation hai.</p>
              `,

              parameter: [],
            },



          ],
        },
  
        
      
     
  

      },
    });
  };
  