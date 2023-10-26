module.exports.StateListDrawableCompat = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "StateListDrawableCompat",
      hCode: `public class <a href="#StateListDrawableCompat">StateListDrawableCompat</a>  extends DrawableContainerCompat`,
  
      des: 
        `
        <p>StateListDrawableCompat class ka use, view ke state changes ke sath different drawables ko handle aur display karne ke liye kiya jata hai. Is class ke methods, StateListDrawable ke features aur behavior ko backward compatibility ke sath provide karte hai.</p>
        
  
        <p>StateListDrawableCompat class, state-based drawables ko handle karta hai. Ye class backward compatibility support ke sath StateListDrawable ke behavior ko provide karta hai. Iska use karke developers, different states (jaise ki pressed, selected, focused, etc.) ke liye corresponding drawables ko define kar sakte hai.</p>
  
       
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
              name: `StateListDrawableCompat`,
              id: "StateListDrawableCompat()",
              code: `<a href="#StateListDrawableCompat()">StateListDrawableCompat</a>()`,
              fullCode: `public <a href="#StateListDrawableCompat()">StateListDrawableCompat</a>()`,

              des: `Ye constructor, StateListDrawableCompat object ka creation karne ke liye use hota hai.`,

              longDes: `<p>StateListDrawableCompat() constructor ka upyog karke hum StateListDrawableCompat class ka ek naya object bana sakte hain. StateListDrawableCompat object ek drawable hai, jiske alag-alag states ke liye multiple graphics ko represent karne ke liye istemal hota hai. </p>
              `,
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
              name: "addState",
              id: "addState()",
              dataTypeName: `void`,
              code: `<a href="#addState()">addState</a>(int[] stateSet, Drawable drawable)`,
  
              fullCode: `public void <a href="#addState()">addState</a>(int[] stateSet, Drawable drawable)`,

              des: `Ye method, StateListDrawableCompat object mein alag-alag states ke liye Drawable ko add karne ke liye use hota hai.`,
  
              longDes: `
              <p>addState() method ka upyog, StateListDrawableCompat object mein Drawable ko ek state ke saath jodne ke liye kiya jata hai. stateSet parameter mein state ko represent karne ke liye ek int array pass kiya jata hai, aur drawable parameter mein us state ke liye corresponding Drawable object ko specify kiya jata hai.</p>

              <p>addState() method ka upyog karte hue, hum StateListDrawableCompat object mein alag-alag states ke liye Drawable objects ko jod sakte hain. Jab StateListDrawableCompat object kisi view par set kiya jata hai, tab view ke state ke anuroop appropriate Drawable display hota hai.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int[] stateSet`,
                        des:`<p>int array jo state ko represent karta hai. Jaise ki android.R.attr.state_pressed, android.R.attr.state_selected, android.R.attr.state_focused aadi. Multiple states ko represent karne ke liye int array mein multiple state values specify kiye ja sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `Drawable drawable`,
                        des:`<p>StateListDrawableCompat object ke state ke liye represent kiya jaane wala Drawable object.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "applyTheme",
              id: "applyTheme()",
              dataTypeName: `void`,
              code: `<a href="#applyTheme()">applyTheme</a>(@NonNull Resources.Theme theme)`,
  
              fullCode: `@RequiresApi(value = 21)</br>public void <a href="#applyTheme()">applyTheme</a>(@NonNull Resources.Theme theme)`,

              des: `Ye method, StateListDrawableCompat object ke liye ek theme ko apply karne ke liye use hota hai.`,
  
              longDes: `
              <p>applyTheme() method ka upyog karke hum StateListDrawableCompat object ke liye ek theme ko apply kar sakte hain. theme parameter ke dwara, hum apply karne ke liye desired theme ko specify kar sakte hain.</p>

              <p>applyTheme() method ka upyog karte hue, hum StateListDrawableCompat object ke liye ek theme ko apply kar sakte hain. Isse StateListDrawableCompat object ke background Drawable ke theme-based properties aur appearance par prabhav padta hai.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Resources.Theme theme`,
                        des:`<p> Apply karne ke liye desired theme ko represent karne ke liye Resources.Theme object.</p>`,
                      },
                    ],
                  },
              ],
            },

  


  
            {
              dep: false,
              name: "inflate",
              id: "inflate()",
              dataTypeName: `void`,
              code: `<a href="#inflate()">inflate</a>(
    @NonNull Context context,
    @NonNull Resources r,
    @NonNull XmlPullParser parser,
    @NonNull AttributeSet attrs,
    @Nullable Resources.Theme theme
)`,
  
              fullCode: `public void <a href="#inflate()">inflate</a>(
    @NonNull Context context,
    @NonNull Resources r,
    @NonNull XmlPullParser parser,
    @NonNull AttributeSet attrs,
    @Nullable Resources.Theme theme
)`,

              des: `Ye method, StateListDrawableCompat object ko inflate karne ke liye XML resource file ka upyog karta hai.`,
  
              longDes: `
              <p>inflate() method ka upyog karke hum StateListDrawableCompat object ko XML resource file se inflate kar sakte hain. Is method ke through hum context, r, parser, attrs, aur optional theme parameter ko provide karke XML resource file se StateListDrawableCompat object ko create kar sakte hain.</p>

              <p>inflate() method ka upyog karte hue, hum StateListDrawableCompat object ko XML resource file se inflate kar sakte hain. Isse StateListDrawableCompat object ke alag-alag states ke liye Drawable objects ko set karne ka aasaan tarika milta hai.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme StateListDrawableCompat object inflate kiya jana hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Resources r`,
                        des:`<p>Resources object, jisme XML resource file locate kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull XmlPullParser parser`,
                        des:`<p>XmlPullParser object, XML resource file ko parse karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull AttributeSet attrs`,
                        des:`<p>AttributeSet object, XML attributes ko represent karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Resources.Theme theme`,
                        des:`<p>Optional parameter, apply karne ke liye desired theme ko represent karne ke liye Resources.Theme object.</p>`,
                      },
                    ],
                  },
              ],
            },

  

  
            {
              dep: false,
              name: "isStateful",
              id: "isStateful()",
              dataTypeName: `boolean`,
              code: `<a href="#isStateful()">isStateful</a>()`,
  
              fullCode: `public boolean <a href="#isStateful()">isStateful</a>()`,

              des: `Ye method, StateListDrawableCompat object ke stateful nature ko check karne ke liye use hota hai.`,
  
              longDes: `
              <p>isStateful() method ka upyog karke hum StateListDrawableCompat object ke stateful nature ko check kar sakte hain. Ye method boolean value return karta hai - true agar StateListDrawableCompat object stateful hai aur false agar non-stateful hai.</p>

              <p>Stateful Drawable objects un Drawable objects ko refer karte hain jinhe alag-alag states ke liye define kiya gaya hai, jaise ki pressed state, focused state, selected state, etc. In states ke changes par Drawable object ka appearance bhi change hota hai. StateListDrawableCompat object ek stateful Drawable hai, jiske alag-alag states ke liye multiple Drawable objects ko represent karta hai.</p>
              `,

             
              parameter: [],
            },


  
            {
              dep: false,
              name: "mutate",
              id: "mutate()",
              dataTypeName: `@NonNull Drawable`,
              code: `<a href="#mutate()">mutate</a>()`,
  
              fullCode: `public @NonNull Drawable <a href="#mutate()">mutate</a>()`,

              des: `Ye method, StateListDrawableCompat object ke mutable version ko create karne ke liye use hota hai.`,
  
              longDes: `
              <p>mutate() method ka upyog karke hum StateListDrawableCompat object ka mutable version bana sakte hain. Is method ka return type Drawable hota hai, jisse mutable version of the StateListDrawableCompat object milta hai.</p>

              <p>StateListDrawableCompat object ka mutable version banane ke liye mutate() method ka upyog karte hai, jab hum ek StateListDrawableCompat object ko multiple views mein reuse karna chahte hai aur uske appearance ya state ko independent tarike se customize karna chahte hai. Original StateListDrawableCompat object ke changes, jaise ki state changes, other views par bhi prabhav padte hai. Lekin mutate() method se mutable version create karke, hum usko ek independent Drawable object ke roop mein use kar sakte hai, jisse original object ke changes dusre views par prabhav nahi padega.</p>
              `,

             
              parameter: [],
            },

  

          ],
        },
  
        
      
     
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "onStateChange",
              id: "onStateChange()",
              dataTypeName: `boolean`,
              code: `<a href="#onStateChange()">onStateChange</a>(@NonNull int[] stateSet)`,
  
              fullCode: `protected boolean <a href="#onStateChange()">onStateChange</a>(@NonNull int[] stateSet)`,
  
              des: `Ye method, StateListDrawableCompat object ke state change ke samay kriyaon (actions) ko handle karne ke liye use hota hai.`,
  
              longDes: `
                <p>onStateChange() method ka upyog karke hum StateListDrawableCompat object ke state change event par kriyaon ko handle kar sakte hain. stateSet parameter ke dwara, hum state change ke liye desired stateSet ko specify kar sakte hain.</p>
  
                <p>onStateChange() method ka return type boolean hota hai. Ye method true return karta hai agar StateListDrawableCompat object ke state change event par koi kriya perform hoti hai aur false return karta hai agar koi kriya perform nahi hoti hai.</p>
  
                <p>onStateChange() method ka upyog karte hue, hum StateListDrawableCompat object ke state change event par kriyaon ko handle kar sakte hain. Is method mein hum desired stateSet ke anuroop Drawable objects ko select kar sakte hain, jisse appropriate Drawable object state change event par display ho sake.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull int[] stateSet`,
                      des: `<p>int array jo state ko represent karta hai. Jaise ki android.R.attr.state_pressed, android.R.attr.state_selected, android.R.attr.state_focused aadi. Multiple states ko represent karne ke liye int array mein multiple state values specify kiye ja sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "onLevelChange",
              id: "onLevelChange()",
              dataTypeName: `boolean`,
              code: `<a href="#onLevelChange()">onLevelChange</a>(int level)`,
  
              fullCode: `protected boolean <a href="#onLevelChange()">onLevelChange</a>(int level)`,
  
              des: `Ye method, DrawableContainerCompat ke drawable container object ke liye level parivartan ke samay method hai.`,
  
              longDes: `
                <p>onLevelChange() method ka upyog karke hum drawable container ke level parivartan ko handle kar sakte hain. Level parivartan drawable container ke intrinsic state ke ek maap ko darshata hai, jaise progress, rating, steps, etc.</p>
  
                <p>onLevelChange() method ka upyog karke hum drawable container ke level parivartan ko observe kar sakte hain aur us parivartan ke anusaar kuch kriyaen perform kar sakte hain. Hum level parameter mein diye gaye updated level ko prapt kar sakte hain aur uske hisab se behavior ko customize kar sakte hain.</p>
  
                <p>onLevelChange() method ko override karke hum apne custom drawable container class mein iska implementation provide kar sakte hain. Isme hum drawable container ke level parivartan ke samay koi specific action perform kar sakte hain, jaise drawing operations, animation updates, aur anya custom behavior. Method ka return type boolean hota hai, jo darshata hai ki level parivartan ke baad koi action liya gaya hai ya nahi.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int level`,
                      des: `<p>Integer value, jo drawable container ke updated level ko darshata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "onStateChange",
              id: "onStateChange()",
              dataTypeName: `boolean`,
              code: `<a href="#onStateChange()">onStateChange</a>(@NonNull int[] state)`,
  
              fullCode: `protected boolean <a href="#onStateChange()">onStateChange</a>(@NonNull int[] state)`,
  
              des: `Ye method, DrawableContainerCompat ke drawable container object ke liye state parivartan ke samay method hai.`,
  
              longDes: `
                <p>onStateChange() method ka upyog karke hum drawable container ke state parivartan ko handle kar sakte hain. State parivartan drawable container ke state ko darshata hai, jaise selected, focused, pressed, disabled, etc.</p>
  
                <p>onStateChange() method ka upyog karke hum drawable container ke state parivartan ko observe kar sakte hain aur us parivartan ke anusaar kuch kriyaen perform kar sakte hain. Hum state parameter mein diye gaye updated state array ko prapt kar sakte hain aur uske hisab se behavior ko customize kar sakte hain.</p>
  
                <p>onStateChange() method ko override karke hum apne custom drawable container class mein iska implementation provide kar sakte hain. Isme hum drawable container ke state parivartan ke samay koi specific action perform kar sakte hain, jaise drawing operations, animation updates, aur anya custom behavior. Method ka return type boolean hota hai, jo darshata hai ki state parivartan ke baad koi action liya gaya hai ya nahi.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull int[] state`,
                      des: `<p>int array, jisme drawable container ke updated state ko darshata hai.</p>`,
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
  