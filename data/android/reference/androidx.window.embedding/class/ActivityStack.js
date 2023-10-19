module.exports.ActivityStack = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityStack",
      hCode: `public final class <a href="#ActivityStack">ActivityStack</a> `,
  
      des: 
        `
        <p>ActivityStack class ka use karke aap apne app ke activities ko ek stack mein manage kar sakte hain. Aap is class ke methods ka use karke stack mein activities ko add, remove, reorder, aur resize kar sakte hain. Aap is class se stack ki size, position, visibility, aur state ko bhi control kar sakte hain.</p>
  
       
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
              name: "contains",
              id: "contains()",
              dataTypeName: `final boolean`,
              code: `<a href="#contains()">contains</a>(@NonNull Activity activity)`,
  
              fullCode: `public final boolean <a href="#contains()">contains</a>(@NonNull Activity activity)`,

              des: `Is method ka use yeh check karne ke liye hota hai ki kya diya gaya Activity object ActivityStack mein present hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityStack mein diya gaya Activity object ke presence ko check karne ke liye hota hai. Agar ActivityStack mein diya gaya Activity object mojud hai, to method true return karega, indicating that the activity is present in the stack. Agar activity stack mein diya gaya activity nahi hai, to method false return hoga.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek non-null Activity object hai, jiska presence ActivityStack mein check kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "equals",
              id: "equals()",
              dataTypeName: `boolean`,
              code: `<a href="#equals()">equals</a>(Object other)`,
  
              fullCode: `public boolean <a href="#equals()">equals</a>(Object other)`,

              des: `Is method ka use ActivityStack object ke comparison ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object se equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityStack objects ke comparison mein hota hai. Yadi dono objects ke attributes aur values ek dusre se match karte hain, to method true return hota hai, indicating that the objects are equal. Agar values match nahi karte, to method false return hota hai.</p>
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
              name: "hashCode",
              id: "hashCode()",
              dataTypeName: `int`,
              code: `<a href="#hashCode()">hashCode</a>()`,
  
              fullCode: `public int <a href="#hashCode()">hashCode</a>()`,

              des: `Is method ka use object ka hash code generate karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use object ka unique hash code generate karne ke liye hota hai. Hash code ek numeric value hota hai jo object ko uniquely identify karne ke liye use hota hai. Yeh value hash map jaise data structures mein object indexing ke liye bhi use hoti hai.</p>

              <p>Yeh method ek integer value return karta hai, jo object ka hash code represent karta hai.</p>
              `,

              parameter: [],
            },

  
  

            {
              dep: false,
              name: "isEmpty",
              id: "isEmpty()",
              dataTypeName: `final boolean`,
              code: `<a href="#isEmpty()">isEmpty</a>()`,
  
              fullCode: `public final boolean <a href="#isEmpty()">isEmpty</a>()`,

              des: `Is method ka use yeh check karne ke liye hota hai ki kya ActivityStack mein koi activity present nahi hai, yani ki stack khali hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ActivityStack mein activities ki presence ko check karne ke liye hota hai. Agar ActivityStack khali hai, to method true return karega, indicating that the stack is empty. Agar activities present hain, to method false return hoga.</p>
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

              des: `Yeh method ek string return karta hai, jo ActivityStack object ka human-readable representation hota hai.`,
  
              longDes: `
              <p>Yeh method ek string return karta hai, jo ActivityStack object ka human-readable representation hota hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  