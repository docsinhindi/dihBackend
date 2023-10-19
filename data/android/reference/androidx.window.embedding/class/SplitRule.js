module.exports.SplitRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitRule",
      hCode: `public class <a href="#SplitRule">SplitRule</a> extends EmbeddingRule`,
  
      des: 
        `
        <p>SplitRule class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek pair (dono) of embedded windows aur ek placeholder window ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap ek pair of embedded windows aur ek placeholder window ke liye rules ko manage kar sakte hain. Rules specify karke aap ye decide kar sakte hain ki embedded windows ko kab expand karna hai, kab nahi karna hai, aur placeholder window ko kab dikhana hai.</p>
  
       
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
  

        
      constant: {
        name: "Constants",
        success: true,
        method: [
          {
            dep: false,
            name: "SPLIT_MIN_DIMENSION_ALWAYS_ALLOW",
            id: "",
            dataTypeName: `static final int`,
            code: `SPLIT_MIN_DIMENSION_ALWAYS_ALLOW = 0`,

            fullCode: `public static final int SPLIT_MIN_DIMENSION_ALWAYS_ALLOW = 0`,

            des:`Iska use SplitRule objects ko configure karne mein hota hai, specifically minimum dimension restriction ko ignore karne ke liye.`,

            longDes: `
            <p>Jab aap SplitRule object ko configure karte hain, aap minimum dimension ko set karne ke liye is constant field ka use kar sakte hain. Minimum dimension define karta hai ki kitni choti screen width ya height wale devices par app ka split layout use ho sakta hai.</p>
            `,
            parameter: [],
          },

          {
            dep: false,
            name: "SPLIT_MIN_DIMENSION_DP_DEFAULT",
            id: "",
            dataTypeName: `static final int`,
            code: `SPLIT_MIN_DIMENSION_DP_DEFAULT = 600`,

            fullCode: `public static final int SPLIT_MIN_DIMENSION_DP_DEFAULT = 600`,

            des:`Iska use splitting rule mein minimum dimension ko configure karne mein hota hai.`,

            longDes: `
            <p>Jab aap SplitRule object ko configure karte hain, aap minimum dimension ko set karne ke liye is constant field ka use kar sakte hain. Minimum dimension define karta hai ki kitni choti screen width ya height wale devices par app ka split layout use ho sakta hai.</p>
            `,
            parameter: [],
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

              des: `Is method ka use SplitRule objects ke comparison karne ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object se equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects ke comparison mein hota hai. Yadi dono objects ke attributes aur values ek dusre se match karte hain, to method true return hota hai, indicating that the objects are equal. Agar values match nahi karte, to method false return hota hai.</p>
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
              name: "getDefaultSplitAttributes",
              id: "getDefaultSplitAttributes()",
              dataTypeName: `final @NonNull SplitAttributes`,
              code: `<a href="#getDefaultSplitAttributes()">getDefaultSplitAttributes</a>()`,
  
              fullCode: `public final @NonNull SplitAttributes <a href="#getDefaultSplitAttributes()">getDefaultSplitAttributes</a>()`,

              des: `Is method ka use default split attributes ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects se default split attributes ko obtain karne mein hota hai. Yadi aap ek SplitRule object define kar rahe hain aur aap chahte hain ki us object ke default split attributes kaise honge, to aap is method ka use karke un attributes ko retrieve kar sakte hain.</p>

              <p>Yeh method ek SplitAttributes object return karta hai, jo default split attributes ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getMaxAspectRatioInLandscape",
              id: "getMaxAspectRatioInLandscape()",
              dataTypeName: `final @NonNull EmbeddingAspectRatio`,
              code: `<a href="#getMaxAspectRatioInLandscape()">getMaxAspectRatioInLandscape</a>()`,
  
              fullCode: `public final @NonNull EmbeddingAspectRatio <a href="#getMaxAspectRatioInLandscape()">getMaxAspectRatioInLandscape</a>()`,

              des: `Is method ka use maximum aspect ratio ko landscape mode mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects se maximum aspect ratio ko landscape mode mein retrieve karne mein hota hai. Yadi aap ek SplitRule object define kar rahe hain aur aap chahte hain ki us object ke landscape mode mein maximum aspect ratio kya hoga, to aap is method ka use karke us aspect ratio ko retrieve kar sakte hain.</p>

              <p>Yeh method ek EmbeddingAspectRatio object return karta hai, jo maximum aspect ratio ko landscape mode mein represent karta hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getMaxAspectRatioInPortrait",
              id: "getMaxAspectRatioInPortrait()",
              dataTypeName: `final @NonNull EmbeddingAspectRatio`,
              code: `<a href="#getMaxAspectRatioInPortrait()">getMaxAspectRatioInPortrait</a>()`,
  
              fullCode: `public final @NonNull EmbeddingAspectRatio <a href="#getMaxAspectRatioInPortrait()">getMaxAspectRatioInPortrait</a>()`,

              des: `Is method ka use maximum aspect ratio ko portrait mode mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects se maximum aspect ratio ko portrait mode mein retrieve karne mein hota hai. Yadi aap ek SplitRule object define kar rahe hain aur aap chahte hain ki us object ke portrait mode mein maximum aspect ratio kya hoga, to aap is method ka use karke us aspect ratio ko retrieve kar sakte hain.</p>

              <p>Yeh method ek EmbeddingAspectRatio object return karta hai, jo maximum aspect ratio ko portrait mode mein represent karta hai.</p>
              `,

              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getMinHeightDp",
              id: "getMinHeightDp()",
              dataTypeName: `final int`,
              code: `<a href="#getMinHeightDp()">getMinHeightDp</a>()`,
  
              fullCode: `public final int <a href="#getMinHeightDp()">getMinHeightDp</a>()`,

              des: `Is method ka use minimum height ko dp (density-independent pixels) mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects se minimum height ko dp mein retrieve karne mein hota hai. Yadi aap ek SplitRule object define kar rahe hain aur aap chahte hain ki us object ke liye minimum height kya hai dp mein, to aap is method ka use karke us height ko retrieve kar sakte hain.</p>

              <p>Yeh method ek integer value return karta hai, jo minimum height ko dp mein represent karta hai.</p>
              `,

              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getMinSmallestWidthDp",
              id: "getMinSmallestWidthDp()",
              dataTypeName: `final int`,
              code: `<a href="#getMinSmallestWidthDp()">getMinSmallestWidthDp</a>()`,
  
              fullCode: `public final int <a href="#getMinSmallestWidthDp()">getMinSmallestWidthDp</a>()`,

              des: `Is method ka use minimum smallest screen width ko dp (density-independent pixels) mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects se minimum smallest screen width ko dp mein retrieve karne mein hota hai. Yadi aap ek SplitRule object define kar rahe hain aur aap chahte hain ki us object ke liye minimum smallest screen width kya hai dp mein, to aap is method ka use karke us width ko retrieve kar sakte hain.</p>

              <p>Yeh method ek integer value return karta hai, jo minimum smallest screen width ko dp mein represent karta hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getMinWidthDp",
              id: "getMinWidthDp()",
              dataTypeName: `final int`,
              code: `<a href="#getMinWidthDp()">getMinWidthDp</a>()`,
  
              fullCode: `public final int <a href="#getMinWidthDp()">getMinWidthDp</a>()`,

              des: `Is method ka use minimum width ko dp (density-independent pixels) mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitRule objects se minimum width ko dp mein retrieve karne mein hota hai. Yadi aap ek SplitRule object define kar rahe hain aur aap chahte hain ki us object ke liye minimum width kya hai dp mein, to aap is method ka use karke us width ko retrieve kar sakte hain.</p>

              <p>Yeh method ek integer value return karta hai, jo minimum width ko dp mein represent karta hai.</p>
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

              des: `Is method ka use object ka hash code generate karne ke liye hota hai. Hash code ek integer value hoti hai jo object ko uniquely represent karti hai aur object ko data structures mein store aur retrieve karne mein madad karti hai.`,
  
              longDes: `
              <p>Is method ka use object ka unique hash code generate karne mein hota hai. Hash code ki madad se objects ko data structures like hash maps, hash sets, etc. mein store aur retrieve kiya ja sakta hai. Java mein hashCode() method ko override karte waqt aap apne object ke attributes aur values ke basis par ek unique hash code generate karte hain, jisse aapke objects ko efficiently store aur retrieve kiya ja sake.</p>

              <p>Yeh method ek integer value return karta hai, jo object ka hash code represent karta hai.</p>
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

              des: `Yeh method ek string value return karta hai, jo object ka human-readable representation hota hai.`,
  
              longDes: `
              <p>Yeh method ek string value return karta hai, jo object ka human-readable representation hota hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  