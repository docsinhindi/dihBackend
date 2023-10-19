module.exports.ActivityFilter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityFilter",
      hCode: `public final class <a href="#ActivityFilter">ActivityFilter</a>`,
  
      des: 
        `
        <p>Ye class activity embedding feature ke liye filter options provide karti hai. Activity embedding feature se app ka task window do containers mein split ho jaata hai: primary aur secondary. Primary container mein main activity hoti hai aur secondary container mein usse launch ki gayi activities hoti hain. Isse app ke activities side by side dikhayi jaati hain aur user ko navigation aur functionality mein madad milti hai.</p>
  
       
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
              name: `ActivityFilter`,
              id: "ActivityFilter()",
              code: `ActivityFilter(@NonNull ComponentName componentName, String intentAction)`,
              fullCode: `public ActivityFilter(@NonNull ComponentName componentName, String intentAction)`,

              des: `Ye constructor ek new ActivityFilter object create karta hai aur usme di gayi ComponentName aur intentAction ki values ko set karta hai.`,

              longDes: `<p>Ye constructor ek new ActivityFilter object create karta hai aur usme di gayi ComponentName aur intentAction ki values ko set karta hai.</p>

              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ComponentName componentName`,
                        des:`<p>Yeh parameter ek ComponentName object hai, jo activity component ko represent karta hai jise aap filter karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `String intentAction`,
                        des:`<p>Yeh parameter ek string hai jo intent action ko represent karta hai. Intent action activity filter mein use hoti hai.</p>`,
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
              name: "equals",
              id: "equals()",
              dataTypeName: `boolean`,
              code: `<a href="#equals()">equals</a>(Object other)`,
  
              fullCode: `public boolean <a href="#equals()">equals</a>(Object other)`,

              des: `Is method ka use ActivityFilter objects ke comparison karne ke liye hota hai, yani ki ek object dusre object se equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityFilter objects ke comparison mein hota hai. Yadi dono objects ke componentName aur intentAction values ek dusre se match karte hain, to method true return karta hai, indicating that the objects are equal. Agar values match nahi karte, to method false return karta hai.</p>
               `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Yeh parameter ek Object hai jiska saath comparison kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "getComponentName",
              id: "getComponentName()",
              dataTypeName: `final @NonNull ComponentName`,
              code: `<a href="#getComponentName()">getComponentName</a>()`,
  
              fullCode: `public final @NonNull ComponentName <a href="#getComponentName()">getComponentName</a>()`,

              des: `Is method ka use ActivityFilter object ke associated ComponentName ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityFilter object ke ComponentName ko retrieve karne ke liye hota hai. ComponentName ek unique identifier hoti hai jo activity component (package name + class name) ko identify karti hai. Is tarike se aap ActivityFilter object se us activity component ko access kar sakte hain jise yeh filter karta hai.</p>

              <p>Yeh method ek ComponentName object return karta hai, jo activity component ko represent karta hai.</p>
               `,
 
              parameter: [],
            },

  


            {
              dep: false,
              name: "getIntentAction",
              id: "getIntentAction()",
              dataTypeName: `final String`,
              code: `<a href="#getIntentAction()">getIntentAction</a>()`,
  
              fullCode: `public final String <a href="#getIntentAction()">getIntentAction</a>()`,

              des: `Is method ka use ActivityFilter object ke associated intent action ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityFilter object ke associated intent action ko retrieve karne ke liye hota hai. Intent action activity filter mein use hoti hai jisse specific intent action ke liye activity filter set kiya ja sakta hai.</p>

              <p>Yeh method ek string return karta hai, jo intent action ko represent karta hai. Yadi intent action set nahi kiya gaya ho to null return hota hai.</p>
               `,
 
              parameter: [],
            },

  


            {
              dep: false,
              name: "hashCode",
              id: "hashCode()",
              dataTypeName: `int`,
              code: `<a href="#hashCode()">hashCode</a>()`,
  
              fullCode: `public int <a href="#hashCode()">hashCode</a>()`,

              des: `Is method ka use ActivityFilter object ke hash code generate karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityFilter object ke hash code generate karne ke liye hota hai. Hash code ek unique numeric value hota hai jo object ko uniquely identify karne ke liye use hota hai, jaise ki collection classes (like hash map) mein keys ke indexing ke liye.</p>

              <p>Yeh method ek integer value return karta hai, jo generated hash code ko represent karta hai.</p>
               `,
 
              parameter: [],
            },

  


            {
              dep: false,
              name: "matchesActivity",
              id: "matchesActivity()",
              dataTypeName: `final boolean`,
              code: `<a href="#matchesActivity()">matchesActivity</a>(@NonNull Activity activity)`,
  
              fullCode: `public final boolean <a href="#matchesActivity()">matchesActivity</a>(@NonNull Activity activity)`,

              des: `Is method ka use di gayi Activity object ke saath comparison karne ke liye hota hai, yani ki yeh method check karta hai ki kya di gayi activity ActivityFilter ke criteria ke match karti hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityFilter object ke criteria ke saath di gayi Activity object ke comparison mein hota hai. Yadi Activity object, ActivityFilter ke ComponentName aur intentAction values ke saath match karta hai, to method true return karta hai, indicating that the activity matches the filter's criteria. Agar values match nahi karte, to method false return hota hai.</p>
               `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiska saath comparison kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "matchesIntent",
              id: "matchesIntent()",
              dataTypeName: `final boolean`,
              code: `<a href="#matchesIntent()">matchesIntent</a>(@NonNull Intent intent)`,
  
              fullCode: `public final boolean <a href="#matchesIntent()">matchesIntent</a>(@NonNull Intent intent)`,

              des: `Is method ka use di gayi Intent object ke saath comparison karne ke liye hota hai, yani ki yeh method check karta hai ki kya di gayi intent ActivityFilter ke criteria ke match karti hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityFilter object ke criteria ke saath di gayi Intent object ke comparison mein hota hai. Yadi Intent object, ActivityFilter ke ComponentName aur intentAction values ke saath match karta hai, to method true return hota hai, indicating that the intent matches the filter's criteria. Agar values match nahi karte, to method false return hota hai.</p>
               `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Intent intent`,
                        des:`<p>Yeh parameter ek Intent object hai jiska saath comparison kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `Is method ka use ActivityFilter object ko human-readable string representation mein convert karne ke liye hota hai.`,
  
              longDes: `
              <p>Yeh method ek string return karta hai, jo ActivityFilter object ka human-readable representation hota hai.</p>
               `,
 
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  