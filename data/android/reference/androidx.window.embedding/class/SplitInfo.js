module.exports.SplitInfo = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitInfo",
      hCode: `public final class <a href="#SplitInfo">SplitInfo</a>`,
  
      des: 
        `
        <p>SplitInfo class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap embedded window ki information ko access kar sakte hain, jaise ki window ka unique ID aur uska associated ComponentName.</p>
  
       
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
              name: "contains",
              id: "contains()",
              dataTypeName: `final boolean`,
              code: `<a href="#contains()">contains</a>(@NonNull Activity activity)`,
  
              fullCode: `public final boolean <a href="#contains()">contains</a>(@NonNull Activity activity)`,

              des: `Is method ka use tab hota hai jab aap janna chahte hain ki kya ek specific Activity object kisi particular split mein include ho ya nahi.`,
  
              longDes: `
              <p>Is method ka use tab hota hai jab aap janna chahte hain ki kya ek specific Activity object kisi particular split mein include ho ya nahi. Agar activity include ho, to iska matlab hai ki us activity ka UI ya content us split ke context mein display ho raha hai.</p>
  
              <p>Yadi di gayi activity specified split mein include ho toh true return hota hai, anyatha false return hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiska check karna hai ki kya yeh specific split mein include ho ya nahi.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "equals",
              id: "equals()",
              dataTypeName: `boolean`,
              code: `<a href="#equals()">equals</a>(Object other)`,
  
              fullCode: `public boolean <a href="#equals()">equals</a>(Object other)`,

              des: `Is method ka use tab hota hai jab aap do SplitInfo objects ko compare karna chahte hain, taki pata chale ki dono splits same hain ya nahi.`,
  
              longDes: `
              <p>Is method ka use tab hota hai jab aap do SplitInfo objects ko compare karna chahte hain, taki pata chale ki dono splits same hain ya nahi.</p>
  
              <p>Yadi other object current SplitInfo object ke equal hai toh true return hota hai, anyatha false return hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Yeh parameter ek Object hai jiski equality SplitInfo object ke sath check karni hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "getPrimaryActivityStack",
              id: "getPrimaryActivityStack()",
              dataTypeName: `final @NonNull ActivityStack`,
              code: `<a href="#getPrimaryActivityStack()">getPrimaryActivityStack</a>()`,
  
              fullCode: `public final @NonNull ActivityStack <a href="#getPrimaryActivityStack()">getPrimaryActivityStack</a>()`,

              des: `Is method ka use primary activity stack ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use primary activity stack ko retrieve karne ke liye hota hai. ActivityManager system multiple tasks aur activities ko manage karta hai, jinme har ek task ke andar ek ya multiple activity stacks hote hain. Har task mein ek primary activity stack hota hai jo current split (partition) mein visible activities ko hold karta hai.</p>
  
              <p>Yeh method ek ActivityStack object return karta hai, jo primary activity stack ko represent karta hai. Primary activity stack current split (partition) mein visible activities ko hold karta hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getSecondaryActivityStack",
              id: "getSecondaryActivityStack()",
              dataTypeName: `final @NonNull ActivityStack`,
              code: `<a href="#getSecondaryActivityStack()">getSecondaryActivityStack</a>()`,
  
              fullCode: `public final @NonNull ActivityStack <a href="#getSecondaryActivityStack()">getSecondaryActivityStack</a>()`,

              des: `Is method ka use secondary activity stack ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use secondary activity stack ko retrieve karne ke liye hota hai. ActivityManager system multiple tasks aur activities ko manage karta hai, jinme har ek task ke andar ek ya multiple activity stacks hote hain. Har task mein ek primary activity stack hota hai jo current split (partition) mein primary activities ko hold karta hai, aur ek secondary activity stack hota hai jo current split mein secondary activities ko hold karta hai.</p>
  
              <p>Yeh method ek ActivityStack object return karta hai, jo secondary activity stack ko represent karta hai. Secondary activity stack current split (partition) mein visible activities ko hold karta hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getSplitAttributes",
              id: "getSplitAttributes()",
              dataTypeName: `final @NonNull SplitAttributes`,
              code: `<a href="#getSplitAttributes()">getSplitAttributes</a>()`,
  
              fullCode: `public final @NonNull SplitAttributes <a href="#getSplitAttributes()">getSplitAttributes</a>()`,

              des: `Is method ka use split attributes ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use split attributes ko retrieve karne ke liye hota hai. Split attributes split se related information ko store karte hain, jaise ki split ka name, orientation, layout configuration, etc. Aap is method ki madad se SplitInfo object se split attributes ko access kar sakte hain.</p>
  
              <p>Yeh method ek SplitAttributes object return karta hai, jo split attributes ko represent karta hai. Split attributes split (partition) se related metadata aur properties ko store karte hain.</p>
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
              <p>Is method ka use object ko human-readable string format mein represent karne ke liye hota hai.</p>
  
              <p>Yeh method ek string return karta hai, jo object ko represent karta hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  