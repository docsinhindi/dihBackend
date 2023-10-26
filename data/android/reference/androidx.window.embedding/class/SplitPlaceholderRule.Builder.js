module.exports.SplitPlaceholderRule_Builder = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitPlaceholderRule.Builder",
      hCode: `public final class <a href="#SplitPlaceholderRule.Builder">SplitPlaceholderRule.Builder</a>`,
  
      des: 
        `
        <p>SplitPlaceholderRule.Builder class ka use SplitPlaceholderRule object ko create aur configure karne ke liye hota hai. Is class ki madad se aap placeholder window ke liye rule ko define aur manage kar sakte hain.</p>
  
       
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
              code: `<a href="#Builder()">Builder</a>(
                @NonNull Set<@NonNull ActivityFilter> filters,
                @NonNull Intent placeholderIntent
            )`,
              fullCode: `public <a href="#Builder()">Builder</a>(
                @NonNull Set<@NonNull ActivityFilter> filters,
                @NonNull Intent placeholderIntent
            )`,

              des: `Is method ka use ek builder object ko initialize karne ke liye hota hai jab aap SplitPlaceholderRule object create kar rahe hain.`,

              longDes: `
              <p>Is method ka use builder object ko initialize karne ke liye hota hai jab aap SplitPlaceholderRule object create kar rahe hain. Aap is method ke parameters ke madhyam se required properties ko builder object ke saath associate kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Set<@NonNull ActivityFilter> filters`,
                        des:`<p>Yeh parameter ek set of ActivityFilter objects hai. Ye filters SplitPlaceholderRule object ke saath associated honge aur us rule ke liye conditions define karte hain.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Intent placeholderIntent`,
                        des:`<p>Yeh parameter ek Intent object hai jo placeholder activity ko start karne ke liye use hoga.</p>`,
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
              dataTypeName: `final @NonNull SplitPlaceholderRule`,
              code: `<a href="#build()">build</a>()`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule <a href="#build()">build</a>()`,

              des: `Is method ka use final SplitPlaceholderRule object ko create karne ke liye hota hai jab aap builder object ke saath set properties ko combine karke rule object banane ke liye taiyar hote hain.`,
  
              longDes: `
              <p>Is method ka use final SplitPlaceholderRule object ko create karne ke liye hota hai jab aap builder object ke saath set properties ko combine karke rule object banane ke liye taiyar hote hain.</p>
  
              <p>Yeh method ek SplitPlaceholderRule object return karta hai jo builder object se create kiya gaya hai.</p>
              `,
  
              parameter: [],
            },





            {
              dep: false,
              name: "setDefaultSplitAttributes",
              id: "setDefaultSplitAttributes()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setDefaultSplitAttributes()">setDefaultSplitAttributes</a>(
                @NonNull SplitAttributes defaultSplitAttributes
            )`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setDefaultSplitAttributes()">setDefaultSplitAttributes</a>(
                @NonNull SplitAttributes defaultSplitAttributes
            )`,

              des: `Is method ka use builder object ke saath associated SplitAttributes ko set karne ke liye hota hai jo placeholder activity ke default split attributes honge.`,
  
              longDes: `
              <p>Is method ka use builder object ke saath associated SplitAttributes ko set karne ke liye hota hai jo placeholder activity ke default split attributes honge. Placeholder activity ke default split attributes se matalab woh attributes jo placeholder activity ko describe karte hain, jaise ki screen size, orientation, etc.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitAttributes defaultSplitAttributes`,
                        des:`<p>Yeh parameter ek SplitAttributes object hai jo placeholder activity ke default split attributes ko represent karega.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setFinishPrimaryWithPlaceholder",
              id: "setFinishPrimaryWithPlaceholder()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setFinishPrimaryWithPlaceholder()">setFinishPrimaryWithPlaceholder</a>(
                @NonNull SplitRule.FinishBehavior finishPrimaryWithPlaceholder
            )`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setFinishPrimaryWithPlaceholder()">setFinishPrimaryWithPlaceholder</a>(
                @NonNull SplitRule.FinishBehavior finishPrimaryWithPlaceholder
            )`,

              des: `Is method ka use builder object ke saath associated finish behavior ko set karne ke liye hota hai jab primary activity placeholder activity ke saath execute hoti hai.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki primary task ko kaise finish karna hai jab placeholder task execute ho rahi hai.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitRule.FinishBehavior finishPrimaryWithPlaceholder`,
                        des:`<p>Yeh parameter ek SplitRule.FinishBehavior enum type ka object hai, jiska use finishing behavior ko set karne mein hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setMaxAspectRatioInLandscape",
              id: "setMaxAspectRatioInLandscape()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setMaxAspectRatioInLandscape()">setMaxAspectRatioInLandscape</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setMaxAspectRatioInLandscape()">setMaxAspectRatioInLandscape</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically landscape mode mein maximum aspect ratio ko set karne ke liye.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki landscape mode mein placeholder task ka maximum aspect ratio kya hona chahiye.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EmbeddingAspectRatio aspectRatio`,
                        des:`<p>Yeh parameter ek EmbeddingAspectRatio enum type ka object hai, jiska use maximum aspect ratio ko landscape mode mein set karne mein hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setMaxAspectRatioInPortrait",
              id: "setMaxAspectRatioInPortrait()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setMaxAspectRatioInPortrait()">setMaxAspectRatioInPortrait</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setMaxAspectRatioInPortrait()">setMaxAspectRatioInPortrait</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically portrait mode mein maximum aspect ratio ko set karne ke liye.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki portrait mode mein placeholder task ka maximum aspect ratio kya hona chahiye.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EmbeddingAspectRatio aspectRatio`,
                        des:`<p>Yeh parameter ek EmbeddingAspectRatio enum type ka object hai, jiska use maximum aspect ratio ko portrait mode mein set karne mein hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setMinHeightDp",
              id: "setMinHeightDp()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setMinHeightDp()">setMinHeightDp</a>(@IntRange(from = 0) int minHeightDp)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setMinHeightDp()">setMinHeightDp</a>(@IntRange(from = 0) int minHeightDp)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically minimum height ko set karne ke liye, jo dp (density-independent pixels) mein hoti hai.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki placeholder task ka minimum height kya hona chahiye dp mein.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IntRange(from = 0) int minHeightDp`,
                        des:`<p>Yeh parameter ek integer hai jo 0 ya usse bada hona chahiye. Is parameter se minimum height dp mein set ki jati hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setMinSmallestWidthDp",
              id: "setMinSmallestWidthDp()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setMinSmallestWidthDp()">setMinSmallestWidthDp</a>(@IntRange(from = 0) int minSmallestWidthDp)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setMinSmallestWidthDp()">setMinSmallestWidthDp</a>(@IntRange(from = 0) int minSmallestWidthDp)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically smallest screen width ke liye minimum width ko set karne ke liye.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki placeholder task ka smallest screen width ke liye minimum width kya hona chahiye dp mein.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IntRange(from = 0) int minSmallestWidthDp`,
                        des:`<p>Yeh parameter ek integer hai jo 0 ya usse bada hona chahiye. Is parameter se smallest screen width ke liye minimum width dp mein set ki jati hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setMinWidthDp",
              id: "setMinWidthDp()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setMinWidthDp()">setMinWidthDp</a>(@IntRange(from = 0) int minWidthDp)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setMinWidthDp()">setMinWidthDp</a>(@IntRange(from = 0) int minWidthDp)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically minimum width ko set karne ke liye, jo dp (density-independent pixels) mein hoti hai.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki placeholder task ka minimum width kya hona chahiye dp mein.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IntRange(from = 0) int minWidthDp`,
                        des:`<p>Yeh parameter ek integer hai jo 0 ya usse bada hona chahiye. Is parameter se minimum width dp mein set ki jati hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setSticky",
              id: "setSticky()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setSticky()">setSticky</a>(boolean isSticky)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setSticky()">setSticky</a>(boolean isSticky)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically placeholder task ko "sticky" banane ke liye.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki placeholder task ko "sticky" banana hai ya nahi.</p>

              <p>Agar isSticky parameter true hai, to placeholder task "sticky" ho jata hai, yani ki placeholder task execute hone ke baad bhi main task ko replace nahi karta, jisse user ko smooth experience milta hai. Agar isSticky parameter false hai, to placeholder task non-sticky rehta hai, aur main task placeholder task ke execution ke baad replace ho jata hai.</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean isSticky`,
                        des:`<p>Yeh parameter ek boolean value hai, jisse specify kiya jata hai ki placeholder task "sticky" banana hai ya nahi.</p>`,
                      },
                    ],
                  },
              ],
            },






            {
              dep: false,
              name: "setTag",
              id: "setTag()",
              dataTypeName: `final @NonNull SplitPlaceholderRule.Builder`,
              code: `<a href="#setTag()">setTag</a>(String tag)`,
  
              fullCode: `public final @NonNull SplitPlaceholderRule.Builder <a href="#setTag()">setTag</a>(String tag)`,

              des: `Is method ka use SplitPlaceholderRule objects ko configure karne ke liye hota hai, specifically placeholder task ko ek tag (identifier) assign karne ke liye.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule objects ko configure karne mein hota hai. Jab aap ek SplitPlaceholderRule object ko define kar rahe hote hain, aap is method ka use karke specify kar sakte hain ki placeholder task ko kis tag se identify karna ha</p>

              <p>Yeh method khud ko return karta hai, jisse method chaining kiya ja sakta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `String tag`,
                        des:`<p>Yeh parameter ek string hai jo placeholder task ko identify karne ke liye use hota hai. Aap koi bhi string tag provide kar sakte hain.</p>`,
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
  