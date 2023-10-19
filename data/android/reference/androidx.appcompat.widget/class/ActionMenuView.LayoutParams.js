module.exports.ActionMenuView_LayoutParams = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionMenuView.LayoutParams",
      hCode: `public class <a href="#ActionMenuView.LayoutParams">ActionMenuView.LayoutParams</a>  extends LinearLayoutCompat.LayoutParams`,
  
      des: 
        `
        <p>Ye class, ActionMenuView ke child views (menu items) ke layout parameters ko define karne ke liye use hoti hai.</p>
        
  
        <p>ActionMenuView.LayoutParams class, android.view.ViewGroup.MarginLayoutParams class se extend hoti hai. Isse hum ActionMenuView ke child views ke layout properties, jaise width, height, margins, gravity, etc., ko control kar sakte hain.</p>
  
       
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
              name: `LayoutParams`,
              id: "LayoutParams(ActionMenuView.LayoutParams)",
              code: `LayoutParams(ActionMenuView.LayoutParams other)`,
              fullCode: `public LayoutParams(ActionMenuView.LayoutParams other)`,

              des: `Ye constructor, ActionMenuView.LayoutParams ke ek instance ko dusre instance se copy karne ke liye use hota hai.`,

              longDes: `<p>LayoutParams(ActionMenuView.LayoutParams other) constructor, ActionMenuView.LayoutParams ke ek instance ko dusre instance se copy karne ke liye use hota hai. Hum is constructor ka use karke ek instance ke properties ko clone kar sakte hain aur dusre instance mein copy kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionMenuView.LayoutParams other`,
                        des:`<p> ActionMenuView.LayoutParams object, jiska copy banaya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(ViewGroup.LayoutParams)",
              code: `LayoutParams(ViewGroup.LayoutParams other)`,
              fullCode: `public LayoutParams(ViewGroup.LayoutParams other)`,

              des: `Ye constructor, ActionMenuView.LayoutParams ke instance ko dusre ViewGroup.LayoutParams instance se initialize karne ke liye use hota hai.`,

              longDes: `<p>LayoutParams(ViewGroup.LayoutParams other) constructor, ActionMenuView.LayoutParams ke instance ko dusre ViewGroup.LayoutParams object se initialize karne ke liye use hota hai. Hum is constructor ka use karke ek ActionMenuView.LayoutParams object ko dusre layout parameters object ke properties se set kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams other`,
                        des:`<p>ViewGroup.LayoutParams object, jiska use karke initialize kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(Context,AttributeSet)",
              code: `LayoutParams(Context c, AttributeSet attrs)`,
              fullCode: `public LayoutParams(Context c, AttributeSet attrs)`,

              des: `Ye constructor, ActionMenuView.LayoutParams ke instance ko context aur attribute set se initialize karne ke liye use hota hai.`,

              longDes: `<p>LayoutParams(Context c, AttributeSet attrs) constructor, ActionMenuView.LayoutParams ke instance ko context aur attribute set se initialize karne ke liye use hota hai. Hum is constructor ka use karke ActionMenuView.LayoutParams object ko XML layout file se inflate kar sakte hain aur context aur attributes ko set kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context c`,
                        des:`<p>Context object, jiska use constructor mein kiye gaye LayoutParams instance ke context ko set karne ke liye hota hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>AttributeSet object, jiska use constructor mein kiye gaye LayoutParams instance ke attributes ko set karne ke liye hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(int,int)",
              code: `LayoutParams(int width, int height)`,
              fullCode: `public LayoutParams(int width, int height)`,

              des: `Ye constructor, ActionMenuView.LayoutParams ke instance ko width aur height ke values se initialize karne ke liye use hota hai.`,

              longDes: `<p>LayoutParams(int width, int height) constructor, ActionMenuView.LayoutParams ke instance ko width aur height values se initialize karne ke liye use hota hai. Hum is constructor ka use karke ActionMenuView.LayoutParams object ko width aur height properties ke saath create kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>int value, layout parameters ka width property.</p>`,
                      },
                      {
                        dataTypeName: `int height`,
                        des:`<p>int value, layout parameters ka height property.</p>`,
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
  