module.exports.AlertDialog = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AlertDialog",
      hCode: `public class <a href="#AlertDialog">AlertDialog</a> extends AppCompatDialog implements DialogInterface`,
  
      des: 
        `<p>AlertDialog class Android ke framework mein hai aur iska upyog dialog box (popup window) ko display karne ke liye kiya jata hai. Dialog box user se additional information, confirmation, input, ya prompt lena ke liye istemal hota hai.</p>

        <p>AlertDialog class ek powerful aur versatile component hai, jo application mein interactive dialogs create karne mein madad karta hai. Is class ke through hum various types ke dialogs create kar sakte hain, jaise:</p>

        <ol>
        <li>Alert Dialogs: Alert dialogs error, warning, ya informational messages ko user ko display karne ke liye istemal hote hain. Yeh dialogs usually OK button ke saath aate hain, jisse user message padhkar acknowledge kar sakta hai.</li>
        <li>Confirmation Dialogs: Confirmation dialogs user se confirmations, decisions, ya choices lene ke liye istemal hote hain. Yeh dialogs usually OK aur Cancel buttons ke saath aate hain, jisse user se yes/no ya haan/naa ka response liya ja sakta hai.</li>
        <li>Input Dialogs: Input dialogs user se text, number, date, ya other input values lene ke liye istemal hote hain. Yeh dialogs usually text field(s) aur OK/Cancel buttons ke saath aate hain, jisse user input provide kar sakta hai.</li>
        <li>Custom Dialogs: AlertDialog class ke istemal se hum custom dialogs bhi create kar sakte hain, jisme hum apne design aur layout ko define kar sakte hain. Custom dialogs ke andar hum text, buttons, images, aur any other UI elements ko bhi add kar sakte hain.</li>
        </ol>
        `,
      
      img: [
        {
          url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
          label: "Action bar",
          fig: "Figure 1.",
        },
      ],
  
      summary: {
        success: true,

        nestedType: {
            name: "Nested Types",
            success: true,
    
            method: [
              {
                name: `public class AlertDialog.Builder`,
                des: ``,
                dep: false,
                longDes: ``,
              },
    
              
            ],
          },
  
     
        protectedConstructor: {
          name: "Protected constructors",
          success: false,
  
          method: [
            {
              dep: false,
              name: `AlertDialog`,
              id: "AlertDialog(Context)",
              code: `<a href="#AlertDialog(Context)">AlertDialog</a>(@NonNull Context context)`,
              fullCode: `protected <a href="#AlertDialog(Context)">AlertDialog</a>(@NonNull Context context)`,

              des: `protected AlertDialog(@NonNull Context context) constructor AlertDialog object ko initialize karne ke liye aur dialog box ko customize karne ke liye use hota hai.`,
              longDes: `
              <p>Ye constructor ek AlertDialog object banane ke liye use hota hai.

              Is constructor mein context parameter ke roop mein ek Context object pass kiya jata hai. Context object application ka context provide karta hai, jisse dialog box ko create aur display karne ke liye necessary resources aur information milti hai.</p>
  
              <p>Dialog box banane ke liye, is constructor ke sath ek Context object pass kiya jata hai. Context object application ke context provide karta hai, jisse dialog box ko application ke theme, resources, aur configuration ke hisab se create kiya jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context context`,
                      des:`<p>is constructor ke sath ek Context object pass kiya jata hai. Context object application ke context provide karta hai.</p>`,
                    },
                  ],
                },
                
              ],
            }, 
            

            {
              dep: false,
              name: `AlertDialog`,
              id: "AlertDialog(Context,int)",
              code: `<a href="#AlertDialog(Context,int)">AlertDialog</a>(@NonNull Context context, @StyleRes int themeResId)`,
              fullCode: `protected <a href="#AlertDialog(Context,int)">AlertDialog</a>(@NonNull Context context, @StyleRes int themeResId)`,

              des: `protected AlertDialog(@NonNull Context context, @StyleRes int themeResId) constructor AlertDialog object ko initialize karne ke liye aur dialog box ka theme customize karne ke liye use hota hai.`,
              longDes: `
              <p>Ye constructor ek AlertDialog object banane ke liye use hota hai aur dialog box ka theme (style) customize karne ke liye istemal hota hai.</p>
  
              <p>AlertDialog class ke is constructor ka upyog AlertDialog object banane ke liye kiya jata hai, jisse hum dialog box ko customize aur configure kar sakte hain. Dialog box ke appearance, buttons, message, aur behavior ko set karne ke liye alag-alag methods ka istemal kiya jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context context`,
                      des:`<p>Ye parameter ek Context object hai, jisse dialog box ko create aur display karne ke liye necessary resources aur information milti hai. Context object application ka context provide karta hai.</p>`,
                    },
                    {
                      dataTypeName: `@StyleRes int themeResId`,
                      des:`<p>Ye parameter ek @StyleRes annotation ke saath ek integer value hai. Isse hum ek specific theme (style) resource ID pass kar sakte hain, jisse dialog box us theme ke hisab se customize hota hai.</p>`,
                    },
                  ],
                },
              ],
            }, 
            
             

            {
              dep: false,
              name: `AlertDialog`,
              id: "AlertDialog(Context,boolean,DialogInterface.OnCancelListener)",

              code: `<a href="#AlertDialog(Context,boolean,DialogInterface.OnCancelListener)">AlertDialog</a>(
                @NonNull Context context,
                boolean cancelable,
                @Nullable DialogInterface.OnCancelListener cancelListener
            )`,

              fullCode: `protected <a href="#AlertDialog(Context,boolean,DialogInterface.OnCancelListener)">AlertDialog</a>(
                @NonNull Context context,
                boolean cancelable,
                @Nullable DialogInterface.OnCancelListener cancelListener
            )`,

              des: `protected AlertDialog(@NonNull Context context, boolean cancelable, @Nullable DialogInterface.OnCancelListener cancelListener) constructor AlertDialog object ko initialize karne ke liye aur dialog box ke cancelable behavior ko configure karne ke liye use hota hai.`,
              longDes: `
              <p>Ye constructor ek AlertDialog object banane ke liye use hota hai aur dialog box ke cancelable behavior ko configure karne ke liye istemal hota hai.</p>
  
              <p>AlertDialog class ke is constructor ka upyog AlertDialog object banane ke liye kiya jata hai. Hum is constructor ke madhyam se dialog box ka cancelable behavior set kar sakte hain. Isse hum dialog box ko user ke cancel action ke anusaar handle kar sakte hain.

              Agar cancelable parameter ki value true hai, to dialog box ko user cancel kar sakta hai aur cancelListener ke through cancel event ko handle kiya ja sakta hai. Aur agar cancelable ki value false hai, to dialog box ko user cancel nahi kar sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context context`,
                      des:`<p>Ye parameter ek Context object hai, jisse dialog box ko create aur display karne ke liye necessary resources aur information milti hai. Context object application ka context provide karta hai.</p>`,
                    },
                    {
                      dataTypeName: `boolean cancelable`,
                      des:`<p>cancelable: Ye parameter ek boolean value hai, jo dialog box ko cancelable ya non-cancelable behavior set karne ke liye istemal hota hai. Agar is parameter ki value true hai, to dialog box ko user cancel kar sakta hai. Aur agar value false hai, to dialog box ko user cancel nahi kar sakta hai.</p>`,
                    },
                    {
                      dataTypeName: `@Nullable DialogInterface.OnCancelListener cancelListener`,
                      des:`<p>cancelListener: Ye parameter ek DialogInterface.OnCancelListener object hai, jisse dialog box ka cancel event handle karne ke liye istemal kiya jata hai. OnCancelListener interface ek callback method provide karta hai, jisse dialog box cancel hone par specific action liya ja sakta hai.</p>`,
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
                name: "getButton",
                id: "getButton()",
                dataTypeName: `Button`,
                code: `<a href="#getButton()">getButton</a>(int whichButton)`,
    
                fullCode: `public Button <a href="#getButton()">getButton</a>(int whichButton)`,
                des: `Is method ka upyog AlertDialog me diye gaye button ke refernce ko prapt karne ke liye kiya jata hai.`,
    
                longDes: `
                <p>Is method ka upyog AlertDialog me diye gaye button ke refernce ko prapt karne ke liye kiya jata hai.</p>

                <p>Is method ko "whichButton" parameter ke through ek button identifier (constant) pass kiya jata hai. Ye identifier, AlertDialog.BUTTON_POSITIVE, AlertDialog.BUTTON_NEGATIVE, ya AlertDialog.BUTTON_NEUTRAL constant ke value ko represent karta hai. Har ek constant AlertDialog ke ek specific button ko represent karta hai:</p>

                <ul>
                <li>AlertDialog.BUTTON_POSITIVE: Is constant se positive button ko refer kiya jata hai, jaisa ki OK button hota hai.</li>
                <li>AlertDialog.BUTTON_NEGATIVE: Is constant se negative button ko refer kiya jata hai, jaisa ki Cancel button hota hai.</li>
                <li>AlertDialog.BUTTON_NEUTRAL: Is constant se neutral button ko refer kiya jata hai, jaisa ki "May be" ya "Ignore" button hota hai.</li>
                </ul>
                <p>Method ka return type Button hota hai, jiske dwara hum button ke properties aur events ko control kar sakte hai. Ye method hume AlertDialog ke specified button ka refernce provide karta hai. Hum is refernce ka upyog button par click event listeners attach karne, text ko badalne, button ko hide/show karne, ya koi dusra button operation karne ke liye kar sakte hai.</p>
                `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int whichButton`,
                        des:`<p>getButton() method ko whichButton parameter ke saath call kiya jata hai, aur iska return value Button object hota hai. Yeh Button object dialog box ke specific button ko represent karta hai.</p>`,
                      },
                    ],
                  },
                  {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Button`,
                        des:`<p>getButton() method ko whichButton parameter ke saath call kiya jata hai, aur iska return value Button object hota hai.</p>`,
                      },
                    ],
                  },
                 
                ],
              },
    


              {
                dep: false,
                name: "getListView",
                id: "getListView()",
                dataTypeName: `ListView`,
                code: `<a href="#getListView()">getListView</a>()`,
    
                fullCode: `public ListView <a href="#getListView()">getListView</a>()`,
                des: `Is method ka upyog AlertDialog me diye gaye ListView ka refernce prapt karne ke liye kiya jata hai.`,
    
                longDes: `
                  <p>Ye method AlertDialog ke ListView ko represent karta hai, jo dialog box ke andar dikhane ke liye items ki list ko display karta hai. ListView ek Android framework component hai jo vertical scrolling list of items ko show karta hai.</p>
    
                  <p>Method ka return type ListView hota hai, jiske dwara hum ListView ke properties aur events ko control kar sakte hai. Hum is refernce ka upyog ListView ke data ko set karne, item click listeners attach karne, scroll karne, ya koi dusra ListView operation karne ke liye kar sakte hai.</p>`,
    
                parameter: [
                  {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ListView`,
                        des: `<p>Jab getListView() method ko call kiya jata hai, AlertDialog se maujood ListView ka reference return hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },


    
              {
                dep: false,
                name: "onKeyDown",
                id: "onKeyDown()",
                dataTypeName: `boolean`,
                code: `<a href="#onKeyDown()">onKeyDown</a>(int keyCode, KeyEvent event)`,
    
                fullCode: `public boolean <a href="#onKeyDown()">onKeyDown</a>(int keyCode, KeyEvent event)`,

                des: `Is method ka upyog AlertDialog mein ek key event (keyboard event) ko handle karne ke liye kiya jata hai.`,
    
                longDes: `  
                  <p>Method mein "keyCode" parameter ke through ek key code pass kiya jata hai, jo event ke sath associated hai. Ye key code specific keyboard key (such as Back, Enter, Escape, etc.) ko represent karta hai. "event" parameter ek KeyEvent object hai, jisme key event ki details, jaise key press, release, modifiers, etc., hoti hai.</p>
    
                  <p>Method ka return type boolean hota hai. Agar hum method mein true return karte hai, to ye indicate karta hai ki humne key event ko handle kar liya hai aur koi further processing nahi kiya jana chahiye. Agar hum false return karte hai, to ye indicate karta hai ki humne key event ko handle nahi kiya hai aur default key event handling continue hona chahiye.</p>`,
    
                parameter: [
                  {
                    name: "parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int keyCode`,
                        des: `<p> "keyCode" parameter ke through ek key code pass kiya jata hai, jo event ke sath associated hai. Ye key code specific keyboard key (such as Back, Enter, Escape, etc.) ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `KeyEvent event`,
                        des: `<p>"event" parameter ek KeyEvent object hai, jisme key event ki details, jaise key press, release, modifiers, etc., hoti hai.</p>`,
                      }
                    ],
                  },
                ],
              },
              
    
    
              {
                dep: false,
                name: "onKeyUp",
                id: "onKeyUp()",
                dataTypeName: `boolean`,
                code: `<a href="#onKeyUp()">onKeyUp</a>(int keyCode, KeyEvent event)`,
    
                fullCode: `public boolean <a href="#onKeyUp()">onKeyUp</a>(int keyCode, KeyEvent event)`,

                des: `Is method ka upyog AlertDialog mein ek key event (keyboard event) ko handle karne ke liye kiya jata hai, jab key press complete ho jata hai (key release event).`,
    
                longDes: `  
                  <p>Method mein "keyCode" parameter ke through ek key code pass kiya jata hai, jo event ke sath associated hai. Ye key code specific keyboard key (jaise Back, Enter, Escape, etc.) ko represent karta hai. "event" parameter ek KeyEvent object hai, jisme key event ki details, jaise key press, release, modifiers, etc., hoti hai.</p>
    
                  <p>Method ka return type boolean hota hai. Agar hum method mein true return karte hai, to ye indicate karta hai ki humne key event ko handle kar liya hai aur koi further processing nahi kiya jana chahiye. Agar hum false return karte hai, to ye indicate karta hai ki humne key event ko handle nahi kiya hai aur default key event handling continue honi chahiye.</p>`,
    
                parameter: [
                  {
                    name: "parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int keyCode`,
                        des: `<p> "keyCode" parameter ke through ek key code pass kiya jata hai, jo event ke sath associated hai. Ye key code specific keyboard key (jaise Back, Enter, Escape, etc.) ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `KeyEvent event`,
                        des: `<p>"event" parameter ek KeyEvent object hai, jisme key event ki details, jaise key press, release, modifiers, etc., hoti hai.</p>`,
                      }
                    ],
                  },
                ],
              },
              
    
              {
                dep: false,
                name: "setButton",
                id: "setButton(int,CharSequence,DialogInterface.OnClickListener)",
                dataTypeName: `void`,
                code: `<a href="#setButton(int,CharSequence,DialogInterface.OnClickListener)">setButton</a>(
                    int whichButton,
                    CharSequence text,
                    DialogInterface.OnClickListener listener
                )`,
    
                fullCode: `public void <a href="#setButton(int,CharSequence,DialogInterface.OnClickListener)">setButton</a>(
                    int whichButton,
                    CharSequence text,
                    DialogInterface.OnClickListener listener
                )`,
  
                des: `Is method ka upyog AlertDialog me button ko set karne ke liye kiya jata hai.`,
    
                longDes: `
    
                  <p>AlertDialog class mein setButton method ka upyog kiya jata hai jab hum AlertDialog mein ek button ko add karna chahte hai. Is method ki madad se hum AlertDialog ke button ko customize kar sakte hai, jaise uspar text set karne aur click event handling logic ko define karne ke liye.</p>
  
                  <p>Hum setButton method ka upyog karke AlertDialog mein positive, negative, ya neutral button ko add kar sakte hai. Button par click hone par, listener object ke onClick method call hoga, jisse hum button click event ko handle kar sakte hai.</p>`,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int whichButton`,
                        des: `<p>whichButton" parameter ek integer hai, jo button ka identifier (constant) represent karta hai. Ye identifier, AlertDialog.BUTTON_POSITIVE, AlertDialog.BUTTON_NEGATIVE, ya AlertDialog.BUTTON_NEUTRAL constant ke value ko represent karta hai. Har ek constant AlertDialog ke ek specific button ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `CharSequence text`,
                        des: `<p>"text" parameter ek CharSequence object hai, jisme button par dikhane ke liye text hota hai.</p>`,
                      },
                      {
                        dataTypeName: `DialogInterface.OnClickListener listener`,
                        des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jo button par click event ko handle karne ke liye use kiya jata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    

              
              {
                dep: false,
                name: "setButton",
                id: "setButton(int,CharSequence,Message)",
                dataTypeName: `void`,
                code: `<a href="#setButton(int,CharSequence,Message)">setButton</a>(int whichButton, CharSequence text, Message msg)`,
    
                fullCode: `public void <a href="#setButton(int,CharSequence,Message)">setButton</a>(int whichButton, CharSequence text, Message msg)`,
  
                des: `Is method ka upyog AlertDialog mein button ko set karne ke liye kiya jata hai, lekin yahan par "msg" parameter ki jagah "OnClickListener" parameter ki jagah "Message" object pass kiya jata hai.`,
    
                longDes: `
    
                  <p>AlertDialog class mein setButton method ka upyog kiya jata hai jab hum AlertDialog mein ek button ko add karna aur uspar click event handling ko define karna chahte hai. Is method ki madad se hum button ko customize kar sakte hai, jaise uspar text set karne aur click event ke liye message ko assign karne ke liye.</p>
  
                  <p>Jab button par click hota hai, to assign kiya gaya message (msg) handler ke through process kiya jata hai. Is message ke dwara hum button click event ko handle kar sakte hai aur uspar corresponding actions ko perform kar sakte hai.</p>`,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int whichButton`,
                        des: `<p>whichButton" parameter ek integer hai, jo button ka identifier (constant) represent karta hai. Ye identifier, AlertDialog.BUTTON_POSITIVE, AlertDialog.BUTTON_NEGATIVE, ya AlertDialog.BUTTON_NEUTRAL constant ke value ko represent karta hai. Har ek constant AlertDialog ke ek specific button ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `CharSequence text`,
                        des: `<p>"text" parameter ek CharSequence object hai, jisme button par dikhane ke liye text hota hai.</p>`,
                      },
                      {
                        dataTypeName: `Message msg`,
                        des: `<p>"msg" parameter ek Message object hai, jisme button click event ko handle karne ke liye ek message hota hai. Ye message, handler ke through process kiya jata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    

              
              {
                dep: false,
                name: "setButton",
                id: "setButton(int,CharSequence,Drawable,DialogInterface.OnClickListener)",
                dataTypeName: `void`,
                code: `<a href="#setButton(int,CharSequence,Drawable,DialogInterface.OnClickListener)">setButton</a>(
                    int whichButton,
                    CharSequence text,
                    Drawable icon,
                    DialogInterface.OnClickListener listener
                )`,
    
                fullCode: `public void <a href="#setButton(int,CharSequence,Drawable,DialogInterface.OnClickListener)">setButton</a>(
                    int whichButton,
                    CharSequence text,
                    Drawable icon,
                    DialogInterface.OnClickListener listener
                )`,
  
                des: `Is method ka upyog AlertDialog me button ko set karne ke liye kiya jata hai, jisme button par text, icon, aur click event handler ko customize kiya jata hai.`,
    
                longDes: `
    
                  <p>AlertDialog class mein setButton method ka upyog kiya jata hai jab hum AlertDialog mein ek button ko add karna aur uspar click event handling ko define karna chahte hai. Is method ki madad se hum button ko customize kar sakte hai, jaise uspar text aur icon set karne aur click event handling logic ko define karne ke liye.</p>
  
                  <p>Hum setButton method ka upyog karke AlertDialog mein positive, negative, ya neutral button ko add kar sakte hai. Button par click hone par, listener object ke onClick method call hoga, jisse hum button click event ko handle kar sakte hai aur uspar corresponding actions ko perform kar sakte hai.</p>`,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int whichButton`,
                        des: `<p>whichButton" parameter ek integer hai, jo button ka identifier (constant) represent karta hai. Ye identifier, AlertDialog.BUTTON_POSITIVE, AlertDialog.BUTTON_NEGATIVE, ya AlertDialog.BUTTON_NEUTRAL constant ke value ko represent karta hai. Har ek constant AlertDialog ke ek specific button ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `CharSequence text`,
                        des: `<p>"text" parameter ek CharSequence object hai, jisme button par dikhane ke liye text hota hai.</p>`,
                      },
                      {
                        dataTypeName: `Drawable icon`,
                        des: `<p>"icon" parameter ek Drawable object hai, jisme button ke sath associate kiya jane wala icon hota hai.</p>`,
                      },
                      {
                        dataTypeName: `DialogInterface.OnClickListener listener`,
                        des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jo button par click event ko handle karne ke liye use kiya jata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    

              
              {
                dep: false,
                name: "setCustomTitle",
                id: "setCustomTitle()",
                dataTypeName: `void`,
                code: `<a href="#setCustomTitle()">setCustomTitle</a>(View customTitleView)`,
    
                fullCode: `public void <a href="#setCustomTitle()">setCustomTitle</a>(View customTitleView)`,
  
                des: `Is method ka upyog AlertDialog me custom title view ko set karne ke liye kiya jata hai.`,
    
                longDes: `
                  <p>AlertDialog class mein setCustomTitle method ka upyog kiya jata hai jab hum AlertDialog mein ek custom title view ko add karna aur dikhana chahte hai. Is method ki madad se hum apne design ke anuroop title view ko customize kar sakte hai, jaise custom layout, text styling, icons, etc., ka upyog karke.</p>
    
                  <p>Hum is method ke dwara apne layout file se title view inflate karke set kar sakte hai ya fir programatically ek custom view create karke set kar sakte hai.</p>`,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View customTitleView`,
                        des: `<p>"customTitleView" parameter ek View object hai, jisme custom title view ko represent karta hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    


              {
                dep: false,
                name: "setIcon",
                id: "setIcon()",
                dataTypeName: `void`,
                code: `<a href="#setIcon()">setIcon</a>(Drawable icon)`,
    
                fullCode: `public void <a href="#setIcon()">setIcon</a>(Drawable icon)`,
  
                des: `Is method ka upyog AlertDialog me icon ko set karne ke liye kiya jata hai.`,

                longDes: `<p>AlertDialog class mein setIcon method ka upyog kiya jata hai jab hum AlertDialog mein ek icon ko add karna aur dikhana chahte hai. Is method ki madad se hum AlertDialog ke title bar ya dialog box ke samarthan mein ek icon set kar sakte hai.</p>
  
                <p>Hum is method ke dwara Drawable resource, VectorDrawable, ya Bitmap jaise various icon sources ka upyog karke icon ko set kar sakte hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable icon`,
                        des: `<p>"icon" parameter ek Drawable object hai, jisme icon ko represent karta hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    

              {
                dep: false,
                name: "setIcon",
                id: "setIcon()",
                dataTypeName: `void`,
                code: `<a href="#setIcon()">setIcon</a>(int resId)`,
    
                fullCode: `public void <a href="#setIcon()">setIcon</a>(int resId)`,
  
                des: `Is method ka upyog AlertDialog me icon ko set karne ke liye kiya jata hai.`,
                
                longDes: `<p>AlertDialog class mein setIcon method ka upyog kiya jata hai jab hum AlertDialog mein ek icon ko add karna aur dikhana chahte hai. Is method ki madad se hum AlertDialog ke title bar ya dialog box ke samarthan mein ek icon set kar sakte hai.</p>
  
                <p>Hum is method ke dwara drawable resource ID ko pass karke icon ko set kar sakte hai, jaise R.drawable.icon_name. Ye resource ID, drawable resource file se corresponding icon ko represent karta hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resId`,
                        des: `<p>"resId" parameter ek integer hai, jisme icon ka resource ID (drawable resource) pass kiya jata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
              {
                dep: false,
                name: "setIconAttribute",
                id: "setIconAttribute()",
                dataTypeName: `void`,
                code: `<a href="#setIconAttribute()">setIconAttribute</a>(int attrId)`,
    
                fullCode: `public void <a href="#setIconAttribute()">setIconAttribute</a>(int attrId)`,
  
                des: `Is method ka upyog AlertDialog me icon attribute ko set karne ke liye kiya jata hai.`,
                longDes: `<p>AlertDialog class mein setIconAttribute method ka upyog kiya jata hai jab hum AlertDialog mein icon attribute ko apply karna chahte hai. Ye method AlertDialog theme ke icon attribute ko set karne ke liye upyog hota hai, jisse AlertDialog ke title bar ya dialog box ke samarthan mein ek icon dikhaya ja sakta hai.</p>
  
                <p>Hum is method ke dwara icon attribute ke resource ID (attrId) ko pass kar sakte hai, jaise R.attr.iconAttribute. Ye resource ID, theme se corresponding icon attribute ko represent karta hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int attrId`,
                        des: `<p>"attrId" parameter ek integer hai, jisme icon attribute ka resource ID pass kiya jata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
    
              {
                dep: false,
                name: "setMessage",
                id: "setMessage()",
                dataTypeName: `void`,
                code: `<a href="#setMessage()">setMessage</a>(CharSequence message)`,
    
                fullCode: `public void <a href="#setMessage()">setMessage</a>(CharSequence message)`,
  
                des: `Is method ka upyog AlertDialog me message ko set karne ke liye kiya jata hai.`,

                longDes: `<p>AlertDialog class mein setMessage method ka upyog kiya jata hai jab hum AlertDialog mein ek message ko set karna aur dikhana chahte hai. Is method ki madad se hum AlertDialog ke dialog box ke andar ka message text customize kar sakte hai.</p>
  
                <p>Hum is method ke dwara dialog box ke message ko programatically control kar sakte hai aur use apne application ke requirements ke anurup modify kar sakte hai. Hum kisi CharSequence object, jaise String, Spannable, ya StringBuilder ka upyog karke message text ko set kar sakte hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence message`,
                        des: `<p>"message" parameter ek CharSequence object hai, jisme dialog box ke message ka text hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    


    
              {
                dep: false,
                name: "setTitle",
                id: "setTitle()",
                dataTypeName: `void`,
                code: `<a href="#setTitle()">setTitle</a>(CharSequence title)`,
    
                fullCode: `public void <a href="#setTitle()">setTitle</a>(CharSequence title)`,
  
                des: `Is method ka upyog AlertDialog me title ko set karne ke liye kiya jata hai.`,

                longDes: `<p>AlertDialog class mein setTitle method ka upyog kiya jata hai jab hum AlertDialog mein ek title ko set karna aur dikhana chahte hai. Is method ki madad se hum AlertDialog ke dialog box ke title ko customize kar sakte hai.</p>
  
                <p>Hum is method ke dwara dialog box ke title ko programatically control kar sakte hai aur use apne application ke requirements ke anurup modify kar sakte hai. Hum kisi CharSequence object, jaise String, Spannable, ya StringBuilder ka upyog karke title text ko set kar sakte hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence title`,
                        des: `<p>"title" parameter ek CharSequence object hai, jisme dialog box ke title ka text hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    



              {
                dep: false,
                name: "setView",
                id: "setView(View)",
                dataTypeName: `void`,
                code: `<a href="#setView(View)">setView</a>(View view)`,
    
                fullCode: `public void <a href="#setView(View)">setView</a>(View view)`,
  
                des: `Is method ka upyog AlertDialog me custom view ko set karne ke liye kiya jata hai.`,

                longDes: `<p>AlertDialog class mein setView method ka upyog kiya jata hai jab hum AlertDialog me ek custom view ko add karna aur dikhana chahte hai. Is method ki madad se hum AlertDialog ke dialog box ke andar ek custom view ko inflate aur set kar sakte hai.</p>
  
                <p>Hum is method ke dwara apne layout file se custom view inflate karke set kar sakte hai ya fir programatically ek custom view create karke set kar sakte hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View view`,
                        des: `<p>"view" parameter ek View object hai, jisme custom view ko represent karta hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    


              {
                dep: false,
                name: "setView",
                id: "setView(View,int,int,int,int)",
                dataTypeName: `void`,
                code: `<a href="#setView(View,int,int,int,int)">setView</a>(
                    View view,
                    int viewSpacingLeft,
                    int viewSpacingTop,
                    int viewSpacingRight,
                    int viewSpacingBottom
                )`,
    
                fullCode: `public void <a href="#setView(View,int,int,int,int)">setView</a>(
                    View view,
                    int viewSpacingLeft,
                    int viewSpacingTop,
                    int viewSpacingRight,
                    int viewSpacingBottom
                )`,
  
                des: `Is method ka upyog AlertDialog me custom view ko set karne ke sath-sath uske spacing ko bhi configure karne ke liye kiya jata hai.`,

                longDes: `<p>AlertDialog class mein setView method ka upyog kiya jata hai jab hum AlertDialog me ek custom view ko add karna aur uske spacing ko configure karna chahte hai. Is method ki madad se hum AlertDialog ke dialog box ke andar ek custom view ko inflate, set kar sakte hai aur uske spacing ko customize kar sakte hai.</p>
  
                <p>Hum is method ke dwara custom view ke sath-sath uske spacing ko programatically control kar sakte hai. Spacing parameters ki madad se hum view ko dialog box ke andar ke alag-alag sides se distance de sakte hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View view`,
                        des: `<p>"view" parameter ek View object hai, jisme custom view ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int viewSpacingLeft`,
                        des: `<p>"viewSpacingLeft" parameter ek integer hai, jisme left side ke spacing ki value hoti hai.</p>`,
                      },
                      {
                        dataTypeName: `int viewSpacingTop`,
                        des: `<p>"viewSpacingTop" parameter ek integer hai, jisme top side ke spacing ki value hoti hai.</p>`,
                      },
                      {
                        dataTypeName: `int viewSpacingRight`,
                        des: `<p>"viewSpacingRight" parameter ek integer hai, jisme right side ke spacing ki value hoti hai.</p>`,
                      },
                      {
                        dataTypeName: `int viewSpacingBottom`,
                        des: `<p>"viewSpacingBottom" parameter ek integer hai, jisme bottom side ke spacing ki value hoti hai.</p>`,
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
                des: `Is method ka upyog AlertDialog ke instance ka initialization aur setup karne ke liye kiya jata hai.`,
    
                longDes: `
                <p>AlertDialog class mein onCreate method ko subclassing ke dwara override kiya jata hai. Subclass is method ko override karke AlertDialog ke instance ko customize kar sakte hai.</p>

                <p>Is method ke andar, AlertDialog ke instance ke liye layout inflate kiya ja sakta hai, views initialize kiye ja sakte hai, event listeners set kiye ja sakte hai, aur anya setup activities kiye ja sakte hai. onCreate method ke andar AlertDialog ke visual aur functional aspects ki customization ki jati hai.</p>

                <p>Is method ke through hum AlertDialog ke lifecycle events aur initialization activities par control pate hai. Hum onCreate method ke andar AlertDialog ke behavior ko customize kar sakte hai, jaise dialog box ka layout, views, buttons, title, message, icon, etc., ke setup ko modify karke.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Bundle savedInstanceState`,
                        des:`<p>"savedInstanceState" parameter ek Bundle object hai, jisme previously saved state ka data hota hai. Is parameter ki madad se kisi pichle state ko restore karne ke liye use kiya ja sakta hai.</p>`,
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
  