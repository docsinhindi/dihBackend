module.exports.WindowLayoutInfo = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowLayoutInfo",
      hCode: `public final class <a href="#WindowLayoutInfo">WindowLayoutInfo</a>`,
  
      des: 
        `
        <p>WindowLayoutInfo class ka use screen par dikh rahe windows ki layout information ko retrieve karne ke liye hota hai. Aap iska use karke har window ki position, size, visibility, etc. ko access kar sakte hain. Isse aap apne UI elements ko optimize aur render kar sakte hain.</p>
  
       
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

              des: ` Is method ka use WindowLayoutInfo objects ke comparison karne ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object se equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo objects ke comparison mein hota hai. Yadi dono objects ke attributes aur values ek dusre se match karte hain, to method true return hota hai, jisse ki objects equal hain. Agar values match nahi karte, to method false return hota hai.</p>

              <p>Yeh method ek boolean value return karta hai. Agar current object other object se equal hai, to true return hota hai, aur agar nahi hai, to false return hota hai.</p>
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
              name: "getDisplayFeatures",
              id: "getDisplayFeatures()",
              dataTypeName: `final @NonNull List<@NonNull DisplayFeature>`,
              code: `<a href="#getDisplayFeatures()">getDisplayFeatures</a>()`,
  
              fullCode: `public final @NonNull List<@NonNull DisplayFeature> <a href="#getDisplayFeatures()">getDisplayFeatures</a>()`,

              des: `Is method ka use WindowLayoutInfo object se associated display features ki list ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo object se associated display features ki list ko retrieve karne ke liye hota hai. Display features usually screen ke layout aur characteristics ko represent karte hain, jaise ki notch, cutout, ya fir koi aur specific design element.</p>

              <p>Yeh method ek List return karta hai, jisme DisplayFeature objects ki list hoti hai. @NonNull annotation indicate karta hai ki yeh list null nahi hogi, aur DisplayFeature objects bhi null nahi honge.</p>
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

              des: `Is method ka use WindowLayoutInfo object ke hash code ko generate karne ke liye hota hai. Hash code ek integer value hoti hai jo ek object ko uniquely represent karti hai, aur ise data structures like hash maps mein object ko store aur retrieve karne ke liye use kiya jata hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo object ke hash code ko generate karne ke liye hota hai. Hash code ka main purpose yeh hota hai ki objects ko efficiently manage kiya ja sake, jaise ki hash maps mein unhe store aur retrieve karne ke liye. Agar do objects ka hash code same hota hai, to isse "hash collision" kehte hain. Hash codes similar data wale objects ke liye generally different hote hain, lekin kuch cases mein collision ho sakta hai.</p>

              <p>Yeh method ek integer value return karta hai, jo object ka hash code hota hai.</p>
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

              des: `Is method ka use WindowLayoutInfo object ki string representation ko generate karne ke liye hota hai. Yeh string representation object ke state aur values ko human-readable format mein dikhata hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo object ki human-readable string representation ko generate karne ke liye hota hai. Yeh representation generally object ke data members aur unke values ko include karta hai, jo ki debugging aur logging ke liye helpful hota hai.</p>

              <p>Yeh method ek string return karta hai, jo object ki string representation hoti hai. @NonNull annotation indicate karta hai ki yeh string null nahi hogi.</p>
              `, 

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  