module.exports.WindowMetrics = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowMetrics",
      hCode: `public final class <a href="#WindowMetrics">WindowMetrics</a>`,
  
      des: 
        `
        <p>WindowMetrics class ka use display ke metrics aur window layout information ko retrieve aur access karne ke liye hota hai. Aap iska use karke display size, density, width, height, etc. ko retrieve kar sakte hain.</p>
  
       
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

              des: `Is method ka use WindowMetrics object ke comparison karne ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object se equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use WindowMetrics objects ke comparison mein hota hai. Yadi dono objects ke attributes aur values ek dusre se match karte hain, to method true return hota hai, jisse ki objects equal hain. Agar values match nahi karte, to method false return hota hai.</p>

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
              name: "getBounds",
              id: "getBounds()",
              dataTypeName: `final @NonNull Rect`,
              code: `<a href="#getBounds()">getBounds</a>()`,
  
              fullCode: `public final @NonNull Rect <a href="#getBounds()">getBounds</a>()`,

              des: `Is method ka use WindowMetrics object ke bounds (boundary) ko retrieve karne ke liye hota hai. Bounds typically screen area ko represent karte hain jahan window display hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowMetrics object ke bounds ko retrieve karne ke liye hota hai. Rect ek class hoti hai jo rectangular area ka representation karti hai, jisme top-left corner aur bottom-right corner ke coordinates hote hain.</p>

              <p>Yeh method ek Rect object return karta hai, jo ki WindowMetrics object ke bounds ko represent karta hai. @NonNull annotation indicate karta hai ki yeh object null nahi hoga.</p>

              `, 
  
              parameter: [],
            },

  

  
            {
              dep: false,
              name: "getWindowInsets",
              id: "getWindowInsets()",
              dataTypeName: `final @NonNull WindowInsetsCompat`,
              code: `<a href="#getWindowInsets()">getWindowInsets</a>()`,
  
              fullCode: `@ExperimentalWindowApi</br>@RequiresApi(value = 30)</br>public final @NonNull WindowInsetsCompat <a href="#getWindowInsets()">getWindowInsets</a>()`,

              des: `Is method ka use WindowMetrics object ke associated window insets ko retrieve karne ke liye hota hai. Window insets, screen ke edges ke around ek window ke visible content aur non-content areas ko represent karte hain.`,
  
              longDes: `
              <p>Is method ka use WindowMetrics object ke window insets ko retrieve karne ke liye hota hai. WindowInsetsCompat object screen ke edges aur window ke visible content aur non-content areas ke attributes ko contain karta hai.</p>

              <p>Yeh method WindowInsetsCompat object return karta hai, jo ki WindowMetrics object se associated window insets ko represent karta hai. @NonNull annotation indicate karta hai ki yeh object null nahi hoga.</p>

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

              des: `Is method ka use WindowMetrics object ke hash code ko generate karne ke liye hota hai. Hash code ek integer value hoti hai jo ek object ko uniquely represent karti hai, aur ise data structures like hash maps mein object ko store aur retrieve karne ke liye use kiya jata hai.`,
  
              longDes: `
              <p>Is method ka use WindowMetrics object ke hash code ko generate karne ke liye hota hai. Hash code ka main purpose yeh hota hai ki objects ko efficiently manage kiya ja sake, jaise ki hash maps mein unhe store aur retrieve karne ke liye. Agar do objects ka hash code same hota hai, to isse "hash collision" kehte hain. Hash codes similar data wale objects ke liye generally different hote hain, lekin kuch cases mein collision ho sakta hai.</p>

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

              des: `Yeh method ek string return karta hai, jo object ki string representation hoti hai. @NonNull annotation indicate karta hai ki yeh string null nahi hogi.`,
  
              longDes: `
              <p>Is method ka use WindowMetrics object ki human-readable string representation ko generate karne ke liye hota hai. Yeh representation generally object ke data members aur unke values ko include karta hai, jo ki debugging aur logging ke liye helpful hota hai.</p>

              <p>Yeh method ek string return karta hai, jo object ki string representation hoti hai. @NonNull annotation indicate karta hai ki yeh string null nahi hogi.</p>

              `, 
  
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  