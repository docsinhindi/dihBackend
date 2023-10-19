module.exports.SplitAttributes_SplitType = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitAttributes.SplitType",
      hCode: `public final class <a href="#SplitAttributes.SplitType">SplitAttributes.SplitType</a>`,
  
      des: 
        `
        <p>SplitAttributes.SplitType enum class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is enum class ki madad se aap embedded window ki split type ko specify kar sakte hain. Split type ka chunav display (DISPLAY) ya virtual input devices (VIRTUAL) ke beech mein kiya ja sakta hai.</p>
  
       
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

              des: `equals() method ka use SplitAttributes.SplitType enum type ke objects ko compare karne ke liye hota hai.`,
  
              longDes: `
              <p>equals() method ka use SplitAttributes.SplitType enum type ke objects ko compare karne ke liye hota hai. Aap is method ki madad se verify kar sakte hain ki do objects ka split type ek dusre ke equal hai ya nahi.</p>
  
              <p>Method ka return type boolean hota hai. Agar current object aur other object equal hote hain, to true return hota hai, warna false.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Yeh parameter ek any object leta hai, jiske saath aap current SplitAttributes.SplitType object ko compare karna chahte hain.</p>`,
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

              des: `hashCode() method ka use ek SplitAttributes.SplitType object ke liye unique hash code generate karne ke liye hota hai.`,
  
              longDes: `
              <p>hashCode() method ka use ek SplitAttributes.SplitType object ke liye unique hash code generate karne ke liye hota hai. Hash code ka use mainly collection classes mein objects ko organize, store, aur search karne ke liye hota hai.</p>
  
              <p>Method ka return type int hota hai, yani ki ek integer value jo object ka hash code represent karta hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "ratio",
              id: "ratio()",
              dataTypeName: `static final @NonNull SplitAttributes.SplitType`,
              code: `<a href="#ratio()">ratio</a>(
                @FloatRange(from = 0.0, to = 1.0, fromInclusive = false, toInclusive = false) float ratio
            )`,
  
              fullCode: `public static final @NonNull SplitAttributes.SplitType <a href="#ratio()">ratio</a>(
                @FloatRange(from = 0.0, to = 1.0, fromInclusive = false, toInclusive = false) float ratio
            )`,

              des: `Is method ki madad se aap ek specific aspect ratio ke sath ek split type object bana sakte hain.`,
  
              longDes: `
              <p>ratio() method ka use kisi specific aspect ratio ke sath ek SplitType object create karne ke liye hota hai. Is method ko typically SplitAttributes object create karte waqt ya EmbeddingRule mein split type specify karte waqt istemal kiya jata hai.</p>
  
              <p>Method ka return type SplitAttributes.SplitType hota hai, yani ki ek specific instance of the SplitType enum type.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: ` @FloatRange(from = 0.0, to = 1.0, fromInclusive = false, toInclusive = false) float ratio`,
                        des:`<p>Yeh parameter ek floating point value leta hai jo 0 se 1 tak ka hona chahiye. Yani ki yeh parameter ek valid aspect ratio ko represent karta hai.</p>`,
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

              des: `Is method ki madad se aap enum type ke values ko string format mein dekh sakte hain.`,
  
              longDes: `
              <p>Is method ki madad se aap enum type ke values ko string format mein dekh sakte hain.</p>
              `,

              parameter: [],
            },


          ],
        },
  
        
      
     
  

      },
    });
  };
  