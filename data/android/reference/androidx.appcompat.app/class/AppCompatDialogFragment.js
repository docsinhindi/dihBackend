module.exports.AppCompatDialogFragment = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatDialogFragment",
      hCode: `public class <a href="#AppCompatDialogFragment">AppCompatDialogFragment</a>  extends DialogFragment`,
  
      des: 
        `
        <p>AppCompatDialogFragment class ka use, custom dialogs ko create aur manage karne ke liye kiya jata hai. Is class ki functionality DialogFragment se inherit hoti hai, lekin isme AppCompat library ke features aur UI elements ka support milta hai.</p>
        
  
        <p>Is class ka use karke developers, AppCompatDialogFragment ke subclasses ko create kar sakte hai, jahan pe wo custom dialogs ko define aur handle kar sakte hai. AppCompatDialogFragment, AppCompat theme, styling, aur backward compatibility ke sath dialogs ko handle karne me madad karta hai.</p>
  
       
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
              name: `AppCompatDialogFragment`,
              id: "AppCompatDialogFragment()",
              code: `AppCompatDialogFragment()`,
              fullCode: `public AppCompatDialogFragment()`,

              des: `Is constructor ka use AppCompatDialogFragment object banane ke liye kiya jata hai.`,

              longDes: `<p>Is constructor ka use AppCompatDialogFragment object banane ke liye kiya jata hai.</p>

              <p>AppCompatDialogFragment class ke objects ka use karke hum dialog-based UI components ko create kar sakte hain, jaise alerts, dialogs, prompts, pop-ups, etc. Ye class DialogFragment ka extension hai, isliye ismein DialogFragment ke saare features, lifecycle callbacks, dialog management, etc. available hote hain.</p>
              `,
              parameter: [],
            },


            {
              dep: false,
              name: `AppCompatDialogFragment`,
              id: "AppCompatDialogFragment(int)",
              code: `AppCompatDialogFragment(@LayoutRes int contentLayoutId)`,
              fullCode: `public AppCompatDialogFragment(@LayoutRes int contentLayoutId)`,

              des: `Ye constructor, AppCompatDialogFragment object banane ke liye aur dialog ke content area ko ek layout resource se inflate karne ke liye use hota hai.`,

              longDes: `<p>Ye constructor, AppCompatDialogFragment object banane ke liye aur dialog ke content area ko ek layout resource se inflate karne ke liye use hota hai.</p>

              <p>AppCompatDialogFragment class ke objects ka use karke hum dialog-based UI components ko create kar sakte hain. AppCompatDialogFragment constructor mein hum content area ke layout resource ID ko pass karke dialog ke content area ko inflate kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@LayoutRes int contentLayoutId`,
                        des:`<p>contentLayoutId parameter ek layout resource ID hai, jo dialog ke content area ko inflate karne ke liye specify karta hai.</p>`,
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
              name: "onCreateDialog",
              id: "onCreateDialog()",
              dataTypeName: `@NonNull Dialog`,
              code: `<a href="#onCreateDialog()">onCreateDialog</a>(@Nullable Bundle savedInstanceState)`,
  
              fullCode: `public @NonNull Dialog <a href="#onCreateDialog()">onCreateDialog</a>(@Nullable Bundle savedInstanceState)`,

              des: `Ye method, dialog ke creation process ka hissa hota hai aur dialog object ko create, customize, aur configure karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, dialog ke creation process ka hissa hota hai aur dialog object ko create, customize, aur configure karne ke liye use hota hai.</p>

              <p>onCreateDialog() method ka use karke hum dialog object ko create kar sakte hain. Is method ke andar hum dialog object ko customize aur configure kar sakte hain, jaise title set karna, buttons add karna, layout set karna, listeners attach karna, etc.</p>
  
              <p>onCreateDialog() method subclasses mein override kiya jata hai, jisse specific dialog object create aur customization ki ja sake. Method ka return type Dialog hota hai, jo dialog object ko represent karta hai.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Bundle savedInstanceState`,
                        des:`<p>Method ka ek parameter hota hai: savedInstanceState, jo Bundle type ka hota hai. Ye parameter dialog ke saved state ko represent karta hai, jisse hum dialog ke previous states ko restore kar sakte hain.</p>`,
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
  