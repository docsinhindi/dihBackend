module.exports.AppCompatButton = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatButton",
      hCode: `public class <a href="#AppCompatButton">AppCompatButton</a>  extends Button implements TintableBackgroundView, TintableCompoundDrawablesView, EmojiCompatConfigurationView`,
  
      des: 
        `
        <p>Ye class, Button widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatButton class, Button class ka subclass hai aur AppCompatTextView class se inherit karti hai. Iska use user interaction ke liye buttons ko display karne aur un par click events handle karne ke liye kiya jata hai.</p>
  
       
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
              name: `AppCompatButton`,
              id: "AppCompatButton(Context)",
              code: `<a href="#AppCompatButton(Context)">AppCompatButton</a>(@NonNull Context context)`,
              fullCode: `public <a href="#AppCompatButton(Context)">AppCompatButton</a>(@NonNull Context context)`,

              des: `AppCompatButton constructor ka upayog, AppCompatButton view ko create karne ke liye kiya jata hai.`,

              longDes: `<p>AppCompatButton constructor ka upayog, AppCompatButton view ko create karne ke liye kiya jata hai. Yeh constructor Android framework ke View hierarchy me ek naya AppCompatButton instance create karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jo view ko inflate aur initialize karne ke liye istemal hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `AppCompatButton`,
              id: "AppCompatButton(Context,AttributeSet)",
              code: `<a href="#AppCompatButton(Context,AttributeSet)">AppCompatButton</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#AppCompatButton(Context,AttributeSet)">AppCompatButton</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `ye constructor, AppCompatButton view ka naya instance create karne ke liye use hota hai, jisme view ke attributes ko XML layout file se parse karke use karna hota hai.`,

              longDes: `<p>AppCompatButton constructor ka upayog, AppCompatButton view ko create karne ke liye kiya jata hai. Yeh constructor Android framework ke View hierarchy me ek naya AppCompatButton instance create karta hai aur attrs parameter ke madhyam se XML layout file se view ke attributes ko parse karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jo view ko inflate aur initialize karne ke liye istemal hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, XML layout file se view ke attributes ko parse karne ke liye istemal hota hai. @Nullable annotation batata hai ki yeh parameter null bhi ho sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatButton`,
              id: "AppCompatButton(Context,AttributeSet,int)",
              code: `<a href="#AppCompatButton(Context,AttributeSet,int)">AppCompatButton</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#AppCompatButton(Context,AttributeSet,int)">AppCompatButton</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `ye constructor, AppCompatButton view ka naya instance create karne ke liye use hota hai, jisme view ke attributes ko XML layout file se parse karke use karna hota hai, sath hi view ke default style attributes ko bhi apply karna hota hai.`,

              longDes: `<p>AppCompatButton constructor ka upayog, AppCompatButton view ko create karne ke liye kiya jata hai. Yeh constructor Android framework ke View hierarchy me ek naya AppCompatButton instance create karta hai aur attrs parameter ke madhyam se XML layout file se view ke attributes ko parse karta hai. Sath hi, defStyleAttr parameter ke dwara hum view ke default style attributes ko apply kar sakte hain, jo XML layout file mein specific style attribute set nahi ho toh use hota hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jo view ko inflate aur initialize karne ke liye istemal hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, XML layout file se view ke attributes ko parse karne ke liye istemal hota hai. @Nullable annotation batata hai ki yeh parameter null bhi ho sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Resource ID (integer value) jo default style attributes ko represent karta hai. Yeh style attributes, agar XML layout file mein koi specific style attribute set nahi kiya gaya ho toh, view par apply hote hain. Isse hum view ke default style ko define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
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
              name: "getCustomSelectionActionModeCallback",
              id: "getCustomSelectionActionModeCallback()",
              dataTypeName: `@Nullable ActionMode.Callback`,
              code: `<a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,
  
              fullCode: `public @Nullable ActionMode.Callback <a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,

              des: `Ye method, custom text selection action mode callback ko retrieve karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getCustomSelectionActionModeCallback() method, AppCompatButton par custom text selection action mode callback ko prapt karne ke liye use hota hai. Text selection action mode, jab user text ko select karta hai (by long-pressing on the text), dikhta hai. Is mode mein, user ko text ko cut, copy, paste, aur dusre operations ko perform karne ke options milte hain.</p>
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

              des: `isEmojiCompatEnabled() method, EmojiCompat support ke presence ko check karne ke liye hota hai. Isse hum EmojiCompat library ke sath backward compatibility maintain kar sakte hain, jisse hum latest emoji characters ko bhi pichle Android versions par sahi tarike se dekh sakte hain.`,
  
              longDes: `
              <p>Yeh method AppCompatButton class mein public access modifier ke sath define kiya gaya hota hai, iska matlab ye hai ki hum ise directly access kar sakte hain aur iska upayog EmojiCompat support ke presence ka pata lagane ke liye kar sakte hain.</p>

              <p>Is method ka return type boolean hota hai, jo indicate karta hai ki kya EmojiCompat enabled hai ya nahi. Agar method true return karta hai, to EmojiCompat support available hai, aur agar false return karta hai, to EmojiCompat support available nahi hai.</p>
              `,

             
              parameter: [],
            },




            {
              dep: false,
              name: "onInitializeAccessibilityEvent",
              id: "onInitializeAccessibilityEvent()",
              dataTypeName: `void`,
              code: `<a href="#onInitializeAccessibilityEvent()">onInitializeAccessibilityEvent</a>(AccessibilityEvent event)`,
  
              fullCode: `public void <a href="#onInitializeAccessibilityEvent()">onInitializeAccessibilityEvent</a>(AccessibilityEvent event)`,

              des: `Ye method, AccessibilityEvent object ko initialize karne ke liye use hota hai.`,
  
              longDes: `
              <p>onInitializeAccessibilityEvent() method ka upayog karke hum AccessibilityEvent object ko shuruat kar sakte hain, jisme hum view ke accessibility-related properties aur information ko set kar sakte hain. Accessibility events, Android ke accessibility framework ke through accessibility services aur assistive technologies tak pahunchte hain, jisse unhe UI components ke bare mein jankari milti hai.</p>
              
              <p>onInitializeAccessibilityEvent() method ka upayog karke hum accessibility event ko customize kar sakte hain, jaise event ki type, content description, package name, source view, action type, aadi. Is method ko override karke, hum AppCompatButton class ke instances ke liye accessibility events ko customize kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityEvent event`,
                        des:`<p>AccessibilityEvent object, jisko initialize karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "onInitializeAccessibilityNodeInfo",
              id: "onInitializeAccessibilityNodeInfo()",
              dataTypeName: `void`,
              code: `<a href="#onInitializeAccessibilityNodeInfo()">onInitializeAccessibilityNodeInfo</a>(AccessibilityNodeInfo info)`,
  
              fullCode: `public void <a href="#onInitializeAccessibilityNodeInfo()">onInitializeAccessibilityNodeInfo</a>(AccessibilityNodeInfo info)`,

              des: `Ye method, AccessibilityNodeInfo object ko initialize karne ke liye use hota hai.`,
  
              longDes: `
              <p>onInitializeAccessibilityNodeInfo() method ka upayog karke hum AccessibilityNodeInfo object ko shuruat kar sakte hain, jisme hum view ke accessibility-related properties aur information ko set kar sakte hain. AccessibilityNodeInfo, Android ke accessibility framework ke through accessibility services aur assistive technologies tak pahunchta hai, jisse unhe UI components ke bare mein jankari milti hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityNodeInfo info`,
                        des:`<p>AccessibilityNodeInfo object, jisko initialize karna hai.</p>`,
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

              des: `Ye method, Button mein likhe gaye text ko uppercase (sabhi capital letters) ya normal case (as it is) mein display karne ke liye use hota hai.`,
  
              longDes: `
              <p>Jab aap ek Button view mein setAllCaps(true) method ko use karte hain, toh iska matlab hai ki us Button ke text ko uppercase mein display karna hai. Example ke liye, agar aapke Button ka text "click here" hai, toh setAllCaps(true) use karne se text "CLICK HERE" ban jayega.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Agar true hai, toh text ko uppercase (sabhi capital letters) mein display karega. Agar false hai, toh text ko normal case mein display karega.</p>`,
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

              des: `Is method ka upayog button ke background ko customize karne mein kiya jata hai.`,
  
              longDes: `
              <p>Jab aap setBackgroundDrawable() method ka upayog karte hain, aap ek Drawable resource (jaise ek image, vector, shape, etc.) ya ek color drawable (ek specific color) ko button ke background ke roop mein set kar sakte hain.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Ek Drawable object jo button ke background ko represent karta hai. Agar null hai, toh button ka background hata diya jayega.</p>`,
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

              des: `Is method ka upayog button ke background ko ek specific image, vector, shape, ya kisi bhi Drawable resource se customize karne mein kiya jata hai.`,
  
              longDes: `
              <p>Jab aap setBackgroundResource() method ka upayog karte hain, aap ek Drawable resource ko button ke background ke roop mein set kar sakte hain. Is method mein aapko sirf Drawable resource ka identifier (resource ID) dena hota hai, aur phir Android system apne resource manager ke madhyam se us resource ko load karke background mein apply kar deta hai.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ek integer value jo ek Drawable resource ka identifier hota hai, jisse button ke background ke roop mein set karna hai.</p>`,
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

              des: `Is method ka upayog kisi specific text ko select karne par uske liye action mode ko customize karne mein kiya jata hai.`,
  
              longDes: `
              <p>Jab aap text ko select karte hain (tap and hold karke), Android ek action mode activate karta hai. Is action mode mein aap kuch text-related actions perform kar sakte hain, jaise copy, cut, paste, etc. setCustomSelectionActionModeCallback() method ka use karke aap is action mode ko customize kar sakte hain, yani aap custom action mode callbacks provide kar sakte hain.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ActionMode.Callback actionModeCallback`,
                        des:`<p>ActionMode.Callback interface ka ek object, jiska upayog custom action mode callbacks provide karne ke liye hota hai. Agar null hai, toh custom action mode callbacks disable ho jate hain.</p>`,
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

              des: `Is method ka use emoji compatibility support ko enable ya disable karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setEmojiCompatEnabled(boolean enabled) method ka use emoji compatibility support ko control karne ke liye kiya jata hai. Emoji characters, Unicode standard ke part hote hain, lekin kuch older Android devices ya customized Android versions mein sahi tareeke se emoji display na ho sakta hai. Is situation mein, EmojiCompat support library ka istemaal kiya jaata hai.</p>

              <p>Jab setEmojiCompatEnabled(true) method ko true ke saath call kiya jata hai, toh emoji compatibility support library enable ho jati hai. Isse older Android versions mein bhi latest emoji characters ko sahi tareeke se display kiya ja sakta hai.</p>

              <p>Jab setEmojiCompatEnabled(false) method ko false ke saath call kiya jata hai, toh emoji compatibility support library disable ho jati hai. Isse emoji compatibility support ka feature band ho jata hai aur emoji characters ko handle karne ke liye default Android behavior ka istemaal hota hai.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Yeh ek boolean parameter hota hai, jo emoji compatibility support ko enable ya disable karne ke liye istemal hota hai. Agar enabled parameter true hai, toh emoji compatibility support enable ho jata hai, aur agar false hai, toh emoji compatibility support disable ho jata hai.</p>`,
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

              des: `Is method ka use AppCompatButton ke text par lagane ke liye input filters ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setFilters(@NonNull InputFilter[] filters) method ka use AppCompatButton ke text par lagane ke liye input filters ko set karne ke liye kiya jata hai. Input filters, text ko modify karne ke liye use kiye jaate hain.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull InputFilter[] filters`,
                        des:`<p>Yeh ek InputFilter array hota hai, jisme text par lagane ke liye input filters ko store kiya jata hai. InputFilter interface, text ko modify karne ke liye use hota hai, jaise text length restrict karna, specific characters allow ya disallow karna, etc.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setSupportAllCaps",
              id: "setSupportAllCaps()",
              dataTypeName: `void`,
              code: `<a href="#setSupportAllCaps()">setSupportAllCaps</a>(boolean allCaps)`,
  
              fullCode: `public void <a href="#setSupportAllCaps()">setSupportAllCaps</a>(boolean allCaps)`,

              des: `Is method ka use button ke text ko uppercase mein set karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setSupportAllCaps(boolean allCaps) method ka use button ke text ke case ko control karne ke liye kiya jata hai. By default, AppCompatButton class, button ke text ko uppercase mein display karta hai, lekin kabhi-kabhi aap chahte hain ki button ke text ko lowercase ya original case mein dikhaya jaye.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Yeh ek boolean parameter hota hai, jo button ke text ko uppercase mein set karne ke liye use hota hai. Agar allCaps true hai, toh button ke text ko uppercase mein set kiya jata hai, aur agar false hai, toh lowercase mein set kiya jata hai.</p>`,
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
              code: `<a href="#setTextAppearance()">setTextAppearance</a>(Context context, int resId)`,
  
              fullCode: `public void <a href="#setTextAppearance()">setTextAppearance</a>(Context context, int resId)`,

              des: `Is method ka use AppCompatButton ke text ki appearance (style) ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setTextAppearance(Context context, int resId) method ka use AppCompatButton ke text ki appearance ko customize karne ke liye kiya jata hai. Agar aap chahte hain ki button ke text ka font, color, size ya style ko change karein, toh aap is method ka istemal kar sakte hain.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme style resource file ko resolve karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Resource ID, jisse hum text ki appearance (style) ko represent karne wale style resource file ko refer karte hain. Is resource file mein text ke liye font, color, size, style, etc. ka define hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setTextSize",
              id: "setTextSize()",
              dataTypeName: `void`,
              code: `<a href="#setTextSize()">setTextSize</a>(int unit, float size)`,
  
              fullCode: `public void <a href="#setTextSize()">setTextSize</a>(int unit, float size)`,

              des: `Is method ka use AppCompatButton ke text ki appearance (style) ko set karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>setTextAppearance(Context context, int resId) method ka use AppCompatButton ke text ki appearance ko customize karne ke liye kiya jata hai. Agar aap chahte hain ki button ke text ka font, color, size ya style ko change karein, toh aap is method ka istemal kar sakte hain.</p>
              
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int unit`,
                        des:`<p>Integer value, jisse hum font size ko kis unit mein set karna chahte hain, jaise TypedValue.COMPLEX_UNIT_SP (scale-independent pixels), TypedValue.COMPLEX_UNIT_DIP (density-independent pixels), TypedValue.COMPLEX_UNIT_PX (pixels), etc.</p>`,
                      },
                      {
                        dataTypeName: `float size`,
                        des:`<p>Float value, jisse hum font size ki value set karte hain. Font size ka value unit ke mutabik hona chahiye.</p>`,
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
  
              des: `Is method ka use button ke state changes ke response mein kiya jata hai.`,
  
              longDes: `
                <p>drawableStateChanged() method ka use AppCompatButton ke state changes ke response mein hota hai. Jab AppCompatButton ka state change hota hai, jaise button press ya focus change, toh yeh method automatically call hota hai. Is method mein aap button ke different states ke anusaar, uske background ya text ka appearance change kar sakte hain, taki button ke visual feedback ko indicate kiya ja sake.</p>
                    `,
  
              parameter: [],
            },
  


            {
              dep: false,
              name: "onLayout",
              id: "onLayout()",
              dataTypeName: `void`,
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              des: `Is method ka use button ka layout karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Is method mein aap button ke dimensions, position, padding, margin, etc. ko calculate kar sakte hain aur button ka final layout set kar sakte hain.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean changed`,
                        des:`<p>Yeh parameter batata hai ki button ka layout changed hua hai ya nahi. Agar changed true hai, toh button ka layout change hua hai, aur agar false hai, toh koi layout change nahi hua hai.</p>`,
                      },
                      {
                        dataTypeName: `int left`,
                        des:`<p>Button ka left coordinate (x-axis) layout mein.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Button ka top coordinate layout mein.</p>`,
                      },
                      {
                        dataTypeName: `int right`,
                        des:`<p>Button ka right coordinate layout mein.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Button ka bottom coordinate layout mein.</p>`,
                      },
                    ],
                  },
              ],
            },
  

            {
              dep: false,
              name: "onTextChanged",
              id: "onTextChanged()",
              dataTypeName: `void`,
              code: `<a href="#onTextChanged()">onTextChanged</a>(
                CharSequence text,
                int start,
                int lengthBefore,
                int lengthAfter
            )`,
  
              fullCode: `protected void <a href="#onTextChanged()">onTextChanged</a>(
                CharSequence text,
                int start,
                int lengthBefore,
                int lengthAfter
            )`,
  
              des: `Is method ka use button ke text mein koi change ho jane par uske response ke liye kiya jata hai.`,
  
              longDes: `
                <p>onTextChanged(CharSequence text, int start, int lengthBefore, int lengthAfter) method ka use button ke text mein koi change hone par uske response ke liye hota hai. Jab button ke text mein koi change hota hai, jaise text ko edit karne par ya koi character delete karne par, toh yeh method automatically call hota hai.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence text`,
                        des:`<p>Yeh parameter button ke text ko represent karta hai, jaise text mein koi change ho jata hai toh yeh parameter us updated text ko hold karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int start`,
                        des:`<p>Yeh parameter batata hai ki text mein change ka starting index kya hai.</p>`,
                      },
                      {
                        dataTypeName: `int lengthBefore`,
                        des:`<p>Yeh parameter batata hai ki change hone se pehle text mein kitne characters the.</p>`,
                      },
                      {
                        dataTypeName: `int lengthAfter`,
                        des:`<p>Yeh parameter batata hai ki change ke baad text mein kitne characters hai.</p>`,
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
  