module.exports.SplitController = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitController",
      hCode: `public final class <a href="#SplitController">SplitController</a>`,
  
      des: 
        `
        <p>SplitController class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap Split-Screen mode ke behavior aur properties ko control kar sakte hain. Aap embedded window ka split layout direction, split ratio, aur Split-Screen mode ke events ko manage kar sakte hain.</p>
  
       
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
              name: "clearSplitAttributesCalculator",
              id: "clearSplitAttributesCalculator()",
              dataTypeName: `final void`,
              code: `<a href="#clearSplitAttributesCalculator()">clearSplitAttributesCalculator</a>()`,
  
              fullCode: `public final void <a href="#clearSplitAttributesCalculator()">clearSplitAttributesCalculator</a>()`,

              des: `Is method ki madad se aap split attributes calculator ko reset kar sakte hain.`,
  
              longDes: `
              <p>clearSplitAttributesCalculator() method ka use split controller se judi split attributes calculator ko clear karne ke liye hota hai. Yani ki, jab aap chahte hain ki current split attributes calculator ki values reset ho jaye aur new values set ki jaye, to aap is method ko use kar sakte hain.</p>
              `,

              parameter: [],
            },






            {
              dep: false,
              name: "getInstance",
              id: "getInstance()",
              dataTypeName: `static final @NonNull SplitController`,
              code: `<a href="#getInstance()">getInstance</a>(@NonNull Context context)`,
  
              fullCode: `public static final @NonNull SplitController <a href="#getInstance()">getInstance</a>(@NonNull Context context)`,

              des: `Is method ki madad se aap application context ke basis par SplitController object ko retrieve kar sakte hain.`,
  
              longDes: `
              <p>getInstance(@NonNull Context context) method ka use SplitController object ko retrieve karne ke liye hota hai. Aap is method ko use karke application context ke basis par SplitController object ko access kar sakte hain. Is method se ek hi instance return hoti hai, jo singleton pattern ka use karta hai.</p>
  
              <p>Method ka return type SplitController hota hai, yani ki ek SplitController object jo split controller ko represent karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object leta hai jo application context represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  



            {
              dep: false,
              name: "getSplitSupportStatus",
              id: "getSplitSupportStatus()",
              dataTypeName: `final @NonNull SplitController.SplitSupportStatus`,
              code: `<a href="#getSplitSupportStatus()">getSplitSupportStatus</a>()`,
  
              fullCode: `public final @NonNull SplitController.SplitSupportStatus <a href="#getSplitSupportStatus()">getSplitSupportStatus</a>()`,

              des: `Is method ki madad se aap jaan sakte hain ki aapke device ya environment mein split screen mode ko support kiya jata hai ya nahi.`,
  
              longDes: `
              <p>getSplitSupportStatus() method ka use split controller ke current split support status ko retrieve karne ke liye hota hai. Is method se aap ye jaan sakte hain ki device ya environment mein split screen mode ko support kiya jata hai ya nahi.</p>
  
              <p>Method ka return type SplitController.SplitSupportStatus hota hai, yani ki ek enum value jo split support status ko represent karta hai. Is enum ke values indicate karte hain ki device ya environment split screen mode ko support karta hai, nahi karta hai, ya partially support karta hai.</p>
              `,

              parameter: [],
            },

  




            {
              dep: false,
              name: "invalidateTopVisibleSplitAttributes",
              id: "invalidateTopVisibleSplitAttributes()",
              dataTypeName: `final void`,
              code: `<a href="#invalidateTopVisibleSplitAttributes()">invalidateTopVisibleSplitAttributes</a>()`,
  
              fullCode: `@ExperimentalWindowApi</br>public final void <a href="#invalidateTopVisibleSplitAttributes()">invalidateTopVisibleSplitAttributes</a>()`,

              des: `Is method ki madad se aap top visible split screen ke attributes ko refresh kar sakte hain, jisse layout aur display se related changes reflect ho sakein.`,
  
              longDes: `
              <p>invalidateTopVisibleSplitAttributes() method ka use top visible split screen ke attributes ko invalidate ya refresh karne ke liye hota hai. Jab aapko lagta hai ki top visible split screen par layout ya display se related changes huye hain aur unhe apply karna hai, tab aap is method ko use karke attributes ko refresh kar sakte hain.</p>
              `,

              parameter: [],
            },

  



            {
              dep: false,
              name: "isInvalidatingTopVisibleSplitAttributesSupported",
              id: "isInvalidatingTopVisibleSplitAttributesSupported()",
              dataTypeName: `final boolean`,
              code: `<a href="#isInvalidatingTopVisibleSplitAttributesSupported()">isInvalidatingTopVisibleSplitAttributesSupported</a>()`,
  
              fullCode: `@ExperimentalWindowApi</br>public final boolean <a href="#isInvalidatingTopVisibleSplitAttributesSupported()">isInvalidatingTopVisibleSplitAttributesSupported</a>()`,

              des: `Is method ki madad se aap jaan sakte hain ki aapke device ya environment mein top visible split screen ke attributes ko refresh karne ka feature available hai ya nahi.`,
  
              longDes: `
              <p>isInvalidatingTopVisibleSplitAttributesSupported() method ka use karke aap jaan sakte hain ki aapke device ya environment mein top visible split screen ke attributes ko invalidate karne ka feature available hai ya nahi. Agar yeh method true return karta hai, to aap invalidateTopVisibleSplitAttributes() method ka use karke attributes ko refresh kar sakte hain.</p>

              <p>Method ka return type boolean hota hai, yani ki yeh method true ya false return karega.</p>
              `,

              parameter: [],
            },

  


            {
              dep: false,
              name: "isSplitAttributesCalculatorSupported",
              id: "isSplitAttributesCalculatorSupported()",
              dataTypeName: `final boolean`,
              code: `<a href="#isSplitAttributesCalculatorSupported()">isSplitAttributesCalculatorSupported</a>()`,
  
              fullCode: `public final boolean <a href="#isSplitAttributesCalculatorSupported()">isSplitAttributesCalculatorSupported</a>()`,

              des: `Is method ki madad se aap jaan sakte hain ki aapke device ya environment mein split attributes calculator ka feature available hai ya nahi.`,
  
              longDes: `
              <p>isSplitAttributesCalculatorSupported() method ka use karke aap jaan sakte hain ki aapke device mein split attributes calculator ka support available hai ya nahi. Agar yeh method true return karta hai, to aap split attributes calculator se related methods aur functionality ka use kar sakte hain.</p>

              <p>Method ka return type boolean hota hai, yani ki yeh method true ya false return karega.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "isUpdatingSplitAttributesSupported",
              id: "isUpdatingSplitAttributesSupported()",
              dataTypeName: `final boolean`,
              code: `<a href="#isUpdatingSplitAttributesSupported()">isUpdatingSplitAttributesSupported</a>()`,
  
              fullCode: `@ExperimentalWindowApi</br>public final boolean <a href="#isUpdatingSplitAttributesSupported()">isUpdatingSplitAttributesSupported</a>()`,

              des: `Is method ki madad se aap jaan sakte hain ki aapke device ya environment mein split attributes ko update karne ka feature available hai ya nahi.`,
  
              longDes: `
              <p>isUpdatingSplitAttributesSupported() method ka use karke aap jaan sakte hain ki aapke device ya environment mein split attributes ko update karne ka feature available hai ya nahi. Agar yeh method true return karta hai, to aap updateSplitAttributes() method ka use karke attributes ko update kar sakte hain.</p>

              <p>Method ka return type boolean hota hai, yani ki yeh method true ya false return karega.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "setSplitAttributesCalculator",
              id: "setSplitAttributesCalculator()",
              dataTypeName: `final void`,
              code: `<a href="#setSplitAttributesCalculator()">setSplitAttributesCalculator</a>(
                @NonNull Function1<@NonNull SplitAttributesCalculatorParams, @NonNull SplitAttributes> calculator
            )`,
  
              fullCode: `public final void <a href="#setSplitAttributesCalculator()">setSplitAttributesCalculator</a>(
                @NonNull Function1<@NonNull SplitAttributesCalculatorParams, @NonNull SplitAttributes> calculator
            )`,

              des: `Is method ki madad se aap ek custom split attributes calculator ko SplitController ke sath associate kar sakte hain, jiska use split attributes ko calculate karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setSplitAttributesCalculator() method ka use karke aap ek custom split attributes calculator ko SplitController ke sath associate kar sakte hain. Aapko ek function provide karna hoga jo SplitAttributesCalculatorParams input parameter lekar SplitAttributes output return kare.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Function1<@NonNull SplitAttributesCalculatorParams, @NonNull SplitAttributes> calculator`,
                        des:`<p>Yeh parameter ek Function1 type ka hai, jo SplitAttributesCalculatorParams input parameter leta hai aur SplitAttributes output return karta hai. Is function ki madad se split attributes calculate kiye jate hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "splitInfoList",
              id: "splitInfoList()",
              dataTypeName: `final @NonNull Flow<@NonNull List<@NonNull SplitInfo>>`,
              code: `<a href="#splitInfoList()">splitInfoList</a>(@NonNull Activity activity)`,
  
              fullCode: `public final @NonNull Flow<@NonNull List<@NonNull SplitInfo>> <a href="#splitInfoList()">splitInfoList</a>(@NonNull Activity activity)`,

              des: `Is method ki madad se aap split information ko monitor kar sakte hain aur unhe stream of data ke roop mein receive kar sakte hain.`,
  
              longDes: `
              <p>splitInfoList() method ka use karke aap split information ko monitor kar sakte hain. Jab bhi split information mein koi changes hoti hain, unhe Flow ke through stream kiya jata hai, jisse aap unhe observe kar sakte hain aur corresponding actions le sakte hain.</p>

              <p>Method ka return type Flow hai, jo List of SplitInfo objects ko stream karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiska split information retrieve kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "updateSplitAttributes",
              id: "updateSplitAttributes()",
              dataTypeName: `final void`,
              code: `<a href="#updateSplitAttributes()">updateSplitAttributes</a>(
                @NonNull SplitInfo splitInfo,
                @NonNull SplitAttributes splitAttributes
            )`,
  
              fullCode: `@ExperimentalWindowApi</br>public final void <a href="#updateSplitAttributes()">updateSplitAttributes</a>(
                @NonNull SplitInfo splitInfo,
                @NonNull SplitAttributes splitAttributes
            )`,

              des: `Is method ka use tab hota hai jab aap ek split ke attributes ko runtime mein modify karna chahte hain.`,
  
              longDes: `
              <p>Is method ka use tab hota hai jab aap ek split ke attributes ko runtime mein modify karna chahte hain. For example, agar aapka layout orientation change ho raha hai aur aapke pass new split attributes hain, to aap is method ki madad se split ke attributes ko update kar sakte hain taki proper layout adjustments ho sakein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitInfo splitInfo`,
                        des:`<p>Yeh parameter ek SplitInfo object hai, jiski attributes ko update karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull SplitAttributes splitAttributes`,
                        des:`<p>Yeh parameter ek naye SplitAttributes object hai, jise aap splitInfo ke attributes ke roop mein set karna chahte hain.</p>`,
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
  