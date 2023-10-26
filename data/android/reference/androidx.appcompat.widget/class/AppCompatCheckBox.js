module.exports.AppCompatCheckBox = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatCheckBox",
      hCode: `public class <a href="#AppCompatCheckBox">AppCompatCheckBox</a>  extends CheckBox implements TintableCompoundButton, TintableBackgroundView, EmojiCompatConfigurationView, TintableCompoundDrawablesView`,
  
      des: 
        `
        <p>Ye class, CheckBox widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatCheckBox class, CheckBox class ka subclass hai aur AppCompatCompoundButton class se inherit karti hai. Iska use multiple choice selection ke liye kiya jata hai, jahan user ko ek se adhik options mein se ek ya adhik options ko select karne ki facility provide karni hoti hai.</p>
       
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
              name: `AppCompatCheckBox`,
              id: "AppCompatCheckBox(Context)",
              code: `<a href="#AppCompatCheckBox(Context)">AppCompatCheckBox</a>(@NonNull Context context)`,
              fullCode: `public <a href="#AppCompatCheckBox(Context)">AppCompatCheckBox</a>(@NonNull Context context)`,

              des: `Is constructor ka use AppCompatCheckBox widget ko create aur initialize karne ke liye kiya jata hai.`,

              longDes: `<p>AppCompatCheckBox(@NonNull Context context) constructor, AppCompatCheckBox class ka ek part hai, jisse hum AppCompatCheckBox widget ko create kar sakte hain. Is constructor ko use karke aap ek AppCompatCheckBox object bana sakte hain, jo ek checkbox (tick box) widget hota hai.</p>

              <p>AppCompatCheckBox widget, CheckBox class ka extended version hai, jo Android Support Library (now AndroidX) mein provide kiya gaya hai. AppCompatCheckBox ka use karte waqt, aap checkbox ko use karke user se options select karne ke liye provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter, AppCompatCheckBox widget ko create karne ke liye required hota hai. Context, Android application environment ko represent karta hai, jiska use resources access karne, layouts inflate karne, aur widgets create karne ke liye hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `AppCompatCheckBox`,
              id: "AppCompatCheckBox(Context,AttributeSet)",
              code: `<a href="#AppCompatCheckBox(Context,AttributeSet)">AppCompatCheckBox</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#AppCompatCheckBox(Context,AttributeSet)">AppCompatCheckBox</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ka use AppCompatCheckBox widget ko XML layout se inflate karke create aur initialize karne ke liye kiya jata hai.`,

              longDes: `<p>AppCompatCheckBox(@NonNull Context context, @Nullable AttributeSet attrs) constructor, AppCompatCheckBox class ka ek part hai, jisse hum AppCompatCheckBox widget ko XML layout se inflate karke create kar sakte hain. Is constructor ka use generally XML layout mein AppCompatCheckBox widget ko define karne ke liye kiya jata hai.</p>

              <p>AppCompatCheckBox widget, CheckBox class ka extended version hai, jo Android Support Library (now AndroidX) mein provide kiya gaya hai. AppCompatCheckBox ka use karte waqt, aap checkbox ko use karke user se options select karne ke liye provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter, AppCompatCheckBox widget ko create karne ke liye required hota hai. Context, Android application environment ko represent karta hai, jiska use resources access karne, layouts inflate karne, aur widgets create karne ke liye hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Yeh parameter, XML layout file mein AppCompatCheckBox element ke attributes ko represent karta hai. Isse hum XML layout mein specify kiye gaye AppCompatCheckBox ke attributes ko retrieve kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatCheckBox`,
              id: "AppCompatCheckBox(Context,AttributeSet,int)",
              code: `<a href="#AppCompatCheckBox(Context,AttributeSet,int)">AppCompatCheckBox</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#AppCompatCheckBox(Context,AttributeSet,int)">AppCompatCheckBox</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ka use AppCompatCheckBox widget ko XML layout se inflate karke create aur initialize karne ke liye kiya jata hai, saath hi default style attribute ko apply karne ke liye bhi istemal hota hai.`,

              longDes: `<p>AppCompatCheckBox(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) constructor, AppCompatCheckBox class ka ek important constructor hai, jisse hum AppCompatCheckBox widget ko XML layout se inflate karke create kar sakte hain. Is constructor ka use generally XML layout mein AppCompatCheckBox widget ko define karne ke liye kiya jata hai.</p>

              <p>Is constructor ko use karke aap ek AppCompatCheckBox object bana sakte hain, jo ek checkbox (tick box) widget hota hai. Isse aap user se options select karne ke liye provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter, AppCompatCheckBox widget ko create karne ke liye required hota hai. Context, Android application environment ko represent karta hai, jiska use resources access karne, layouts inflate karne, aur widgets create karne ke liye hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Yeh parameter, XML layout file mein AppCompatCheckBox element ke attributes ko represent karta hai. Isse hum XML layout mein specify kiye gaye AppCompatCheckBox ke attributes ko retrieve kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Yeh parameter, default style attribute ko represent karta hai, jo AppCompatCheckBox widget ko apply kiya jata hai, agar XML layout mein koi specific style attribute specify nahi kiya gaya hai. Agar aap 0 ya negative integer provide karte hain, toh default style apply nahi hoga.</p>`,
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
              name: "getCompoundPaddingLeft",
              id: "getCompoundPaddingLeft()",
              dataTypeName: `int`,
              code: `<a href="#getCompoundPaddingLeft()">getCompoundPaddingLeft</a>()`,
  
              fullCode: `public int <a href="#getCompoundPaddingLeft()">getCompoundPaddingLeft</a>()`,

              des: `Is method ka use checkbox ke left side par padding (spacing) ka size calculate karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>getCompoundPaddingLeft() method ka use AppCompatCheckBox ke left side par padding (spacing) ka size calculate karne ke liye hota hai. Padding, text aur checkbox (tick) ke beech ka space hota hai, jo checkbox ko visually better position par display karta hai.</p>

              <p>Yeh method integer value return karta hai, jo checkbox ke left side par padding (spacing) ka size hota hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "isEmojiCompatEnabled",
              id: "isEmojiCompatEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,

              des: `Is method ka use Emoji compatibility feature ke status ko check karne ke liye kiya jata hai.`,
  
              longDes: `

              <p>Yeh method true ya false return karta hai, jisse hum Emoji compatibility feature ke status ko check kar sakte hain. Agar true return hota hai, toh Emoji compatibility feature enabled hai, aur agar false return hota hai, toh feature disabled hai.</p>

              <p>isEmojiCompatEnabled() method ka use AppCompatCheckBox widget par Emoji compatibility feature ke status ko check karne ke liye hota hai. Emoji compatibility feature Android Support Library (now AndroidX) mein provide kiya gaya hai. Is feature ka use karte waqt, aap Emoji characters ko ek unified way mein handle kar sakte hain, jisse Unicode version ki variations ke saath compatibility maintain ho.</p>

              `,

              parameter: [],
            },




            {
              dep: false,
              name: "setAllCaps",
              id: "setAllCaps()",
              dataTypeName: `void`,
              code: `<a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,
  
              fullCode: `public void <a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,

              des: `Is method ka use checkbox ke text ko uppercase (sabhi capital letters) ya normal case mein display karne ke liye kiya jata hai.`,
  
              longDes: `
              
              <p>setAllCaps(boolean allCaps) method ka use AppCompatCheckBox widget ke text ko uppercase (sabhi capital letters) ya normal case mein display karne ke liye hota hai. Agar aap setAllCaps(true) method ko call karte hain, toh checkbox ke text ko uppercase mein display kiya jata hai. Aur agar aap setAllCaps(false) method ko call karte hain, toh text normal case mein rehta hai, jaisa ki aapne specify kiya hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Yeh parameter boolean value hai, jisse hum checkbox ke text ko uppercase (sabhi capital letters) ya normal case mein display karte hain. Agar true hai, toh text ko uppercase mein display kiya jata hai, aur agar false hai, toh text normal case mein rehta hai.</p>`,
                      },
                    ],
                  },
              ],
            },






            {
              dep: false,
              name: "setBackgroundDrawable",
              id: "setBackgroundDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable background)`,
  
              fullCode: `public void <a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable background)`,

              des: `Is method ka use checkbox ke background drawable ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              
              <p>setBackgroundDrawable(@Nullable Drawable background) method ka use AppCompatCheckBox widget ke background drawable ko set karne ke liye hota hai. Background drawable, checkbox ke background ko visually customize karne ka ek tareeka hota hai. Aap image ya color drawable ka use karke checkbox ke background ko design kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Yeh parameter, checkbox ke background mein set kiya gaya Drawable object hota hai. Drawable object ek graphic representation hota hai, jise aap kisi image file ya color resource se create kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setBackgroundResource",
              id: "setBackgroundResource()",
              dataTypeName: `void`,
              code: `<a href="#setBackgroundResource()">setBackgroundResource</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setBackgroundResource()">setBackgroundResource</a>(@DrawableRes int resId)`,

              des: `Is method ka use checkbox ke background mein resource file se drawable set karne ke liye kiya jata hai.`,
  
              longDes: `
              
              <p>setBackgroundResource(@DrawableRes int resId) method ka use AppCompatCheckBox widget ke background mein drawable resource set karne ke liye hota hai. Drawable resource ek graphic representation hota hai, jise aap XML drawable file, image file, ya color resource se create kar sakte hain. Is method ki madad se aap kisi bhi drawable resource ko checkbox ke background mein set kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Yeh parameter, checkbox ke background mein set kiye jaane wale resource file ka ID hota hai. Resource file, drawable resource ka ID hota hai, jise aap R.drawable se access kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setButtonDrawable",
              id: "setButtonDrawable(Drawable)",
              dataTypeName: `void`,
              code: `<a href="#setButtonDrawable(Drawable)">setButtonDrawable</a>(Drawable buttonDrawable)`,
  
              fullCode: `public void <a href="#setButtonDrawable(Drawable)">setButtonDrawable</a>(Drawable buttonDrawable)`,

              des: `Is method ka use checkbox ke button drawable ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              
              <p>setButtonDrawable(Drawable buttonDrawable) method ka use AppCompatCheckBox widget ke button (tick mark) drawable ko customize karne ke liye hota hai. Checkbox ke button drawable, checkbox ke state (checked or unchecked) ke anusar display hota hai. Aap image ya vector drawable ka use karke checkbox ke button ko apne tarike se design kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable buttonDrawable`,
                        des:`<p>Yeh parameter, checkbox ke button (tick mark) ke liye set kiya gaya Drawable object hota hai. Drawable object ek graphic representation hota hai, jise aap kisi image file ya vector drawable se create kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setButtonDrawable",
              id: "setButtonDrawable(int)",
              dataTypeName: `void`,
              code: `<a href="#setButtonDrawable(int)">setButtonDrawable</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setButtonDrawable(int)">setButtonDrawable</a>(@DrawableRes int resId)`,

              des: `Is method ka use checkbox ke button (tick mark) drawable ko set karne ke liye resource file se kiya jata hai.`,
  
              longDes: `
              
              <p>setButtonDrawable(@DrawableRes int resId) method ka use AppCompatCheckBox widget ke button (tick mark) drawable ko customize karne ke liye hota hai. Checkbox ke button drawable, checkbox ke state (checked or unchecked) ke anusar display hota hai. Aap drawable resource ka use karke checkbox ke button ko apne tarike se design kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Yeh parameter, checkbox ke button (tick mark) drawable ke liye resource file ka ID hota hai. Resource file, drawable resource ka ID hota hai, jise aap R.drawable se access kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCompoundDrawables",
              id: "setCompoundDrawables()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawables()">setCompoundDrawables</a>(
                @Nullable Drawable left,
                @Nullable Drawable top,
                @Nullable Drawable right,
                @Nullable Drawable bottom
            )`,
  
              fullCode: `public void <a href="#setCompoundDrawables()">setCompoundDrawables</a>(
                @Nullable Drawable left,
                @Nullable Drawable top,
                @Nullable Drawable right,
                @Nullable Drawable bottom
            )`,

              des: `Is method ka use checkbox ke text ke saath compound drawables (left, top, right, bottom) ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              
              <p>setCompoundDrawables(@Nullable Drawable left, @Nullable Drawable top, @Nullable Drawable right, @Nullable Drawable bottom) method ka use AppCompatCheckBox widget ke text ke saath compound drawables ko customize karne ke liye hota hai. Compound drawables, text ke left, top, right, ya bottom side mein display kiye ja sakte hain. Aap image ya vector drawable ka use karke compound drawables ko apne tarike se design kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Yeh parameter, checkbox ke text ke left side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter, checkbox ke text ke top side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Yeh parameter, checkbox ke text ke right side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter, checkbox ke text ke bottom side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setCompoundDrawablesRelative",
              id: "setCompoundDrawablesRelative()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawablesRelative()">setCompoundDrawablesRelative</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,
  
              fullCode: `@RequiresApi(value = Build.VERSION_CODES.JELLY_BEAN_MR1)</br>public void <a href="#setCompoundDrawablesRelative()">setCompoundDrawablesRelative</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,

              des: `Is method ka use checkbox ke text ke saath compound drawables (start, top, end, bottom) ko set karne ke liye kiya jata hai, lekin iska upayog Android Jelly Bean MR1 (API level 17) ya uske upar ke versions mein hota hai.`,
  
              longDes: `
              
              <p>setCompoundDrawablesRelative(@Nullable Drawable start, @Nullable Drawable top, @Nullable Drawable end, @Nullable Drawable bottom) method ka use AppCompatCheckBox widget ke text ke saath compound drawables ko customize karne ke liye hota hai, lekin iska use Android Jelly Bean MR1 (API level 17) ya uske upar ke versions mein hota hai. Compound drawables, text ke start, top, end, ya bottom side mein display kiye ja sakte hain. Aap image ya vector drawable ka use karke compound drawables ko apne tarike se design kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Yeh parameter, checkbox ke text ke start (left in LTR languages, right in RTL languages) side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter, checkbox ke text ke top side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Yeh parameter, checkbox ke text ke end (right in LTR languages, left in RTL languages) side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter, checkbox ke text ke bottom side mein display kiya jaane wala Drawable object hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setEmojiCompatEnabled",
              id: "setEmojiCompatEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setEmojiCompatEnabled()">setEmojiCompatEnabled</a>(boolean enabled)`,
  
              fullCode: `public void <a href="#setEmojiCompatEnabled()">setEmojiCompatEnabled</a>(boolean enabled)`,

              des: `Is method ko use karke, aap EmojiCompat ko CheckBox par enable ya disable kar sakte hain. `,
  
              longDes: `
              
              <p>Is method ko use karke, aap EmojiCompat ko CheckBox par enable ya disable kar sakte hain. Agar aap setEmojiCompatEnabled(true) ko call karte hain, toh CheckBox emoji support ko enable kar deta hai aur emojis ko sahi tarike se display karta hai. Lekin agar aap setEmojiCompatEnabled(false) ko call karte hain, toh EmojiCompat disabled ho jata hai aur emojis ko default text characters ke roop mein display karta hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>boolean type ka parameter hai, jiska value true karne se emoji support enable ho jata hai aur false karne se disable ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setFilters",
              id: "setFilters()",
              dataTypeName: `void`,
              code: `<a href="#setFilters()">setFilters</a>(@NonNull InputFilter[] filters)`,
  
              fullCode: `public void <a href="#setFilters()">setFilters</a>(@NonNull InputFilter[] filters)`,

              des: `Is method ko use karke, aap CheckBox ke text par ek ya ek se zyada InputFilters ko set kar sakte hain.`,
  
              longDes: `
              
              <p>Is method ko use karke, aap CheckBox ke text par ek ya ek se zyada InputFilters ko set kar sakte hain. In InputFilters ko use karke aap text ke input ko modify kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull InputFilter[] filters`,
                        des:`<p>InputFilter[] type ka parameter hai, jo ek array hai InputFilter objects ka. Is array mein aap ek se zyada InputFilters ko ek saath set kar sakte hain.</p>`,
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
              name: "drawableStateChanged",
              id: "drawableStateChanged()",
              dataTypeName: `void`,
              code: `<a href="#drawableStateChanged()">drawableStateChanged</a>()`,
  
              fullCode: `protected void <a href="#drawableStateChanged()">drawableStateChanged</a>()`,
  
              des: `Ye method, View ke internal state changes par call hota hai aur view ke background ya drawable ko us state ke anusar refresh karne ke liye istemal hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method ka use generally view ke state changes, jaise focus ho ya press ho, par view ke background ya drawable ko update karne ke liye kiya jata hai. Jab koi state change hoti hai, jaise view focus hota hai ya press hota hai, to view ka internal state update ho jata hai. Is updated state ke anusar, view ke background drawable ko refresh karne ki zaroorat hoti hai taki view ke appearance ko updated state ke hisab se reflect kiya ja sake.</p>
                    `,
  
              parameter: [],
            },
  


          ],
        },
  
      
     
  

      },
    });
  };
  