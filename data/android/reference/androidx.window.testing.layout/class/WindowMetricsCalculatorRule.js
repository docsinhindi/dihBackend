module.exports.WindowMetricsCalculatorRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowMetricsCalculatorRule",
      hCode: `public final class <a href="#WindowMetricsCalculatorRule">WindowMetricsCalculatorRule</a> implements TestRule`,
  
      des: 
        `
        <p>WindowMetricsCalculatorRule class activity embedding scenarios ko test karne ke liye hoti hai. Iska use karke aap window metrics ko simulate aur control kar sakte hain jisse aap apne UI components ke behavior ko test kar sakte hain.</p>
  
       
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
              name: `WindowMetricsCalculatorRule`,
              id: "WindowMetricsCalculatorRule()",
              code: `<a href="#WindowMetricsCalculatorRule()">WindowMetricsCalculatorRule</a>()`,
              fullCode: `public <a href="#WindowMetricsCalculatorRule()">WindowMetricsCalculatorRule</a>()`,

              des: `Is constructor ka use window metrics ko calculate aur simulate karne ke liye hota hai testing scenarios mein.`,

              longDes: `
              <p>Is constructor ka use WindowMetrics objects ko testing scenarios mein calculate aur simulate karne ke liye hota hai. Aap is constructor ke andar window metrics ko update kar sakte hain, WindowMetrics objects ko activities tak pahuncha sakte hain, aur phir original test case ko execute kar sakte hain.</p>

              <p>Is constructor ke through aap window metrics changes ko simulate kar sakte hain aur activities ke response ko validate kar sakte hain.</p>
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
              name: "apply",
              id: "apply()",
              dataTypeName: `@NonNull Statement`,
              code: `<a href="#apply()">apply</a>(@NonNull Statement base, @NonNull Description description)`,
  
              fullCode: `public @NonNull Statement <a href="#apply()">apply</a>(@NonNull Statement base, @NonNull Description description)`,

              des: `Is method ka use WindowMetrics objects ko calculate karna aur activities tak pahunchana hota hai testing scenarios mein.`,
  
              longDes: `
              <p>Is method ka use WindowMetrics objects ko track karna aur calculate karna hota hai testing scenarios mein. Method ke andar aap window metrics ko update kar sakte hain, WindowMetrics objects ko activities tak pahuncha sakte hain, aur phir original test case ko execute kar sakte hain.</p>

              <p>Is method ke through aap window metrics changes ko simulate kar sakte hain aur activities ke response ko validate kar sakte hain.</p>
  
              <p>Method Statement object return karta hai, jo modified Statement hota hai jisse test case execute hota hai.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Statement base`,
                        des:`<p>Yeh parameter ek Statement object hai, jo actual test case ko represent karta hai. Is parameter ki madad se aap test case ko execute kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Description description`,
                        des:`<p>Yeh parameter ek Description object hai, jisme test case ke description aur metadata hota hai.</p>`,
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
  