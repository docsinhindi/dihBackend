module.exports.SplitPairRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitPairRule",
      hCode: `public final class <a href="#SplitPairRule">SplitPairRule</a> extends SplitRule`,
  
      des: 
        `
        <p>SplitPairRule class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek pair (dono) of embedded windows ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap ek pair of embedded windows ke liye rule ko define aur manage kar sakte hain. Rule specify karke aap ye decide kar sakte hain ki embedded windows ko kab expand karna hai aur kab nahi karna hai.</p>
  
       
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

              des: `Is method ka use object ke comparison ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object ke equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use object ke comparison mein hota hai. Java me, equals() method Object class se inherit ki gayi hai, lekin aksar custom classes mein ise override kiya jata hai taki class ke instances ko sahi tarike se compare kiya ja sake.</p>

              <p>equals() method ke madhyam se aap object ke properties aur data members ko compare kar sakte hain. Agar dono objects ke properties aur data members ek dusre se match karte hain, to method true return karta hai, indicating that the objects are equal. Agar values match nahi karte, to method false return hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Yeh parameter ek Object hai jiska saath comparison kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "getClearTop",
              id: "getClearTop()",
              dataTypeName: `final boolean`,
              code: `<a href="#getClearTop()">getClearTop</a>()`,
  
              fullCode: `public final boolean <a href="#getClearTop()">getClearTop</a>()`,

              des: `Is method ka use clear top attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use clear top attribute ko retrieve karne ke liye hota hai. Clear top attribute ek flag hota hai jo indicate karta hai ki agar specified activity instance stack mein already exist karti hai, to us activity ko top par laakar uske upar wale activities ko remove kar diya jayega.</p>

              <p>Yeh method ek boolean value return karta hai, jo clear top attribute ko represent karta hai.</p>
              `,

              parameter: [],
            },

            {
              dep: false,
              name: "getFilters",
              id: "getFilters()",
              dataTypeName: `final @NonNull Set<@NonNull SplitPairFilter>`,
              code: `<a href="#getFilters()">getFilters</a>()`,
  
              fullCode: `public final @NonNull Set<@NonNull SplitPairFilter> <a href="#getFilters()">getFilters</a>()`,

              des: `Is method ka use ek set of SplitPairFilter objects ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ek set of SplitPairFilter objects ko retrieve karne ke liye hota hai. Aap getFilters() method ka use karke SplitPairRule object se uske filters set ko access kar sakte hain.</p>

              <p>Yeh method ek Set return karta hai, jisme har element SplitPairFilter type ka hota hai. @NonNull annotation indicate karta hai ki set aur uske elements null nahi honge.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "getFinishPrimaryWithSecondary",
              id: "getFinishPrimaryWithSecondary()",
              dataTypeName: `final @NonNull SplitRule.FinishBehavior`,
              code: `<a href="#getFinishPrimaryWithSecondary()">getFinishPrimaryWithSecondary</a>()`,
  
              fullCode: `public final @NonNull SplitRule.FinishBehavior <a href="#getFinishPrimaryWithSecondary()">getFinishPrimaryWithSecondary</a>()`,

              des: `Is method ka use primary activity ko secondary activity ke saath finish karne ke behavior ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use primary activity ko secondary activity ke saath finish karne ke behavior ko retrieve karne ke liye hota hai. Finish behavior decide karta hai ki primary activity ko secondary activity ke saath kaise handle kiya jayega, yaani kya primary activity ko finish kiya jayega ya nahi.</p>

              <p>Yeh method SplitRule.FinishBehavior type ka object return karta hai, jo primary activity ko secondary activity ke saath finish karne ke behavior ko represent karta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "getFinishSecondaryWithPrimary",
              id: "getFinishSecondaryWithPrimary()",
              dataTypeName: `final @NonNull SplitRule.FinishBehavior`,
              code: `<a href="#getFinishSecondaryWithPrimary()">getFinishSecondaryWithPrimary</a>()`,
  
              fullCode: `public final @NonNull SplitRule.FinishBehavior <a href="#getFinishSecondaryWithPrimary()">getFinishSecondaryWithPrimary</a>()`,

              des: `Is method ka use secondary activity ko primary activity ke saath finish karne ke behavior ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use secondary activity ko primary activity ke saath finish karne ke behavior ko retrieve karne ke liye hota hai. Finish behavior decide karta hai ki secondary activity ko primary activity ke saath kaise handle kiya jayega, yaani kya secondary activity ko finish kiya jayega ya nahi.</p>

              <p>Yeh method SplitRule.FinishBehavior type ka object return karta hai, jo secondary activity ko primary activity ke saath finish karne ke behavior ko represent karta hai.</p>
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

              des: `Is method ka use object ke hash code ko generate karne ke liye hota hai.`,
  
              longDes: `
              <p>Hash code ek unique integer value hoti hai jo ek object ko uniquely identify karti hai. Hash code ka use mainly data structures mein search aur comparison mein kiya jata hai. Objects ko hash code ke basis par store kiya jaata hai, jisse unko search karte waqt performance improve ho jati hai.</p>

              <p>Yeh method ek integer value return karta hai, jo object ka hash code represent karta hai.</p>
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

              des: `Is method ka use object ko human-readable string format mein represent karne ke liye hota hai.`,
  
              longDes: `
              <p>toString() method ka use object ko text format mein represent karne ke liye hota hai, jisse hum uske details ko padh aur samajh sakein. Java mein, Object class mein toString() method define hoti hai, lekin aksar custom classes mein ise override kiya jata hai taki us class ke instances ko readable format mein display kiya ja sake.</p>

              <p>Yeh method ek string return karta hai, jo object ko represent karta hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  