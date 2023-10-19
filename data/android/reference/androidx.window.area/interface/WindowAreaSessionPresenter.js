module.exports.WindowAreaSessionPresenter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaSessionPresenter",
      hCode: "@ExperimentalWindowApi</br>public interface <a href='#WindowAreaSessionPresenter'>WindowAreaSessionPresenter</a> extends WindowAreaSession",
  
      des:`
      <p>Is interface ka use, Window Area Session ke layouts aur transformations ko control aur render karne ke liye hota hai.</p>

      <p>Window Area Session, Android devices ke multiple physical areas (jaise ki foldable devices ke different screen segments) ko represent karta hai. Ye API, devices ke alag-alag areas ke liye alag-alag windows aur layouts ko control karne aur render karne ke liye use hota hai.</p>

      <p>Is interface ka use, Window Area Session ke layouts aur transformations ko control aur render karne ke liye hota hai. Aap is interface ke methods ka use karke Window Area Session ke layout ko customize kar sakte hain, uski boundaries ko set kar sakte hain, uski transformations ko apply kar sakte hain, aur uski transparency ko adjust kar sakte hain.</p>
      `,
      
      img: [],
  
      list: {},
  
      summary: {
        success: true,
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getContext",
              id: "getContext()",
              dataTypeName: `abstract @NonNull Context`,
              code: `<a href="#getContext()">getContext</a>()`,
  
              fullCode: `abstract @NonNull Context <a href="#getContext()">getContext</a>()`,

              des: `getContext() method ka use karke aap window area session presenter object ke context ko access kar sakte hain.`,
  
              longDes: `<p>getContext() method ka use karke aap window area session presenter object ke context ko access kar sakte hain. Ye method window area session presenter object ke context ko return karta hai, jisse ki aap window area session presenter object ke context se related sabhi resources ko access kar sakte hain.</p>`,
  
              parameter: [],
            },



            {
              dep: false,
              name: "setContentView",
              id: "setContentView()",
              dataTypeName: `abstract void`,
              code: `<a href="#setContentView()">setContentView</a>(@NonNull View view)`,
  
              fullCode: `abstract void <a href="#setContentView()">setContentView</a>(@NonNull View view)`,

              des: `setContentView() method ka use karke aap window area presentation session ke content ko set kar sakte hain.`,
  
              longDes: `<p>setContentView() method ka use karke aap window area presentation session ke content ko set kar sakte hain. Ye method window area presentation session ke content ko ek View object se replace karta hai, jisse ki aap window area presentation session ke content ko change kar sakte hain.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull View view`,
                      des: `<p>Ye parameter ek View object leta hai, jo window area presentation session ke content ko represent karta hai.</p>`,
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
  