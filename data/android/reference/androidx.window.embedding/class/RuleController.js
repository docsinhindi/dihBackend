module.exports.RuleController = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "RuleController",
      hCode: `public final class <a href="#RuleController">RuleController</a>`,
  
      des: 
        `
        <p>RuleController class ka use Window embedding scenario mein hota hai, jahan pe ek window ko dusre window ke andar embed kiya jata hai, jaise ki Split-Screen mode mein ya multi-window environment mein.</p>
        
  
        <p>Is class ki madad se aap embedding rules ko create, apply, aur clear kar sakte hain. Embedding rules ko set karke aap embedded window ke behavior aur properties ko customize kar sakte hain.</p>
  
       
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
              name: "addRule",
              id: "addRule()",
              dataTypeName: `final void`,
              code: `<a href="#addRule()">addRule</a>(@NonNull EmbeddingRule rule)`,
  
              fullCode: `public final void <a href="#addRule()">addRule</a>(@NonNull EmbeddingRule rule)`,

              des: `addRule() method ka use embedding rules ko RuleController mein add karne ke liye hota hai.`,
  
              longDes: `
              <p>addRule() method ka use embedding rules ko RuleController mein add karne ke liye hota hai. RuleController embedding rules ko manage karta hai aur inhe apply karta hai. Jab aap addRule() method ka use karte hain, to aap ek naya embedding rule RuleController mein include kar sakte hain, jo baad mein apply kiya jayega.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EmbeddingRule rule`,
                        des:`<p>Ek EmbeddingRule object jo add kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "clearRules",
              id: "clearRules()",
              dataTypeName: `final void`,
              code: `<a href="#clearRules()">clearRules</a>()`,
  
              fullCode: `public final void <a href="#clearRules()">clearRules</a>()`,

              des: `Is method ka use existing rules ko clear karne aur new rules ko apply karne ke liye hota hai.`,
  
              longDes: `
              <p>clearRules() method ka use existing embedding rules ko RuleController se hata kar karne ke liye hota hai. Jab aap naye rules ko apply karna chahte hain ya existing rules ko remove karna chahte hain, tab aap clearRules() method ka use karke RuleController ke existing rules ko clear kar sakte hain.</p>
              `,

             
              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getInstance",
              id: "getInstance()",
              dataTypeName: `static final @NonNull RuleController`,
              code: `<a href="#getInstance()">getInstance</a>(@NonNull Context context)`,
  
              fullCode: `public static final @NonNull RuleController <a href="#getInstance()">getInstance</a>(@NonNull Context context)`,

              des: `Ye method application context ke basis par ek hi instance ko create aur return karta hai taki multiple instances ki zaroorat na ho.`,
  
              longDes: `
              <p>getInstance() method ka use RuleController class ka singleton instance retrieve karne ke liye hota hai. Singleton pattern se ye ensure hota hai ki ek hi instance multiple times create nahi hota hai aur sare components same instance ko access karte hain.</p>

              <p>Aap is method ka use karke application context provide karke RuleController ka instance retrieve kar sakte hain aur fir us instance par addRule() ya clearRules() jaise methods ka use karke embedding rules ko manage kar sakte hain.</p>
              
              <p>Method ka return type RuleController class ka instance hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Application context jo instance create karne ke liye use hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
  
            {
              dep: false,
              name: "getRules",
              id: "getRules()",
              dataTypeName: `final @NonNull Set<@NonNull EmbeddingRule>`,
              code: `<a href="#getRules()">getRules</a>()`,
  
              fullCode: `public final @NonNull Set<@NonNull EmbeddingRule> <a href="#getRules()">getRules</a>()`,

              des: `Is method ka use existing rules ko dekhne aur unhe analyze karne ke liye hota hai.`,
  
              longDes: `
              <p>getRules() method ka use active embedding rules ko retrieve karne ke liye hota hai. Aap is method se RuleController ke currently active rules ko obtain kar sakte hain aur unhe dekh sakte hain.</p>

              <p>Is method se aap embedding rules ki collection (Set) ko access kar sakte hain, jisse aap in rules ko iterate aur analyze kar sakte hain.</p>
              
              `,

             
              parameter: [],
            },

  
  
            {
              dep: false,
              name: "parseRules",
              id: "parseRules()",
              dataTypeName: `static final @NonNull Set<@NonNull EmbeddingRule>`,

              code: `<a href="#parseRules()">parseRules</a>(@NonNull Context context, @XmlRes int staticRuleResourceId)`,
  
              fullCode: `public static final @NonNull Set<@NonNull EmbeddingRule> <a href="#parseRules()">parseRules</a>(@NonNull Context context, @XmlRes int staticRuleResourceId)`,

              des: `Is method ka use predefined XML resource mein define ki gayi embedding rules ko extract karne aur unhe use karne ke liye hota hai.`,
  
              longDes: `
              <p>parseRules() method ka use predefined XML resource se embedding rules ko parse karke Set mein obtain karne ke liye hota hai. Aap XML resource mein embedding rules define kar sakte hain, jinhe aap fir parseRules() method ka use karke retrieve kar sakte hain.</p>

              <p>XML resource se rules ko parse karne ke liye, aap XML file mein EmbeddingRule elements define kar sakte hain. Ye elements <embeddingRule> tags ke andar hote hain aur XML attributes ka use karke rules ki properties ko specify karte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Application context jo XML resource ke access ke liye use hoga.</p>`,
                      },
                      {
                        dataTypeName: `@XmlRes int staticRuleResourceId`,
                        des:`<p>Resource ID of the XML file containing predefined embedding rules.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "removeRule",
              id: "removeRule()",
              dataTypeName: `final void`,

              code: `<a href="#removeRule()">removeRule</a>(@NonNull EmbeddingRule rule)`,
  
              fullCode: `public final void <a href="#removeRule()">removeRule</a>(@NonNull EmbeddingRule rule)`,

              des: `Is method ka use existing rules mein se ek rule ko remove karne ke liye hota hai.`,
  
              longDes: `
              <p>removeRule() method ka use ek specific embedding rule ko RuleController se hata dene ke liye hota hai. Agar aap kisi rule ko temporarily disable ya remove karna chahte hain, to aap is method ka use kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EmbeddingRule rule`,
                        des:`<p>Ek EmbeddingRule object jo remove kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setRules",
              id: "setRules()",
              dataTypeName: `final void`,

              code: `<a href="#setRules()">setRules</a>(@NonNull Set<@NonNull EmbeddingRule> rules)`,
  
              fullCode: `public final void <a href="#setRules()">setRules</a>(@NonNull Set<@NonNull EmbeddingRule> rules)`,

              des: `Is method ka use existing rules ko replace ya update karne ke liye hota hai.`,
  
              longDes: `
              <p>setRules() method ka use existing embedding rules ko replace ya update karne ke liye hota hai. Aap is method ka use karke ek nayi Set of rules ko RuleController mein set kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Set<@NonNull EmbeddingRule> rules`,
                        des:`<p>Ek nayi Set of EmbeddingRule objects jo RuleController mein set kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  