module.exports.ActionBarDrawerToggle_Delegate = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBarDrawerToggle.Delegate",
      hCode: "public interface <a href='#ActionBarDrawerToggle.Delegate'>ActionBarDrawerToggle.Delegate</a>",
  
      des: 
        `<p>ActionBarDrawerToggle class, navigation drawer ke sath ActionBar ke toggle button (navigation icon) ko synchronize karne ke liye istemal hota hai. Ye class navigation drawer ke open aur close events ko handle karta hai aur ActionBar ke toggle button ko uske anuroop update karta hai.</p>`,
      
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
              name: "getActionBarThemedContext",
              id: "getActionBarThemedContext()",
              dataTypeName: `abstract Context`,
              code: `<a href="#getActionBarThemedContext()">getActionBarThemedContext</a>()`,
  
              fullCode: `abstract Context <a href="#getActionBarThemedContext()">getActionBarThemedContext</a>()`,

              des: `Ye method ActionBar ke themed context ko prapt karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionBar ke themed context ko retrieve karne ke liye kiya jata hai. Themed context ActionBar ke style aur theme ko follow karta hai aur ActionBar ke UI components ke consistent rendering ke liye use hota hai.</p>

              <p>getActionBarThemedContext() method ka return type Context hota hai, jo ActionBar ke themed context ko represent karta hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getThemeUpIndicator",
              id: "getThemeUpIndicator()",
              dataTypeName: `abstract Drawable`,
              code: `<a href="#getThemeUpIndicator()">getThemeUpIndicator</a>()`,
  
              fullCode: `abstract Drawable <a href="#getThemeUpIndicator()">getThemeUpIndicator</a>()`,

              des: `Ye method ActionBar ke theme-based Up Indicator Drawable ko prapt karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionBar ke theme-based Up Indicator Drawable ko retrieve karne ke liye kiya jata hai. Up Indicator, ActionBar ke left side mein back navigation button ke roop mein dikhta hai. Ye button user ko pichhle screen ya parent screen par navigate karne ka functionality provide karta hai.</p>

              <p>getThemeUpIndicator() method ka return type Drawable hota hai, jo ActionBar ke theme-based Up Indicator Drawable ko represent karta hai.</p>
              `,
  
              parameter: [],
            },


            {
              dep: false,
              name: "isNavigationVisible",
              id: "isNavigationVisible()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#isNavigationVisible()">isNavigationVisible</a>()`,
  
              fullCode: `abstract boolean <a href="#isNavigationVisible()">isNavigationVisible</a>()`,

              des: `Ye method ActionBar ke navigation button ki visibility status ko check karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionBar ke navigation button ki visibility status ko determine karne ke liye kiya jata hai. Navigation button, ActionBar ke left side par back navigation button ya drawer toggle button ke roop mein dikhta hai.</p>

              <p>isNavigationVisible() method ka return type boolean hota hai, jo navigation button ki visibility status ko represent karta hai. Agar navigation button visible hai, to true return hota hai, aur agar navigation button invisible hai, to false return hota hai.</p>

              <p>Hum is method ka use karte hue ActionBar ke navigation button ki visibility status ko check kar sakte hain. Is visibility status ke basis par hum UI ko customize kar sakte hain, kuch specific actions perform kar sakte hain, ya navigation button ko show/hide karne ke decisions le sakte hain.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "setActionBarDescription",
              id: "setActionBarDescription()",
              dataTypeName: `abstract void`,
              code: `<a href="#setActionBarDescription()">setActionBarDescription</a>(@StringRes int contentDescRes)`,
  
              fullCode: `abstract void <a href="#setActionBarDescription()">setActionBarDescription</a>(@StringRes int contentDescRes)`,

              des: `Ye method ActionBar ke description text ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionBar ke description text ko set karne ke liye kiya jata hai. Description text, ActionBar ke navigation button ya drawer toggle button ke saath display hota hai. Ye text user ko button ka purpose ya functionality batata hai.</p>

              <p>Hum is method ka use karte hue ActionBar ke description text ko set kar sakte hain. Description text ko resource string se retrieve karke, navigation button ya drawer toggle button ke saath associate kar sakte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int contentDescRes`,
                      des: `Is parameter mein hum ek integer resource ID pass karte hain, jo description text ko represent karta hai.`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "setActionBarUpIndicator",
              id: "setActionBarUpIndicator()",
              dataTypeName: `abstract void`,
              code: `<a href="#setActionBarUpIndicator()">setActionBarUpIndicator</a>(
    Drawable upDrawable,
    @StringRes int contentDescRes
)`,
  
              fullCode: `abstract void <a href="#setActionBarUpIndicator()">setActionBarUpIndicator</a>(
    Drawable upDrawable,
    @StringRes int contentDescRes
)`,

              des: `Ye method ActionBar ke Up Indicator Drawable ko set karne aur description text ko associate karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionBar ke Up Indicator Drawable ko set karne ke liye aur uske saath description text ko associate karne ke liye kiya jata hai. Up Indicator, ActionBar ke left side mein back navigation button ke roop mein dikhta hai.</p>

              <p>Hum is method ka use karte hue ActionBar ke Up Indicator Drawable ko set kar sakte hain. Up Indicator Drawable, typically navigation icon ya back arrow icon hota hai. Hum description text ko resource string se retrieve karke, Up Indicator Drawable ke saath associate kar sakte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Drawable upDrawable`,
                      des: `Up Indicator ke roop mein set karne ke liye Drawable object.`,
                    },
                    {
                      dataTypeName: `@StringRes int contentDescRes`,
                      des: `Up Indicator ke liye description text ko represent karne wale @StringRes annotation ke saath ek integer resource ID.`,
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
  