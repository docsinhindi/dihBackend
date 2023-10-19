module.exports.SplitPairFilter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitPairFilter",
      hCode: `public final class <a href="#SplitPairFilter">SplitPairFilter</a>`,
  
      des: 
        `
        <p>SplitPairFilter class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek pair (dono) of embedded windows ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap ek pair of embedded windows ko match karne ke liye filters ko manage kar sakte hain. Har pair ke liye ek SplitPairFilter object create kiya ja sakta hai, jisme pahle aur dusre embedded windows ke liye filters specify kiye jate hain.</p>
  
       
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
              name: `SplitPairFilter`,
              id: "SplitPairFilter()",
              code: `SplitPairFilter(
                @NonNull ComponentName primaryActivityName,
                @NonNull ComponentName secondaryActivityName,
                String secondaryActivityIntentAction
            )`,

              fullCode: `public SplitPairFilter(
                @NonNull ComponentName primaryActivityName,
                @NonNull ComponentName secondaryActivityName,
                String secondaryActivityIntentAction
            )`,

              des: `Is constructor ka use primary aur secondary activities ke pairs ko filter karne ke liye hota hai.`,

              longDes: `
              <p>Is constructor ka use primary aur secondary activities ke pairs ko filter karne ke liye hota hai. Ek SplitPairFilter object banate waqt aap primary aur secondary activities ke component names ko specify karte hain. Agar aap chahate hain ki filter ke sath secondary activity ka intent action bhi match ho, to aap secondaryActivityIntentAction parameter ko provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ComponentName primaryActivityName`,
                        des:`<p>Yeh parameter ComponentName type ka hai aur primary activity ka package aur class name hold karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull ComponentName secondaryActivityName`,
                        des:`<p>Yeh parameter bhi ComponentName type ka hai aur secondary activity ka package aur class name hold karta hai.</p>`,
                      },
                      {
                        dataTypeName: `String secondaryActivityIntentAction`,
                        des:`<p>Yeh parameter optional hai aur ek string hai jo secondary activity ke intent action ko represent karta hai.</p>`,
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

              des: ` Is method ka use object ke comparison ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object ke equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use object ke comparison mein hota hai. Java me, equals() method Object class se inherit ki gayi hai, lekin aksar custom classes mein ise override kiya jata hai taki class ke instances ko sahi tarike se compare kiya ja sake.</p>
  
              <p>equals() method ke madhyam se aap object ke properties aur data members ko compare kar sakte hain. Agar dono objects ke properties aur data members ek dusre se match karte hain, to method true return karta hai, indicating that the objects are equal. Agar values match nahi karte, to method false return hota hai.</p>
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
              name: "getPrimaryActivityName",
              id: "getPrimaryActivityName()",
              dataTypeName: `final @NonNull ComponentName`,
              code: `<a href="#getPrimaryActivityName()">getPrimaryActivityName</a>()`,
  
              fullCode: `public final @NonNull ComponentName <a href="#getPrimaryActivityName()">getPrimaryActivityName</a>()`,

              des: `Is method ka use primary activity ka ComponentName retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use primary activity ka ComponentName retrieve karne ke liye hota hai. ComponentName ek Android framework class hai jo package aur class name ko combine karke ek unique identifier create karta hai. Is identifier ka use activity ko uniquely identify karne ke liye hota hai.</p>
  
              <p>Yeh method ek ComponentName object return karta hai, jo primary activity ka package aur class name ko represent karta hai.</p>
              `,

              parameter: [],
            },

            {
              dep: false,
              name: "getSecondaryActivityIntentAction",
              id: "getSecondaryActivityIntentAction()",
              dataTypeName: `final String`,
              code: `<a href="#getSecondaryActivityIntentAction()">getSecondaryActivityIntentAction</a>()`,
  
              fullCode: `public final String <a href="#getSecondaryActivityIntentAction()">getSecondaryActivityIntentAction</a>()`,

              des: `Is method ka use secondary activity ke intent action ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use secondary activity ke intent action ko retrieve karne ke liye hota hai. Intent action ek string hoti hai jo activity ke intent ko identify karti hai. Yadi secondary activity ke liye intent action define kiya gaya hai to yeh method us intent action ko return karta hai.</p>
  
              <p>Yeh method ek string return karta hai, jo secondary activity ke intent action ko represent karta hai.</p>
              `,

              parameter: [],
            },

            {
              dep: false,
              name: "getSecondaryActivityName",
              id: "getSecondaryActivityName()",
              dataTypeName: `final @NonNull ComponentName`,
              code: `<a href="#getSecondaryActivityName()">getSecondaryActivityName</a>()`,
  
              fullCode: `public final @NonNull ComponentName <a href="#getSecondaryActivityName()">getSecondaryActivityName</a>()`,

              des: `Is method ka use secondary activity ka ComponentName retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use secondary activity ka ComponentName retrieve karne ke liye hota hai. ComponentName ek Android framework class hai jo package aur class name ko combine karke ek unique identifier create karta hai. Is identifier ka use activity ko uniquely identify karne ke liye hota hai.</p>
  
              <p>Yeh method ek ComponentName object return karta hai, jo secondary activity ka package aur class name ko represent karta hai.</p>
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

              des: `Is method ka use object ke hash code ko generate karne ke liye hota hai.`,
  
              longDes: `
              <p>Hash code ek unique integer value hoti hai jo ek object ko uniquely identify karti hai. Hash code ka use mainly data structures mein search aur comparison mein kiya jata hai. Objects ko hash code ke basis par store kiya jaata hai, jisse unko search karte waqt performance improve ho jati hai.</p>
  
              <p>Yeh method ek integer value return karta hai, jo object ka hash code represent karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "matchesActivityIntentPair",
              id: "matchesActivityIntentPair()",
              dataTypeName: `final boolean`,
              code: `<a href="#matchesActivityIntentPair()">matchesActivityIntentPair</a>(
                @NonNull Activity primaryActivity,
                @NonNull Intent secondaryActivityIntent
            )`,
  
              fullCode: `public final boolean <a href="#matchesActivityIntentPair()">matchesActivityIntentPair</a>(
                @NonNull Activity primaryActivity,
                @NonNull Intent secondaryActivityIntent
            )`,

              des: `Is method ka use primary activity aur secondary activity ke intent pair ko match karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use primary activity aur secondary activity ke intent pair ko match karne ke liye hota hai. Aap matchesActivityIntentPair() method ka use karke check kar sakte hain ki kya diye gaye primary activity aur secondary activity intent pair filter ke saath match karte hain ya nahi.</p>
  
              <p>Yeh method ek boolean value return karta hai. true return hota hai agar diye gaye primary activity aur secondary activity intent pair filter ke saath match karte hain, aur false return hota hai agar nahi match karte.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity primaryActivity`,
                        des:`<p>Yeh parameter ek Activity object hai, jo primary activity ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Intent secondaryActivityIntent`,
                        des:`<p>Yeh parameter ek Intent object hai, jo secondary activity ke intent ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "matchesActivityPair",
              id: "matchesActivityPair()",
              dataTypeName: `final boolean`,
              code: `<a href="#matchesActivityPair()">matchesActivityPair</a>(
                @NonNull Activity primaryActivity,
                @NonNull Activity secondaryActivity
            )`,
  
              fullCode: `public final boolean <a href="#matchesActivityPair()">matchesActivityPair</a>(
                @NonNull Activity primaryActivity,
                @NonNull Activity secondaryActivity
            )`,

              des: `Is method ka use primary aur secondary activities ke pairs ko match karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use primary aur secondary activities ke pairs ko match karne ke liye hota hai. Aap matchesActivityPair() method ka use karke check kar sakte hain ki kya diye gaye primary aur secondary activities pair filter ke saath match karte hain ya nahi.</p>
  
              <p>Yeh method ek boolean value return karta hai. true return hota hai agar diye gaye primary aur secondary activities pair filter ke saath match karte hain, aur false return hota hai agar nahi match karte.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity primaryActivity`,
                        des:`<p>Yeh parameter ek Activity object hai, jo primary activity ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Activity secondaryActivity`,
                        des:`<p>Yeh parameter ek Activity object hai, jo secondary activity ko represent karta hai.</p>`,
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

              des: `Is method ka use object ko human-readable string format mein represent karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use object ko human-readable string format mein represent karne ke liye hota hai.</p>

              <p>Yeh method ek string return karta hai, jo object ko represent karta hai.</p>
              `,

              parameter: [],
            },

          ],
        },
  
        
      
     
  

      },
    });
  };
  