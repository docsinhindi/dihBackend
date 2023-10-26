module.exports.SplitControllerCallbackAdapter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitControllerCallbackAdapter",
      hCode: `@ExperimentalWindowApi</br>public final class <a href="#SplitControllerCallbackAdapter">SplitControllerCallbackAdapter</a>`,
  
      des: 
        `
        <p>SplitControllerCallbackAdapter class ka use Split-Screen mode ke controller ke callback events ko handle karne ke liye hota hai. Jab bhi Split-Screen mode mein koi task ka stage change hota hai ya task ka stage invalidate hota hai, tab in events ko handle karne ke liye aap is callback adapter ka use kar sakte hain.</p>
  
       
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
              name: `SplitControllerCallbackAdapter`,
              id: "SplitControllerCallbackAdapter()",
              code: `<a href="#SplitControllerCallbackAdapter()">SplitControllerCallbackAdapter</a>(@NonNull SplitController controller)`,
              fullCode: `public <a href="#SplitControllerCallbackAdapter()">SplitControllerCallbackAdapter</a>(@NonNull SplitController controller)`,

              des: `Is constructor ka use SplitControllerCallbackAdapter class ke objects ko initialize karne ke liye hota hai, jisse unka internal state set ho sake.`,

              longDes: `
              <p>Is constructor ka use SplitControllerCallbackAdapter class ke objects ko initialize karne ke liye hota hai. Jab bhi aap SplitControllerCallbackAdapter class ka ek naya object banate hain, to is constructor ko call karke controller parameter se diya gaya SplitController object provide kiya jata hai. Isse SplitControllerCallbackAdapter class ke objects ka internal state set ho jata hai aur woh SplitController se judte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull SplitController controller`,
                        des:`<p>Yeh parameter ek SplitController object hai jo constructor ko provide kiya jata hai. Iska use SplitControllerCallbackAdapter ke internal state ko initialize karne mein hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "addSplitListener",
              id: "addSplitListener()",
              dataTypeName: `final void`,
              code: `<a href="#addSplitListener()">addSplitListener</a>(
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull List<@NonNull SplitInfo>> consumer
            )`,
  
              fullCode: `public final void <a href="#addSplitListener()">addSplitListener</a>(
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull List<@NonNull SplitInfo>> consumer
            )`,

              des: `Is method ka use split information ke listeners ko add karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitControllerCallbackAdapter class ke objects ke saath split information ke listeners ko add karne ke liye hota hai. Split information listeners ka use typically app ke different parts ko manage karne mein hota hai jo dynamically split ho sakte hain (jaise ki dynamic feature modules). Is method se app ke different parts apne liye relevant split information updates ko receive kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiski context mein split information ke changes ko monitor kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Executor executor`,
                        des:`<p>Yeh parameter ek Executor object hai jisse listener ka code run hoga. Isse usually background threads ke liye use kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull List<@NonNull SplitInfo>> consumer`,
                        des:`<p>Yeh parameter ek Consumer hai jo ek List of SplitInfo objects ko accept karta hai. Yeh listener actual split information updates ko handle karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "removeSplitListener",
              id: "removeSplitListener()",
              dataTypeName: `final void`,
              code: `<a href="#removeSplitListener()">removeSplitListener</a>(
                @NonNull Consumer<@NonNull List<@NonNull SplitInfo>> consumer
            )`,
  
              fullCode: `public final void <a href="#removeSplitListener()">removeSplitListener</a>(
                @NonNull Consumer<@NonNull List<@NonNull SplitInfo>> consumer
             )`,

              des: `Is method ka use split information ke listeners ko hatane ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use SplitControllerCallbackAdapter class ke objects ke saath split information ke listeners ko hatane ke liye hota hai. Agar kisi specific listener ko remove karna hai taki us listener ko future mein updates na mile, to yeh method use hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull List<@NonNull SplitInfo>> consumer`,
                        des:`<p>Yeh parameter ek Consumer hai, jo ek List of SplitInfo objects ko accept karta hai. Yeh listener un listeners mein se ek hai jo hatane ke liye hai.</p>`,
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
  