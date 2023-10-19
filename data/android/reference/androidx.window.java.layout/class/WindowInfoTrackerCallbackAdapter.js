module.exports.WindowInfoTrackerCallbackAdapter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowInfoTrackerCallbackAdapter",
      hCode: `public final class <a href="#WindowInfoTrackerCallbackAdapter">WindowInfoTrackerCallbackAdapter</a> implements WindowInfoTracker`,
  
      des: 
        `
        <p>WindowInfoTrackerCallbackAdapter class ka use window layout info tracker ke callback events ko handle karne ke liye hota hai. Jab bhi kisi window ke layout mein changes hote hain, tab in events ko handle karne ke liye aap is callback adapter ka use kar sakte hain.</p>
  
       
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
              name: `WindowInfoTrackerCallbackAdapter`,
              id: "WindowInfoTrackerCallbackAdapter()",
              code: `WindowInfoTrackerCallbackAdapter(@NonNull WindowInfoTracker tracker)`,
              fullCode: `public WindowInfoTrackerCallbackAdapter(@NonNull WindowInfoTracker tracker)`,

              des: `Is constructor ka use WindowInfoTrackerCallbackAdapter class ke objects ko initialize karne ke liye hota hai, jisse unka internal state set ho sake.`,

              longDes: `
              <p>Is constructor ka use WindowInfoTrackerCallbackAdapter class ke objects ko initialize karne ke liye hota hai. Jab bhi aap WindowInfoTrackerCallbackAdapter class ka ek naya object banate hain, to is constructor ko call karke tracker parameter se diya gaya WindowInfoTracker object provide kiya jata hai. Isse WindowInfoTrackerCallbackAdapter class ke objects ka internal state set ho jata hai aur woh WindowInfoTracker se judte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowInfoTracker tracker`,
                        des:`<p>Yeh parameter ek WindowInfoTracker object hai jo constructor ko provide kiya jata hai. Iska use WindowInfoTrackerCallbackAdapter ke internal state ko initialize karne mein hota hai.</p>`,
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
              name: "addWindowLayoutInfoListener",
              id: "addWindowLayoutInfoListener()",
              dataTypeName: `final void`,
              code: `<a href="#addWindowLayoutInfoListener()">addWindowLayoutInfoListener</a>(
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull WindowLayoutInfo> consumer
            )`,
  
              fullCode: `public final void <a href="#addWindowLayoutInfoListener()">addWindowLayoutInfoListener</a>(
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull WindowLayoutInfo> consumer
            )`,

              des: `Is method ka use window layout information ke listeners ko add karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowInfoTrackerCallbackAdapter class ke objects ke saath window layout information ke listeners ko add karne ke liye hota hai. Window layout information listeners ka use window ke dimensions, positions, aur related properties ke changes ko monitor karne aur un par react karne ke liye hota hai. Is method se app ke different parts apne liye relevant window layout information updates ko receive kar sakte hain.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai jiski context mein window layout information ke changes ko monitor kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Executor executor`,
                        des:`<p>Yeh parameter ek Executor object hai jisse listener ka code run hoga. Isse usually background threads ke liye use kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull WindowLayoutInfo> consumer`,
                        des:`<p>Yeh parameter ek Consumer hai jo ek WindowLayoutInfo object ko accept karta hai. Yeh listener actual window layout information updates ko handle karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "addWindowLayoutInfoListener",
              id: "addWindowLayoutInfoListener()",
              dataTypeName: `final void`,
              code: `<a href="#addWindowLayoutInfoListener()">addWindowLayoutInfoListener</a>(
                @UiContext @NonNull Context context,
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull WindowLayoutInfo> consumer
            )`,
  
              fullCode: `public final void <a href="#addWindowLayoutInfoListener()">addWindowLayoutInfoListener</a>(
                @UiContext @NonNull Context context,
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull WindowLayoutInfo> consumer
            )`,

              des: `Is method ka use window layout information ke listeners ko add karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowInfoTrackerCallbackAdapter class ke objects ke saath window layout information ke listeners ko add karne ke liye hota hai. Window layout information listeners ka use window ke dimensions, positions, aur related properties ke changes ko monitor karne aur un par react karne ke liye hota hai. Is method se app ke different parts apne liye relevant window layout information updates ko receive kar sakte hain.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@UiContext @NonNull Context context`,
                        des:`<p>Yeh parameter ek Context object hai jiski context mein window layout information ke changes ko monitor kiya jayega. Isme @UiContext annotation bhi mention ki gayi hai, jo context ko UI thread se associate karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Executor executor`,
                        des:`<p>Yeh parameter ek Executor object hai jisse listener ka code run hoga. Isse usually background threads ke liye use kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull WindowLayoutInfo> consumer`,
                        des:`<p>Yeh parameter ek Consumer hai jo ek WindowLayoutInfo object ko accept karta hai. Yeh listener actual window layout information updates ko handle karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "removeWindowLayoutInfoListener",
              id: "removeWindowLayoutInfoListener()",
              dataTypeName: `final void`,
              code: `<a href="#removeWindowLayoutInfoListener()">removeWindowLayoutInfoListener</a>(
                @NonNull Consumer<@NonNull WindowLayoutInfo> consumer
            )`,
  
              fullCode: `public final void <a href="#removeWindowLayoutInfoListener()">removeWindowLayoutInfoListener</a>(
                @NonNull Consumer<@NonNull WindowLayoutInfo> consumer
            )`,

              des: `Is method ka use window layout information ke listeners ko hatane ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowInfoTrackerCallbackAdapter class ke objects ke saath window layout information ke listeners ko hatane ke liye hota hai. Agar kisi specific listener ko remove karna hai taki us listener ko future mein updates na mile, to yeh method use hota hai.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull WindowLayoutInfo> consumer`,
                        des:`<p>Yeh parameter ek Consumer hai, jo ek WindowLayoutInfo object ko accept karta hai. Yeh listener un listeners mein se ek hai jo hatane ke liye hai.</p>`,
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
  