module.exports.AppCompatCheckedTextView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatCheckedTextView",
      hCode: `public class <a href="#AppCompatCheckedTextView">AppCompatCheckedTextView</a>  extends CheckedTextView implements TintableBackgroundView, EmojiCompatConfigurationView, TintableCompoundDrawablesView`,
  
      des: 
        `
        <p>Ye class, CheckedTextView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatCheckedTextView class, CheckedTextView class ka subclass hai aur AppCompatTextView class se inherit karti hai. Iska use text aur check mark ka combination display karne ke liye kiya jata hai, jahan user ko multiple items ke beech se ek ya adhik items ko select karne ki facility provide karni hoti hai.</p>
  
       
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
              name: `AppCompatCheckedTextView`,
              id: "AppCompatCheckedTextView(Context)",
              code: `AppCompatCheckedTextView(@NonNull Context context)`,
              fullCode: `public AppCompatCheckedTextView(@NonNull Context context)`,

              des: `Is constructor ka use, AppCompatCheckedTextView class ka ek instance create karne ke liye hota hai.`,

              longDes: `
              <p>Is constructor ka use, AppCompatCheckedTextView class ka ek instance create karne ke liye hota hai. Jab aap is constructor ko call karte hain, to AppCompatCheckedTextView class ka ek naya object banta hai. Is object mein CheckedTextView ki functionality, AppCompat Support Library se provide hoti hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>View ko inflate karne ke liye Context object. Context, Android application environment ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `AppCompatCheckedTextView`,
              id: "AppCompatCheckedTextView(Context,AttributeSet)",
              code: `AppCompatCheckedTextView(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              fullCode: `public AppCompatCheckedTextView(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              des: `Is constructor ka use, AppCompatCheckedTextView class ka ek instance create karne ke liye hota hai, jisme view ko XML attributes ke saath customize karne ka functionality hota hai. `,

              longDes: `
              <p>Is constructor ka use, AppCompatCheckedTextView class ka ek instance create karne ke liye hota hai, jisme view ko XML attributes ke saath customize karne ka functionality hota hai. Jab aap is constructor ko call karte hain, to AppCompatCheckedTextView class ka ek naya object banta hai. Is object mein CheckedTextView ki functionality, AppCompat Support Library se provide hoti hai. attrs parameter ke through aap XML layout file mein specify kiye gaye attributes ko view ke saath associate kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>View ko inflate karne ke liye Context object. Context, Android application environment ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object. XML attributes, view ko customize karne ke liye use hote hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatCheckedTextView`,
              id: "AppCompatCheckedTextView(Context,AttributeSet,int)",
              code: `AppCompatCheckedTextView(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              fullCode: `public AppCompatCheckedTextView(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ka use, AppCompatCheckedTextView class ka ek instance create karne ke liye hota hai, jisme view ko XML attributes aur default style resource ke saath customize karne ka functionality hota hai. `,

              longDes: `
              <p>Is constructor ka use, AppCompatCheckedTextView class ka ek instance create karne ke liye hota hai, jisme view ko XML attributes aur default style resource ke saath customize karne ka functionality hota hai. Jab aap is constructor ko call karte hain, to AppCompatCheckedTextView class ka ek naya object banta hai. Is object mein CheckedTextView ki functionality, AppCompat Support Library se provide hoti hai. attrs parameter ke through aap XML layout file mein specify kiye gaye attributes ko view ke saath associate kar sakte hain. defStyleAttr parameter ko use karke aap view ko default style resource se customize kar sakte hain, agar aap koi specific style resource provide nahi karte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>View ko inflate karne ke liye Context object. Context, Android application environment ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object. XML attributes, view ko customize karne ke liye use hote hain.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Default style resource ID, jise use karke view ko style karna chahte hain. Isse agar aap koi specific style resource nahi provide karte hain, toh view default style se initialize hota hai.</p>`,
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
              name: "getCustomSelectionActionModeCallback",
              id: "getCustomSelectionActionModeCallback()",
              dataTypeName: `@Nullable ActionMode.Callback`,
              code: `<a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,
  
              fullCode: `public @Nullable ActionMode.Callback <a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,

              des: `Ye method, CheckedTextView mein custom text selection action mode callback ko retrieve karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>Ye method, CheckedTextView mein custom text selection action mode callback ko retrieve karne ke liye istemal hota hai.</p>

              <p>Text selection action mode, jab aap long press karke text ko select karte hain, ek contextual action bar (CAB) ya action mode ko activate karta hai. Is action mode mein aap text ko copy, cut, paste, delete, etc. karne ke actions ko perform kar sakte hain. By default, Android system ek standard action mode callback provide karta hai, jisme basic text editing actions hote hain.</p>
  
              <p>getCustomSelectionActionModeCallback() method ka use, agar aap text selection action mode ko customize karna chahte hain aur apne custom actions ya behavior ko implement karna chahte hain, to aap is method se custom selection action mode callback ko retrieve kar sakte hain. Isse aap apne custom actions ko action mode mein add kar sakte hain ya fir existing actions ko modify kar sakte hain.</p>

              <p>Ye method ek ActionMode.Callback object return karta hai, jo text selection action mode ko customize karne ke liye use hota hai. Agar koi custom selection action mode callback set nahi kiya gaya ho, to ye method null return karta hai.</p>
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

              des: `Ye method, CheckedTextView mein EmojiCompat support ka status check karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method ka use karke aap jaan sakte hain ki kya AppCompatCheckedTextView view mein EmojiCompat feature enabled hai ya nahi. Agar EmojiCompat enabled hai, to emojis ko view mein sahi tarike se render kiya jayega. Lekin agar EmojiCompat disabled hai, to emojis ko default text characters ke roop mein display kia jayega.</p>

              <p>Ye method ek boolean value return karta hai. Agar EmojiCompat enabled hai, to method true return karta hai, aur agar EmojiCompat disabled hai, to method false return karta hai.</p>
              `,

            
              parameter: [],
            },



            {
              dep: false,
              name: "onCreateInputConnection",
              id: "onCreateInputConnection()",
              dataTypeName: `@Nullable InputConnection`,
              code: `<a href="#onCreateInputConnection()">onCreateInputConnection</a>(@NonNull EditorInfo outAttrs)`,
  
              fullCode: `public @Nullable InputConnection <a href="#onCreateInputConnection()">onCreateInputConnection</a>(@NonNull EditorInfo outAttrs)`,

              des: `Ye  method, CheckedTextView ko input method (IME) ke saath connect karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>Is method ka use CheckedTextView ko IME ke saath connect karne ke liye hota hai. Agar aap text input lene ya IME ke features ko CheckedTextView mein use karne chahte hain, toh aap is method mein ek InputConnection object return kar sakte hain. Is InputConnection object ke through aap text ko IME ke saath communicate kar sakte hain, jaise ki text input, suggestions, action events, etc.</p>

              <p>Ye method ek InputConnection object return karta hai, jo CheckedTextView aur IME ke beech communication ko handle karta hai. Agar IME ko CheckedTextView ke saath connect nahi karna chahte hain, toh method null return karta hai.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EditorInfo outAttrs`,
                        des:`<p>EditorInfo object, jo IME ko CheckedTextView se related information provide karta hai, jaise ki input type, ime options, suggestions, etc.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setAllCaps",
              id: "setAllCaps()",
              dataTypeName: `void`,
              code: `<a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,
  
              fullCode: `public void <a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,

              des: `Ye method, CheckedTextView mein text ko uppercase (sabhi capital alphabets) mein convert karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setAllCaps(boolean allCaps) method ka use, CheckedTextView ke text ko uppercase mein convert karne ke liye kiya jata hai. Agar aap setAllCaps(true) ko call karte hain, to CheckedTextView ke text ko saare characters ko uppercase mein convert kar diya jata hai. Lekin agar aap setAllCaps(false) ko call karte hain, to CheckedTextView ke text ka original case maintain kiya jata hai.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>boolean type ka parameter hai, jiska value true karne se text ko uppercase mein convert kiya jata hai aur false karne se original case mein rehne diya jata hai.</p>`,
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

              des: `Ye method, CheckedTextView ke background mein ek Drawable object set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable(@Nullable Drawable background) method ka use, CheckedTextView ke background mein ek Drawable object set karne ke liye hota hai. Aap is method ko use karke kisi bhi Drawable resource, VectorDrawable, ColorDrawable, ya koi custom Drawable ko CheckedTextView ke background mein display kar sakte hain.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Drawable type ka parameter hai, jiska use CheckedTextView ke background mein set karne ke liye kiya jata hai. Agar aap null pass karte hain, to CheckedTextView ka background clear ho jata hai.</p>`,
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

              des: `Ye method, CheckedTextView ke background mein ek Drawable resource file (XML drawable ya bitmap image) ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setBackgroundResource(@DrawableRes int resId) method ka use, CheckedTextView ke background mein ek Drawable resource file ko set karne ke liye hota hai. Aap is method ko use karke resId parameter mein drawable resource ID pass karke CheckedTextView ke background ko customize kar sakte hain.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>@DrawableRes annotation ke saath int type ka parameter hai, jisme drawable resource ka ID pass kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setCheckMarkDrawable",
              id: "setCheckMarkDrawable(Drawable)",
              dataTypeName: `void`,
              code: `<a href="#setCheckMarkDrawable(Drawable)">setCheckMarkDrawable</a>(@Nullable Drawable d)`,
  
              fullCode: `public void <a href="#setCheckMarkDrawable(Drawable)">setCheckMarkDrawable</a>(@Nullable Drawable d)`,

              des: `Ye method, CheckedTextView mein check mark icon ya drawable ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setCheckMarkDrawable(@Nullable Drawable d) method ka use, CheckedTextView mein ek custom check mark icon ya drawable ko set karne ke liye hota hai. Aap is method ko use karke kisi bhi Drawable resource, VectorDrawable, ya koi custom Drawable ko CheckedTextView ke check mark ke roop mein display kar sakte hain..</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable d`,
                        des:`<p>Drawable type ka parameter hai, jisme check mark icon ya drawable ko represent karne wala Drawable object pass kiya jata hai. Agar aap null pass karte hain, to CheckedTextView ka check mark drawable clear ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCheckMarkDrawable",
              id: "setCheckMarkDrawable(int)",
              dataTypeName: `void`,
              code: `<a href="#setCheckMarkDrawable(int)">setCheckMarkDrawable</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setCheckMarkDrawable(int)">setCheckMarkDrawable</a>(@DrawableRes int resId)`,

              des: `Ye method, CheckedTextView mein check mark icon ya drawable ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setCheckMarkDrawable(@DrawableRes int resId) method ka use, CheckedTextView mein ek custom check mark icon ya drawable ko set karne ke liye hota hai. Aap is method ko use karke resId parameter mein drawable resource ID pass karke CheckedTextView ke check mark ke roop mein display kar sakte hain.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>@DrawableRes annotation ke saath int type ka parameter hai, jisme check mark icon ya drawable ka resource ID pass kiya jata hai.</p>`,
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

              des: `Ye method, CheckedTextView mein text ke aas-paas charon taraf (left, top, right, bottom) compound drawables (icons ya images) ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setCompoundDrawables(@Nullable Drawable left, @Nullable Drawable top, @Nullable Drawable right, @Nullable Drawable bottom) method ka use, CheckedTextView mein left, top, right, aur bottom positions par compound drawables (jaise icons, images, ya shapes) ko set karne ke liye hota hai. Aap is method ko use karke left, top, right, bottom parameters mein respective drawables pass kar sakte hain, jisse CheckedTextView mein specified positions par drawables display ho jayenge.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Drawable type ka parameter hai, jiske through left side mein display karne ke liye ek drawable icon set kiya jata hai. Agar null pass kiya jata hai, to left side par koi drawable display nahi hota.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Drawable type ka parameter hai, jiske through top side mein display karne ke liye ek drawable icon set kiya jata hai. Agar null pass kiya jata hai, to top side par koi drawable display nahi hota.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Drawable type ka parameter hai, jiske through right side mein display karne ke liye ek drawable icon set kiya jata hai. Agar null pass kiya jata hai, to right side par koi drawable display nahi hota.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Drawable type ka parameter hai, jiske through bottom side mein display karne ke liye ek drawable icon set kiya jata hai. Agar null pass kiya jata hai, to bottom side par koi drawable display nahi hota.</p>`,
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
  
              fullCode: `@RequiresApi(value = 17)</br>public void <a href="#setCompoundDrawablesRelative()">setCompoundDrawablesRelative</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,

              des: `setCompoundDrawablesRelative() method ka upayog AppCompatCheckedTextView mein text ke charo taraf (start, top, end, bottom) mein drawables ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setCompoundDrawablesRelative() method ka upayog AppCompatCheckedTextView mein text ke charo taraf (start, top, end, bottom) mein drawables ko set karne ke liye kiya jata hai. Is method se aap text ke charo taraf alag-alag drawables ko add kar sakte hain.</p>

              <p>Ye method, aapke layout design ko enhance karne mein madad karta hai. Jaise ki aap ek AppCompatCheckedTextView ko horizontal ya vertical orientation mein design kar sakte hain, jisme text ke saath-saath aap images ya icons ko bhi display kar sakte hain. Isse aap complex UI components ko build karne mein madad milti hai, jinme text aur images ko saath-saath dikhana hota hai.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Start ya left side mein hone wala drawable. Aap is parameter mein null bhi pass kar sakte hain agar aapko start drawable ki zaroorat nahi hai</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Top side mein hone wala drawable. Aap is parameter mein null bhi pass kar sakte hain agar aapko top drawable ki zaroorat nahi hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>End ya right side mein hone wala drawable. Aap is parameter mein null bhi pass kar sakte hain agar aapko end drawable ki zaroorat nahi hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Bottom side mein hone wala drawable. Aap is parameter mein null bhi pass kar sakte hain agar aapko bottom drawable ki zaroorat nahi hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCustomSelectionActionModeCallback",
              id: "setCustomSelectionActionModeCallback()",
              dataTypeName: `void`,
              code: `<a href="#setCustomSelectionActionModeCallback()">setCustomSelectionActionModeCallback</a>(
                @Nullable ActionMode.Callback actionModeCallback
            )`,
  
              fullCode: `public void <a href="#setCustomSelectionActionModeCallback()">setCustomSelectionActionModeCallback</a>(
                @Nullable ActionMode.Callback actionModeCallback
            )`,

              des: `ye method, ActionMode.Callback interface ko implement karne wale custom action mode callbacks ko AppCompatCheckedTextView par set karne ke liye use hota hai.`,
  
              longDes: `
              <p>ActionMode.Callback ek interface hota hai, jo text selection ke dauran action mode events ko handle karne ke liye use hota hai. Jab aap kisi text-based widget (jaise ki AppCompatCheckedTextView, EditText, etc.) mein text ko long-press karke select karte hain, tab ek action mode trigger hota hai. Is action mode mein aap various actions perform kar sakte hain, jaise copy, cut, paste, share, etc.</p>

              <p>setCustomSelectionActionModeCallback() method ka use aapke text-based widget ke text selection behavior ko customize karne ke liye hota hai. Aap is method ke through ActionMode.Callback interface ke methods ko override kar sakte hain aur apne custom actions ko handle kar sakte hain. Isse aap text selection action mode mein apne specific requirements ko implement kar sakte hain.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ActionMode.Callback actionModeCallback`,
                        des:`<p>ActionMode.Callback interface ko implement karne wale custom callback object. Is parameter mein aapko apne desired custom action mode callbacks ko implement karne wala object provide karna hai.</p>`,
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

              des: `ye method, EmojiCompat support ko enable ya disable karne ke liye use hota hai.`,
  
              longDes: `
              <p>setEmojiCompatEnabled() method, aapke application mein EmojiCompat library ke sath compatibility ko enable ya disable karne ka kaam karta hai. Agar aap is method ko true value ke saath call karte hain, toh EmojiCompat compatibility enabled ho jata hai, jisse aapke application mein emojis ko latest version ke font se render kiya jata hai. Aur agar aap is method ko false value ke saath call karte hain, toh EmojiCompat compatibility disabled ho jata hai, jisse system ke default emoji font ka use hota hai.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>true ya false value, jisse aap EmojiCompat support ko enable ya disable kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextAppearance",
              id: "setTextAppearance()",
              dataTypeName: `void`,
              code: `<a href="#setTextAppearance()">setTextAppearance</a>(@NonNull Context context, int resId)`,
  
              fullCode: `public void <a href="#setTextAppearance()">setTextAppearance</a>(@NonNull Context context, int resId)`,

              des: `ye method, AppCompatCheckedTextView ke text ke appearance ya style ko ek specific text style resource ID (resId) ke hisab se set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setTextAppearance() method ka upayog kisi bhi AppCompatCheckedTextView par ek specific text style resource ko apply karne ke liye hota hai. Text style resources XML file mein define kiye jate hain, jinme text ke alag-alag properties (jaise font size, color, style, alignment, etc.) ko customize kiya jata hai. Jab aap setTextAppearance() method ko use karte hain, toh AppCompatCheckedTextView ke text ko specified text style ke attributes ke sath set kiya jata hai.</p>
              `,

            
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisse text style resource ko inflate karne aur apply karne mein madad milti hai.</p>`,
                      },
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Integer value, jo text style resource ko identify karta hai. Ye resource ID, R.style ke under ek text style resource ka reference hota hai.</p>`,
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
  
              des: `Ye method, view ke state ko track karne aur view ke drawable resources ke state ko update karne ke liye use hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, AppCompatCheckedTextView ke internal implementation ka part hota hai. Jab bhi view ke state mein koi changes hote hain, jaise ki view focus ho jata hai, press ho jata hai, select ho jata hai, etc., tab yeh method automatically call hota hai. Isse view apne current state ke basis par apne drawables ko update kar sakta hai, jisse view ke appearance mein changes reflect ho sake.</p>
                    `,
  
              parameter: [],
            },
  


          ],
        },
  
      
     

      },
    });
  };
  