module.exports.WindowAreaControllerCallbackAdapter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaControllerCallbackAdapter",
      hCode: `@ExperimentalWindowApi</br>public final class <a href="#WindowAreaControllerCallbackAdapter">WindowAreaControllerCallbackAdapter</a> implements WindowAreaController`,
  
      des: 
        `
        <p>WindowAreaControllerCallbackAdapter class ka use window area controller ke callback events ko handle karne ke liye hota hai. Jab bhi screen space mein changes hote hain jaise ki windows ke positions ya sizes mein, ya koi window remove ho jati hai, tab in events ko handle karne ke liye aap is callback adapter ka use kar sakte hain.</p>
  
       
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
              name: `WindowAreaControllerCallbackAdapter`,
              id: "WindowAreaControllerCallbackAdapter()",
              code: `<a href="#WindowAreaControllerCallbackAdapter()">WindowAreaControllerCallbackAdapter</a>(
                @NonNull WindowAreaController controller
            )`,
              fullCode: `public <a href="#WindowAreaControllerCallbackAdapter()">WindowAreaControllerCallbackAdapter</a>(
                @NonNull WindowAreaController controller
            )`,

              des: `Is constructor ka use WindowAreaController ke callbacks ko adapt aur handle karne ke liye hota hai.`,

              longDes: `<p>WindowAreaControllerCallbackAdapter class ka constructor WindowAreaController ke callbacks ko handle karne ke liye use hota hai. Callbacks generally kisi specific event ya action ke response mein trigger hote hain. Is adapter ka use karke aap ek callback ko dusre format mein adapt kar sakte hain ya phir additional functionality add kar sakte hain.</p>

              <p>Ek common use case hai jab aap kisi library ya framework ka use kar rahe hote hain jo apne custom callback system ko use karta hai, lekin aapko existing WindowAreaController ke sath integrate karna hai. Is situation mein aap WindowAreaControllerCallbackAdapter class ka use karke apne custom callbacks ko WindowAreaController ke callbacks mein adapt kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowAreaController controller`,
                        des:`<p>Yeh parameter ek WindowAreaController object hai, jiska use callback events ko handle karne ke liye hota hai.</p>`,
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
              name: "addWindowAreaInfoListListener",
              id: "addWindowAreaInfoListListener()",
              dataTypeName: `final void`,
              code: `<a href="#addWindowAreaInfoListListener()">addWindowAreaInfoListListener</a>(
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull List<@NonNull WindowAreaInfo>> listener
            )`,
  
              fullCode: `public final void <a href="#addWindowAreaInfoListListener()">addWindowAreaInfoListListener</a>(
                @NonNull Executor executor,
                @NonNull Consumer<@NonNull List<@NonNull WindowAreaInfo>> listener
            )`,

              des: `Is method ka use window areas ki information ko sunne ke liye listeners ko add karne ke liye hota hai. Yani ki, jab window areas ke state mein koi change hoti hai, to registered listeners ko inform kiya jata hai.`,
  
              longDes: `
              <p>Is method ka use WindowAreaControllerCallbackAdapter class ke objects ke sath window area info ki updates ko sunne ke liye listeners ko add karne ke liye hota hai. Jab window areas mein koi change hoti hai, jaise ki naye windows create hote hain ya existing windows ke properties change hote hain, tab registered listeners ko notify kiya jata hai.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Executor executor`,
                        des:`<p>Yeh parameter ek Executor hai jo specify karta hai ki listener ko kis thread ya task par execute kiya jana chahiye.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull List<@NonNull WindowAreaInfo>> listener`,
                        des:`<p>Yeh parameter ek Consumer hai jo List<WindowAreaInfo> ko accept karta hai aur usko process karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "removeWindowAreaInfoListListener",
              id: "removeWindowAreaInfoListListener()",
              dataTypeName: `final void`,
              code: `<a href="#removeWindowAreaInfoListListener()">removeWindowAreaInfoListListener</a>(
                @NonNull Consumer<@NonNull List<@NonNull WindowAreaInfo>> listener
            )`,
  
              fullCode: `public final void <a href="#removeWindowAreaInfoListListener()">removeWindowAreaInfoListListener</a>(
                @NonNull Consumer<@NonNull List<@NonNull WindowAreaInfo>> listener
            )`,

              des: `Is method ka use window area information ke listeners ko hatane ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use WindowAreaControllerCallbackAdapter class ke objects ke saath window area information ke listeners ko hatane ke liye hota hai. Window area information listeners ka use window ke dimensions aur positions ke changes ko monitor karne aur un par react karne ke liye hota hai. Agar kisi specific listener ko remove karna hai taki us listener ko future mein updates na mile, to yeh method use hota hai.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Consumer<@NonNull List<@NonNull WindowAreaInfo>> listener`,
                        des:`<p>Yeh parameter ek Consumer hai, jo ek List of WindowAreaInfo objects ko accept karta hai. Yeh listener un listeners mein se ek hai jo hatane ke liye hai.</p>`,
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
  