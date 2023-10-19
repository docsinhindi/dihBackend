module.exports.SplitPlaceholderRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitPlaceholderRule",
      hCode: `public final class <a href="#SplitPlaceholderRule">SplitPlaceholderRule</a> extends SplitRule`,
  
      des: 
        `
        <p>SplitPlaceholderRule class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek placeholder window ko display kiya jata hai.</p>
        
  
        <p>Is class ki madad se aap placeholder window ke liye rule ko define aur manage kar sakte hain. Placeholder rule specify karne ke liye aap ActivityFilter object use kar sakte hain jo placeholder window ko match karega.</p>
  
       
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

              des: `Is method ka use do objects ko equality check karne ke liye hota hai, yani ki yeh method check karta hai ki kya ek object dusre object ke equal hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use objects ke equality check karne ke liye hota hai. Agar aap ek custom class define karte hain aur usme equals() method override karte hain, to aap apne defined criteria ke basis par objects ko compare kar sakte hain.</p>

              <p>Yeh method ek boolean value return karta hai. true return hota hai agar current object (this) aur diya gaya other object equal hain, aur false return hota hai agar nahi hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Yeh parameter ek Object hai jiska saath comparison kiya jayeg</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "getFilters",
              id: "getFilters()",
              dataTypeName: `final @NonNull Set<@NonNull ActivityFilter>`,
              code: `<a href="#getFilters()">getFilters</a>()`,
  
              fullCode: `public final @NonNull Set<@NonNull ActivityFilter> <a href="#getFilters()">getFilters</a>()`,

              des: `Is method ka use SplitPlaceholderRule object ke saath associated activity filters set ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitPlaceholderRule object ke saath associated activity filters set ko retrieve karne ke liye hota hai. Activity filters set ka use rule ke liye conditions aur filters define karne me hota hai.</p>

              <p>Yeh method ek set of ActivityFilter objects return karta hai. @NonNull annotation indicate karta hai ki set null nahi hoga aur usme har element null nahi hoga.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getFinishPrimaryWithPlaceholder",
              id: "getFinishPrimaryWithPlaceholder()",
              dataTypeName: `final @NonNull SplitRule.FinishBehavior`,
              code: `<a href="#getFinishPrimaryWithPlaceholder()">getFinishPrimaryWithPlaceholder</a>()`,
  
              fullCode: `public final @NonNull SplitRule.FinishBehavior <a href="#getFinishPrimaryWithPlaceholder()">getFinishPrimaryWithPlaceholder</a>()`,

              des: `Is method ka use primary activity ke behavior ko set karne ke liye hota hai jab us activity ke saath ek placeholder activity execute hoti hai.`,
  
              longDes: `
              <p>Is method ka use primary activity ke behavior ko set karne ke liye hota hai jab us activity ke saath ek placeholder activity execute hoti hai. Placeholder activity se matalab ek temporary activity jo primary activity ko temporarily replace karti hai. Is situation mein, primary activity ke finish behavior ko define karna important hota hai jab placeholder activity complete ho jati hai.</p>

              <p>Yeh method ek SplitRule.FinishBehavior type ka object return karta hai. SplitRule.FinishBehavior ek enum hai jo primary activity ke finish behavior ko represent karta hai jab us activity ke saath ek placeholder activity execute hoti hai.</p>
              `,

              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getPlaceholderIntent",
              id: "getPlaceholderIntent()",
              dataTypeName: `final @NonNull Intent`,
              code: `<a href="#getPlaceholderIntent()">getPlaceholderIntent</a>()`,
  
              fullCode: `public final @NonNull Intent <a href="#getPlaceholderIntent()">getPlaceholderIntent</a>()`,

              des: `Is method ka use placeholder activity ke intent ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use placeholder activity ke intent ko retrieve karne ke liye hota hai. Placeholder activity intent placeholder activity ko start karne ke liye use hota hai.</p>

              <p>Yeh method ek Intent object return karta hai. Intent ek Android component ke liye anurodh ya action ko represent karta hai.</p>
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

              des: `Is method ka use object ko ek unique integer value se represent karne ke liye hota hai. Hash code ek object ke properties aur attributes ke combination se generate hota hai, aur yeh object ko collections mein store aur retrieve karne mein madad karta hai.`,
  
              longDes: `
              <p>Is method ka use object ko collections mein store aur retrieve karne mein madad karne ke liye hota hai. Hash code unique hota hai, yani ki do equal objects ke liye bhi hash code same hoga. Isse collections jaise ki HashSet, HashMap, etc., mein objects ko efficient tarike se store aur search kiya ja sakta hai.</p>

              <p>Yeh method ek integer value return karta hai, jo object ka hash code hota hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "isSticky",
              id: "isSticky()",
              dataTypeName: `final boolean`,
              code: `<a href="#isSticky()">isSticky</a>()`,
  
              fullCode: `public final boolean <a href="#isSticky()">isSticky</a>()`,

              des: `Is method ka use ye jaan ne ke liye hota hai ki kya ek placeholder activity "sticky" hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use ye jaan ne ke liye hota hai ki kya ek placeholder activity "sticky" hai ya nahi. "Sticky" placeholder activity woh hoti hai jo temporary activity ke roop mein primary activity ko replace karti hai, aur jab placeholder activity complete ho jati hai, to primary activity phir se focus mein aati hai.</p>

              <p>Yeh method ek boolean value return karta hai. true return hota hai agar placeholder activity "sticky" hai, aur false return hota hai agar nahi hai.</p>
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

              des: `Is method ka use object ka string representation generate karne ke liye hota hai, taki aap us object ke properties aur attributes ko easily dekh sake. Yeh debugging aur logging ke liye bhi helpful hota hai.`,
  
              longDes: `
              <p>Is method ka use object ka string representation generate karne ke liye hota hai, taki aap us object ke properties aur attributes ko easily dekh sake. Yeh debugging aur logging ke liye bhi helpful hota hai.</p>

              <p>Yeh method ek string value return karta hai, jo object ka string representation hota hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  