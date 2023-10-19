module.exports.ActivityEmbeddingOptions = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityEmbeddingOptions",
      hCode: `public final class <a href="#ActivityEmbeddingOptions">ActivityEmbeddingOptions</a>`,
  
      des: 
        `
        <p>Ye class activity embedding feature ke liye configuration options provide karti hai. Activity embedding feature se app ka task window do containers mein split ho jaata hai: primary aur secondary. Primary container mein main activity hoti hai aur secondary container mein usse launch ki gayi activities hoti hain. Isse app ke activities side by side dikhayi jaati hain aur user ko navigation aur functionality mein madad milti hai.</p>
  
       
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
              name: "isSetLaunchingActivityStackSupported",
              id: "isSetLaunchingActivityStackSupported()",
              dataTypeName: `static final boolean`,
              code: `<a href="#isSetLaunchingActivityStackSupported()">isSetLaunchingActivityStackSupported</a>(@NonNull ActivityOptions receiver)`,
  
              fullCode: `@ExperimentalWindowApi</br>public static final boolean <a href="#isSetLaunchingActivityStackSupported()">isSetLaunchingActivityStackSupported</a>(@NonNull ActivityOptions receiver)`,

              des: `Is method ka use ActivityEmbeddingOptions class mein launching activity stack ko set karne ki capability ko check karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityEmbeddingOptions class mein launching activity stack ko set karne ki capability ko check karne ke liye hota hai. Yani ki yeh method bataata hai ki kya options object se launching activity stack ko set karne ki capability pradaan ki jati hai ya nahi.</p>
  
              <p>Yeh method ek boolean value return karta hai. true return hota hai agar launching activity stack ko set karne ki capability supported hai, aur false return hota hai agar nahi supported hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ActivityOptions receiver`,
                        des:`<p>Yeh parameter ek ActivityOptions object hai jiska launching activity stack set karne ki capability check karni hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setLaunchingActivityStack",
              id: "setLaunchingActivityStack(ActivityOptions,Activity)",
              dataTypeName: `static final @NonNull ActivityOptions`,
              code: `<a href="#setLaunchingActivityStack(ActivityOptions,Activity)">setLaunchingActivityStack</a>(
                @NonNull ActivityOptions receiver,
                @NonNull Activity activity
            )`,
  
              fullCode: `@ExperimentalWindowApi</br>public static final @NonNull ActivityOptions <a href="#setLaunchingActivityStack(ActivityOptions,Activity)">setLaunchingActivityStack</a>(
                @NonNull ActivityOptions receiver,
                @NonNull Activity activity
            )`,

              des: `Is method ka use ActivityEmbeddingOptions class mein launching activity stack ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityEmbeddingOptions class mein launching activity stack ko set karne ke liye hota hai. Yani ki is method ki madad se aap kisi activity ke context mein launching activity stack ko set kar sakte hain.</p>
  
              <p>Yeh method ek ActivityOptions object return karta hai jisme launching activity stack set kiya gaya hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ActivityOptions receiver`,
                        des:`<p>Yeh parameter ek ActivityOptions object hai jiska launching activity stack set kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiska associated activity stack launching activity stack banayi jayegi.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setLaunchingActivityStack",
              id: "setLaunchingActivityStack(ActivityOptions,Context,ActivityStack)",
              dataTypeName: `static final @NonNull ActivityOptions`,
              code: `<a href="#setLaunchingActivityStack(ActivityOptions,Context,ActivityStack)">setLaunchingActivityStack</a>(
                @NonNull ActivityOptions receiver,
                @NonNull Context context,
                @NonNull ActivityStack activityStack
            )`,
  
              fullCode: `@ExperimentalWindowApi</br>public static final @NonNull ActivityOptions <a href="#setLaunchingActivityStack(ActivityOptions,Context,ActivityStack)">setLaunchingActivityStack</a>(
                @NonNull ActivityOptions receiver,
                @NonNull Context context,
                @NonNull ActivityStack activityStack
            )`,

              des: `Is method ka use ActivityEmbeddingOptions class mein launching activity stack ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityEmbeddingOptions class mein launching activity stack ko set karne ke liye hota hai. Yani ki is method ki madad se aap kisi activity stack ko context ke saath launching activity stack ke roop mein set kar sakte hain.</p>
  
              <p>Yeh method ek ActivityOptions object return karta hai jisme launching activity stack set kiya gaya hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ActivityOptions receiver`,
                        des:`<p>Yeh parameter ek ActivityOptions object hai jiska launching activity stack set kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter ek Context object hai jiska use activity stack ke context ko set karne ke liye hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull ActivityStack activityStack`,
                        des:`<p>Yeh parameter ek ActivityStack object hai jiska use launching activity stack ko set karne ke liye hota hai.</p>`,
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
  