module.exports.SplitAttributes_Builder = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitAttributes.Builder",
      hCode: `public final class <a href="#SplitAttributes.Builder">SplitAttributes.Builder</a>`,
  
      des: 
        `
        <p>SplitAttributes.Builder class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is class ka use karke aap SplitAttributes object ko customize kar sakte hain. Builder class ki methods ki madad se aap embedded window ke split direction aur split proportion ko define kar sakte hain. Jab aap builder object ke methods se attributes set kar lete hain, tab build() method se final SplitAttributes object create hota hai jo specified attributes ke sath hota hai.</p>
  
       
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
              code: `Builder()`,
              fullCode: `public Builder()`,

              des: `Builder constructor ka use ek new SplitAttributes.Builder object create karne ke liye hota hai.`,

              longDes: `
              <p>Builder constructor ka use ek new SplitAttributes.Builder object create karne ke liye hota hai. Is object ki madad se aap SplitAttributes object ke attributes ko step-by-step set kar sakte hain aur fir use build karke final SplitAttributes object create kar sakte hain.</p>
              `,
              parameter: [],
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
              dataTypeName: `final @NonNull SplitAttributes`,
              code: `<a href="#build()">build</a>()`,
  
              fullCode: `public final @NonNull SplitAttributes <a href="#build()">build</a>()`,

              des: `Is method ki madad se aap builder object ke dwara set ki gayi attributes ko use karke final SplitAttributes object create kar sakte hain.`,
  
              longDes: `
              <p>build() method ka use builder object ke dwara set ki gayi attributes ko use karke final SplitAttributes object create karne ke liye hota hai. Jab aap attributes ko set karne ke baad build() method ko call karte hain, to builder object se attributes extract hokar ek naya SplitAttributes object create hota hai.</p>
  
              <p>Method ka return type SplitAttributes hota hai, yani ki ek fully constructed SplitAttributes object.</p>
              `,
 
              parameter: [],
            },




            {
              dep: false,
              name: "setLayoutDirection",
              id: "setLayoutDirection()",
              dataTypeName: `final @NonNull SplitAttributes.Builder`,
              code: `<a href="#setLayoutDirection()">setLayoutDirection</a>(
                @NonNull SplitAttributes.LayoutDirection layoutDirection
            )`,
  
              fullCode: `public final @NonNull SplitAttributes.Builder <a href="#setLayoutDirection()">setLayoutDirection</a>(
                @NonNull SplitAttributes.LayoutDirection layoutDirection
            )`,

              des: `Is method ki madad se aap SplitAttributes object ke layout direction ko set kar sakte hain.`,
  
              longDes: `
              <p>setLayoutDirection() method ka use SplitAttributes object ke layout direction attribute ko set karne ke liye hota hai. Aap ise use karke specify kar sakte hain ki content ka layout direction kis direction mein hona chahiye.</p>
  
              <p>Method ka return type SplitAttributes.Builder hota hai, yani ki updated builder object.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitAttributes.LayoutDirection layoutDirection`,
                        des:`<p>Yeh parameter ek SplitAttributes.LayoutDirection enum type ka object leta hai, jo layout direction ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "setSplitType",
              id: "setSplitType()",
              dataTypeName: `final @NonNull SplitAttributes.Builder`,
              code: `<a href="#setSplitType()">setSplitType</a>(@NonNull SplitAttributes.SplitType type)`,
  
              fullCode: `public final @NonNull SplitAttributes.Builder <a href="#setSplitType()">setSplitType</a>(@NonNull SplitAttributes.SplitType type)`,

              des: `Is method ki madad se aap SplitAttributes object ke split type ko set kar sakte hain.`,
  
              longDes: `
              <p>setSplitType() method ka use SplitAttributes object ke split type attribute ko set karne ke liye hota hai. Aap ise use karke specify kar sakte hain ki split type kaisa hona chahiye, jaise ki hardware, resizable, ya overlay.</p>
  
              <p>Method ka return type SplitAttributes.Builder hota hai, yani ki updated builder object.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitAttributes.SplitType type`,
                        des:`<p>Yeh parameter ek SplitAttributes.SplitType enum type ka object leta hai, jo split type ko represent karta hai.</p>`,
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
  