module.exports.ActivityRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityRule",
      hCode: `public final class <a href="#ActivityRule">ActivityRule</a>  extends EmbeddingRule`,
  
      des: 
        `
        <p>Ye class activity embedding feature ke liye rules provide karti hai. Activity embedding feature se app ka task window do containers mein split ho jaata hai: primary aur secondary. Primary container mein main activity hoti hai aur secondary container mein usse launch ki gayi activities hoti hain. Isse app ke activities side by side dikhayi jaati hain aur user ko navigation aur functionality mein madad milti hai.</p>
        
  
        <p>Aap is class se apni app ki activities ko primary ya secondary container mein dikhane ya chhupane ke liye rules laga sakte hain.</p>
  
       
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
              name: "equals",
              id: "equals()",
              dataTypeName: `boolean`,
              code: `<a href="#equals()">equals</a>(Object other)`,
  
              fullCode: `public boolean <a href="#equals()">equals</a>(Object other)`,

              des: `Is method ka use ActivityRule objects ke comparison karne ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object se equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityRule objects ke comparison mein hota hai. Yadi dono objects ke attributes aur values ek dusre se match karte hain, to method true return karta hai, indicating that the objects are equal. Agar values match nahi karte, to method false return hota hai.</p>
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
              name: "getAlwaysExpand",
              id: "getAlwaysExpand()",
              dataTypeName: `final boolean`,
              code: `<a href="#getAlwaysExpand()">getAlwaysExpand</a>()`,
  
              fullCode: `public final boolean <a href="#getAlwaysExpand()">getAlwaysExpand</a>()`,

              des: `Is method ka use ActivityRule object ke attribute alwaysExpand ki value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule object ke attribute alwaysExpand ki value ko retrieve karne ke liye hota hai. alwaysExpand attribute ka use ActivityRule object ke rule ke saath expand behavior ko define karne mein hota hai.</p>

              <p>Yeh method ek boolean value return karta hai, jo alwaysExpand attribute ki value ko represent karta hai.</p>
              `,
 
              parameter: [],
            },




            {
              dep: false,
              name: "getFilters",
              id: "getFilters()",
              dataTypeName: `final @NonNull Set<@NonNull ActivityFilter>`,
              code: `<a href="#getFilters()">getFilters</a>()`,
  
              fullCode: `public final @NonNull Set<@NonNull ActivityFilter> <a href="#getFilters()">getFilters</a>()`,

              des: `Is method ka use ActivityRule object ke associated filters set ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule object ke associated filters set ko retrieve karne ke liye hota hai. Har ek ActivityFilter object specific criteria (jaise ki ComponentName aur intentAction) ke liye set ki gayi hain.</p>
              
              <p>Yeh method ek set of ActivityFilter objects return karta hai, jo associated filters ko represent karta hai. Set ek collection hoti hai jo unique values ko store karti hai.</p>
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

              des: `Is method ka use ActivityRule object ka hash code generate karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule object ka hash code generate karne ke liye hota hai. Hash code ek unique numeric value hota hai jo object ko uniquely identify karne ke liye use hota hai, jaise ki collection classes (like hash map) mein keys ke indexing ke liye.</p>
              
              <p>Yeh method ek integer value return karta hai, jo generated hash code ko represent karta hai.</p>
              `,
 
              parameter: [],
            },

  

  


            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `Is method ka use ActivityRule object ko human-readable string representation mein convert karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActivityRule object ko string format mein convert karke debugging aur logging ke liye hota hai. Method activityName, requestCode, alwaysExpand, aur filters attributes ko ek readable string format mein combine karke return karta hai.</p>
              
              <p>Yeh method ek string return karta hai, jo ActivityRule object ka human-readable representation hota hai.</p>
              `,
 
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  