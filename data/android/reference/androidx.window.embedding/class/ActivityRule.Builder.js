module.exports.ActivityRule_Builder = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityRule.Builder",
      hCode: `public final class <a href="#ActivityRule.Builder">ActivityRule.Builder</a>`,
  
      des: 
        `
        <p>Ye class activity embedding feature ke liye ActivityRule object ko build karne ke liye use hoti hai. Activity embedding feature se app ka task window do containers mein split ho jaata hai: primary aur secondary. Primary container mein main activity hoti hai aur secondary container mein usse launch ki gayi activities hoti hain. Isse app ke activities side by side dikhayi jaati hain aur user ko navigation aur functionality mein madad milti hai.</p>
        
  
        <p>Aap is class se apni app ki activities ko primary ya secondary container mein dikhane ya chhupane ke liye rules build kar sakte hain.</p>
  
       
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
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `Builder`,
              id: "Builder()",
              code: `Builder(@NonNull Set<@NonNull ActivityFilter> filters)`,
              fullCode: `public Builder(@NonNull Set<@NonNull ActivityFilter> filters)`,

              des: `Is constructor ka use ActivityRule.Builder object ko initialize karne ke liye hota hai jab filters set specified hote hain.`,

              longDes: `
              <p>Is constructor ka use ActivityRule.Builder object ko initialize karne ke liye hota hai jab filters set specified hote hain. Filters set builder ke state ko initialize karta hai jisse aap filters set ko ActivityRule object ke saath associate kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Set<@NonNull ActivityFilter> filters`,
                        des:`<p>Yeh parameter ek non-null set of ActivityFilter objects hai, jo ActivityRule.Builder object ke filters set ko represent karte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


          ],
        },

  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "build",
              id: "build()",
              dataTypeName: `final @NonNull ActivityRule`,
              code: `<a href="#build()">build</a>()`,
  
              fullCode: `public final @NonNull ActivityRule <a href="#build()">build</a>()`,

              des: `Is method ka use ActivityRule.Builder object se final ActivityRule object ko build karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule.Builder object se final ActivityRule object ko build karne ke liye hota hai. Builder object ke state (jaise filters, activity name, etc.) se ActivityRule object ko create kiya jata hai aur return kiya jata hai.</p>
  
              `,

              parameter: [],
            },






            {
              dep: false,
              name: "setAlwaysExpand",
              id: "setAlwaysExpand()",
              dataTypeName: `final @NonNull ActivityRule.Builder`,
              code: `<a href="#setAlwaysExpand()">setAlwaysExpand</a>(boolean alwaysExpand)`,
  
              fullCode: `public final @NonNull ActivityRule.Builder <a href="#setAlwaysExpand()">setAlwaysExpand</a>(boolean alwaysExpand)`,

              des: `Is method ka use ActivityRule.Builder object ke alwaysExpand attribute ki value ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule.Builder object ke alwaysExpand attribute ki value ko set karne ke liye hota hai. Builder object ke state ko update karta hai jisse aap later build() method call karke ActivityRule object ko create kar sakte hain.</p>
  
              <p>Yeh method ek ActivityRule.Builder object return karta hai, jisse chaining karke aur attributes ko set karke rule ko build kiya ja sakta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean alwaysExpand`,
                        des:`<p>Yeh parameter ek boolean value hai, jo ActivityRule.Builder object ke alwaysExpand attribute ki value ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setTag",
              id: "setTag()",
              dataTypeName: `final @NonNull ActivityRule.Builder`,
              code: `<a href="#setTag()">setTag</a>(String tag)`,
  
              fullCode: `public final @NonNull ActivityRule.Builder <a href="#setTag()">setTag</a>(String tag)`,

              des: `Is method ka use ActivityRule.Builder object ke tag attribute ki value ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule.Builder object ke tag attribute ki value ko set karne ke liye hota hai. Builder object ke state ko update karta hai jisse aap later build() method call karke ActivityRule object ko create kar sakte hain.</p>
  
              <p>Yeh method ek ActivityRule.Builder object return karta hai, jisse chaining karke aur attributes ko set karke rule ko build kiya ja sakta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `String tag`,
                        des:`<p>Yeh parameter ek string hai, jo ActivityRule.Builder object ke tag attribute ki value ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  