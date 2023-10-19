module.exports.Toolbar_LayoutParams = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Toolbar.LayoutParams",
      hCode: `public class <a href="#Toolbar.LayoutParams">Toolbar.LayoutParams</a>  extends ActionBar.LayoutParams`,
  
      des: 
        `
        <p>Ye class, Toolbar class ke liye layout parameters (layout properties) ko set karne ke liye use hoti hai.</p>
        
  
        <p>Toolbar.LayoutParams class ka use Toolbar ke child views ke layout parameters ko customize karne ke liye kiya jata hai. Ye class, child views ko toolbar ke andar kaise arrange karna hai aur unhe kaise customize karna hai, uski flexibility pradaan karta hai.</p>
  
       
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
              id: "LayoutParams(int)",
              code: `LayoutParams(int gravity)`,
              fullCode: `public LayoutParams(int gravity)`,

              des: `Is constructor ko use karke aap Toolbar ke child views ki layout properties, jaise ki gravity, ko set kar sakte hain.`,

              longDes: `
              <p>Toolbar.LayoutParams(int gravity) constructor, Toolbar ke child views ke layout properties ko set karne ke liye use hota hai. Aap is constructor ka use karke child views ke liye layout properties ko define kar sakte hain, jisse unhe Toolbar view mein sahi tarike se position kiya ja sake.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int gravity`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke child views ka gravity (alignment) specify karta hai. Ye gravity value Gravity class ke constants (LEFT, RIGHT, CENTER_HORIZONTAL, etc.) ka use karke set kiya ja sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(ActionBar.LayoutParams)",
              code: `LayoutParams(ActionBar.LayoutParams source)`,
              fullCode: `public LayoutParams(ActionBar.LayoutParams source)`,

              des: `is constructor ka use ActionBar.LayoutParams object se Toolbar.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(ActionBar.LayoutParams source) constructor ka use ActionBar.LayoutParams object se Toolbar.LayoutParams object ko create karne ke liye hota hai. Is tarike se aap ActionBar se Toolbar par migration kar sakte hain, ya ActionBar ki layout properties ko Toolbar par apply kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.LayoutParams source`,
                        des:`<p>ActionBar.LayoutParams type ka parameter hai, jo existing ActionBar.LayoutParams object hai. Is object se Toolbar.LayoutParams object ko create kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(Toolbar.LayoutParams)",
              code: `LayoutParams(Toolbar.LayoutParams source)`,
              fullCode: `public LayoutParams(Toolbar.LayoutParams source)`,

              des: `is constructor ka use dusre Toolbar.LayoutParams object se naye Toolbar.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(Toolbar.LayoutParams source) constructor ka use dusre Toolbar.LayoutParams object se naye Toolbar.LayoutParams object ko create karne ke liye hota hai. Is tarike se aap ek existing Toolbar.LayoutParams object ki properties ko copy karke naye Toolbar.LayoutParams object ko create kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Toolbar.LayoutParams source`,
                        des:`<p>Toolbar.LayoutParams type ka parameter hai, jo existing Toolbar.LayoutParams object hai. Is object se naye Toolbar.LayoutParams object ko create kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(ViewGroup.LayoutParams)",
              code: `LayoutParams(ViewGroup.LayoutParams source)`,
              fullCode: `public LayoutParams(ViewGroup.LayoutParams source)`,

              des: `Is constructor ka use, ViewGroup.LayoutParams object se Toolbar.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(ViewGroup.LayoutParams source) constructor ka use ViewGroup.LayoutParams object se Toolbar.LayoutParams object ko create karne ke liye hota hai. Is tarike se aap kisi bhi ViewGroup.LayoutParams object ki properties ko copy karke naye Toolbar.LayoutParams object ko create kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams source`,
                        des:`<p>ViewGroup.LayoutParams type ka parameter hai, jo existing ViewGroup.LayoutParams object hai. Is object se naye Toolbar.LayoutParams object ko create kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(ViewGroup.MarginLayoutParams)",
              code: `LayoutParams(ViewGroup.MarginLayoutParams source)`,
              fullCode: `public LayoutParams(ViewGroup.MarginLayoutParams source)`,

              des: `Is constructor ka use, ViewGroup.MarginLayoutParams object se Toolbar.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(ViewGroup.MarginLayoutParams source) constructor ka use ViewGroup.MarginLayoutParams object se Toolbar.LayoutParams object ko create karne ke liye hota hai. Is tarike se aap kisi bhi ViewGroup.MarginLayoutParams object ki properties ko copy karke naye Toolbar.LayoutParams object ko create kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.MarginLayoutParams source`,
                        des:`<p>ViewGroup.MarginLayoutParams type ka parameter hai, jo existing ViewGroup.MarginLayoutParams object hai. Is object se naye Toolbar.LayoutParams object ko create kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(Context,AttributeSet)",
              code: `LayoutParams(@NonNull Context c, AttributeSet attrs)`,
              fullCode: `public LayoutParams(@NonNull Context c, AttributeSet attrs)`,

              des: `Is constructor ka use XML layout file mein define kiye gaye attributes se Toolbar.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(@NonNull Context c, AttributeSet attrs) constructor ka use XML layout file mein define kiye gaye attributes se Toolbar.LayoutParams object ko create karne ke liye hota hai. Jab aap kisi Toolbar view ko XML layout file mein use karte hain, to usmein us Toolbar view ke child views ke liye layout properties set kiye ja sakte hain, jaise ki width, height, gravity, margins, etc. In properties ko XML file mein define karne ke baad, Android system un attributes ko AttributeSet object ke form mein provide karta hai.</p>

              <p>Is constructor ko use karke aap Toolbar.LayoutParams object ko AttributeSet object se initialize kar sakte hain, jisse Toolbar view ke child views ke liye layout properties ko XML layout file mein set kiya ja sake.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context c`,
                        des:`<p>Context object, jo layout file mein Toolbar view ka context provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>AttributeSet object, jo XML layout file mein define kiye gaye attributes ko hold karta hai.</p>`,
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

              des: `Is constructor ka use, child views ke liye width aur height ko define karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(int width, int height) constructor ka use child views ke liye width aur height ko define karne ke liye hota hai. Is tarike se aap child views ke liye custom width aur height values set kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>int type ka parameter hai, jo child view ka width define karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int height`,
                        des:`<p>int type ka parameter hai, jo child view ka height define karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(int,int,int)",
              code: `LayoutParams(int width, int height, int gravity)`,
              fullCode: `public LayoutParams(int width, int height, int gravity)`,

              des: ` Is constructor ka use child views ke liye width, height, aur gravity ko define karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.LayoutParams(int width, int height, int gravity) constructor ka use child views ke liye width, height, aur gravity ko define karne ke liye hota hai. Is tarike se aap child views ke liye custom width, height, aur gravity values set kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>int type ka parameter hai, jo child view ka width define karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int height`,
                        des:`<p>int type ka parameter hai, jo child view ka height define karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int gravityt`,
                        des:`<p>int type ka parameter hai, jo child view ka gravity define karta hai. Gravity, view ko us parent view ke andar kis position par layout karna hai, define karta hai.</p>`,
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
  