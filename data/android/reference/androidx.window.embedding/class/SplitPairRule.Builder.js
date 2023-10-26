module.exports.SplitPairRule_Builder = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitPairRule.Builder",
      hCode: `public final class <a href="#SplitPairRule.Builder">SplitPairRule.Builder</a>`,
  
      des: 
        `
        <p>SplitPairRule.Builder class ka use SplitPairRule object ko create aur configure karne ke liye hota hai. Is class ki madad se aap pair of embedded windows ke liye rule ko define aur manage kar sakte hain.</p>
  
       
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
              code: `<a href="#Builder()">Builder</a>(@NonNull Set<@NonNull SplitPairFilter> filters)`,
              fullCode: `public <a href="#Builder()">Builder</a>(@NonNull Set<@NonNull SplitPairFilter> filters)`,

              des: `Is constructor ka use SplitPairRule.Builder object ko initialize karne ke liye hota hai.`,

              longDes: `
              <p>Is constructor ka use SplitPairRule.Builder object ko initialize karne ke liye hota hai. Aap is constructor ke madhyam se filters set ko builder object ke saath associate kar sakte hain.</p>

              <p>Builder pattern ka use karke aap ek complex object ko step-by-step tarike se create kar sakte hain. Builder class typically methods aur constructors provide karta hai jisse aap object ke properties ko set karke builder object ko manipulate kar sakte hain, aur jab object ki tayyari ho, to builder object se final object create kiya ja sakta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Set<@NonNull SplitPairFilter> filters`,
                        des:`<p>Yeh parameter ek Set hai, jisme har element SplitPairFilter type ka hota hai. @NonNull annotation indicate karta hai ki set aur uske elements null nahi honge.</p>`,
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
              dataTypeName: `final @NonNull SplitPairRule`,
              code: `<a href="#build()">build</a>()`,
  
              fullCode: `public final @NonNull SplitPairRule <a href="#build()">build</a>()`,

              des: `Is method ka use final SplitPairRule object ko build aur return karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use final SplitPairRule object ko build aur return karne ke liye hota hai. Builder pattern mein aap builder object ke methods ke madhyam se properties aur values set karte hain, aur jab object tayyar ho jata hai, to build() method se final object ko create kiya jata hai.</p>
  
              <p>Yeh method SplitPairRule type ka object return karta hai, jo builder ke dwara specify kiye gaye properties aur values ke basis par create kiya gaya hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "setClearTop",
              id: "setClearTop()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setClearTop()">setClearTop</a>(boolean clearTop)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setClearTop()">setClearTop</a>(boolean clearTop)`,

              des: `Is method ka use SplitPairRule.Builder object ke clear top attribute ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitPairRule.Builder object ke clear top attribute ko set karne ke liye hota hai. Clear top attribute ek flag hota hai jo indicate karta hai ki agar specified activity instance stack mein already exist karti hai, to us activity ko top par laakar uske upar wale activities ko remove kar diya jayega.</p>

              <p>Aap setClearTop() method ke madhyam se clear top attribute ko true ya false value se set kar sakte hain, taki builder object ke saath associated SplitPairRule object ko create karte waqt clear top behavior tayyar ho sake.</p>
  
              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean clearTop`,
                        des:`<p>Yeh parameter ek boolean value hai, jo clear top attribute ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setDefaultSplitAttributes",
              id: "setDefaultSplitAttributes()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setDefaultSplitAttributes()">setDefaultSplitAttributes</a>(
                @NonNull SplitAttributes defaultSplitAttributes
            )`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setDefaultSplitAttributes()">setDefaultSplitAttributes</a>(
                @NonNull SplitAttributes defaultSplitAttributes
            )`,

              des: `Is method ka use default split attributes ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use default split attributes ko set karne ke liye hota hai. Default split attributes ek set of properties aur values hote hain jo rule ke liye default behavior aur values provide karte hain. Jab koi specific property builder object ke saath set nahi ki jati hai, tab default split attributes ka use hota hai.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitAttributes defaultSplitAttributes`,
                        des:`<p>Yeh parameter ek SplitAttributes object hai, jo default split attributes ko represent karta hai. @NonNull annotation indicate karta hai ki parameter null nahi hoga.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setFinishPrimaryWithSecondary",
              id: "setFinishPrimaryWithSecondary()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setFinishPrimaryWithSecondary()">setFinishPrimaryWithSecondary</a>(
                @NonNull SplitRule.FinishBehavior finishPrimaryWithSecondary
            )`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setFinishPrimaryWithSecondary()">setFinishPrimaryWithSecondary</a>(
                @NonNull SplitRule.FinishBehavior finishPrimaryWithSecondary
            )`,

              des: `Is method ka use primary activity ko secondary activity ke saath finish karne ke behavior ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use primary activity ko secondary activity ke saath finish karne ke behavior ko set karne ke liye hota hai. Finish behavior decide karta hai ki primary activity ko secondary activity ke saath kaise handle kiya jayega, yaani kya primary activity ko finish kiya jayega ya nahi.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitRule.FinishBehavior finishPrimaryWithSecondary`,
                        des:`<p>Yeh parameter ek SplitRule.FinishBehavior object hai, jo primary activity ko secondary activity ke saath finish karne ke behavior ko represent karta hai. @NonNull annotation indicate karta hai ki parameter null nahi hoga.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setFinishSecondaryWithPrimary",
              id: "setFinishSecondaryWithPrimary()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setFinishSecondaryWithPrimary()">setFinishSecondaryWithPrimary</a>(
                @NonNull SplitRule.FinishBehavior finishSecondaryWithPrimary
            )`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setFinishSecondaryWithPrimary()">setFinishSecondaryWithPrimary</a>(
                @NonNull SplitRule.FinishBehavior finishSecondaryWithPrimary
            )`,

              des: `Is method ka use secondary activity ko primary activity ke saath finish karne ke behavior ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use secondary activity ko primary activity ke saath finish karne ke behavior ko set karne ke liye hota hai. Finish behavior decide karta hai ki secondary activity ko primary activity ke saath kaise handle kiya jayega, yaani kya secondary activity ko finish kiya jayega ya nahi.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitRule.FinishBehavior finishSecondaryWithPrimary`,
                        des:`<p>Yeh parameter ek SplitRule.FinishBehavior object hai, jo secondary activity ko primary activity ke saath finish karne ke behavior ko represent karta hai. @NonNull annotation indicate karta hai ki parameter null nahi hoga.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setMaxAspectRatioInLandscape",
              id: "setMaxAspectRatioInLandscape()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setMaxAspectRatioInLandscape()">setMaxAspectRatioInLandscape</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setMaxAspectRatioInLandscape()">setMaxAspectRatioInLandscape</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,

              des: `Is method ka use landscape mode me maximum aspect ratio ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use landscape mode me maximum aspect ratio ko set karne ke liye hota hai. Aspect ratio ek value hoti hai jo width aur height ke ratio ko represent karti hai. Landscape mode me, jab screen horizontal hoti hai, aspect ratio se matalab width jyada hoga.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EmbeddingAspectRatio aspectRatio`,
                        des:`<p>Yeh parameter ek EmbeddingAspectRatio object hai, jo maximum aspect ratio ko landscape mode me set karne ke liye use hota hai. @NonNull annotation indicate karta hai ki parameter null nahi hoga.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setMaxAspectRatioInPortrait",
              id: "setMaxAspectRatioInPortrait()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setMaxAspectRatioInPortrait()">setMaxAspectRatioInPortrait</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setMaxAspectRatioInPortrait()">setMaxAspectRatioInPortrait</a>(@NonNull EmbeddingAspectRatio aspectRatio)`,

              des: `Is method ka use portrait mode mein maximum aspect ratio ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use portrait mode mein maximum aspect ratio ko set karne ke liye hota hai. Aspect ratio ek value hoti hai jo width aur height ke ratio ko represent karti hai. Portrait mode me, jab screen vertical hoti hai, aspect ratio se matalab height jyada hoga.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EmbeddingAspectRatio aspectRatio`,
                        des:`<p>Yeh parameter ek EmbeddingAspectRatio object hai, jo maximum aspect ratio ko portrait mode mein set karne ke liye use hota hai. @NonNull annotation indicate karta hai ki parameter null nahi hoga.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setMinHeightDp",
              id: "setMinHeightDp()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setMinHeightDp()">setMinHeightDp</a>(@IntRange(from = 0) int minHeightDp)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setMinHeightDp()">setMinHeightDp</a>(@IntRange(from = 0) int minHeightDp)`,

              des: `Is method ka use minimum height ko set karne ke liye hota hai, jisse rule ke according split pair ka layout define kiya ja sake.`,
  
              longDes: `
              <p>Is method ka use minimum height ko set karne ke liye hota hai. Minimum height define karta hai ki split pair ka layout kam se kam kitni height occupy karega. Isse layout ko proper rendering ke liye dimensions provide ho sakti hain.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IntRange(from = 0) int minHeightDp`,
                        des:`<p>Yeh parameter ek integer value hai jo minimum height ko DPs (density-independent pixels) mein represent karta hai. @IntRange(from = 0) annotation indicate karta hai ki parameter ki value 0 ya usse badi honi chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setMinSmallestWidthDp",
              id: "setMinSmallestWidthDp()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setMinSmallestWidthDp()">setMinSmallestWidthDp</a>(@IntRange(from = 0) int minSmallestWidthDp)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setMinSmallestWidthDp()">setMinSmallestWidthDp</a>(@IntRange(from = 0) int minSmallestWidthDp)`,

              des: `Is method ka use minimum smallest width ko set karne ke liye hota hai, jisse rule ke according split pair ka layout define kiya ja sake.`,
  
              longDes: `
              <p>Is method ka use minimum smallest width ko set karne ke liye hota hai. Minimum smallest width define karta hai ki split pair ka layout kam se kam kitni smallest width occupy karegi. Isse layout ko proper rendering ke liye dimensions provide ho sakti hain.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IntRange(from = 0) int minSmallestWidthDp`,
                        des:`<p>Yeh parameter ek integer value hai jo minimum smallest width ko DPs (density-independent pixels) mein represent karta hai. @IntRange(from = 0) annotation indicate karta hai ki parameter ki value 0 ya usse badi honi chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setMinWidthDp",
              id: "setMinWidthDp()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setMinWidthDp()">setMinWidthDp</a>(@IntRange(from = 0) int minWidthDp)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setMinWidthDp()">setMinWidthDp</a>(@IntRange(from = 0) int minWidthDp)`,

              des: `Is method ka use minimum width ko set karne ke liye hota hai, jisse rule ke according split pair ka layout define kiya ja sake.`,
  
              longDes: `
              <p>Is method ka use minimum width ko set karne ke liye hota hai. Minimum width define karta hai ki split pair ka layout kam se kam kitni width occupy karegi. Isse layout ko proper rendering ke liye dimensions provide ho sakti hain.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IntRange(from = 0) int minWidthDp`,
                        des:`<p>Yeh parameter ek integer value hai jo minimum width ko DPs (density-independent pixels) mein represent karta hai. @IntRange(from = 0) annotation indicate karta hai ki parameter ki value 0 ya usse badi honi chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setTag",
              id: "setTag()",
              dataTypeName: `final @NonNull SplitPairRule.Builder`,
              code: `<a href="#setTag()">setTag</a>(String tag)`,
  
              fullCode: `public final @NonNull SplitPairRule.Builder <a href="#setTag()">setTag</a>(String tag)`,

              des: `Is method ka use ek tag ko set karne ke liye hota hai, jisse rule ko identify aur manage karne me madad milti hai.`,
  
              longDes: `
              <p>Is method ka use ek tag ko set karne ke liye hota hai, jisse aap later me rule ko identify aur manage kar sake. Tags rule ke attributes, behavior, ya purpose ko represent karte hain.</p>

              <p>Yeh method SplitPairRule.Builder type ka builder object return karta hai. Iska return type builder pattern ke continuation ko indicate karta hai, jisse aap aur methods chain karke properties ko set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `String tag`,
                        des:`<p>Yeh parameter ek string value hai jo ek tag ko represent karta hai. Is tag ka use rule ko identify aur manage karne me kiya jata hai.</p>`,
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
  