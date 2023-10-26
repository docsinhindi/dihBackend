module.exports.ActivityEmbeddingRule = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActivityEmbeddingRule",
      hCode: `public final class <a href="#ActivityEmbeddingRule">ActivityEmbeddingRule</a> implements TestRule`,
  
      des: 
        `
        <p>ActivityEmbeddingRule class ka use activity embedding scenarios ko test karne ke liye hota hai. Iska use karke aap UI components ko check kar sakte hain ki kaise ek activity ko dusri activity ke andar embed kiya ja sakta hai ya fir unka behavior kaisa hota hai jab ek activity ko dusre activity mein associate kiya jata hai.</p>
  
       
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
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `ActivityEmbeddingRule`,
              id: "ActivityEmbeddingRule()",
              code: `<a href="#ActivityEmbeddingRule()">ActivityEmbeddingRule</a>()`,
              fullCode: `public <a href="#ActivityEmbeddingRule()">ActivityEmbeddingRule</a>()`,

              des: `Yeh constructor ek rule hota hai jo Android instrumentation tests mein use hota hai. Iska use UI components ko test karte waqt activity embedding aur interaction ko simplify karne ke liye hota hai.`,

              longDes: `<p>Android instrumentation tests mein, UI components ke behavior ko test karna important hota hai. Activity embedding ka matlab hota hai ki aap apne test mein ek activity ko dusri activity mein embed kar sakte hain. Yeh tareeka complex UI interaction ko test karne mein madad karta hai.</p>

              <p>ActivityEmbeddingRule constructor ka use activity embedding ke liye hota hai. Is rule ki madad se aap ek activity ko dusri activity mein embed kar sakte hain aur phir in embedded activities ke UI components ko test kar sakte hain.</p>
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
              name: "apply",
              id: "apply()",
              dataTypeName: ` @NonNull Statement`,
              code: `<a href="#apply()">apply</a>(@NonNull Statement base, @NonNull Description description)`,
  
              fullCode: `public  @NonNull Statement <a href="#apply()">apply</a>(@NonNull Statement base, @NonNull Description description)`,

              des: `Is method ka use ek custom test rule ko apply karne ke liye hota hai, jisse test execution ko customize kiya ja sakta hai.`,
  
              longDes: `
              <p>Testing frameworks mein, custom test rules ka use test execution process ko customize karne ke liye hota hai. apply() method ke through, aap original test case (base) ke execution ko modify kar sakte hain. Ismein aap pre-test aur post-test actions ko add kar sakte hain, jaise ki test case ke setup aur teardown tasks, logging, assertions, exceptions handle karna, etc.</p>

              <p>Yeh method commonly test cases ko ek particular environment mein run karne ke liye use hoti hai, jahan par specific resources initialize kiye jaate hain ya fir certain conditions set kiye jaate hain.</p>
  
              <p>Yeh method ek Statement object return karta hai, jiska use modified test case execution ke liye hota hai. Ismein customizations ya additional behavior add kiya ja sakta hai.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Statement base`,
                        des:`<p>Yeh parameter ek Statement hai, jo original test case ke execution ko represent karta hai. Iska matlab, yeh woh test case hai jo bina kisi customizations ke execute hoga.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Description description`,
                        des:`<p>Yeh parameter ek Description object hai, jiske through current test case ke details aur metadata milte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "overrideIsActivityEmbedded",
              id: "overrideIsActivityEmbedded()",
              dataTypeName: ` final void`,
              code: `<a href="#overrideIsActivityEmbedded()">overrideIsActivityEmbedded</a>(
                @NonNull Activity activity,
                boolean isActivityEmbedded
            )`,
  
              fullCode: `public final void <a href="#overrideIsActivityEmbedded()">overrideIsActivityEmbedded</a>(
                @NonNull Activity activity,
                boolean isActivityEmbedded
            )`,

              des: `Is method ka use activity embedding ko override karne ke liye hota hai. Yani ki, is method se aap ek specific Activity object ke liye batate hain ki wo kya embedded hai ya nahi.`,
  
              longDes: `
              <p>Is method ka use testing scenarios mein hota hai, jab aap ek Activity ko test kar rahe hote hain aur aap uske behavior ko customize karna chahte hain. Aap overrideIsActivityEmbedded method ka use karke activity ke embedded hone ya na hone ka behavior define kar sakte hain.</p>
  
              <p>Is method ke through aap Activity ke embedding status ko temporarily change kar sakte hain, jisse aap specific test cases ke liye specific behavior test kar sakte hain. Jaise ki aap ek embedded Activity ke behavior ko simulate karke test kar sakte hain, bina actually use kiye hue device ya emulator ke.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai, jisko aap embedding override karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `boolean isActivityEmbedded`,
                        des:`<p>Yeh parameter ek boolean value hai, jisse aap batate hain ki kya activity embedded hai (true) ya nahi (false).</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "overrideSplitInfo",
              id: "overrideSplitInfo()",
              dataTypeName: ` final void`,
              code: `<a href="#overrideSplitInfo()">overrideSplitInfo</a>(
                @NonNull Activity activity,
                @NonNull List<@NonNull SplitInfo> splitInfoList
            )`,
  
              fullCode: `public final void <a href="#overrideSplitInfo()">overrideSplitInfo</a>(
                @NonNull Activity activity,
                @NonNull List<@NonNull SplitInfo> splitInfoList
            )`,

              des: `Is method ka use activity ke split information ko override karne ke liye hota hai. Yani ki, is method se aap ek specific Activity object ke liye batate hain ki use kaun se split APKs (Android Package) milte hain.`,
  
              longDes: `
              <p>Is method ka use testing scenarios mein hota hai, jab aap ek Activity ko test kar rahe hote hain aur aap uske behavior ko customize karna chahte hain, jahan par specific split APKs ka use ho. Aap overrideSplitInfo method ka use karke activity ke split APKs ko override kar sakte hain, jisse aap specific test cases ke liye specific behavior test kar sakte hain.</p>
  
              <p>Is method ke through aap Activity ke split APKs ko temporarily change kar sakte hain, jisse aap specific test cases ke liye specific APK combinations ko test kar sakte hain, bina actual APK configurations ke.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai, jisko aap split information override karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull List<@NonNull SplitInfo> splitInfoList`,
                        des:`<p>Yeh parameter ek List hai, jo SplitInfo objects ko store karta hai. Har SplitInfo object ek split APK ke details ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  
  
            {
              dep: false,
              name: "overrideSplitSupportStatus",
              id: "overrideSplitSupportStatus()",
              dataTypeName: ` final void`,
              code: `<a href="#overrideSplitSupportStatus()">overrideSplitSupportStatus</a>(
                @NonNull SplitController.SplitSupportStatus status
            )`,
  
              fullCode: `public final void <a href="#overrideSplitSupportStatus()">overrideSplitSupportStatus</a>(
                @NonNull SplitController.SplitSupportStatus status
            )`,

              des: `Is method ka use split APK support status ko override karne ke liye hota hai. Yani ki, is method se aap activity ke liye split APKs ka support status set kar sakte hain.`,
  
              longDes: `
              <p>Is method ka use testing scenarios mein hota hai, jab aap ek Activity ko test kar rahe hote hain aur aap uske behavior ko customize karna chahte hain, jahan par specific split APK support status ko simulate karna ho. Aap overrideSplitSupportStatus method ka use karke activity ke split APKs ka support status ko override kar sakte hain, jisse aap specific test cases ke liye specific behavior test kar sakte hain.</p>
  
              <p>Is method ke through aap activity ke split APKs ka support status temporarily change kar sakte hain, jisse aap specific test cases ke liye specific split APK configurations ko test kar sakte hain.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitController.SplitSupportStatus status`,
                        des:`<p>Yeh parameter ek SplitController.SplitSupportStatus object hai, jisme aap split APKs ka support status set karte hain.</p>`,
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
  