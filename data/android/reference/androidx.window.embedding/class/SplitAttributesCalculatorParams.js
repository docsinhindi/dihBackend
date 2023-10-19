module.exports.SplitAttributesCalculatorParams = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitAttributesCalculatorParams",
      hCode: `public final class <a href="#SplitAttributesCalculatorParams">SplitAttributesCalculatorParams</a>`,
  
      des: 
        `
        <p>SplitAttributesCalculatorParams class ka use Split-Screen mode ke attributes ko calculate karne ke liye hota hai. Is class ki madad se aap embedded window ke split type, layout direction, width, height, etc. ko specify kar sakte hain.</p>
  
       
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
              name: "areDefaultConstraintsSatisfied",
              id: "areDefaultConstraintsSatisfied()",
              dataTypeName: `final boolean`,
              code: `<a href="#areDefaultConstraintsSatisfied()">areDefaultConstraintsSatisfied</a>()`,
  
              fullCode: `public final boolean <a href="#areDefaultConstraintsSatisfied()">areDefaultConstraintsSatisfied</a>()`,

              des: `Is method ki madad se aap check kar sakte hain ki diye gaye default constraints kya satisfied hain ya nahi.`,
  
              longDes: `
              <p>areDefaultConstraintsSatisfied() method ka use default constraints ko evaluate karne ke liye hota hai. Default constraints usually hardware capabilities ya device ki characteristics ko represent karte hain jaise ki screen size, aspect ratio, orientation, etc. Agar aap ek split layout design kar rahe hain aur aapko check karna hai ki hardware capabilities ya default constraints satisfy ho rahe hain ya nahi, to aap is method ka use kar sakte hain.</p>
  
              <p>Method ka return type boolean hota hai. Agar default constraints satisfied hain to true, warna false return hota hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getDefaultSplitAttributes",
              id: "getDefaultSplitAttributes()",
              dataTypeName: `final @NonNull SplitAttributes`,
              code: `<a href="#getDefaultSplitAttributes()">getDefaultSplitAttributes</a>()`,
  
              fullCode: `public final @NonNull SplitAttributes <a href="#getDefaultSplitAttributes()">getDefaultSplitAttributes</a>()`,

              des: `Is method ki madad se aap default constraints ke basis par ek default SplitAttributes object bana sakte hain.`,
  
              longDes: `
              <p>getDefaultSplitAttributes() method ka use default constraints ko satisfy karne ke liye use hota hai. Default constraints usually hardware capabilities ya device ki characteristics ko represent karte hain jaise ki screen size, aspect ratio, orientation, etc. Aap is method ki madad se ek default SplitAttributes object bana sakte hain jo in default constraints ke basis par generate hota hai.</p>
  
              <p>Method ka return type SplitAttributes hota hai, yani ki ek SplitAttributes object jo default constraints ke basis par generate hota hai.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "getParentConfiguration",
              id: "getParentConfiguration()",
              dataTypeName: `final @NonNull Configuration`,
              code: `<a href="#getParentConfiguration()">getParentConfiguration</a>()`,
  
              fullCode: `public final @NonNull Configuration <a href="#getParentConfiguration()">getParentConfiguration</a>()`,

              des: `Is method ki madad se aap parent configuration ko access kar sakte hain.`,
  
              longDes: `
              <p>getParentConfiguration() method ka use parent configuration ko retrieve karne ke liye hota hai. Parent configuration typically device ki current configuration ko represent karta hai jaise ki screen size, orientation, language, etc. Aap is method ki madad se parent configuration ke values ko access kar sakte hain aur unka use kar sakte hain.</p>
  
              <p>Method ka return type Configuration hota hai, yani ki ek Configuration object jo parent configuration ko represent karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getParentWindowLayoutInfo",
              id: "getParentWindowLayoutInfo()",
              dataTypeName: `final @NonNull WindowLayoutInfo`,
              code: `<a href="#getParentWindowLayoutInfo()">getParentWindowLayoutInfo</a>()`,
  
              fullCode: `public final @NonNull WindowLayoutInfo <a href="#getParentWindowLayoutInfo()">getParentWindowLayoutInfo</a>()`,

              des: `Is method ki madad se aap parent window layout information ko access kar sakte hain.`,
  
              longDes: `
              <p>getParentWindowLayoutInfo() method ka use parent window layout information ko retrieve karne ke liye hota hai. Parent window layout information typically window ki dimensions, padding, insets, visibility, aur other layout related properties ko represent karta hai. Aap is method ki madad se parent window layout information ke values ko access kar sakte hain aur unka use kar sakte hain.</p>
  
              <p>Method ka return type WindowLayoutInfo hota hai, yani ki ek WindowLayoutInfo object jo parent window layout information ko represent karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getParentWindowMetrics",
              id: "getParentWindowMetrics()",
              dataTypeName: `final @NonNull WindowMetrics`,
              code: `<a href="#getParentWindowMetrics()">getParentWindowMetrics</a>()`,
  
              fullCode: `public final @NonNull WindowMetrics <a href="#getParentWindowMetrics()">getParentWindowMetrics</a>()`,

              des: `Is method ki madad se aap parent window metrics ko access kar sakte hain.`,
  
              longDes: `
              <p>getParentWindowMetrics() method ka use parent window metrics ko retrieve karne ke liye hota hai. Parent window metrics typically window ki dimensions, insets, aur display related properties ko represent karta hai. Aap is method ki madad se parent window metrics ke values ko access kar sakte hain aur unka use kar sakte hain.</p>
  
              <p>Method ka return type WindowMetrics hota hai, yani ki ek WindowMetrics object jo parent window metrics ko represent karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getSplitRuleTag",
              id: "getSplitRuleTag()",
              dataTypeName: `final String`,
              code: `<a href="#getSplitRuleTag()">getSplitRuleTag</a>()`,
  
              fullCode: `public final String <a href="#getSplitRuleTag()">getSplitRuleTag</a>()`,

              des: `Is method ki madad se aap split rule tag ko access kar sakte hain.`,
  
              longDes: `
              <p>getSplitRuleTag() method ka use split rule tag ko retrieve karne ke liye hota hai. Split rule tag typically ek identifier hota hai jo split rule ko uniquely identify karta hai. Aap is method ki madad se split rule tag ke value ko access kar sakte hain.</p>
  
              <p>Method ka return type String hota hai, yani ki ek string value jo split rule tag ko represent karta hai.</p>
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

              des: `Is method ki madad se aap SplitAttributesCalculatorParams object ke properties aur values ko easily display kar sakte hain.`,
  
              longDes: `
              <p>toString() method ka use object ko string format mein convert karne ke liye hota hai. Is method se aap object ke properties aur values ko ek human-readable format mein dekh sakte hain, jisse debugging ya logging ke liye useful hota hai.</p>
  
              <p>Method ka return type String hota hai, yani ki ek string value jo object ki properties aur values ko represent karta hai.</p>
              `,

              parameter: [],
            },






  
  

          ],
        },
  
        
      
     
  

      },
    });
  };
  