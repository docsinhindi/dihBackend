module.exports.WindowLayoutInfoTesting = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowLayoutInfoTesting",
      hCode: `public final class <a href="#WindowLayoutInfoTesting">WindowLayoutInfoTesting</a>`,
  
      des: 
        `
        <p>WindowLayoutInfoTesting class ka use activity embedding scenarios ko test karne ke liye hota hai. Iska use karke aap window layout info ko simulate aur control kar sakte hain jisse aap apne UI components ke behavior ko test kar sakte hain.</p>
  
       
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
              name: "createWindowLayoutInfo",
              id: "createWindowLayoutInfo()",
              dataTypeName: `static final @NonNull WindowLayoutInfo`,
              code: `<a href="#createWindowLayoutInfo()">createWindowLayoutInfo</a>(
                @NonNull List<@NonNull DisplayFeature> displayFeatures
            )`,
  
              fullCode: `public static final @NonNull WindowLayoutInfo <a href="#createWindowLayoutInfo()">createWindowLayoutInfo</a>(
                @NonNull List<@NonNull DisplayFeature> displayFeatures
            )`,

              des: `Is method ka use window ke layout information ko mock karne ke liye hota hai.`,
  
              longDes: `
              <p>Testing scenarios mein, window ke layout information ko mock karke test cases ko simulate karne ke liye createWindowLayoutInfo method ka use hota hai. Is method ke through aap test cases mein specific window layout ke behavior ko predict aur control kar sakte hain, bina actual window layout ke.</p>
  
              <p>Method WindowLayoutInfo object return karta hai, jo window ke layout information ko mock karta hai.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull List<@NonNull DisplayFeature> displayFeatures`,
                        des:`<p>Yeh parameter ek List hai, jisme DisplayFeature objects ki list hoti hai, jo window ke layout information ko define karte hain.</p>`,
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
  