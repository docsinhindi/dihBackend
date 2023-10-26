module.exports.Toolbar_SavedState = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Toolbar.SavedState",
      hCode: `public class <a href="#Toolbar.SavedState">Toolbar.SavedState</a>  extends AbsSavedState`,
  
      des: 
        `
        <p>Ye class, Toolbar ke state ko save aur restore karne ke liye use hoti hai.</p>
        
  
        <p>Toolbar.SavedState class ka use kisi Toolbar instance ke state ko save karne ke liye kiya jata hai, jisse later on uski state ko restore kar sakte hai. Is class ke through aap Toolbar ke properties, jaise title, subtitle, navigation icon, menu options, aur custom views ke state ko save kar sakte hai.</p>
  
       
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
  



        
      constant: {
        name: "Constants",
        success: true,
        method: [
          {
            dep: false,
            name: "CREATOR",
            id: "CREATOR",
            dataTypeName: `static final Parcelable.Creator<Toolbar.SavedState>`,

            code: `<a href="#CREATOR">CREATOR</a>`,

            fullCode: `public static final Parcelable.Creator<Toolbar.SavedState> <a href="#CREATOR">CREATOR</a>`,

            des:`CREATOR constant ka use Toolbar.SavedState objects ko serialize aur deserialize karne ke liye hota hai.`,
            longDes: `
            <p>CREATOR constant ka use Toolbar.SavedState objects ko serialize aur deserialize karne ke liye hota hai. Jab Toolbar.SavedState objects ko save karna hota hai (state save karke), tab ye objects Bundle mein convert kiye jate hain, taki unhe later use karke restore kiya ja sake. Isi tarah, restore karne ke liye, Bundle se Toolbar.SavedState objects ko recreate kiya jata hai.</p>
            `,
            parameter: [],
          },
        ],
      },







        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            


            {
              dep: false,
              name: `SavedState`,
              id: "SavedState(Parcel)",

              code: `<a href="#SavedState(Parcel)">SavedState</a>(Parcel source)`,
              fullCode: `public <a href="#SavedState(Parcel)">SavedState</a>(Parcel source)`,

              des: `Is constructor ka use Parcel object se Toolbar.SavedState object ko restore karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar.SavedState(Parcel source) constructor ka use Parcel object se Toolbar.SavedState object ko restore karne ke liye hota hai. Jab aap Parcel object mein Toolbar.SavedState object ko write karke save karte hain, tab later usse restore karne ke liye Parcel object se Toolbar.SavedState object ko read karke recreate kiya jata hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcel source`,
                        des:`<p>Parcel type ka parameter hai, jo Toolbar.SavedState object ko read karne ke liye use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `SavedState`,
              id: "SavedState(Parcelable)",

              code: `<a href="#SavedState(Parcelable)">SavedState</a>(Parcelable superState)`,
              fullCode: `public <a href="#SavedState(Parcelable)">SavedState</a>(Parcelable superState)`,

              des: `Is constructor ka use, Toolbar view ke state ko save aur restore karne ke liye hota hai, sath hi superState parameter ke base par dusre Parcelable objects ke state ko bhi save aur restore karne mein madad karta hai.`,

              longDes: `
              <p>Toolbar.SavedState(Parcelable superState) constructor ka use superState parameter ke base par Toolbar.SavedState object ko create karne ke liye hota hai. Jab aap Toolbar.SavedState object ko save karte hain, to aap is constructor ka use karke dusre Parcelable objects (like parent views) ke state ko bhi save kar sakte hain. Is tarike se, app ke multiple views ke state ko save karke restore karne mein madad milti hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcelable superState`,
                        des:`<p>Parcelable type ka parameter hai, jo dusre Parcelable objects ke state ko save karne ke liye use hota hai. Isse aap Toolbar.SavedState object ke state ko bhi save kar sakte hain, jiska superState parameter hoga.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `SavedState`,
              id: "SavedState(Parcel,ClassLoader)",

              code: `<a href="#SavedState(Parcel,ClassLoader)">SavedState</a>(Parcel source, ClassLoader loader)`,
              fullCode: `public <a href="#SavedState(Parcel,ClassLoader)">SavedState</a>(Parcel source, ClassLoader loader)`,

              des: `Is constructor ka use, Toolbar view ke state ko save aur restore karne ke liye hota hai, sath hi Parcel object se Toolbar.SavedState object ko read karne ke liye aur class loading ke liye madad karta hai.`,

              longDes: `
              <p>Toolbar.SavedState(Parcel source, ClassLoader loader) constructor ka use Parcel object se Toolbar.SavedState object ko restore karne ke liye hota hai. Is constructor mein ClassLoader parameter bhi hota hai, jo class loading ke liye use hota hai. ClassLoader parameter ki value usually getClass().getClassLoader() hoti hai, jisse default class loader set ho jata hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcel source`,
                        des:`<p>Parcel type ka parameter hai, jo Toolbar.SavedState object ko read karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `ClassLoader loader`,
                        des:`<p>ClassLoader type ka parameter hai, jo class loading ke liye use hota hai. Isse aap Parcel object se read kiye gaye data ko correct class mein convert kar sakte hain.</p>`,
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
              name: "writeToParcel",
              id: "writeToParcel()",
              dataTypeName: `void`,
              code: `<a href="#writeToParcel()">writeToParcel</a>(Parcel out, int flags)`,
  
              fullCode: `public void <a href="#writeToParcel()">writeToParcel</a>(Parcel out, int flags)`,

              des: `Is method ka use, Toolbar.SavedState object ko serialize karke Parcel object mein write karne ke liye hota hai, taki aap usse later use karke Toolbar.SavedState object ko restore kar sake.`,
  
              longDes: `
              <p>writeToParcel() method ka use Toolbar.SavedState object ko Parcel object mein write karne ke liye hota hai. Is method ke madhyam se Toolbar.SavedState object ke state ko serialize karke Parcel object mein save kiya jata hai, jisse later use karke aap Toolbar.SavedState object ko restore kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcel out`,
                        des:`<p>Parcel type ka parameter hai, jisme Toolbar.SavedState object ko write kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int flags`,
                        des:`<p>Serialization ke liye optional flags. Normally, 0 pass kiya jata hai.</p>`,
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
  