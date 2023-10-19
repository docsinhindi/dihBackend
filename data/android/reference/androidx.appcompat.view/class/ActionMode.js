module.exports.ActionMode = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionMode",
      hCode: `public abstract class <a href="#ActionMode">ActionMode</a>`,
  
      des: 
        `
        <p>ActionMode class, ActionBar ko replace karne ke liye istemal hoti hai aur contextual actions ke liye ek floating toolbar provide karti hai. Ye floating toolbar, kisi specific UI element ya selection ke sath jude actions ko highlight aur execute karne ke liye use hoti hai.</p>
        
  
        <p>ActionMode ka use karte hue, hum contextual actions ko handle kar sakte hain, jaise item select karne, delete karne, share karne, edit karne, aadi. Ye actions, ActionBar mein action buttons ke roop mein dikhaye jaate hain.</p>
  
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
              name: `ActionMode`,
              id: "ActionMode()",
              code: `ActionMode()`,
              fullCode: `public ActionMode()`,

              des: ``,

              longDes: `<p></p>
              `,
              parameter: [],
            },

          ],
        },
  
        //
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "finish",
              id: "finish()",
              dataTypeName: `abstract void`,
              code: `<a href="#finish()">finish</a>()`,
  
              fullCode: `public abstract void <a href="#finish()">finish</a>()`,

              des: `Ye method, action mode ko samapt karne ke liye use hota hai.`,
  
              longDes: `
              <p>finish() method ka upayog hum action mode ko samapt karne ke liye karte hain. Jab hum finish() method ko invoke karte hain, tab action mode samapt ho jata hai aur uske saath sambandhit resources aur states release ho jate hain.</p>
              `,
            
              parameter: [],
            },

  

            {
              dep: false,
              name: "getCustomView",
              id: "getCustomView()",
              dataTypeName: `abstract View`,
              code: `<a href="#getCustomView()">getCustomView</a>()`,
  
              fullCode: `public abstract View <a href="#getCustomView()">getCustomView</a>()`,

              des: `Ye method, custom view ko retrieve karne ke liye use hota hai, jo action mode ke saath associate kiya gaya hai.`,
  
              longDes: `
              <p>getCustomView() method ka upayog hum action mode ke saath associate kiye gaye custom view ko retrieve karne ke liye karte hain. Ye method hume wo View object return karta hai, jo action mode ke saath associate kiya gaya custom view hai.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "getMenu",
              id: "getMenu()",
              dataTypeName: `abstract Menu`,
              code: `<a href="#getMenu()">getMenu</a>()`,
  
              fullCode: `public abstract Menu <a href="#getMenu()">getMenu</a>()`,

              des: `Ye method, action mode ke menu ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getMenu() method ka upayog hum action mode ke menu ko retrieve karne ke liye karte hain. Ye method hume Menu object return karta hai, jisme action mode ke menu items maujood hote hain.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "getMenuInflater",
              id: "getMenuInflater()",
              dataTypeName: `abstract MenuInflater`,
              code: `<a href="#getMenuInflater()">getMenuInflater</a>()`,
  
              fullCode: `public abstract MenuInflater <a href="#getMenuInflater()">getMenuInflater</a>()`,

              des: `Ye method, MenuInflater object ko retrieve karne ke liye use hota hai, jiske saath hum action mode ke menu items ko inflate kar sakte hain.`,
  
              longDes: `
              <p>getMenuInflater() method ka upayog hum MenuInflater object ko retrieve karne ke liye karte hain. Ye method hume MenuInflater object return karta hai, jiske saath hum action mode ke menu items ko inflate kar sakte hain.</p>
              `,
            
              parameter: [],
            },


  

            {
              dep: false,
              name: "getSubtitle",
              id: "getSubtitle()",
              dataTypeName: `abstract CharSequence`,
              code: `<a href="#getSubtitle()">getSubtitle</a>()`,
  
              fullCode: `public abstract CharSequence <a href="#getSubtitle()">getSubtitle</a>()`,

              des: `Ye method, action mode ke subtitle ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getSubtitle() method ka upayog hum action mode ke subtitle ko retrieve karne ke liye karte hain. Ye method hume CharSequence object return karta hai, jisme action mode ke subtitle maujood hota hai.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "getTag",
              id: "getTag()",
              dataTypeName: `Object`,
              code: `<a href="#getTag()">getTag</a>()`,
  
              fullCode: `public Object <a href="#getTag()">getTag</a>()`,

              des: `Ye method, action mode ke saath associate kiye gaye tag object ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getTag() method ka upayog hum action mode ke saath associate kiye gaye tag object ko retrieve karne ke liye karte hain. Ye method hume Object type ka object return karta hai, jisme action mode ke saath associate kiya gaya tag object maujood hota hai.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "getTitle",
              id: "getTitle()",
              dataTypeName: `abstract CharSequence`,
              code: `<a href="#getTitle()">getTitle</a>()`,
  
              fullCode: `public abstract CharSequence <a href="#getTitle()">getTitle</a>()`,

              des: `Ye method, action mode ke title ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getTitle() method ka upayog hum action mode ke title ko retrieve karne ke liye karte hain. Ye method hume CharSequence object return karta hai, jisme action mode ke title maujood hota hai.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "getTitleOptionalHint",
              id: "getTitleOptionalHint()",
              dataTypeName: `boolean`,
              code: `<a href="#getTitleOptionalHint()">getTitleOptionalHint</a>()`,
  
              fullCode: `public boolean <a href="#getTitleOptionalHint()">getTitleOptionalHint</a>()`,

              des: `Ye method, action mode ke title ka optional hint ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getTitleOptionalHint() method ka upayog hum action mode ke title ka optional hint ko retrieve karne ke liye karte hain. Ye method hume boolean value return karta hai, jisme action mode ke title ka optional hint maujood hota hai.</p>

              <p>Agar getTitleOptionalHint() method true return karta hai, toh yeh indicate karta hai ki action mode ke title optional hai aur display mei chhota dikhaya ja sakta hai. Aur agar method false return karta hai, toh yeh indicate karta hai ki action mode ke title required hai aur full size mei dikhaya jaana chahiye.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "invalidate",
              id: "invalidate()",
              dataTypeName: `abstract void`,
              code: `<a href="#invalidate()">invalidate</a>()`,
  
              fullCode: `public abstract void <a href="#invalidate()">invalidate</a>()`,

              des: `Ye method, action mode ko refresh karne ke liye aur uske menu items aur UI state ko update karne ke liye use hota hai.`,
  
              longDes: `
              <p>invalidate() method ka upayog hum action mode ko refresh karne aur uske menu items aur UI state ko update karne ke liye karte hain. Jab hum invalidate() method ko invoke karte hain, tab action mode ko refresh kiya jata hai aur uske menu items aur UI state ko update kiya jata hai.</p>
              `,
            
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "isTitleOptional",
              id: "isTitleOptional()",
              dataTypeName: `boolean`,
              code: `<a href="#isTitleOptional()">isTitleOptional</a>()`,
  
              fullCode: `public boolean <a href="#isTitleOptional()">isTitleOptional</a>()`,

              des: `Ye method, action mode ke title ka optional hona ya required hona ka status ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>isTitleOptional() method ka upayog hum action mode ke title ka optional status ko retrieve karne ke liye karte hain. Ye method hume boolean value return karta hai.</p>

              <p>Agar isTitleOptional() method true return karta hai, toh yeh indicate karta hai ki action mode ke title optional hai aur display mei chhota dikhaya ja sakta hai. Aur agar method false return karta hai, toh yeh indicate karta hai ki action mode ke title required hai aur full size mei dikhaya jaana chahiye.</p>
              `,
            
              parameter: [],
            },

  


  

            {
              dep: false,
              name: "setCustomView",
              id: "setCustomView()",
              dataTypeName: `abstract void`,
              code: `<a href="#setCustomView()">setCustomView</a>(View view)`,
  
              fullCode: `public abstract void <a href="#setCustomView()">setCustomView</a>(View view)`,

              des: `Ye method, ActionMode ke custom view ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setCustomView(View view) method ka upyog karke hum ActionMode ke custom view ko set kar sakte hain. Custom view ek layout ya view hierarchy hoti hai, jise hum ActionMode ke content ke roop mein dikha sakte hain.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View view`,
                        des:`<p>Custom view, jise ActionMode ke content ke roop mein set kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  

  

            {
              dep: false,
              name: "setSubtitle",
              id: "setSubtitle(int)",
              dataTypeName: `abstract void`,
              code: `<a href="#setSubtitle(int)">setSubtitle</a>(int resId)`,
  
              fullCode: `public abstract void <a href="#setSubtitle(int)">setSubtitle</a>(int resId)`,

              des: `Ye method, ActionMode ke subtitle ko ek integer resource ID se set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setSubtitle() method ke dwara hum ActionMode object ke liye subtitle text ko set kar sakte hai. Hum ek resource ID provide karte hai, jise ActionMode object ke subtitle text ke roop mein display kiya jayega.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Integer resource ID, jise ActionMode ka subtitle set karne ke liye upyog kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  



            {
              dep: false,
              name: "setSubtitle",
              id: "setSubtitle(CharSequence)",
              dataTypeName: `abstract void`,
              code: `<a href="#setSubtitle(CharSequence)">setSubtitle</a>(CharSequence subtitle)`,
  
              fullCode: `public abstract void <a href="#setSubtitle(CharSequence)">setSubtitle</a>(CharSequence subtitle)`,

              des: `Ye method, ActionMode ke subtitle ko ek CharSequence (string) se set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setSubtitle(CharSequence subtitle) method ka upyog karke hum ActionMode ke subtitle ko ek CharSequence (string) se set kar sakte hain. CharSequence ek immutable character sequence hai, jise hum string ke roop mein upyog kar sakte hain.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence subtitle`,
                        des:`<p>CharSequence (string), jise ActionMode ka subtitle set karne ke liye upyog kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  



            {
              dep: false,
              name: "setTag",
              id: "setTag()",
              dataTypeName: `void`,
              code: `<a href="#setTag()">setTag</a>(Object tag)`,
  
              fullCode: `public void <a href="#setTag()">setTag</a>(Object tag)`,

              des: `Ye method, ActionMode object ke liye ek tag ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setTag() method ka use karke hum kisi bhi custom value (tag) ko ActionMode object ke sath associate kar sakte hain. Is value ko baad mein ActionMode object se retrieve karne ke liye istemal kiya ja sakta hai.</p>

              <p>setTag() method, ActionMode object ke sath tag value ko associate karta hai. Yeh tag value ActionMode object ke internal state mein store ho jata hai, jisse baad mein usko retrieve karne ke liye istemal kiya ja sakta hai. Tag value ki madad se hum ActionMode object ko identify kar sakte hain ya uske saath kuch additional metadata associate kar sakte hain.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object tag`,
                        des:`<p>Associate kiya gaya custom value, jo kisi bhi data type ka ho sakta hai (Object type hai). Yeh value ActionMode object ke sath store kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  



            {
              dep: false,
              name: "setTitle",
              id: "setTitle(int)",
              dataTypeName: `abstract void`,
              code: `<a href="#setTitle(int)">setTitle</a>(int resId)`,
  
              fullCode: `public abstract void <a href="#setTitle(int)">setTitle</a>(int resId)`,

              des: `Ye method, action mode ke title ko set karne ke liye use hota hai, jisme title ka resource ID (resId) liya jata hai`,
  
              longDes: `
              <p>setTitle() method ka upayog hum action mode ke title ko set karne ke liye karte hain. Is method ke dwara hum specified resId parameter ke corresponding string resource file se title ko retrieve karke action mode ke title me set kar sakte hain.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Resource ID, jo string resource file me title ko identify karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitle",
              id: "setTitle(CharSequence)",
              dataTypeName: `abstract void`,
              code: `<a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,
  
              fullCode: `public abstract void <a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,

              des: `Ye method, action mode ke title ko set karne ke liye use hota hai, jisme title ke roop mein CharSequence object liya jata hai.`,
  
              longDes: `
              <p>setTitle() method ka upayog hum action mode ke title ko set karne ke liye karte hain. Is method ke dwara hum specified title parameter ke roop mein CharSequence object ko action mode ke title me set kar sakte hain.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence title`,
                        des:`<p>CharSequence object, jisme action mode ke title maujood hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setTitleOptionalHint",
              id: "setTitleOptionalHint()",
              dataTypeName: `void`,
              code: `<a href="#setTitleOptionalHint()">setTitleOptionalHint</a>(boolean titleOptional)`,
  
              fullCode: `public void <a href="#setTitleOptionalHint()">setTitleOptionalHint</a>(boolean titleOptional)`,

              des: `Ye method, action mode ke title ka optional hint ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setTitleOptionalHint() method ka upayog hum action mode ke title ka optional hint ko set karne ke liye karte hain. Is method ke dwara hum titleOptional parameter ke value ke hisab se action mode ke title ka optional hint set kar sakte hain.</p>
              `,
            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean titleOptional`,
                        des:`<p>boolean value, jahaan true hoga, wahaan action mode ke title ko optional hint set kiya jayega. Aur jahaan false hoga, wahaan action mode ke title ko required hint set kiya jayega.</p>`,
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
  