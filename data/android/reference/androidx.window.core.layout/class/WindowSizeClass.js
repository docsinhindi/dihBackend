module.exports.WindowSizeClass = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowSizeClass",
      hCode: `public final class <a href="#WindowSizeClass">WindowSizeClass</a>`,
  
      des: 
        `
        <p>WindowSizeClass class ka use, window ke available width aur height ko compact, medium, ya expanded size classes mein classify karne ke liye hota hai. Isse aap apne app ke layout ko responsive aur adaptive bana sakte hain, aur alag-alag screen sizes aur configurations ko support kar sakte hain.</p>
        
  
        <p>WindowSizeClass class ka use karke aap apne app ke layout ko window ke width aur height ke hisab se adjust kar sakte hain. Aap WindowMetricsCalculator class ka use karke current window metrics ko get kar sakte hain, aur uske baad WindowSizeClass class ka use karke current window width size class aur window height size class ko get kar sakte hain. Isse aap apne app ke UI elements ko show ya hide kar sakte hain, ya unka size ya position change kar sakte hain.</p>
  
       
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
              name: "compute",
              id: "compute()",
              dataTypeName: `static final @NonNull WindowSizeClass`,
              code: `<a href="#compute()">compute</a>(float dpWidth, float dpHeight)`,
  
              fullCode: `public static final @NonNull WindowSizeClass <a href="#compute()">compute</a>(float dpWidth, float dpHeight)`,

              des: ` Iska use WindowSizeClass ke objects ko create karne aur initialize karne ke liye hota hai.`,
  
              longDes: `
              <p>compute() method ka use WindowSizeClass ke objects ko create aur initialize karne ke liye hota hai. Is method ke through, aap dp (density-independent pixels) mein width aur height provide karke WindowSizeClass ke objects ko create kar sakte hain. Is tarike se, aap window size ko dp mein specify karke scaling aur device compatibility ke liye ready kar sakte hain.</p>
  
              <p>Yeh method ek WindowSizeClass object return karta hai, jiska use window size ko represent karne ke liye hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float dpWidth`,
                        des:`<p>Ek float value jo window width ko dp (density-independent pixels) mein represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `float dpHeight`,
                        des:`<p>Ek float value jo window height ko dp mein represent karta hai.</p>`,
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

              des: `Is method ka use object ke equality check karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Is method ka use object ke equality check karne ke liye kiya jata hai. Jab aap do objects ke contents ya properties ko compare karna chahte hain, tab aap equals() method ka use karte hain.</p>
  
              <p>Yeh method true ya false return karta hai, indicating whether the two objects are equal or not.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Yeh parameter us object ko represent karta hai jiska saath current object ka comparison karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "getWindowHeightSizeClass",
              id: "getWindowHeightSizeClass()",
              dataTypeName: `final @NonNull WindowHeightSizeClass`,
              code: `<a href="#getWindowHeightSizeClass()">getWindowHeightSizeClass</a>()`,
  
              fullCode: `public final @NonNull WindowHeightSizeClass <a href="#getWindowHeightSizeClass()">getWindowHeightSizeClass</a>()`,

              des: `Is method ka use WindowSizeClass ke objects se associated WindowHeightSizeClass object ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowSizeClass ke objects se unke associated WindowHeightSizeClass object ko retrieve karne ke liye hota hai. Jab aap window size ko represent karne ke liye WindowSizeClass object create karte hain, to aap associated window height ko represent karne ke liye WindowHeightSizeClass object ko bhi create karte hain. Is method ki madad se aap WindowSizeClass object se uske associated height object ko retrieve kar sakte hain.</p>
  
              <p>Yeh method ek WindowHeightSizeClass object return karta hai, jo WindowSizeClass object se associated hota hai. Is object ka use window ki height ko represent karne ke liye hota hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getWindowWidthSizeClass",
              id: "getWindowWidthSizeClass()",
              dataTypeName: `final @NonNull WindowWidthSizeClass`,
              code: `<a href="#getWindowWidthSizeClass()">getWindowWidthSizeClass</a>()`,
  
              fullCode: `public final @NonNull WindowWidthSizeClass <a href="#getWindowWidthSizeClass()">getWindowWidthSizeClass</a>()`,

              des: ` Is method ka use WindowSizeClass ke objects se associated WindowWidthSizeClass object ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowSizeClass ke objects se unke associated WindowWidthSizeClass object ko retrieve karne ke liye hota hai. Jab aap window size ko represent karne ke liye WindowSizeClass object create karte hain, to aap associated window width ko represent karne ke liye WindowWidthSizeClass object ko bhi create karte hain. Is method ki madad se aap WindowSizeClass object se uske associated width object ko retrieve kar sakte hain.</p>
  
              <p>Yeh method ek WindowWidthSizeClass object return karta hai, jo WindowSizeClass object se associated hota hai. Is object ka use window ki width ko represent karne ke liye hota hai.</p>
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

              des: `Is method ka use object ke hash code generate karne ke liye hota hai. Hash code ek integer value hoti hai jo object ke unique identifier ke roop mein use hoti hai.`,
  
              longDes: `
              <p>Hash code ek unique integer value hoti hai jo har ek object ke liye generate hoti hai. Hash code ka use primarily collection-based data structures mein hota hai, jaise ki HashMap, HashSet, etc. In data structures mein objects ko store aur retrieve karne mein hash code ka use hota hai, jisse searching aur retrieval process efficient ho.</p>
  
              <p>hashCode() method ko override karke aap apne custom class mein define kar sakte hain ki object ke properties ko kaise combine karke hash code generate kiya jaye. Hash code ideally aisa generate karna chahiye ki agar do objects ke contents same hain to unka hash code bhi same ho, taki unhe sahi tarike se store aur retrieve kiya ja sake.</p>

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

              des: `Is method ka use object ka human-readable string representation generate karne ke liye hota hai.`,
  
              longDes: `
              <p>toString() method ka use primarily debugging aur logging mein hota hai. Agar aap kisi object ko print statement mein directly use karte hain, to Java automatically us object ka toString() method call karta hai aur uska human-readable representation print karta hai.</p>
  
              <p>Yeh method ek string value return karta hai, jo object ka human-readable representation hota hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        

      },
    });
  };
  