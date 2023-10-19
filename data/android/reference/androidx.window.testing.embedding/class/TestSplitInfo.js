module.exports.TestSplitInfo = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "TestSplitInfo",
      hCode: `public final class <a href="#TestSplitInfo">TestSplitInfo</a>`,
  
      des: 
        `
        <p>TestSplitInfo class ka use activity embedding aur window split behavior ko test karne ke liye hota hai. Iska use karke aap window ko simulate kar sakte hain jahan multiple activities ko ek sath display kiya jata hai aur unka split layout behavior test kiya jata hai.</p>
  
       
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
              name: "createTestSplitInfo",
              id: "createTestSplitInfo()",
              dataTypeName: `static final @NonNull SplitInfo`,
              code: `<a href="#createTestSplitInfo()">createTestSplitInfo</a>(
                @NonNull ActivityStack primaryActivityStack,
                @NonNull ActivityStack secondActivityStack,
                @NonNull SplitAttributes splitAttributes
            )`,
  
              fullCode: `public static final @NonNull SplitInfo <a href="#createTestSplitInfo()">createTestSplitInfo</a>(
                @NonNull ActivityStack primaryActivityStack,
                @NonNull ActivityStack secondActivityStack,
                @NonNull SplitAttributes splitAttributes
            )`,

              des: `Is method ka use split APK ki information ko mock karne ke liye hota hai.`,
  
              longDes: `
              <p>Testing scenarios mein, split APK ki information ko mock karke test cases ko simulate karne ke liye createTestSplitInfo method ka use hota hai. Is method ke through aap test cases mein specific split APKs ke behavior ko predict aur control kar sakte hain, bina actual split APKs ke.</p>
  
              <p>Method SplitInfo object return karta hai, jo split APK ki information ko represent karta hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ActivityStack primaryActivityStack`,
                        des:`<p>Yeh parameter ek ActivityStack object hai, jiske through primary activity stack ka mock diya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull ActivityStack secondActivityStack`,
                        des:`<p>Yeh parameter ek ActivityStack object hai, jiske through second activity stack ka mock diya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull SplitAttributes splitAttributes`,
                        des:`<p>Yeh parameter ek SplitAttributes object hai, jisme split APK ki attributes (size, layout, etc.) diye jate hain.</p>`,
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
  