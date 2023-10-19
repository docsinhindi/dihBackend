module.exports.WindowLayoutInfoPublisherRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowLayoutInfoPublisherRule",
      hCode: `public final class <a href="#WindowLayoutInfoPublisherRule">WindowLayoutInfoPublisherRule</a> implements TestRule`,
  
      des: 
        `
        <p>WindowLayoutInfoPublisherRule class ka use activity embedding scenarios ko test karne ke liye hota hai. Iska use karke aap window layout info ko simulate aur control kar sakte hain jisse aap apne UI components ke behavior ko test kar sakte hain.</p>
  
       
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
              name: `WindowLayoutInfoPublisherRule`,
              id: "WindowLayoutInfoPublisherRule()",
              code: `WindowLayoutInfoPublisherRule()`,
              fullCode: `public WindowLayoutInfoPublisherRule()`,

              des: `Is constructor ka use testing scenarios mein hota hai jahan par WindowLayoutInfo objects ko publish karna aur track karna chahte hain.`,

              longDes: `
              <p>Is constructor ka use WindowLayoutInfo objects ko testing scenarios mein publish karna aur unko track karna ke liye hota hai. Testing ke dauraan, aapko simulate karna hota hai ki layout information kaise change hoti hai aur kaise activities respond karte hain.</p>

              <p>WindowLayoutInfo objects ko mock karne aur publish karne ke liye aap is rule ka use kar sakte hain. Is rule ke andar aap layout information ko update karke, WindowLayoutInfo objects ko activities tak pahuncha sakte hain.</p>
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

              des: `Is method ka use WindowLayoutInfo objects ko publish karna aur activities tak pahunchana hota hai testing scenarios mein.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo objects ko track karna aur publish karna hota hai testing scenarios mein. Method ke andar aap layout information ko update kar sakte hain, WindowLayoutInfo objects ko activities tak pahuncha sakte hain, aur phir original test case ko execute kar sakte hain.</p>

              <p>Is method ke through aap layout information changes ko simulate kar sakte hain aur activities ke response ko validate kar sakte hai</p>
  
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

  
            {
              dep: false,
              name: "overrideWindowLayoutInfo",
              id: "overrideWindowLayoutInfo()",
              dataTypeName: `final void`,
              code: `<a href="#overrideWindowLayoutInfo()">overrideWindowLayoutInfo</a>(@NonNull WindowLayoutInfo info)`,
  
              fullCode: `public final void <a href="#overrideWindowLayoutInfo()">overrideWindowLayoutInfo</a>(@NonNull WindowLayoutInfo info)`,

              des: `Is method ka use layout information ko override aur simulate karne ke liye hota hai testing scenarios mein.`,
  
              longDes: `
              <p>Is method ka use layout information ko simulate aur customize karne ke liye hota hai testing scenarios mein. Aap is method ke through layout information ko override kar sakte hain aur specific test cases ke liye specific layout information simulate kar sakte hain.</p>

              <p>Is method ko use karke aap activities ke layout changes ko predict aur control kar sakte hain, bina actual layout changes ke.</p>
  
              <p>Method void return type ke sath hota hai, iska matlab hai ki yeh koi value return nahi karta.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowLayoutInfo info`,
                        des:`<p>Yeh parameter ek WindowLayoutInfo object hai, jisme mock layout information diya jata hai.</p>`,
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
  