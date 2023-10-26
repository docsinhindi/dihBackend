module.exports.ContextThemeWrapper = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ContextThemeWrapper",
      hCode: `public class <a href="#ContextThemeWrapper">ContextThemeWrapper</a>  extends ContextWrapper`,
  
      des: 
        `
        <p>ContextThemeWrapper class ka upayog kisi existing Context object ke saath theme ko apply karne ke liye kiya jata hai. Ye class, ek wrapped (encapsulated) Context object provide karti hai, jiske saath hum theme-related operations kar sakte hain. Isse hum ek Context object ke behavior ko theme ke anusaar customize kar sakte hain.</p>
        
  
        <p>ContextThemeWrapper ka use karke hum kisi existing Context object ke saath theme ko apply kar sakte hain. Ye theme-based operations jaise view inflate karna, resources access karna, aur UI customization ko support karta hai.</p>
  
        `,

        //
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
              name: `ContextThemeWrapper`,
              id: "ContextThemeWrapper()",
              code: `<a href="#ContextThemeWrapper()">ContextThemeWrapper</a>()`,
              fullCode: `public <a href="#ContextThemeWrapper()">ContextThemeWrapper</a>()`,

              des: `Ye constructor, ContextThemeWrapper class ka ek naya instance banata hai.`,

              longDes: `
              <p>ContextThemeWrapper class ek wrapper class hai, jo ek existing Context object ko theme ke saath wrap karke naye Context object ko provide karta hai. Iska upyog hum kisi specific theme ke saath Context object ko create karna aur apply karna ke liye karte hain. ContextThemeWrapper class ka upyog hum UI elements (like views) ke theme-based customization aur styling ke liye karte hain.</p>

              <p>Jab hum ContextThemeWrapper ka instance banate hain, tab hume existing Context object ko specify karna hota hai, jise hum wrap karna chahte hain. Wrapper object banane ke baad, hum us wrapper object ka upyog karte hain, jaise ki view creation, resource access, layout inflation, etc.</p>
              `,
              parameter: [],
            },


            {
              dep: false,
              name: `ContextThemeWrapper`,
              id: "ContextThemeWrapper(Context,Resources.Theme)",
              code: `<a href="#ContextThemeWrapper(Context,Resources.Theme)">ContextThemeWrapper</a>(Context base, Resources.Theme theme)`,
              fullCode: `public <a href="#ContextThemeWrapper(Context,Resources.Theme)">ContextThemeWrapper</a>(Context base, Resources.Theme theme)`,

              des: `Ye constructor, ContextThemeWrapper class ka ek naya instance banata hai aur base Context object aur theme ko specify karta hai.`,

              longDes: `<p>Ye constructor, ContextThemeWrapper class ka ek naya instance banata hai aur base Context object aur theme ko specify karta hai.</p>

              <p>ContextThemeWrapper class ek wrapper class hai, jo ek existing Context object ko theme ke saath wrap karke naye Context object ko provide karta hai. Iska upyog hum kisi specific theme ke saath Context object ko create karna aur apply karna ke liye karte hain. ContextThemeWrapper class ka upyog hum UI elements (like views) ke theme-based customization aur styling ke liye karte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context base`,
                        des:`<p>Base Context object, jise hum wrap karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `Resources.Theme theme`,
                        des:`<p> Custom Resources.Theme object, jo hum apply karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `ContextThemeWrapper`,
              id: "ContextThemeWrapper(Context,int)",
              code: `<a href="#ContextThemeWrapper(Context,int)">ContextThemeWrapper</a>(Context base, @StyleRes int themeResId)`,
              fullCode: `public <a href="#ContextThemeWrapper(Context,int)">ContextThemeWrapper</a>(Context base, @StyleRes int themeResId)`,

              des: `Ye constructor, ContextThemeWrapper class ka ek naya instance banata hai aur base Context object aur theme resource ID (themeResId) ko specify karta hai.`,

              longDes: `<p>Ye constructor, ContextThemeWrapper class ka ek naya instance banata hai aur base Context object aur theme resource ID (themeResId) ko specify karta hai.</p>

              <p>ContextThemeWrapper(Context base, @StyleRes int themeResId) constructor ka upayog hum ek theme resource ID ke saath Context object ko wrap karne ke liye karte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context base`,
                        des:`<p>Base Context object, jise hum wrap karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@StyleRes int themeResId`,
                        des:`<p>Resource ID, jo theme resource file ko identify karta hai.</p>`,
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
              name: "applyOverrideConfiguration",
              id: "applyOverrideConfiguration()",
              dataTypeName: `void`,
              code: `<a href="#applyOverrideConfiguration()">applyOverrideConfiguration</a>(Configuration overrideConfiguration)`,
  
              fullCode: `public void <a href="#applyOverrideConfiguration()">applyOverrideConfiguration</a>(Configuration overrideConfiguration)`,

              des: `Ye method, context ke override configuration ko apply karne ke liye use hota hai.`,
  
              longDes: `
              <p>applyOverrideConfiguration() method ka use karke hum ek alternative Configuration object ko context par apply kar sakte hain. Ye method, configuration changes ko handle karne mein aur context ke behavior ko customize karne mein madad karta hai.</p>

              <p>applyOverrideConfiguration() method, overrideConfiguration parameter ke dwara specified configuration object ko context par apply karta hai. Isse context ke configuration, jaise language, theme, orientation, aadi, override ho jate hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Configuration overrideConfiguration`,
                        des:`<p>Apply karne ke liye alternative configuration object.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "getAssets",
              id: "getAssets()",
              dataTypeName: `AssetManager`,
              code: `<a href="#getAssets()">getAssets</a>()`,
  
              fullCode: `public AssetManager <a href="#getAssets()">getAssets</a>()`,

              des: `Ye method, context ke AssetManager object ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getAssets() method ka use karke hum context se associated AssetManager object ko prapt kar sakte hain. AssetManager class, Android application ke assets (jaise ki fonts, images, audio files, HTML files, aadi) ko access karne ka interface provide karta hai.</p>
              `,
  
              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getResources",
              id: "getResources()",
              dataTypeName: `Resources`,
              code: `<a href="#getResources()">getResources</a>()`,
  
              fullCode: `public Resources <a href="#getResources()">getResources</a>()`,

              des: `Ye method, context se associated Resources object ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getResources() method ka use karke hum context se jude hue Resources object ko prapt kar sakte hain. Resources class, Android application ke various resources (jaise ki layouts, strings, colors, drawables, dimensions, aadi) ko access karne ka interface provide karta hai.</p>
              `,
  
              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSystemService",
              id: "getSystemService()",
              dataTypeName: `Object`,
              code: `<a href="#getSystemService()">getSystemService</a>(String name)`,
  
              fullCode: `public Object <a href="#getSystemService()">getSystemService</a>(String name)`,

              des: `Ye method, system service ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getSystemService(String name) method ka upayog hum system service ko retrieve karne ke liye karte hain, jahaan name parameter mein service ka naam specify kiya jata hai. Method Object type ki value return karti hai, jise hum service ke corresponding type mein cast kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `String name`,
                        des:`<p>Service ka naam, jise retrieve karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

  
            {
              dep: false,
              name: "getTheme",
              id: "getTheme()",
              dataTypeName: `Resources.Theme`,
              code: `<a href="#getTheme()">getTheme</a>()`,
  
              fullCode: `public Resources.Theme <a href="#getTheme()">getTheme</a>()`,

              des: `Ye method, wrapped context ke theme ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getTheme() method ka upayog hum wrapped Context object ke theme ko retrieve karne ke liye karte hain. Is method se hum Resources.Theme object ko return karte hain, jise hum theme customization ke liye use kar sakte hain.</p>
              `,
  
              parameter: [],
            },

  
            {
              dep: false,
              name: "getThemeResId",
              id: "getThemeResId()",
              dataTypeName: `int`,
              code: `<a href="#getThemeResId()">getThemeResId</a>()`,
  
              fullCode: `public int <a href="#getThemeResId()">getThemeResId</a>()`,

              des: `Ye method, ContextThemeWrapper object ke currently set theme resource ID ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getThemeResId() method ka upyog karke hum ContextThemeWrapper object ke set kiye gaye theme resource ID ko prapt kar sakte hain.</p>

              <p>Method ka return type integer hai, jo currently set theme resource ID ko represent karta hai.</p>
              `,
  
              parameter: [],
            },


            {
              dep: false,
              name: "setTheme",
              id: "setTheme()",
              dataTypeName: `void`,
              code: `<a href="#setTheme()">setTheme</a>(int resid)`,
  
              fullCode: `public void <a href="#setTheme()">setTheme</a>(int resid)`,

              des: `Ye method, ContextThemeWrapper object ke theme resource ID ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setTheme() method ka upyog karke hum ContextThemeWrapper object ke theme resource ID ko set kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resid`,
                        des:`<p>Method ke parameter mein hum ek integer value resid ko specify karte hain, jo theme resource ID ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

          ],
        },
  
        
          
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "attachBaseContext",
              id: "attachBaseContext()",
              dataTypeName: `void`,
              code: `<a href="#attachBaseContext()">attachBaseContext</a>(Context newBase)`,
  
              fullCode: `protected void <a href="#attachBaseContext()">attachBaseContext</a>(Context newBase)`,

              des: `Ye method, ContextThemeWrapper object ke base context ko attach karne ke liye use hota hai.`,
  
              longDes: `
              <p>attachBaseContext() method ka upyog karke hum ContextThemeWrapper object ke base context ko attach kar sakte hain. Base context, ContextThemeWrapper object ke underlying context hota hai.</p>
                  `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context newBase`,
                      des:`<p>Method ke parameter mein hum ek newBase naamak Context object ko specify karte hain, jisse base context attach kiya jaayega.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "onApplyThemeResource",
              id: "onApplyThemeResource()",
              dataTypeName: `void`,
              code: `<a href="#onApplyThemeResource()">onApplyThemeResource</a>(Resources.Theme theme, int resid, boolean first)`,
  
              fullCode: `protected void <a href="#onApplyThemeResource()">onApplyThemeResource</a>(Resources.Theme theme, int resid, boolean first)`,

              des: `Ye method, ContextThemeWrapper object ke theme resource ko apply karne ke liye use hota hai.`,
  
              longDes: `
              <p>onApplyThemeResource() method ka upyog karke hum ContextThemeWrapper object ke theme resource ko apply kar sakte hain. Ye method, theme resource ko apply karne ke samay customize kiya gaya behaviour implement karne ke liye override kiya jaata hai.</p>

              <p>onApplyThemeResource() method ko override karke hum apne custom behaviour ko implement kar sakte hain. Method ke andar hum theme object ke dwara theme resource ko customize kar sakte hain, jaise theme attributes ko modify karne, custom styling ko apply karne, aadi.</p>
                  `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Resources.Theme theme`,
                      des:`<p>Resources.Theme object, jiske dwara theme resource apply kiya jaayega.</p>`,
                    },
                    {
                      dataTypeName: `int resid`,
                      des:`<p>Theme resource ka ID, jise apply karna hai.</p>`,
                    },
                    {
                      dataTypeName: `boolean first`,
                      des:`<p>Boolean flag indicating whether it's the first time theme is being applied or not.</p>`,
                    },
                  ],
                },
              ],
            },

            

          ]
      }
  
     
  

      },
    });
  };
  