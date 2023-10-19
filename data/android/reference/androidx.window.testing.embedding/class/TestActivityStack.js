module.exports.TestActivityStack = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "TestActivityStack",
      hCode: `public final class <a href="#TestActivityStack">TestActivityStack</a>`,
  
      des: 
        `
        <p>TestActivityStack class ka use activity embedding aur window stacking behavior ko test karne ke liye hota hai. Iska use karke aap multiple activities ko stack mein add kar sakte hain, unko remove kar sakte hain, front mein laa sakte hain, aur stack ko clear kar sakte hain.</p>
  
       
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
              name: "createTestActivityStack",
              id: "createTestActivityStack()",
              dataTypeName: `static final @NonNull ActivityStack`,
              code: `<a href="#createTestActivityStack()">createTestActivityStack</a>(
                @NonNull List<@NonNull Activity> activitiesInProcess,
                boolean isEmpty
            )`,
  
              fullCode: `public static final @NonNull ActivityStack <a href="#createTestActivityStack()">createTestActivityStack</a>(
                @NonNull List<@NonNull Activity> activitiesInProcess,
                boolean isEmpty
            )`,

              des: `Is method ka use test cases mein mock activity stacks ko create karne ke liye hota hai.`,
  
              longDes: `
              <p>Testing scenarios mein, activity stacks ko mock karke test cases ko simulate karne ke liye createTestActivityStack method ka use hota hai. Is method ke through aap test ke liye custom activity stacks ko create kar sakte hain, jisse aap specific test cases ke liye specific scenarios ko test kar sakte hain.</p>

              <p>Is method ke dwara banayi gayi ActivityStack object ko test cases mein use karke aap activity stack ke behavior ko predict aur control kar sakte hain, bina actual activities launch kiye hue.</p>
  
              <p>Method ActivityStack object return karta hai, jo ek custom class hoti hai aur mock activity stack ko represent karti hai.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull List<@NonNull Activity> activitiesInProcess`,
                        des:`<p>Yeh parameter ek List hai, jisme Activity objects ki list hoti hai, jo activity stack mein shamil hain. Is parameter se activity stack ke contents define hote hain.</p>`,
                      },
                      {
                        dataTypeName: `boolean isEmpty`,
                        des:`<p>Yeh parameter ek boolean value hai, jisse aap activity stack ki initial state ko define kar sakte hain. Agar true, toh activity stack khali hoti hai, aur agar false, toh stack mein di gayi activities hoti hain.</p>`,
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
  