module.exports.TestSplitAttributesCalculatorParams = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "TestSplitAttributesCalculatorParams",
      hCode: `public final class <a href="#TestSplitAttributesCalculatorParams">TestSplitAttributesCalculatorParams</a>`,
  
      des: 
        `
        <p>TestSplitAttributesCalculatorParams class ka use activity embedding aur window split attributes ko test karne ke liye hota hai. Iska use karke aap window ko simulate kar sakte hain jahan multiple activities ko ek sath display kiya jata hai aur unka split layout behavior test kiya jata hai.</p>
  
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
              name: "createTestSplitAttributesCalculatorParams",
              id: "createTestSplitAttributesCalculatorParams()",
              dataTypeName: `static final @NonNull SplitAttributesCalculatorParams`,
              code: `<a href="#createTestSplitAttributesCalculatorParams()">createTestSplitAttributesCalculatorParams</a>(
                @NonNull WindowMetrics parentWindowMetrics,
                @NonNull Configuration parentConfiguration,
                @NonNull WindowLayoutInfo parentWindowLayoutInfo,
                @NonNull SplitAttributes defaultSplitAttributes,
                boolean areDefaultConstraintsSatisfied,
                String splitRuleTag
            )`,
  
              fullCode: `public static final @NonNull SplitAttributesCalculatorParams <a href="#createTestSplitAttributesCalculatorParams()">createTestSplitAttributesCalculatorParams</a>(
                @NonNull WindowMetrics parentWindowMetrics,
                @NonNull Configuration parentConfiguration,
                @NonNull WindowLayoutInfo parentWindowLayoutInfo,
                @NonNull SplitAttributes defaultSplitAttributes,
                boolean areDefaultConstraintsSatisfied,
                String splitRuleTag
            )`,

              des: `Is method ka use split attributes ko calculate karne ke liye parameters ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use testing scenarios mein hota hai, jab aap split attributes ko calculate karne ke liye parameters ko set karna chahte hain. Aap createTestSplitAttributesCalculatorParams method ka use karke split attributes ke calculation ke liye parameters ko mock kar sakte hain, jisse aap specific test cases ke liye specific scenarios ko test kar sakte hain</p>
  
              <p>Method SplitAttributesCalculatorParams object return karta hai, jo ek custom class hoti hai aur split attributes calculator ke parameters ko represent karti hai.</p>
              `,
 
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowMetrics parentWindowMetrics`,
                        des:`<p>Yeh parameter ek WindowMetrics object hai, jiske through parent window ka metrics (size, orientation, etc.) diya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Configuration parentConfiguration`,
                        des:`<p>Yeh parameter ek Configuration object hai, jiske through parent window ka configuration (language, theme, etc.) diya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull WindowLayoutInfo parentWindowLayoutInfo`,
                        des:`<p>Yeh parameter ek WindowLayoutInfo object hai, jiske through parent window ka layout information diya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull SplitAttributes defaultSplitAttributes`,
                        des:`<p>Yeh parameter ek SplitAttributes object hai, jisme default split attributes (size, layout, etc.) diye jate hain.</p>`,
                      },
                      {
                        dataTypeName: `boolean areDefaultConstraintsSatisfied`,
                        des:`<p>Yeh parameter ek boolean value hai, jo batata hai ki default constraints satisfied hain ya nahi.</p>`,
                      },
                      {
                        dataTypeName: `String splitRuleTag`,
                        des:`<p>Yeh parameter ek string hai, jo split rule ka tag ya identifier hota hai.</p>`,
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
  