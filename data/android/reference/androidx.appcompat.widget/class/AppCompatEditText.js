module.exports.AppCompatEditText = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatEditText",
      hCode: `public class <a href="#AppCompatEditText">AppCompatEditText</a>  extends EditText implements TintableBackgroundView, OnReceiveContentViewBehavior, EmojiCompatConfigurationView, TintableCompoundDrawablesView  `,
  
      des: 
        `
        <p>Ye class, EditText widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatEditText class, EditText class ka subclass hai aur AppCompatTextView class se inherit karti hai. Iska use user input ke liye text field display karne aur text input events handle karne ke liye kiya jata hai.</p>
  
       
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
              name: `AppCompatEditText`,
              id: "AppCompatEditText(Context)",
              code: `<a href="#AppCompatEditText(Context)">AppCompatEditText</a>(@NonNull Context context)`,
              fullCode: `public <a href="#AppCompatEditText(Context)">AppCompatEditText</a>(@NonNull Context context)`,

              des: `Is constructor ka use AppCompatEditText view ko create karne ke liye hota hai.`,

              longDes: `

              <p>Is constructor ka use AppCompatEditText view ko create karne ke liye hota hai. Aap is constructor ko use karke programmatically AppCompatEditText view ko create kar sakte hain aur usko UI layout mein add kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>EditText ko use karne wale activity ya application ka context hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: `AppCompatEditText`,
              id: "AppCompatEditText(Context,AttributeSet)",
              code: `<a href="#AppCompatEditText(Context,AttributeSet)">AppCompatEditText</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#AppCompatEditText(Context,AttributeSet)">AppCompatEditText</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `AppCompatEditText class ka ye constructor XML layout file mein define kiye gaye EditText element ko inflate karne ke liye use hota hai`,

              longDes: `
              <p>AppCompatEditText class ka ye constructor, EditText widget ke standard constructor ko override karta hai. Iska use EditText widget ko AppCompat theme ke sath use karne mein kiya jata hai, jisse aap app ke design ko consistent rakhte huye backward compatibility ka fayda utha sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>EditText ko use karne wale activity ya application ka context hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jo EditText element ke XML attributes ko represent karta hai.  </p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatEditText`,
              id: "AppCompatEditText(Context,AttributeSet,int)",
              code: `<a href="#AppCompatEditText(Context,AttributeSet,int)">AppCompatEditText</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              fullCode: `public <a href="#AppCompatEditText(Context,AttributeSet,int)">AppCompatEditText</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, XML layout file mein specify kiye gaye AppCompatEditText view element ko customize karne ke liye additional styling options provide karta hai.`,

              longDes: `
              <p>ye constructor, XML layout file mein specify kiye gaye AppCompatEditText view element ko inflate karta hai. Iske saath saath, agar XML layout file mein koi specific style attribute specify nahi kiya gaya ho, toh defStyleAttr ke value se corresponding default style attribute ko apply karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>EditText ko use karne wale activity ya application ka context hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jo EditText element ke XML attributes ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye ek integer value hai, jo AppCompatEditText view ke default style attribute resource ID ko represent karta hai. Agar hum XML layout file mein koi specific style attribute specify nahi karte hain, toh defStyleAttr ka value use hoga.</p>`,
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

              des: `Ye method, AppCompatEditText class mein maujood hai aur text selection actions ko customize karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>Ye method, AppCompatEditText class mein maujood hai aur text selection actions ko customize karne ke liye istemal hota hai.</p>

              <p>Jab hum AppCompatEditText mein text select karte hain (by long-pressing and dragging), to ek contextual action mode activate hota hai. Contextual action mode, text selection ke dauran kuch actions ko perform karne ke liye options provide karta hai, jaise ki copy, cut, paste, etc. Default behavior mein, Android system khud text selection actions ko handle karta hai, lekin getCustomSelectionActionModeCallback() method ka use karke hum in actions ko customize kar sakte hain.</p>
  
              <p>Return type, ActionMode.Callback hota hai, jo text selection actions ko customize karne ke liye ek callback interface hai. Agar koi custom ActionMode.Callback registered hai, to text selection ke dauran wo callback use hoga, jisse hum text selection actions ko control kar sakte hain.</p>
              `,
  
              parameter: [],
            },

            {
              dep: false,
              name: "getText",
              id: "getText()",
              dataTypeName: `@Nullable Editable`,
              code: `<a href="#getText()">getText</a>()`,
  
              fullCode: `public @Nullable Editable <a href="#getText()">getText</a>()`,

              des: `iska upayog AppCompatEditText mein likhe gaye text ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>iska upayog AppCompatEditText mein likhe gaye text ko retrieve karne ke liye kiya jata hai.</p>
              `,
  
              parameter: [],
            },

  
            {
              dep: false,
              name: "getTextClassifier",
              id: "getTextClassifier()",
              dataTypeName: `@NonNull TextClassifier`,
              code: `<a href="#getTextClassifier()">getTextClassifier</a>()`,
  
              fullCode: `@RequiresApi(api = 26)</br>public @NonNull TextClassifier <a href="#getTextClassifier()">getTextClassifier</a>()`,

              des: `Is method ka upayog text classification aur smart text selection ke liye kiya jata hai.`,
  
              longDes: `
              <p>Text classification, text ko specific categories mein classify karne ka process hai. TextClassifier ek machine learning-based model hota hai, jo text classification ke liye use hota hai. Is model ka upayog kisi bhi text ko identify karne ke liye kiya jata hai, jaise ki phone numbers, URLs, addresses, emails, dates, etc. TextClassifier, text ko parse karke in categories mein classify karta hai aur unhe text selection aur linkification ke liye bhi use kar sakta hai.</p>

              <p>getTextClassifier() method, AppCompatEditText mein likhe gaye text ke liye ek TextClassifier object ko retrieve karne ke liye use hota hai.</p>
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

              des: `isEmojiCompatEnabled() method, Emoji compatibility ka status check karne ke liye use hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method, Emoji compatibility ka status check karne ke liye use hota hai.</p>

              <p>isEmojiCompatEnabled() method ek boolean value return karta hai. Agar EmojiCompat library enable hai (yaani EmojiCompat library successfully integrate hui hai), to method true return karega. Agar EmojiCompat library disable hai, to method false return karega.</p>
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

              des: `ye method, Android's input method framework ke saath EditText ka interaction manage karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka main use ye hai ki aap ismein InputConnection object ko customize kar sakte hain, jisse aap user ke input ko handle kar sakte hain. Aap InputConnection object mein text ko padh sakte hain, use modify kar sakte hain, ya phir EditText ke text ke saath specific behavior implement kar sakte hain, jaise autocompletion, spell checking, autocorrection, etc.</p>

              <p>onCreateInputConnection() method ek InputConnection object return karta hai, jo EditText ke saath user input ka interaction handle karta hai. Agar aapko EditText ke liye koi custom behavior implement karna hai, to aap InputConnection object ko customize kar sakte hain aur phir use return kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull EditorInfo outAttrs`,
                        des:`<p>EditorInfo object, jisme EditText ke attributes aur options store hote hain, jo input method ko batate hain ki EditText ke liye kaise behave karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "onDragEvent",
              id: "onDragEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#onDragEvent()">onDragEvent</a>(DragEvent event)`,
  
              fullCode: `public boolean <a href="#onDragEvent()">onDragEvent</a>(DragEvent event)`,

              des: `ye method, EditText view ke drag-and-drop events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onDragEvent() method, jab koi drag-and-drop action AppCompatEditText view par perform hota hai, tab call hota hai. Is method ka main use hai specific drag-and-drop events ko handle karna, jaise drag shuru hone par kuch action lena, drag ke dauran view ko update karna, ya drop hone par kuch aur behavior implement karna.</p>

              <p>onDragEvent() method ek boolean value return karta hai, jo batata hai ki aapne drag-and-drop event ko handle kiya hai ya nahi. Agar aapne drag-and-drop event ko successfully handle kiya hai aur koi error nahi hai, to method true return karega. Agar aapne event ko handle nahi kiya hai ya koi error aaya hai, to method false return karega.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `DragEvent event`,
                        des:`<p>DragEvent object, jo drag-and-drop event details ko represent karta hai, jaise drag ka action, drag ke location, drop hua location, etc.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "onReceiveContent",
              id: "onReceiveContent()",
              dataTypeName: `@Nullable ContentInfoCompat`,
              code: `<a href="#onReceiveContent()">onReceiveContent</a>(@NonNull ContentInfoCompat payload)`,
  
              fullCode: `public @Nullable ContentInfoCompat <a href="#onReceiveContent()">onReceiveContent</a>(@NonNull ContentInfoCompat payload)`,

              des: `ye method, content ko EditText view mein receive karne ke liye use hota hai.`,
  
              longDes: `
              <p>onReceiveContent() method, jab koi content AppCompatEditText view mein receive hota hai, tab call hota hai. Is method ka use hai EditText view mein receive kiya gaya content ko handle karna aur use view ke text ke saath integrate karna.</p>

              <p>onReceiveContent() method ek ContentInfoCompat object return karta hai, jo received content ko handle karne ke liye use hota hai. Agar aapne content ko successfully handle kiya hai aur koi error nahi hai, to method ContentInfoCompat object return karega. Agar aapne content ko handle nahi kiya hai ya koi error aaya hai, to method null return karega.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ContentInfoCompat payload`,
                        des:`<p>ContentInfoCompat object, jo received content ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  
            {
              dep: false,
              name: "onTextContextMenuItem",
              id: "onTextContextMenuItem()",
              dataTypeName: `boolean`,
              code: `<a href="#onTextContextMenuItem()">onTextContextMenuItem</a>(int id)`,
  
              fullCode: `public boolean <a href="#onTextContextMenuItem()">onTextContextMenuItem</a>(int id)`,

              des: `ye method, EditText view ke text context menu items ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onTextContextMenuItem() method, jab koi text context menu item select hota hai, tab call hota hai. Is method ka use hai EditText view ke text context menu items ko handle karna, jaise Copy, Cut, Paste, etc.</p>

              <p>onTextContextMenuItem() method ek boolean value return karta hai, jo batata hai ki aapne text context menu item ko handle kiya hai ya nahi. Agar aapne selected text context menu item ko successfully handle kiya hai, to method true return karega. Agar aapne item ko handle nahi kiya hai ya koi error aaya hai, to method false return karega.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int id`,
                        des:`<p>Ek integer value, jo selected text context menu item ko represent karta hai. Har text context menu item ko unique ID assign hota hai.</p>`,
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

              des: `ye method, EditText view ki background drawable ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable() method, EditText view ke background drawable ko set karne ke liye use hota hai. Aap is method ka use karke EditText view ki background ko customize kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Drawable object, jo EditText view ke background drawable ko represent karta hai. Is parameter mein aap apne desired background drawable ko pass kar sakte hain.</p>`,
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

              des: `ye method, EditText view ki background drawable resource ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setBackgroundResource() method, EditText view ki background drawable resource ko set karne ke liye use hota hai. Aap is method ka use karke EditText view ki background ko drawable resource se set kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ek integer value, jo res/drawable directory mein store kiye gaye background drawable resource ko represent karta hai. Is parameter mein aap drawable resource ki ID (R.drawable.resource_name) ko pass kar sakte hain.</p>`,
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

              des: `ye method, EditText view mein compound drawables ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setCompoundDrawables() method ka use EditText view mein compound drawables ko set karne ke liye hota hai. Aap is method ka use karke EditText view ke text ke saath related images ya icons ko specified positions par add kar sakte hain.</p>

              <p>Compound drawables, EditText view ke text ke saath related images ya icons ko represent karte hain. Ek EditText view mein aap text ke left, top, right aur bottom sides par ek se adhik drawable icons ko add kar sakte hain. Ye icons text ke saath visual representation provide karte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Drawable object, jo EditText view ke left side ke text ke saath associate kiya jayega. Agar left side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Drawable object, jo EditText view ke top side ke text ke saath associate kiya jayega. Agar top side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Drawable object, jo EditText view ke right side ke text ke saath associate kiya jayega. Agar right side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Drawable object, jo EditText view ke bottom side ke text ke saath associate kiya jayega. Agar bottom side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
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

              des: `ye method, EditText view mein compound drawables ko set karne ke liye use hota hai, lekin ye method Android API level 17 (Jelly Bean MR1) ya usse higher versions mein hi available hai.`,
  
              longDes: `
              <p>setCompoundDrawablesRelative() method ka use EditText view mein compound drawables ko set karne ke liye hota hai, lekin is method mein aap drawable icons ko view ke layout direction (LTR - left-to-right or RTL - right-to-left) ke hisab se specify kar sakte hain.</p>

              <p>Compound drawables, EditText view ke text ke saath related images ya icons ko represent karte hain. Ek EditText view mein aap text ke left, top, right aur bottom sides par ek se adhik drawable icons ko add kar sakte hain. Ye icons text ke saath visual representation provide karte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Drawable object, jo EditText view ke layout direction ke anusar start (left in LTR, right in RTL) side ke text ke saath associate kiya jayega. Agar start side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Drawable object, jo EditText view ke top side ke text ke saath associate kiya jayega. Agar top side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Drawable object, jo EditText view ke layout direction ke anusar end (right in LTR, left in RTL) side ke text ke saath associate kiya jayega. Agar end side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Drawable object, jo EditText view ke bottom side ke text ke saath associate kiya jayega. Agar bottom side par koi drawable nahi chahiye, to parameter ko null pass karein.</p>`,
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

              des: `ye method, EditText view ke text selection action mode ko customize karne ke liye use hota hai.`,
  
              longDes: `
              <p>setCustomSelectionActionModeCallback() method ka use EditText view ke text selection action mode ko customize karne ke liye hota hai. Aap is method ka use karke text selection action mode ke behavior ko control kar sakte hain, jaise kuch specific actions ko disable karna ya custom actions ko add karna.</p>

              <p>Text selection action mode, jab aap EditText view mein text ko select karte hain (highlight), tab dikhai dene wala contextual action mode hota hai. Is action mode mein aapko text ke saath related options dikhte hain, jaise Cut, Copy, Paste, Select All, etc.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ActionMode.Callback actionModeCallback`,
                        des:`<p>ActionMode.Callback object, jo custom action mode behavior ko represent karta hai. Agar aap default action mode behavior chahte hain, to parameter ko null pass karein.</p>`,
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

              des: `ye method, Emoji compatibility support ko EditText view par enable ya disable karne ke liye use hota hai.`,
  
              longDes: `
              <p>setEmojiCompatEnabled() method ka use Emoji compatibility support ko EditText view par enable ya disable karne ke liye hota hai. Jab aap EmojiCompat library ko apne Android application mein integrate karte hain, to aap setEmojiCompatEnabled(true) karke EmojiCompat support ko EditText view par enable kar sakte hain. Agar aap EmojiCompat support ko disable karna chahte hain, to setEmojiCompatEnabled(false) use karein.</p>

              <p>Emoji compatibility support, Android devices mein Emoji icons ko ensure karne ke liye use hota hai. Agar aapke device ke Android version mein latest Emoji icons nahi hai, to aap EmojiCompat library ka use karke application mein Emoji icons ko latest version mein show kar sakte hain. Isse aapke users ko latest Emoji icons ka benefit milta hai, chahe unke device mein latest version support ho ya na ho.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Ek boolean value, jiska use EmojiCompat support ko enable ya disable karne ke liye kiya jata hai. Agar enabled true hai, to EmojiCompat support enable hoga, aur agar enabled false hai, to EmojiCompat support disable hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setKeyListener",
              id: "setKeyListener()",
              dataTypeName: `void`,
              code: `<a href="#setKeyListener()">setKeyListener</a>(@Nullable KeyListener keyListener)`,
  
              fullCode: `public void <a href="#setKeyListener()">setKeyListener</a>(@Nullable KeyListener keyListener)`,

              des: `ye method, EditText view ke liye custom KeyListener ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setKeyListener() method ka use EditText view ke liye custom KeyListener ko set karne ke liye hota hai. Aap is method ka use karke apne desired KeyListener ko EditText view par apply kar sakte hain, jisse aap keyboard input ke behavior ko customize kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable KeyListener keyListener`,
                        des:`<p> Ek KeyListener object, jo EditText view ke liye custom keyboard input behavior ko represent karta hai. Agar aap default KeyListener behavior chahte hain, to parameter ko null pass karein.</p>`,
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

              des: `ye method, EditText view ke text ke liye custom text appearance (style) ko apply karne ke liye use hota hai.`,
  
              longDes: `
              <p>setTextAppearance() method, EditText view ke text ke liye custom text appearance ko set karne ke liye hota hai. Is method ka use karke aap XML resource ya predefined text appearance style (resId) ko EditText view ke text par apply kar sakte hain.</p>

              <p>Text appearance, text ko visual representation ke liye use kiye jane wale styles, colors, fonts, aur attributes ka combination hota hai. Aap text appearance ka use karke text ko bold, italic, underline, font size change, font color change, etc. kar sakte hain. Text appearance, textview (jaise AppCompatEditText) ke text ko customize karne ka powerful tareeka hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme EditText view hai.</p>`,
                      },
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Integer value, jo XML resource ya predefined text appearance style ko represent karta hai. Ye resource res/values/styles.xml ya res/values-v<version>/styles.xml mein define hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setTextClassifier",
              id: "setTextClassifier()",
              dataTypeName: `void`,
              code: `<a href="#setTextClassifier()">setTextClassifier</a>(@Nullable TextClassifier textClassifier)`,
  
              fullCode: `@RequiresApi(api = 26)</br>public void <a href="#setTextClassifier()">setTextClassifier</a>(@Nullable TextClassifier textClassifier)`,

              des: `ye method, Android API level 26 (Android Oreo) ya usse higher versions mein available hai. Is method ka use TextClassifier object ko EditText view par set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextClassifier() method ka use, EditText view mein text classification tasks ke liye custom TextClassifier object ko set karne ke liye hota hai. Aap is method ka use karke apne desired text classification behavior ko apply kar sakte hain.</p>

              <p>TextClassifier ek class hai, jo Android Oreo (API level 26) mein introduce hui hai. Ye class text classification tasks ko handle karne ke liye use hoti hai. Text classification tasks, text ko analyze karke usme se relevant information ko extract karna hota hai. Iska use language detection, entity recognition, sentiment analysis, smart replies jaise tasks mein kiya jata hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable TextClassifier textClassifier`,
                        des:`<p>Ek TextClassifier object, jo EditText view ke liye custom text classification behavior ko represent karta hai. Agar aap default text classification behavior chahte hain, to parameter ko null pass karein.</p>`,
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
  
              des: `Ye method, EditText view ke drawable state changes (jaise pressed, focused, enabled, etc.) ko handle karne ke liye use hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, EditText view ke drawable state changes ko handle karne ke liye use hota hai. Jab bhi EditText view ke drawable state mein koi change hota hai, tab yeh method call hota hai. Aap is method ka use karke view ke drawable state ke anusar view ke visual appearance ko customize kar sakte hain.</p>

                <p>Drawable state, view ke visual appearance ko represent karta hai. Har view drawable state ko track karta hai, jaise pressed (jab view par click kiya jata hai), focused (jab view focus mein hota hai), enabled (jab view interactable hai), disabled (jab view interactable nahi hai), selected (jab view ko select kiya gaya hai), etc. Jab view ke drawable state mein koi change hota hai, to view apne visual appearance ko update karta hai.</p>
                    `,
  
              parameter: [],
            },
  

          ],
        },
  
      
      },
    });
  };
  