module.exports.SplitAttributes = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitAttributes",
      hCode: `public final class <a href="#SplitAttributes">SplitAttributes</a>`,
  
      des: 
        `
        <p>SplitAttributes class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap Split-Screen mode ke liye attributes aur properties ko customize kar sakte hain. Aap window ka split direction (gravity) aur split proportion ko define kar sakte hain.</p>
  
       
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

              des: `Ye method check karta hai ki kya ek SplitAttributes object dusre object ke saath equal hai ya nahi.`,
  
              longDes: `
              <p>equals() method ka use do SplitAttributes objects ko compare karne ke liye hota hai. Ye method attributes ke basis par check karta hai ki kya dono objects ke attributes same hain ya nahi.</p>

              <p>Method ka return type boolean hota hai. Agar dono objects equal hain to true return hota hai, nahi to false return hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Comparision ke liye dusra object jo SplitAttributes object ke saath compare kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "getLayoutDirection",
              id: "getLayoutDirection()",
              dataTypeName: `final @NonNull SplitAttributes.LayoutDirection`,
              code: `<a href="#getLayoutDirection()">getLayoutDirection</a>()`,
  
              fullCode: `public final @NonNull SplitAttributes.LayoutDirection <a href="#getLayoutDirection()">getLayoutDirection</a>()`,

              des: `getLayoutDirection() method ka use ek SplitAttributes object ke layout direction ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getLayoutDirection() method ka use ek SplitAttributes object ke layout direction ko retrieve karne ke liye hota hai. Aap is method ka use karke jaan sakte hain ki content ka direction kis taraf hai, jisse aap apne application ke design aur layout decisions par influence kar sakte hain.</p>

              <p>Method ka return type SplitAttributes.LayoutDirection hota hai, yani ki ek enumeration type jo layout direction ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSplitType",
              id: "getSplitType()",
              dataTypeName: `final @NonNull SplitAttributes.SplitType`,
              code: `<a href="#getSplitType()">getSplitType</a>()`,
  
              fullCode: `public final @NonNull SplitAttributes.SplitType <a href="#getSplitType()">getSplitType</a>()`,

              des: `getSplitType() method ka use ek SplitAttributes object ke split type ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSplitType() method ka use ek SplitAttributes object ke split type ko retrieve karne ke liye hota hai. Aap is method ka use karke jaan sakte hain ki content kis tarah se split hua hai, taki aap content ke different versions ko manage aur customize kar saken.</p>

              <p>Method ka return type SplitAttributes.SplitType hota hai, yani ki ek enumeration type jo split type ko represent karta hai.</p>
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

              des: `hashCode() method ka use ek SplitAttributes object ke liye unique hash code generate karne ke liye hota hai.`,
  
              longDes: `
              <p>hashCode() method ka use ek SplitAttributes object ke liye unique hash code generate karne ke liye hota hai. Hash code ki uniqueness se, objects ko collections mein store karte waqt searching aur indexing mein help milti hai. Ye method aksar equals() method ke saath mil kar use hota hai, jisse dono methods se objects ki consistency maintain ho.</p>

              <p>Method ka return type int hota hai, yani ki ek integer value jo hash code ko represent karta hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `Method ka return type String hota hai, yani ki ek string value jo object ko string representation mein represent karta hai.`,
  
              longDes: `
              <p>Method ka return type String hota hai, yani ki ek string value jo object ko string representation mein represent karta hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  