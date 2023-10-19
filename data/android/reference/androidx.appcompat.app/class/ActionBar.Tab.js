module.exports.ActionBar_Tab = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBar.Tab",
      hCode: `public abstract class <a href="#ActionBar.Tab">ActionBar.Tab</a>`,
  
      des: 
        `
        <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

        <p>ActionBar.Tab class ActionBar ke ek member class hai. Ye class ActionBar ke tab (navigational item) ko represent karti hai.</p>
        
  
        <p>ActionBar.Tab class ka upyog tab-based navigation ko implement karne ke liye kiya jata hai. Har tab ek ActionBar me ek navigational item ko darshata hai, jise user select karke alag-alag sektion ya view tak pahunch sakte hai.</p>
  
        <p>ActionBar.Tab class ke dwara hum tab ko customize kar sakte hai aur unhe dynamic tarike se manipulate kar sakte hai. Kuch mukhya methods ActionBar.Tab class me available hote hai, jaise setText(), setIcon(), setTabListener(), etc., jinhe use karke hum tab ke text, icon, aur event listeners ko set kar sakte hai.</p>
  
        <p>Is class ka upyog karke hum ActionBar me tab ko add kar sakte hai aur unhe interact karne ke liye event handlers ka upyog kar sakte hai. Tab ke through hum user interface me navigation ka seamless anubhav pradan kar sakte hai.</p>
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
              name: "INVALID_POSITION",
              id: "",
              dataTypeName: `static final int`,
              code: `INVALID_POSITION = -1`,
              fullCode: `public static final int INVALID_POSITION = -1`,
              des:`INVALID_POSITION constant ka upyog ActionBar me tab ke position ko represent karne ke liye kiya jata hai. Jab ek tab ka position valid nahi hota hai, tab hum INVALID_POSITION constant ka upyog kar sakte hai.`,
              longDes: `<p>INVALID_POSITION constant ka use tab ke position ko check karne aur validate karne ke liye kiya jata hai. Agar kisi tab ka position INVALID_POSITION ke barabar hai, to ye indicate karta hai ki tab ka position valid nahi hai ya tab present nahi hai.</p>
              
              <p>Iska upyog karke hum tab ke position ko verify kar sakte hai aur sahi tarah se handle kar sakte hai, jaise tab ko select karne, tab ke event handlers ko bind karne, ya tab ke position se related koi action perform karne ke liye.</p>`,
              parameter: [
                {
                  name: "See also",
                  success: true,
  
                  parameter: [
                    {
                      dataTypeName: `getPosition`,
                      des: ``,
                    }
                  ],
                },
              ],
            },
          
          ],
        },
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `Tab`,
              id: "Tab()",
              code: `Tab()`,
              fullCode: `public Tab()`,
              des: `Jab hum Tab() constructor ko implement karte hai, tab ek naya ActionBar.Tab object create hota hai, jiske through hum ActionBar me naye tabs ko add kar sakte hai.`,
              longDes: `<p>Jab hum Tab() constructor ko implement karte hai, tab ek naya ActionBar.Tab object create hota hai, jiske through hum ActionBar me naye tabs ko add kar sakte hai.</p>
              <p>Is constructor ka upyog karke hum ActionBar me naye tabs ko initialize aur customize kar sakte hai. Tab object ke dwara hum tab ke properties jaise text, icon, aur event handlers ko set kar sakte hai. Iske alawa, ActionBar.Tab class me aur bhi methods available hote hai jinhe use karke hum tab ke behavior aur appearance ko further control kar sakte hai.</p>`,
              parameter: [],
            },
          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getContentDescription",
              id: "getContentDescription()",
              dataTypeName: `abstract void`,
              code: `<a href="#getContentDescription()">getContentDescription</a>()`,
  
              fullCode: `abstract CharSequence <a href="#getContentDescription()">getContentDescription</a>()`,
              des: `Is method ka upyog tab ke content description ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Tab ka content description ek CharSequence object ke roop mein return kiya jata hai. Content description tab ke baare mein text-based information provide karta hai, jisse screen readers aur accessibility services ke through visually impaired users ko tab ke bare mein pata chal sake.</p>
  
              <p>Is method ka use tab ke content description ko prapt karne ke liye kiya jata hai. Content description ki madad se hum tab ko accessibility-friendly bana sakte hai, jisse tab ke text-based information ko visually impaired users ko sahi tarike se samajhne aur tab ke selection ke baare mein pata chal sake.</p>
              `,
  
              parameter: [
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence`,
                      des:`<p>Tab ka content description ek CharSequence object ke roop mein return kiya jata hai.</p>`,
                    },
                  ],
                },
                {
                  name: "See also",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `setContentDescription`,
                      des:``,
                    },
                    {
                      dataTypeName: `setContentDescription`,
                      des:``,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "getCustomView",
              id: "getCustomView()",
              dataTypeName: `abstract View`,
              code: `<a href="#getCustomView()">getCustomView</a>()`,
  
              fullCode: `public abstract View <a href="#getCustomView()">getCustomView</a>()`,
              des: `Is method ka upyog tab ke custom view ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Is method ka upyog tab ke custom view ko retrieve karne ke liye kiya jata hai.</p>
  
                <p>Tab ke custom view ek View object ke roop mein return kiya jata hai. Custom view ek tab ke appearance ko customize karne ke liye use kiya jata hai. Isme hum kisi bhi complex layout, widget, ya view component ko tab ke taur par dikha sakte hai.</p>
  
                <p>Is method ka use tab ke custom view ko prapt karne ke liye kiya jata hai. Custom view ki madad se hum tab ka appearance aur layout ko puri tarah se control kar sakte hai. Hum tab ko apne design aur branding ke anuroop customize karne ke liye iska upyog kar sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `View`,
                      des: `<p>Tab ke custom view ek View object ke roop mein return kiya jata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "getIcon",
              id: "getIcon()",
              dataTypeName: `abstract Drawable`,
              code: `<a href="#getIcon()">getIcon</a>()`,
  
              fullCode: `public abstract Drawable <a href="#getIcon()">getIcon</a>()`,
              des: `Is method ka upyog tab ke icon ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `  
                <p>Tab ka icon ek Drawable object ke roop mein return kiya jata hai. Icon tab ke visual representation ko enhance karne ke liye use kiya jata hai. Isme hum ek chhota graphic ya symbol ka upyog karke tab ko visually identifiable banate hai.</p>
  
                <p>Is method ka use tab ke icon ko prapt karne ke liye kiya jata hai. Icon ki madad se hum tab ko visual hierarchy mein sahi tarike se dikhate hai aur tab ko identifiable banate hai. Icon tab ko label ke sath combine karke tab ki representation aur usability ko badha sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Drawable`,
                      des: `<p>Tab ka icon ek Drawable object ke roop mein return kiya jata hai.</p>`,
                    }
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "getPosition",
              id: "getPosition()",
              dataTypeName: `abstract int`,
              code: `<a href="#getPosition()">getPosition</a>()`,
  
              fullCode: `public abstract int <a href="#getPosition()">getPosition</a>()`,

              des: `Is method ka upyog tab ke position (sthiti) ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
  
                <p>Tab ka position ek integer value ke roop mein return kiya jata hai. Position tab ke order ko darshata hai, yani ki wo kaun se position par ActionBar me sthit hai.</p>

                <p>Is method ka use tab ke position ko prapt karne ke liye kiya jata hai. Position ki madad se hum tab ko identify aur navigate kar sakte hai. Hum tab ke position ke dwara tab ke event handlers, selection, aur manipulation ko handle kar sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int`,
                      des: `<p>Tab ka position ek integer value ke roop mein return kiya jata hai.</p>`,
                    }
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "getTag",
              id: "getTag()",
              dataTypeName: `abstract Object`,
              code: `<a href="#getTag()">getTag</a>()`,
  
              fullCode: `public abstract Object <a href="#getTag()">getTag</a>()`,

              des: `Is method ka upyog tab ke tag object ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Tab ka tag ek Object type ki value ke roop mein return kiya jata hai. Tag tab ke sath ek additional user-defined object ko associate karne ke liye use kiya jata hai. Isse hum tab ke sath koi bhi data ya metadata ko store kar sakte hai.</p>
  
                <p>Is method ka use tab ke tag object ko prapt karne ke liye kiya jata hai. Tag ki madad se hum tab ke sath kisi bhi custom data ko associate kar sakte hai. Ye data tab ke properties, context, ya user-defined information ka holder ban sakta hai.</p>`,
  
              parameter: [
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Object`,
                      des: `<p>Tab ka tag ek Object type ki value ke roop mein return kiya jata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "getText",
              id: "getText()",
              dataTypeName: `abstract CharSequence`,
              code: `<a href="#getText()">getText</a>()`,
  
              fullCode: `public abstract CharSequence <a href="#getText()">getText</a>()`,

              des: `Is method ka upyog tab ke text ko retrieve karne ke liye kiya jata hai.`,
              longDes: `<p>Tab ka text ek CharSequence object ke roop mein return kiya jata hai. Text tab ke display text ya label ko darshata hai, jisse tab ko text-based tarike se identify kiya ja sakta hai.</p>

              <p>Is method ka use tab ke text ko prapt karne ke liye kiya jata hai. Text ki madad se hum tab ko visually aur textually identify kar sakte hai. Hum tab ke text ke dwara usko select, display, aur manipulate kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence`,
                      des: `<p>Tab ka text ek CharSequence object ke roop mein return kiya jata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "select",
              id: "select()",
              dataTypeName: `abstract void`,
              code: `<a href="#select()">select</a>()`,
  
              fullCode: `public abstract void <a href="#select()">select</a>()`,
              des: `Is method ka upyog tab ko select karne ke liye kiya jata hai.`,

              longDes: `<p>Jab hum select() method ko implement karte hai, tab ko select karne ke liye appropriate actions ko execute kiya jata hai. Isse tab visually highlight hota hai aur uske sath tab ke associated content aur behavior activate ho jate hai.</p>

              <p>Is method ka use tab ko programmatic tarike se select karne ke liye kiya jata hai. Hum is method ka upyog karke tab ke selection state ko control kar sakte hai. Jab tab select hota hai, uska visual appearance change hota hai aur uske sath related actions, event handlers, ya tab ke content ko activate karne ke liye appropriate logic ko trigger kiya ja sakta hai.</p>`,
              parameter: [],
            },
  
            {
              dep: false,
              name: "setContentDescription",
              id: "setContentDescription(CharSequence)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setContentDescription(CharSequence)">setContentDescription</a>(CharSequence contentDesc)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setContentDescription(CharSequence)">setContentDescription</a>(CharSequence contentDesc)`,

              des: `Is method ka upyog tab ke content description ko set karne ke liye kiya jata hai.`,

              longDes: `<p>Tab ka content description ek CharSequence object ke roop mein pass kiya jata hai. Content description tab ke bare mein text-based information provide karta hai, jisse screen readers aur accessibility services ke through visually impaired users ko tab ke bare mein pata chal sake.</p>
              
              <p>Is method ka use tab ke content description ko set karne ke liye kiya jata hai. Content description ki madad se hum tab ko accessibility-friendly bana sakte hai, jisse tab ke text-based information ko visually impaired users ko sahi tarike se samajhne aur tab ke selection ke baare mein pata chal sake.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence contentDesc`,
                      des: `<p>Tab ka content description ek CharSequence object ke roop mein pass kiya jata hai.</p>`,
                    },
                  ],
                }, 
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionBar.Tab`,
                      des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                    },
                  ],
                }, 
                {
                  name: "See also",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `setContentDescription`,
                      des: ``,
                    },
                    {
                      dataTypeName: `getContentDescription`,
                      des: ``,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "setContentDescription",
              id: "setContentDescription(int)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setContentDescription(int)">setContentDescription</a>(@StringRes int resId)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setContentDescription(int)">setContentDescription</a>(@StringRes int resId)`,

              des: `Is method ka upyog tab ke content description ko set karne ke liye kiya jata hai, jahan content description ko resource ID ke through specify kiya jata hai.`,

              longDes: `<p>Is method mein ek @StringRes annotated integer value pass kiya jata hai, jo string resource ID ko darshata hai. Ye string resource ID content description ke text ko darshata hai.</p>
              
              <p>Is method ka use tab ke content description ko set karne ke liye kiya jata hai, jahan hum resource ID ka upyog karke tab ke content description ko localize aur dinamik tarike se manage kar sakte hai. Isse hum tab ke content description ko easily update aur translate kar sakte hai, bina hardcoding kiye.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int resId`,
                      des: `<p>Is method mein ek @StringRes annotated integer value pass kiya jata hai, jo string resource ID ko darshata hai.</p>`,
                    },
                  ],
                }, 
                {
                  name: "Returns",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionBar.Tab`,
                      des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                    },
                  ],
                }, 
                {
                  name: "See also",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `setContentDescription`,
                      des: ``,
                    },
                    {
                      dataTypeName: `getContentDescription`,
                      des: ``,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "setCustomView",
              id: "setCustomView(int)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setCustomView(int)">setCustomView</a>(int layoutResId)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setCustomView(int)">setCustomView</a>(int layoutResId)`,

              des: `Is method ka upyog tab ke custom view ko set karne ke liye kiya jata hai.`,
              longDes: `<p>Is method mein ek layoutResId parameter pass kiya jata hai, jo custom view ka layout resource ID ko darshata hai. Ye layout resource ID tab ke custom view ko represent karta hai.</p>
              <p>Is method ka use tab ke custom view ko set karne ke liye kiya jata hai. Custom view tab ke sath associate kiya jata hai, jisse hum tab ke visual representation ko customize aur extend kar sakte hai. Custom view ke through hum tab ke design, appearance, aur interactivity ko personalize aur enhance kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int layoutResId`,
                      des: `<p>Is method mein ek layoutResId parameter pass kiya jata hai, jo custom view ka layout resource ID ko darshata hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  }, 
              ],
            },
  
            {
              dep: false,
              name: "setCustomView",
              id: "setCustomView(View)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setCustomView(View)">setCustomView</a>(View view)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setCustomView(View)">setCustomView</a>(View view)`,

              des: `Is method ka upyog tab ke custom view ko set karne ke liye kiya jata hai.`,
              longDes: `<p>Is method mein ek View object pass kiya jata hai, jo tab ke custom view ko darshata hai. Hum is method ke through ek existing View object ko tab ke sath associate kar sakte hai.</p>

              <p>Is method ka use tab ke custom view ko set karne ke liye kiya jata hai. Custom view tab ke sath associate kiya jata hai, jisse hum tab ke visual representation ko customize aur extend kar sakte hai. Custom view ke through hum tab ke design, appearance, aur interactivity ko personalize aur enhance kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `View view`,
                      des: `<p>Is method mein ek View object pass kiya jata hai, jo tab ke custom view ko darshata hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  }, 
              ],
            },
  
            {
              dep: false,
              name: "setIcon",
              id: "setIcon(Drawable)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setIcon(Drawable)">setIcon</a>(Drawable icon)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setIcon(Drawable)">setIcon</a>(Drawable icon)`,

              des: ` Is method ka upyog tab ke icon ko set karne ke liye kiya jata hai.`,
              longDes: `<p>Is method mein ek Drawable object pass kiya jata hai, jo tab ke icon ko darshata hai. Hum is method ke through ek existing Drawable object ko tab ke sath associate kar sakte hai.</p>
              
              <p>Is method ka use tab ke icon ko set karne ke liye kiya jata hai. Icon tab ke visual representation ko enhance karta hai aur tab ko identifiable banata hai. Hum is method ke through tab ke sath koi ikon jaise ki vector image, bitmap, ya graphic resource ko associate kar sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Drawable icon`,
                      des: `<p>Is method mein ek Drawable object pass kiya jata hai, jo tab ke icon ko darshata hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  },
              ],
            },
  
            {
              dep: false,
              name: "setIcon",
              id: "setIcon(int)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setIcon(int)">setIcon</a>(@DrawableRes int resId)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setIcon(int)">setIcon</a>(@DrawableRes int resId)`,

              des: ` Is method ka upyog tab ke icon ko set karne ke liye kiya jata hai.`,

              longDes: `<p>Is method mein ek @DrawableRes annotated integer value pass kiya jata hai, jo drawable resource ID ko darshata hai. Ye resource ID tab ke icon ko represent karta hai.</p>
              
              <p>Is method ka use tab ke icon ko set karne ke liye kiya jata hai. Icon tab ke visual representation ko enhance karta hai aur tab ko identifiable banata hai. Hum is method ke through tab ke sath koi drawable resource ko associate kar sakte hai, jaise ki vector image, bitmap, ya graphic resource.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@DrawableRes int resId`,
                      des: `<p>Is method mein ek @DrawableRes annotated integer value pass kiya jata hai, jo drawable resource ID ko darshata hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  },
              ],
            },
  
            {
              dep: false,
              name: "setTabListener",
              id: "setTabListener()",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setTabListener()">setTabListener</a>(ActionBar.TabListener listener)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setTabListener()">setTabListener</a>(ActionBar.TabListener listener)`,

              des: `setTabListener(ActionBar.TabListener listener) method ActionBar.Tab class me tab ke sath ek listener ko set karne ke liye hai. Tab ke events aur actions ko capture karne aur unko handle karne ke liye hum ActionBar.TabListener interface ka istemal karte hai`,
  
              longDes: `
                <p>Is method mein ek ActionBar.TabListener object pass kiya jata hai, jo tab ke events aur actions ko handle karne ke liye use kiya jata hai. ActionBar.TabListener interface ko implement karne wale object tab ke lifecycle events aur actions ko capture karte hai.<p>
  
                <p>Is method ka use tab ke sath ek listener ko set karne ke liye kiya jata hai. Tab ke events jaise tab select hona, deselect hona, ya reselect hona ko capture karne ke liye hum ActionBar.TabListener interface ka istemal karte hai. Listener tab ke actions aur events ke sath interact karne aur unko handle karne ke liye use hota hai.<p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionBar.TabListener listener`,
                      des: `<p>Is method mein ek ActionBar.TabListener object pass kiya jata hai, jo tab ke events aur actions ko handle karne ke liye use kiya jata hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  },
              ],
            },
  
           
            {
              dep: false,
              name: "setTag",
              id: "setTag()",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setTag()">setTag</a>(Object obj)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setTag()">setTag</a>(Object obj)`,
              des: `setTag(Object obj) method ActionBar.Tab class me tab ke sath ek tag object ko set karne ke liye hai. Tag object tab ke sath ek additional information ya data ko represent karta hai.`,
              longDes: `<p>Is method mein ek Object parameter pass kiya jata hai, jo tab ke sath associated tag object hai. Hum is method ke through kisi bhi arbitrary object ko tab ke sath jod sakte hai.</p>
              <p>Is method ka use tab ke sath ek tag object ko set karne ke liye kiya jata hai. Tag object tab ke sath ek additional information ya data ko represent karta hai. Hum is method ke dwara kisi bhi object ko tab ke sath attach kar sakte hai, jaise ki ek data model object, unique identifier, custom metadata, ya kuch aur.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Object obj`,
                      des: `<p>Is method mein ek Object parameter pass kiya jata hai, jo tab ke sath associated tag object hai. Hum is method ke through kisi bhi arbitrary object ko tab ke sath jod sakte hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  },
                
              ],
            },
  
            {
              dep: false,
              name: "setText",
              id: "setText(int)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setText(int)">setText</a>(int resId)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setText(int)">setText</a>(int resId)`,
              des: `Is method ka upyog tab ke text ko set karne ke liye kiya jata hai.`,
              longDes: `<p>Is method mein ek int value pass kiya jata hai, jo tab ke text ko darshata hai. Ye int value ek string resource ID hai, jisse hum tab ke text ko represent karte hai.</p>
              <p>Is method ka use tab ke text ko set karne ke liye kiya jata hai. Hum is method ke through tab ke sath koi string resource ko associate kar sakte hai. Isse tab ke text ko dynamically change kar sakte hai ya multiple languages aur localization support kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int resId`,
                      des: `<p>Is method mein ek int value pass kiya jata hai, jo tab ke text ko darshata hai. Ye int value ek string resource ID hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
                      },
                    ],
                  },
              ],
            },
            {
              dep: false,
              name: "setText",
              id: "setText(CharSequence)",
              dataTypeName: `abstract ActionBar.Tab`,
              code: `<a href="#setText(CharSequence)">setText</a>(CharSequence text)`,
  
              fullCode: `public abstract ActionBar.Tab <a href="#setText(CharSequence)">setText</a>(CharSequence text)`,
              des: `Is method ka upyog tab ke text ko set karne ke liye kiya jata hai.`,
              longDes: `<p>Is method mein ek CharSequence object pass kiya jata hai, jo tab ke text ko darshata hai. Ye CharSequence object tab ke text ko represent karta hai.</p>

              <p>Is method ka use tab ke text ko set karne ke liye kiya jata hai. Hum is method ke through tab ke sath koi CharSequence ko associate kar sakte hai. Isse tab ke text ko dynamically change kar sakte hai aur custom text ko tab ke sath set kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence text`,
                      des: `<p>Is method mein ek CharSequence object pass kiya jata hai, jo tab ke text ko darshata hai. Ye CharSequence object tab ke text ko represent karta hai.</p>`,
                    },
                  ],
                },
                {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionBar.Tab`,
                        des: `<p>ye method khud ko refer karne wale ActionBar.Tab object ko return karega.</p>`,
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
  