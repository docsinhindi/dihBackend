module.exports.AppCompatDialog = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatDialog",
      hCode: `public class <a href="#AppCompatDialog">AppCompatDialog</a> extends ComponentDialog implements AppCompatCallback`,

  
      des: 
        `
        <p>AppCompatDialog class ka use karke hum AlertDialogs ko create aur customize kar sakte hain, jise Material Design guidelines aur AppCompat library ke styles aur theming ke saath sync kar sakte hain. Isse hume consistent appearance aur behavior across various Android versions aur devices milta hai.</p>

        <p>Kuch important features aur capabilities of AppCompatDialog class hai:</p>

        <ol>
        <li><b>Theming and Styling:</b> AppCompatDialog class, AppCompat library ke theming aur styling features ko support karta hai. Hum custom themes, colors, aur styles ko apply karke dialog ke appearance ko customize kar sakte hain.</li>

        <li><b>ActionBar Support:</b> AppCompatDialog class, ActionBar support provide karta hai. Dialog ke top par ActionBar jaise UI element ko display karne ke liye supportRequestWindowFeature(Window.FEATURE_ACTION_BAR) method ka use kiya jata hai.</li>

        <li><b>Contextual Actions:</b> AppCompatDialog class, ActionMode support ko bhi provide karta hai. Isse hum dialog mein contextual actions aur options ko implement kar sakte hain, jinhe user selected items, text, ya UI elements ke sath interact karne ke liye use kar sakta hai.</li>

        <li><b>Compatibility:</b> AppCompatDialog class, Android ke various versions aur devices ke saath compatibility maintain karta hai. Isse hume consistent UI aur behavior across different devices aur Android versions milta hai.</li>

        </ol>
        `,
      
        
      img: [],
  
      summary: {
        success: true,

      
        
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `AppCompatDialog`,
              id: "AppCompatDialog(Context)",
              code: `AppCompatDialog(@NonNull Context context)`,
              fullCode: `public AppCompatDialog(@NonNull Context context)`,
              des: `Ye constructor, AppCompatDialog object ko create karne ke liye hota hai.`,

              longDes: `<p>Ye constructor, AppCompatDialog object ko create karne ke liye hota hai.</p>

              <p>AppCompatDialog object create karne ke baad, hum us object par various methods ka use karke dialog ko customize aur configure kar sakte hain. Hum dialog ke layout, views, buttons, aur listeners ko set kar sakte hain, jaise hum setContentView(), findViewById(), setPositiveButton(), setNegativeButton() jaise methods ka use karte hain.</p>`,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Is constructor ka ek parameter hota hai: context, jo Context type ka hota hai. Ye parameter AppCompatDialog object ko create karne ke liye required hai. @NonNull annotation batata hai ki context parameter null nahi ho sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            
            {
              dep: false,
              name: `AppCompatDialog`,
              id: "AppCompatDialog(Context,int)",
              code: `AppCompatDialog(@NonNull Context context, int theme)`,
              fullCode: `public AppCompatDialog(@NonNull Context context, int theme)`,
              des: `Ye constructor, AppCompatDialog object ko create karne ke liye hota hai aur ek specific theme ko apply karne ki suvidha deta hai.`,

              longDes: `<p>Ye constructor, AppCompatDialog object ko create karne ke liye hota hai aur ek specific theme ko apply karne ki suvidha deta hai.</p>

              <p>AppCompatDialog constructor ka use karke hum AppCompatDialog object create kar sakte hain aur ek specific theme ko apply kar sakte hain. Theme parameter ke through hum dialog ke appearance, colors, aur styles ko customize kar sakte hain.</p>`,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context type ka parameter hai, jo AppCompatDialog object ko create karne ke liye required hai. @NonNull annotation batata hai ki context parameter null nahi ho sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `int theme`,
                        des:`<p>int type ka parameter hai, jo AppCompatDialog object ke liye apply karne wala theme resource ID hota hai. Ye parameter optional hai aur agar hum koi specific theme apply karna chahte hain, to uska resource ID pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

            
            
          ],
        },
 
     
        protectedConstructor: {
          name: "Protected constructors",
          success: false,
  
          method: [
            {
              dep: false,
              name: `AppCompatDialog`,
              id: "AppCompatDialog()",
              code: `<a href="#AppCompatDialog()">AppCompatDialog</a>(
    @NonNull Context context,
    boolean cancelable,
    @Nullable DialogInterface.OnCancelListener cancelListener
)`,
              fullCode: `protected <a href="#AppCompatDialog()">AppCompatDialog</a>(
    @NonNull Context context,
    boolean cancelable,
    @Nullable DialogInterface.OnCancelListener cancelListener
)`,

              des: `Ye constructor, AppCompatDialog object ko create karne ke liye hota hai aur dialog ke cancelable behavior aur cancel listener ko configure karne ki suvidha deta hai.`,
              longDes: `
              <p>Ye constructor, AppCompatDialog object ko create karne ke liye hota hai aur dialog ke cancelable behavior aur cancel listener ko configure karne ki suvidha deta hai.</p>
  
              <p>AppCompatDialog constructor ka use karke hum AppCompatDialog object create kar sakte hain aur dialog ke cancelable behavior ko configure kar sakte hain. Hum specify kar sakte hain ki dialog ko user cancel kar sakta hai ya nahi (cancelable parameter), aur agar cancelable hai to hum cancelListener parameter mein OnCancelListener implementation provide kar sakte hain.</p>

              <p>Agar dialog cancelable hai aur user dialog ko cancel karta hai, to OnCancelListener ke onCancel() method invoke hota hai. Is method mein hum dialog ko cancel karne ke baad koi specific action perform kar sakte hain, jaise dialog ko dismiss karna, activity ko finish karna, ya koi aur custom action perform karna.</p>
              `,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Context context`,
                      des:`<p>Context type ka parameter hai, jo AppCompatDialog object ko create karne ke liye required hai. @NonNull annotation batata hai ki context parameter null nahi ho sakta hai.</p>`,
                    },
                    {
                      dataTypeName: `boolean cancelable`,
                      des:`<p>boolean type ka parameter hai, jo batata hai ki dialog cancelable hai ya nahi. Agar cancelable parameter true hai, to dialog ko user cancel kar sakta hai, aur agar false hai, to cancel nahi kar sakta hai.</p>`,
                    },
                    {
                      dataTypeName: `@Nullable DialogInterface.OnCancelListener cancelListener`,
                      des:`<p>DialogInterface.OnCancelListener type ka parameter hai, jo dialog ka cancel event handle karne ke liye use hota hai. Ye parameter optional hai aur hum null pass kar sakte hain agar hum cancel event ko handle nahi karna chahte.</p>`,
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
                name: "addContentView",
                id: "addContentView()",
                dataTypeName: `void `,
                code: `<a href="#addContentView()">addContentView</a>(@NonNull View view, ViewGroup.LayoutParams params)`,
    
                fullCode: `public void <a href="#addContentView()">addContentView</a>(@NonNull View view, ViewGroup.LayoutParams params)`,

                des: `Ye method, AppCompatDialog object mein ek additional content view ko add karne ke liye hota hai.`,
    
                longDes: `
                <p>Ye method, AppCompatDialog object mein ek additional content view ko add karne ke liye hota hai.</p>

                <p>addContentView() method ka use karke hum AppCompatDialog object mein ek additional content view ko add kar sakte hain, jisse hum dialog ke content area mein custom views, controls, ya layouts ko include kar sakte hain.</p>
                `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull View view`,
                        des:`<p>View type ka parameter hai, jo add kiya jaane wala content view hai. Yeh view AppCompatDialog object ke existing content ke saath combine hoga.</p>`,
                      },
                      {
                        dataTypeName: `ViewGroup.LayoutParams params`,
                        des:`<p>ViewGroup.LayoutParams type ka parameter hai, jo view ke layout parameters ko define karta hai. Ye parameter optional hai aur hum null bhi pass kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    


              {
                dep: false,
                name: "dismiss",
                id: "dismiss()",
                dataTypeName: `void`,
                code: `<a href="#dismiss()">dismiss</a>()`,
    
                fullCode: `public void <a href="#dismiss()">dismiss</a>()`,

                des: `Ye method, AppCompatDialog object ko dismiss karne ke liye hota hai.`,
    
                longDes: `
                  <p>Ye method, AppCompatDialog object ko dismiss karne ke liye hota hai.</p>
    
                  <p>dismiss() method ka use karke hum AppCompatDialog object ko dismiss kar sakte hain. Jab hum dismiss() method ko call karte hain, to dialog dismiss ho jata hai, yani dialog ko hide kar diya jata hai.</p>`,
    
                parameter: [],
              },


    
              {
                dep: false,
                name: "dispatchKeyEvent",
                id: "dispatchKeyEvent()",
                dataTypeName: `boolean`,
                code: `<a href="#dispatchKeyEvent()">dispatchKeyEvent</a>(KeyEvent event)`,
    
                fullCode: `public boolean <a href="#dispatchKeyEvent()">dispatchKeyEvent</a>(KeyEvent event)`,

                des: `Ye method, key events (such as key presses) ko dialog par dispatch karne ke liye hota hai.`,
    
                longDes: `  
                  <p>dispatchKeyEvent() method ka use karke hum key events ko dialog par dispatch kar sakte hain, jisse hum dialog ke key handling behavior ko customize aur control kar sakte hain.</p>
                  
                  <p>Jab hum dispatchKeyEvent() method ko call karte hain aur event parameter mein key event pass karte hain, to dialog ke key event handling mechanism activate ho jata hai. Dialog apne views aur controls par key events ko dispatch karta hai aur unhe handle karne ka opportunity deta hai.</p>
    
                  <p>dispatchKeyEvent() method ki return value boolean hoti hai. Agar hum true return karte hain, to ye batata hai ki dialog ne key event ko handle kar liya hai aur event processing complete ho gaya hai. Agar hum false return karte hain, to ye batata hai ki dialog ne key event ko handle nahi kiya hai aur event ko further dispatch karne ke liye system ko bhejna hai.</p>`,
    
                parameter: [
                  {
                    name: "parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `KeyEvent event`,
                        des: `<p>Is method ka ek parameter hota hai: event, jo KeyEvent type ka hota hai. Ye parameter dialog par dispatch kiya jaane wala key event ko represent karta hai.</p>`,
                      },
                    ],
                  },
                ],
              },
              
    
    
              {
                dep: false,
                name: "findViewById",
                id: "findViewById()",
                dataTypeName: `@Nullable T <T extends View>`,
                code: `<a href="#findViewById()">findViewById</a>(@IdRes int id)`,
    
                fullCode: `public @Nullable T <T extends View> <a href="#findViewById()">findViewById</a>(@IdRes int id)`,

                des: `Ye method, dialog mein se specific view ko retrieve karne ke liye hota hai.`,
    
                longDes: `  
                  <p>findViewById() method ka use karke hum dialog mein se kisi bhi specific view ko retrieve kar sakte hain, jisse hum us view ke properties, methods, aur events ko access aur manipulate kar sakte hain.</p>

                  <p>Method signature mein <T extends View> generic parameter dekhne ko milta hai. Iska matlab hai ki findViewById() method ek generic method hai, jiske return type T hai, jo View class ya uski subclasses ko extend karte hai. Ye flexibility provide karta hai ki hum specific view type ko return kar sake, jaise TextView, ImageView, Button, ya koi custom View.</p>
    
                  <p>Method ka return type @Nullable T hota hai, jiske saath @Nullable annotation bhi maujood hota hai. Ye batata hai ki method null value bhi return kar sakta hai, agar specified resource ID se koi view nahi milta.</p>`,
    
                parameter: [
                  {
                    name: "parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IdRes int id`,
                        des: `<p>Is method ka ek parameter hota hai: id, jo int type ka resource ID hota hai. Ye parameter view ko identify karne ke liye use hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },
              
    

              
              {
                dep: false,
                name: "getDelegate",
                id: "getDelegate()",
                dataTypeName: `@NonNull AppCompatDelegate`,
                code: `<a href="#getDelegate()">getDelegate</a>()`,
    
                fullCode: `public @NonNull AppCompatDelegate <a href="#getDelegate()">getDelegate</a>()`,
  
                des: `Ye method, AppCompatDelegate object ko retrieve karne ke liye hota hai, jisse hum AppCompatDialog ke behavior aur customization ko further control kar sakte hain.`,
    
                longDes: `
                  <p>getDelegate() method ka use karke hum AppCompatDelegate object ko retrieve kar sakte hain, jisse hum AppCompatDialog ke behavior aur customization ko further control kar sakte hain. Isse hum dialog ke theme, styling, resource inflation, ActionMode support, back button handling, aur dusre AppCompat library ke features ko utilize aur customize kar sakte hain.</p>`,
    
                parameter: [],
              },
    

              
              {
                dep: false,
                name: "getSupportActionBar",
                id: "getSupportActionBar()",
                dataTypeName: `ActionBar`,
                code: `<a href="#getSupportActionBar()">getSupportActionBar</a>()`,
    
                fullCode: `public ActionBar <a href="#getSupportActionBar()">getSupportActionBar</a>()`,
  
                des: ` Ye method, dialog ke associated ActionBar object ko retrieve karne ke liye hota hai.`,
    
                longDes: `
                  <p>getSupportActionBar() method ka use karke hum dialog ke associated ActionBar object ko retrieve kar sakte hain. ActionBar object dialog ke title, subtitle, navigation, menu options, aur actions ke control ko provide karta hai.</p>`,
    
                parameter: [],
              },
    


              {
                dep: false,
                name: "onSupportActionModeFinished",
                id: "onSupportActionModeFinished()",
                dataTypeName: `void`,
                code: `<a href="#onSupportActionModeFinished()">onSupportActionModeFinished</a>(ActionMode mode)`,
    
                fullCode: `public void <a href="#onSupportActionModeFinished()">onSupportActionModeFinished</a>(ActionMode mode)`,
  
                des: `Ye method, dialog ke ActionMode ka ant ho jane par callback ke roop mein invoke hota hai.`,

                longDes: `<p>Ye method, dialog ke ActionMode ka ant ho jane par callback ke roop mein invoke hota hai.</p>
  
                <p>onSupportActionModeFinished() method ka use karke hum dialog ke ActionMode ka finished hone par specific actions perform kar sakte hain. ActionMode, contextual actions aur operations ke liye temporary UI aur functionality provide karta hai. Jab ActionMode khatam ho jata hai, to onSupportActionModeFinished() method invoke hota hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionMode mode`,
                        des: `<p>Method ka ek parameter hota hai: mode, jo ActionMode type ka hota hai. Ye parameter, ActionMode object ko represent karta hai, jisse hum ActionMode se related information aur actions ko access kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    

              {
                dep: false,
                name: "onSupportActionModeStarted",
                id: "onSupportActionModeStarted()",
                dataTypeName: `void`,
                code: `<a href="#onSupportActionModeStarted()">onSupportActionModeStarted</a>(ActionMode mode)`,
    
                fullCode: `public void <a href="#onSupportActionModeStarted()">onSupportActionModeStarted</a>(ActionMode mode)`,
  
                des: `Ye method, dialog mein ActionMode shuru hone par callback ke roop mein invoke hota hai.`,
                
                longDes: `<p>Ye method, dialog mein ActionMode shuru hone par callback ke roop mein invoke hota hai.</p>
  
                <p>onSupportActionModeStarted() method ka use karke hum dialog ke ActionMode shuru hone par specific actions perform kar sakte hain. ActionMode, contextual actions aur operations ke liye temporary UI aur functionality provide karta hai. Jab ActionMode shuru hota hai, to onSupportActionModeStarted() method invoke hota hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionMode mode`,
                        des: `<p>Method ka ek parameter hota hai: mode, jo ActionMode type ka hota hai. Ye parameter, ActionMode object ko represent karta hai, jisse hum ActionMode se related information aur actions ko access kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    

              {
                dep: false,
                name: "onWindowStartingSupportActionMode",
                id: "onWindowStartingSupportActionMode()",
                dataTypeName: `@Nullable ActionMode`,
                code: `<a href="#onWindowStartingSupportActionMode()">onWindowStartingSupportActionMode</a>(ActionMode.Callback callback)`,
    
                fullCode: `public @Nullable ActionMode <a href="#onWindowStartingSupportActionMode()">onWindowStartingSupportActionMode</a>(ActionMode.Callback callback)`,
  
                des: `Ye method, ActionMode shuru hone se pehle callback ke roop mein invoke hota hai, jisse hum custom ActionMode object ko provide kar sakte hain.`,

                longDes: `<p>Ye method, ActionMode shuru hone se pehle callback ke roop mein invoke hota hai, jisse hum custom ActionMode object ko provide kar sakte hain.</p>
  
                <p>onWindowStartingSupportActionMode() method ki return value @Nullable ActionMode hoti hai. Agar hum null return karte hain, to ye batata hai ki hum custom ActionMode ko provide nahi kar rahe hain aur default ActionMode behavior ka use hona chahiye. Agar hum non-null ActionMode return karte hain, to ye batata hai ki hum apna custom ActionMode object provide kar rahe hain, jisse dialog mein shuru hone wala ActionMode use hoga.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionMode.Callback callback`,
                        des: `<p>Method ka ek parameter hota hai: callback, jo ActionMode.Callback type ka hota hai. Ye parameter, ActionMode ke callback object ko represent karta hai, jisse hum ActionMode ke events aur actions ko handle aur control kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
    
              {
                dep: false,
                name: "setContentView",
                id: "setContentView(int)",
                dataTypeName: `void`,
                code: `<a href="#setContentView(int)">setContentView</a>(@LayoutRes int layoutResID)`,
    
                fullCode: `public void <a href="#setContentView(int)">setContentView</a>(@LayoutRes int layoutResID)`,
  
                des: `Ye method, dialog ke content area ko ek layout resource se inflate karne ke liye hota hai.`,

                longDes: `<p>setContentView() method ka use karke hum dialog ke content area mein ek layout resource ko inflate kar sakte hain. Yeh layout resource dialog ke visible content aur UI elements ko define karta hai.</p>
  
                <p>setContentView() method ka use karke hum dialog ke content area mein layout resource ko inflate kar sakte hain, jisse hum dialog ke content area mein custom views, controls, aur layouts ko include kar sakte hain.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@LayoutRes int layoutResID`,
                        des: `<p>Method ka ek parameter hota hai: layoutResID, jo int type ka layout resource ID hota hai. Hum is parameter mein layout resource ID pass karke dialog ke content area ko set kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
              {
                dep: false,
                name: "setContentView",
                id: "setContentView(View)",
                dataTypeName: `void`,
                code: `<a href="#setContentView(View)">setContentView</a>(@NonNull View view)`,
    
                fullCode: `public void <a href="#setContentView(View)">setContentView</a>(@NonNull View view)`,
  
                des: `Ye method, dialog ke content area mein ek View object ko set karne ke liye hota hai.`,

                longDes: `<p>setContentView() method ka use karke hum dialog ke content area mein ek View object ko set kar sakte hain. Yeh View object dialog ke visible content aur UI elements ko represent karta hai.</p>
  
                <p>setContentView() method ka use karke hum dialog ke content area mein ek View object ko set kar sakte hain, jisse hum dialog ke content area mein custom views, controls, aur layouts ko include kar sakte hain.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull View view`,
                        des: `<p>Method ka ek parameter hota hai: view, jo View type ka hota hai. Hum is parameter mein dialog ke content area mein set karna chahe view object ko pass kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
    
              {
                dep: false,
                name: "setContentView",
                id: "setContentView(View,ViewGroup.LayoutParams)",
                dataTypeName: `void`,
                code: `<a href="#setContentView(View,ViewGroup.LayoutParams)">setContentView</a>(@NonNull View view, ViewGroup.LayoutParams params)`,
    
                fullCode: `public void <a href="#setContentView(View,ViewGroup.LayoutParams)">setContentView</a>(@NonNull View view, ViewGroup.LayoutParams params)`,
  
                des: `Ye method, dialog ke content area mein ek View object ko set karne ke liye hota hai, sath hi sath us view ke layout parameters ko bhi specify karne ka option deta hai.`,

                longDes: `<p>setContentView() method ka use karke hum dialog ke content area mein ek View object ko set kar sakte hain aur uske saath-saath us view ke layout parameters ko bhi define kar sakte hain. Yeh View object dialog ke visible content aur UI elements ko represent karta hai.</p>
  `,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull View view`,
                        des: `<p>View type ka parameter hai jo dialog ke content area mein set karna hai. Hum is parameter mein dialog ke content area mein set karna chahe view object ko pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `ViewGroup.LayoutParams params`,
                        des: `<p>ViewGroup.LayoutParams type ka parameter hai jo view ke layout parameters ko define karta hai. Hum is parameter mein view ke desired layout parameters ko specify kar sakte hain, jaise width, height, margins, gravity, etc.</p>`,
                      },
                    ],
                  },
                ],
              },
    
              //


    
              {
                dep: false,
                name: "setTitle",
                id: "setTitle(CharSequence)",
                dataTypeName: `void`,
                code: `<a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,
    
                fullCode: `public void <a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,
  
                des: `Ye method, dialog ke title ko set karne ke liye hota hai.`,

                longDes: `<p>setTitle() method ka use karke hum dialog ke title ko customize aur set kar sakte hain. Title dialog ke header area mein display hota hai aur dialog ka purpose ya content ko describe karta hai.</p>
  
                <p>setTitle() method ka use karke hum dialog ke title ko set kar sakte hain, jisse hum dialog ke header area mein title text ko display kar sakte hain.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence title`,
                        des: `<p>Method ka ek parameter hota hai: title, jo CharSequence type ka hota hai. Hum is parameter mein dialog ke title ke corresponding text, string, ya CharSequence ko pass kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    



              {
                dep: false,
                name: "setTitle",
                id: "setTitle(int)",
                dataTypeName: `void`,
                code: `<a href="#setTitle(int)">setTitle</a>(int titleId)`,
    
                fullCode: `public void <a href="#setTitle(int)">setTitle</a>(int titleId)`,
  
                des: `Ye method, dialog ke title ko set karne ke liye hota hai, jahan title ki resource ID ka use hota hai.`,

                longDes: `<p>setTitle() method ka use karke hum dialog ke title ko customize aur set kar sakte hain. Title dialog ke header area mein display hota hai aur dialog ka purpose ya content ko describe karta hai.</p>
              
                <p>setTitle() method ka use karke hum dialog ke title ko set kar sakte hain, jisse hum dialog ke header area mein title text ko display kar sakte hain.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int titleId`,
                        des: `<p>Method ka ek parameter hota hai: titleId, jo int type ka hota hai. Hum is parameter mein dialog ke title ke corresponding string resource ID ko pass kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },
    

              {
                dep: false,
                name: "supportRequestWindowFeature",
                id: "supportRequestWindowFeature()",
                dataTypeName: `boolean`,
                code: `<a href="#supportRequestWindowFeature()">supportRequestWindowFeature</a>(int featureId)`,
    
                fullCode: `public boolean <a href="#supportRequestWindowFeature()">supportRequestWindowFeature</a>(int featureId)`,
  
                des: `Ye method, dialog ke window features ko request karne aur enable/disable karne ke liye hota hai.`,

                longDes: `<p>supportRequestWindowFeature() method ka use karke hum dialog ke window features ko request kar sakte hain. Window features dialog ke window level properties ko control karte hain, jaise title bar, progress bar, action bar, fullscreen mode, etc.</p>
              
                <p>supportRequestWindowFeature() method ka use karke hum dialog ke window features ko request kar sakte hain. Method ka return type boolean hota hai, jo request ke successful hone par true return karta hai aur agar request supported nahi hai to false return karta hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int featureId`,
                        des: `<p>Method ka ek parameter hota hai: featureId, jo int type ka hota hai. Hum is parameter mein enable/disable karna chahe window feature ke corresponding feature ID ko pass kar sakte hain.</p>`,
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
                name: "onCreate",
                id: "onCreate()",
                dataTypeName: `void`,
                code: `<a href="#onCreate()">onCreate</a>(Bundle savedInstanceState)`,
    
                fullCode: `protected void <a href="#onCreate()">onCreate</a>(Bundle savedInstanceState)`,

                des: `Ye method, dialog ke creation process ka hissa hota hai aur dialog ke initialization aur setup ko handle karta hai.`,
    
                longDes: `
                <p>Ye method, dialog ke creation process ka hissa hota hai aur dialog ke initialization aur setup ko handle karta hai.</p>

                <p>onCreate() method ke andar hum dialog ke initialization aur setup logic ko implement kar sakte hain. Ye method subclasses mein override kiya jaata hai, jisse dialog ke specific behavior aur functionality customize kiya jaa sake.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Bundle savedInstanceState`,
                        des:`<p>Method ka ek parameter hota hai: savedInstanceState, jo Bundle type ka hota hai. Ye parameter dialog ke saved state ko represent karta hai, jisse hum dialog ke previous states ko restore kar sakte hain.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "onStop",
                id: "onStop()",
                dataTypeName: `void`,
                code: `<a href="#onStop()">onStop</a>()`,
    
                fullCode: `protected void <a href="#onStop()">onStop</a>()`,

                des: `Ye method, dialog ke onStop lifecycle event ko handle karta hai.`,
    
                longDes: `
                <p>onStop() method ka use karke hum dialog ke onStop event par specific actions perform kar sakte hain. onStop event tab trigger hota hai jab dialog visible state se invisible state mein transition hota hai.</p>

                <p>onStop() method dialog ke lifecycle ka ek important callback hai, jise subclasses mein override kiya jata hai, jisse specific behavior aur functionality implement ki ja sake.</p>
                    `,
    
                parameter: [],
              },
            ]
        }
    

  
        
      },
    });
  };
  