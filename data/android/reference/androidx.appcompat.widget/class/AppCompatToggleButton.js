module.exports.AppCompatToggleButton = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatToggleButton",
      hCode: `public class <a href="#AppCompatToggleButton">AppCompatToggleButton</a>  extends ToggleButton implements TintableBackgroundView, EmojiCompatConfigurationView, TintableCompoundDrawablesView`,
  
      des: 
        `
        <p>Ye class ToggleButton class ka ek subclass hai, jo AppCompat styling aur compatibility features ko support karta hai.</p>

        <p>AppCompatToggleButton class ka use toggle button UI element ko implement karne ke liye kiya jata hai. Toggle button, user ko do sthitiyon ke beech switch karne ki anumati deta hai, jaise on/off, checked/unchecked, ya kisi aur state ka toggle karna.</p>
        
  
        <p>AppCompatToggleButton class, standard ToggleButton class ke saath AppCompat library ka suvidha pradaan karta hai. Ye backward compatibility features provide karta hai, jisse aap apne toggle buttons ko purane Android version (jaise pre-Lollipop) mein bhi consistent appearance aur behavior de sakte hai.</p>
  
       
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
              name: `AppCompatToggleButton`,
              id: "AppCompatToggleButton(Context)",
              code: `<a href="#AppCompatToggleButton(Context)">AppCompatToggleButton</a>(@NonNull Context context)`,

              fullCode: `public <a href="#AppCompatToggleButton(Context)">AppCompatToggleButton</a>(@NonNull Context context)`,

              des: `Ye constructor, AppCompatToggleButton class ka ek naya object create karne ke liye use hota hai.`,

              longDes: `<p>AppCompatToggleButton(@NonNull Context context) constructor, AppCompatToggleButton class ka ek naya object create karne ke liye use hota hai. Is constructor ko use karke aap AppCompatToggleButton view ko XML layout mein define karne ki zarurat nahi hoti, balki programmatically (code ke through) create kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter Context type ka hota hai, jo AppCompatToggleButton view ko create karne ke liye context provide karta hai. Context, application environment ki information provide karta hai, jisse view sahi tarah se initialize ho sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatToggleButton`,
              id: "AppCompatToggleButton(Context,AttributeSet)",
              code: `<a href="#AppCompatToggleButton(Context,AttributeSet)">AppCompatToggleButton</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              fullCode: `public <a href="#AppCompatToggleButton(Context,AttributeSet)">AppCompatToggleButton</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              des: `Ye constructor, AppCompatToggleButton class ka ek naya object create karne ke liye use hota hai.`,

              longDes: `
              <p>AppCompatToggleButton(@NonNull Context context, @Nullable AttributeSet attrs) constructor, AppCompatToggleButton class ka ek naya object create karne ke liye use hota hai. Is constructor ko use karke aap AppCompatToggleButton view ko XML layout se inflate kar sakte hain. XML layout mein define ki gayi attributes ko use karke view ko customize kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter Context type ka hota hai, jo AppCompatToggleButton view ko create karne ke liye context provide karta hai. Context, application environment ki information provide karta hai, jisse view sahi tarah se initialize ho sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Yeh parameter AttributeSet type ka hota hai, jo XML layout mein define ki gayi attributes ko represent karta hai. Is parameter ki madad se aap XML attributes ko extract karke view ko customize kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `AppCompatToggleButton`,
              id: "AppCompatToggleButton(Context,AttributeSet,int)",
              code: `<a href="#AppCompatToggleButton(Context,AttributeSet,int)">AppCompatToggleButton</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              fullCode: `public <a href="#AppCompatToggleButton(Context,AttributeSet,int)">AppCompatToggleButton</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, AppCompatToggleButton class ka ek naya object create karne ke liye use hota hai.`,

              longDes: `
              <p>AppCompatToggleButton(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) constructor, AppCompatToggleButton class ka ek naya object create karne ke liye use hota hai. Is constructor ko use karke aap AppCompatToggleButton view ko XML layout se inflate kar sakte hain. XML layout mein define ki gayi attributes ko use karke view ko customize kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Yeh parameter Context type ka hota hai, jo AppCompatToggleButton view ko create karne ke liye context provide karta hai. Context, application environment ki information provide karta hai, jisse view sahi tarah se initialize ho sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Yeh parameter AttributeSet type ka hota hai, jo XML layout mein define ki gayi attributes ko represent karta hai. Is parameter ki madad se aap XML attributes ko extract karke view ko customize kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Yeh parameter int type ka hota hai, jo default style resource ID ko represent karta hai. Agar aap XML layout mein specific style attribute nahi define karte hain, toh defStyleAttr ki madad se default style resource apply hota hai.</p>`,
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
              name: "isEmojiCompatEnabled",
              id: "isEmojiCompatEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,

              des: `Is method ka use, EmojiCompat support ki availability check karne ke liye hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method ka use, EmojiCompat library ke Emoji compatibility support ki availability check karne ke liye hota hai. EmojiCompat library, Android platform ke older versions mein bhi latest emojis ko support karne ke liye use hota hai. Agar aap apne App mein emojis ka use karte hain aur chate hain ki un emojis ko older Android versions mein bhi sahi tarah se display kiya jaye, toh aap EmojiCompat library ka use kar sakte hain.</p>
  
              <p>isEmojiCompatEnabled() method boolean type ka hota hai, yani ki is method se true ya false return hota hai.</p>
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

              des: `Is method ka use, AppCompatToggleButton view ke text ko uppercase (sabhi capital letters) ya normal text (mixed case) mein set karne ke liye hota hai.`,
  
              longDes: `
              <p>setAllCaps(boolean allCaps) method, AppCompatToggleButton view ke text ko uppercase (sabhi capital letters) ya normal text (mixed case) mein set karne ke liye use hota hai. Agar aap setAllCaps(true) pass karte hain, toh view ke text ko uppercase mein set kiya jata hai. Agar aap setAllCaps(false) pass karte hain, toh view ke text ko normal text (mixed case) mein set kiya jata hai.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Yeh parameter boolean type ka hota hai. Agar true pass kia jaye, toh view ke text ko uppercase mein set karta hai. Agar false pass kia jaye, toh view ke text ko normal text (mixed case) mein set karta hai.</p>`,
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

              des: `Is method ka use, AppCompatToggleButton view ke background mein ek Drawable resource ya Drawable object ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable(@Nullable Drawable background) method, AppCompatToggleButton view ke background mein ek Drawable resource ya Drawable object ko set karne ke liye hota hai. Drawable object ek graphic element hai, jise aap XML resources ya code ke through create kar sakte hain. setBackgroundDrawable() method ki madad se aap kisi bhi custom background image ko view ke background mein set kar sakte hain.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap background ke liye ek Drawable resource ya Drawable object pass kar sakte hain. Agar aap null pass karte hain, toh view ka background clear ho jata hai.</p>`,
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

              des: `Is method ka use, AppCompatToggleButton view ke background mein ek drawable resource ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundResource(@DrawableRes int resId) method, AppCompatToggleButton view ke background mein ek drawable resource ko set karne ke liye hota hai. Aap is method ka use karke drawable resource ko directly view ke background mein apply kar sakte hain.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Yeh parameter int type ka hota hai. Isme aap drawable resource ka ID pass karte hain, jise aap view ke background mein set karna chahte hain.</p>`,
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

              des: `Is method ka use, AppCompatToggleButton view ke text ke charo taraf (left, top, right, bottom) mein Drawable objects ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCompoundDrawables(@Nullable Drawable left, @Nullable Drawable top, @Nullable Drawable right, @Nullable Drawable bottom) method, AppCompatToggleButton view ke text ke charo taraf (left, top, right, bottom) mein Drawable objects ko set karne ke liye hota hai. Is method ki madad se aap Drawable objects ko view ke text ke saath associate kar sakte hain, jisse text ke charo taraf graphics display ho sake.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap left side ke liye ek Drawable object pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap top side ke liye ek Drawable object pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap right side ke liye ek Drawable object pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap bottom side ke liye ek Drawable object pass kar sakte hain.</p>`,
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

              des: `Is method ka use, AppCompatToggleButton view ke text ke relative sides (start, top, end, bottom) mein Drawable objects ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCompoundDrawablesRelative(@Nullable Drawable start, @Nullable Drawable top, @Nullable Drawable end, @Nullable Drawable bottom) method, AppCompatToggleButton view ke text ke relative sides (start, top, end, bottom) mein Drawable objects ko set karne ke liye hota hai. Relative sides, LTR (Left-to-Right) languages ke liye left side ko start aur right side ko end represent karte hain. RTL (Right-to-Left) languages mein, ye positions reverse ho jati hain.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap start side (LTR languages mein left side) ke liye ek Drawable object pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap top side ke liye ek Drawable object pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap end side (LTR languages mein right side) ke liye ek Drawable object pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter Drawable type ka hota hai. Isme aap bottom side ke liye ek Drawable object pass kar sakte hain.</p>`,
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

              des: `Is method ka use, EmojiCompat support ko enable ya disable karne ke liye hota hai.`,
  
              longDes: `
              <p>setEmojiCompatEnabled(boolean enabled) method, AppCompatToggleButton view mein EmojiCompat support ko enable ya disable karne ke liye hota hai. EmojiCompat support, Android platform ke older versions mein bhi latest emojis ko support karne ke liye use hota hai. Agar aap apne App mein emojis ka use karte hain aur chate hain ki un emojis ko older Android versions mein bhi sahi tarah se display kiya jaye, toh aap EmojiCompat library ka use kar sakte hain.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Yeh parameter boolean type ka hota hai. Agar aap true pass karte hain, toh EmojiCompat support enable ho jata hai. Agar aap false pass karte hain, toh EmojiCompat support disable ho jata hai.</p>`,
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

              des: `Is method ka use, AppCompatToggleButton view ke text ko specific rules ke according filter karne ke liye hota hai.`,
  
              longDes: `
              <p>setFilters(@NonNull InputFilter[] filters) method, AppCompatToggleButton view ke text ko specific rules ke according filter karne ke liye hota hai. InputFilter ek interface hai, jisse aap text ko modify kar sakte hain, jab wo AppCompatToggleButton view mein set kiya jata hai. Aap ek ya multiple filters ko setFilters() method ke through AppCompatToggleButton view ke text mein apply kar sakte hain.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull InputFilter[] filters`,
                        des:`<p>Yeh parameter InputFilter[] type ka hota hai. Isme aap ek ya multiple InputFilter objects ka array pass kar sakte hain.</p>`,
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
  
              des: `Ye method, view ke drawable state changes (jaise ki pressed, focused, enabled, disabled, etc.) ko handle karne ke liye override kiya gaya hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, AppCompatToggleButton view ke drawable state changes ko handle karne ke liye use hota hai. Jab bhi view ke drawable state mein koi changes hote hain, jaise ki view press ho jata hai, ya focus ho jata hai, toh drawableStateChanged() method automatically call hota hai. Is method ko aap override karke apne custom logic ko implement kar sakte hain, jisse aap view ke drawable resources ke behavior ko customize kar sakte hain.</p>`,
  
              parameter: [],
            },
  

          ],
        },
     
      
     
  

      },
    });
  };
  