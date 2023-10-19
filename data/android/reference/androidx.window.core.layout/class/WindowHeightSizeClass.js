module.exports.WindowHeightSizeClass = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowHeightSizeClass",
      hCode: `public final class <a href="#WindowHeightSizeClass">WindowHeightSizeClass</a>`,
  
      des: 
        `
        <p>Is class ka use, window ke available height ko compact, medium, ya expanded size classes mein classify karne ke liye hota hai. Isse aap apne app ke layout ko responsive aur adaptive bana sakte hain, aur alag-alag screen sizes aur configurations ko support kar sakte hain.</p>

        <p>WindowHeightSizeClass class ek enum type ka class hai, jo window ke available height ko three categories mein divide karta hai: COMPACT, MEDIUM, aur EXPANDED. Ye categories window ke height ke basis par decide kiye jate hain, aur window size classes breakpoints se match karte hain. Window size classes breakpoints aapko apne app ke layout ko optimize karne mein help karte hain, aur Material Design responsive layout grid se map karte hain.</p>

        <p>WindowHeightSizeClass class ka use karke aap apne app ke layout ko window ke height ke hisab se adjust kar sakte hain. Aap WindowMetricsCalculator class ka use karke current window metrics ko get kar sakte hain, aur uske baad WindowHeightSizeClass class ka use karke current window height size class ko get kar sakte hain. Isse aap apne app ke UI elements ko show ya hide kar sakte hain, ya unka size ya position change kar sakte hain.</p>
        
       
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
              name: "hashCode",
              id: "hashCode()",
              dataTypeName: `int`,
              code: `<a href="#hashCode()">hashCode</a>()`,
  
              fullCode: `public int <a href="#hashCode()">hashCode</a>()`,

              des: `Is method ka use object ke hash code generate karne ke liye kiya jata hai. Hash code ek integer value hoti hai jo object ke unique identifier ke roop mein use hoti hai.`,
  
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
  