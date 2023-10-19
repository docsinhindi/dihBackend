module.exports.ActivityEmbeddingController = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityEmbeddingController",
      hCode: `public final class <a href="#ActivityEmbeddingController">ActivityEmbeddingController</a>`,
  
      des: 
        `
        <p>Ye class activity ya activity stack se related operations ke liye use hoti hai. Activity embedding ek feature hai jo large screen devices jaise tablets, foldables, aur ChromeOS devices par app ke user experience ko behtar banata hai. Is feature se app ka task window do containers mein split ho jaata hai: primary aur secondary. Primary container mein main activity hoti hai aur secondary container mein usse launch ki gayi activities hoti hain. Isse app ke activities side by side dikhayi jaati hain aur user ko navigation aur functionality mein madad milti hai.</p>
  
       
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
              name: "finishActivityStacks",
              id: "finishActivityStacks()",
              dataTypeName: `final void`,
              code: `<a href="#finishActivityStacks()">finishActivityStacks</a>(@NonNull Set<@NonNull ActivityStack> activityStacks)`,
  
              fullCode: `@ExperimentalWindowApi</br>public final void <a href="#finishActivityStacks()">finishActivityStacks</a>(@NonNull Set<@NonNull ActivityStack> activityStacks)`,

              des: `Is method ka use activity stacks ko finish (close) karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use activity stacks ko finish (close) karne ke liye hota hai. Activity stack ek collection hoti hai jisme multiple activities ko organize kiya jata hai, jaise ki back navigation ke liye. Is method ki madad se aap specified activity stacks ko finish kar sakte hain, jisse unki associated activities close ho jayengi.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Set<@NonNull ActivityStack> activityStacks`,
                        des:`<p>Yeh parameter ek Set hai jo ActivityStack objects ko store karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "getActivityStack",
              id: "getActivityStack()",
              dataTypeName: `final ActivityStack`,
              code: `<a href="#getActivityStack()">getActivityStack</a>(@NonNull Activity activity)`,
  
              fullCode: `@ExperimentalWindowApi</br>public final ActivityStack <a href="#getActivityStack()">getActivityStack</a>(@NonNull Activity activity)`,

              des: `Is method ka use di gayi Activity object ke associated activity stack ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use di gayi Activity object ke associated activity stack ko retrieve karne ke liye hota hai. Activity stack ek collection hoti hai jisme multiple activities ko organize kiya jata hai, typically back navigation ke liye. Is method ki madad se aap specified Activity object ke associated activity stack ko retrieve kar sakte hain.</p>

              <p>Yeh method ek ActivityStack object return karta hai, jo di gayi Activity object ke associated activity stack ko represent karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiska associated activity stack retrieve karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "getInstance",
              id: "getInstance()",
              dataTypeName: `static final @NonNull ActivityEmbeddingController`,
              code: `<a href="#getInstance()">getInstance</a>(@NonNull Context context)`,
  
              fullCode: `public static final @NonNull ActivityEmbeddingController <a href="#getInstance()">getInstance</a>(@NonNull Context context)`,

              des: `Is method ka use ActivityEmbeddingController class ki ek singleton instance retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityEmbeddingController class ki ek singleton instance retrieve karne ke liye hota hai. Singleton pattern ek design pattern hai jisme ek class ke sirf ek hi instance create kiya jata hai aur us instance ko multiple parts of the program se access kiya jata hai.</p>

              <p>Yeh method ek ActivityEmbeddingController object return karta hai, jo class ka ek singleton instance hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter ek Context object hai, jiska use ActivityEmbeddingController ki instance retrieve karne ke liye hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "isActivityEmbedded",
              id: "isActivityEmbedded()",
              dataTypeName: `final boolean`,
              code: `<a href="#isActivityEmbedded()">isActivityEmbedded</a>(@NonNull Activity activity)`,
  
              fullCode: `public final boolean <a href="#isActivityEmbedded()">isActivityEmbedded</a>(@NonNull Activity activity)`,

              des: `Is method ka use di gayi Activity object ke liye check karna hota hai ki woh kisi activity stack mein embedded (contained) hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use di gayi Activity object ke embedding status ko check karne ke liye hota hai. Activity embedding ka matlab hota hai ki woh kisi parent activity ke context mein open hai ya nahi. Yani ki agar ek activity dusri activity ke context mein open hai, to woh embedded activity kehlati hai.</p>

              <p>Yeh method ek boolean value return karta hai. true return hota hai agar di gayi Activity object embedded hai, aur false return hota hai agar nahi hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiska embedding status check karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "isFinishingActivityStacksSupported",
              id: "isFinishingActivityStacksSupported()",
              dataTypeName: `final boolean`,
              code: `<a href="#isFinishingActivityStacksSupported()">isFinishingActivityStacksSupported</a>()`,
  
              fullCode: `@ExperimentalWindowApi</br>public final boolean <a href="#isFinishingActivityStacksSupported()">isFinishingActivityStacksSupported</a>()`,

              des: `Is method ka use ActivityEmbeddingController class mein finishing activity stacks ko support karne ki capability ko check karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityEmbeddingController class mein finishing activity stacks ko support karne ki capability ko check karne ke liye hota hai. Yani ki yeh method bataata hai ki kya controller activity stacks ko finish (close) karne ke liye sahayakata pradaan karta hai ya nahi.</p>

              <p>Yeh method ek boolean value return karta hai. true return hota hai agar finishing activity stacks ko support kiya jata hai, aur false return hota hai agar nahi kiya jata.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  