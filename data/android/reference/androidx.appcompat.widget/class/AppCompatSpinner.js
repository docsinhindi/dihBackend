module.exports.AppCompatSpinner = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatSpinner",
      hCode: `public class <a href="#AppCompatSpinner">AppCompatSpinner</a>  extends Spinner implements TintableBackgroundView`,
  
      des: 
        `
        <p>Ye class, Spinner widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatSpinner class, Spinner class ka subclass hai aur AppCompatImageView class se inherit karti hai. Iska use dropdown menu ke roop mein options ko display karne aur user se ek option ko select karne ke liye kiya jata hai.</p>
  
       
        `,
      img: [
        // {
        //   url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
        //   label: "Action bar",
        //   fig: "Figure 1.",
        // },
      ],

      //
      summary: {
        success: true,
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `AppCompatSpinner`,
              id: "AppCompatSpinner(Context)",
              code: `AppCompatSpinner(@NonNull Context context)`,
              fullCode: `public AppCompatSpinner(@NonNull Context context)`,

              des: `Ye constructor AppCompatSpinner class ke object (instance) ko create karne mein use hota hai.`,

              longDes: `<p>AppCompatSpinner(@NonNull Context context) constructor ka use, AppCompatSpinner class ke ek object ko create karne ke liye hota hai. Is constructor mein ek Context object pass kiya jata hai, jiski madad se widget ko current Android environment ke sath associate kiya jata hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jiski madad se widget ko initialize aur display karne ke liye required resources aur configurations milte hain. Aap is parameter mein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatSpinner`,
              id: "AppCompatSpinner(Context,AttributeSet)",
              code: `AppCompatSpinner(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public AppCompatSpinner(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Ye constructor AppCompatSpinner class ke object (instance) ko create karne mein use hota hai, jab aap spinner widget ko XML layout mein define karte hain.`,

              longDes: `<p>AppCompatSpinner(@NonNull Context context, @Nullable AttributeSet attrs) constructor ka use, AppCompatSpinner class ke ek object ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor mein Context object aur AttributeSet object pass kiya jata hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jiski madad se widget ko initialize aur display karne ke liye required resources aur configurations milte hain. Aap is parameter mein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jo XML layout file se AppCompatSpinner attributes ko retrieve karne mein madad karta hai. XML layout file mein spinner widget ke liye define kiye gaye attributes is object mein stored hote hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `AppCompatSpinner`,
              id: "AppCompatSpinner(Context,int)",
              code: `AppCompatSpinner(@NonNull Context context, int mode)`,
              fullCode: `public AppCompatSpinner(@NonNull Context context, int mode)`,

              des: `Is constructor ke through hum spinner ko MODE_DIALOG ya MODE_DROPDOWN mode mein initialize kar sakte hain.`,

              longDes: `<p>AppCompatSpinner class ke is constructor ka use AppCompatSpinner widget ko initialize karne ke liye kiya jata hai. Spinner ek dropdown list hai, jisme se user ek item ko select kar sakta hai. AppCompatSpinner widget, Android Support Library mein pesh kiya gaya hai taki hum older versions of Android par bhi consistent look and feel maintain kar sakein.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Non-null Context object, jiska use AppCompatSpinner ko initialize karne mein kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int mode`,
                        des:`<p>Ek integer value, jo spinner ka display mode specify karta hai. Spinner ke do display modes hote hain: MODE_DIALOG (0) aur MODE_DROPDOWN (1).</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: `AppCompatSpinner`,
              id: "AppCompatSpinner(Context,AttributeSet,int)",
              code: `AppCompatSpinner(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public AppCompatSpinner(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ke through hum XML layout file mein define kiye gaye attributes ke saath spinner ko customize kar sakte hain.`,

              longDes: `<p>AppCompatSpinner class ke is constructor ka use AppCompatSpinner widget ko XML layout file se inflate karne aur initialize karne ke liye kiya jata hai. XML layout file mein, AppCompatSpinner ko define karne ke liye aap android.support.v7.widget.AppCompatSpinner element ka use karte hain, jiske attributes se aap spinner ko customize kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Non-null Context object, jiska use AppCompatSpinner ko initialize karne mein kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jisme XML layout file mein specify kiye gaye attributes hote hain, jinse AppCompatSpinner ko customize kiya ja sakta hai. Ye parameter nullable hai, iska matlab hai ki aap ise optional bhi chhod sakte hain agar aapko kisi specific attribute ka use nahi karna.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ek integer value, jo default style resource ID ko represent karta hai. Iska use agar aap attrs parameter mein koi specific attribute provide nahi karte hain, to AppCompatSpinner apne default style ke liye defStyleAttr parameter ka value use karega.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: `AppCompatSpinner`,
              id: "AppCompatSpinner(Context,AttributeSet,int,int)",
              code: `AppCompatSpinner(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr,
                int mode
            )`,
              fullCode: `public AppCompatSpinner(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr,
                int mode
            )`,

              des: `Is constructor ke through hum XML layout file mein define kiye gaye attributes ke saath spinner ko customize kar sakte hain aur display mode ko set kar sakte hain.`,

              longDes: `<p>AppCompatSpinner class ke is constructor ka use AppCompatSpinner widget ko XML layout file se inflate karne aur initialize karne ke liye kiya jata hai. XML layout file mein, AppCompatSpinner ko define karne ke liye aap android.support.v7.widget.AppCompatSpinner element ka use karte hain, jiske attributes se aap spinner ko customize kar sakte hain. Is constructor ke through aap display mode ko bhi specify kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Non-null Context object, jiska use AppCompatSpinner ko initialize karne mein kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jisme XML layout file mein specify kiye gaye attributes hote hain, jinse AppCompatSpinner ko customize kiya ja sakta hai. Ye parameter nullable hai, iska matlab hai ki aap ise optional bhi chhod sakte hain agar aapko kisi specific attribute ka use nahi karna.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ek integer value, jo default style resource ID ko represent karta hai. Iska use agar aap attrs parameter mein koi specific attribute provide nahi karte hain, to AppCompatSpinner apne default style ke liye defStyleAttr parameter ka value use karega.</p>`,
                      },
                      {
                        dataTypeName: `int mode`,
                        des:`<p>Ek integer value, jo spinner ka display mode specify karta hai. Spinner ke do display modes hote hain: MODE_DIALOG (0) aur MODE_DROPDOWN (1). Is parameter se hum AppCompatSpinner ke display mode ko set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `AppCompatSpinner`,
              id: "AppCompatSpinner(Context,AttributeSet,int,int,Resources.Theme)",
              code: `AppCompatSpinner(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr,
                int mode,
                Resources.Theme popupTheme
            )`,
              fullCode: `public AppCompatSpinner(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr,
                int mode,
                Resources.Theme popupTheme
            )`,

              des: `Is constructor ke through hum XML layout file mein define kiye gaye attributes ke saath spinner ko customize kar sakte hain, display mode ko set kar sakte hain, aur popup theme ko specify karke dropdown list ke appearance ko customize kar sakte hain.`,

              longDes: `<p>AppCompatSpinner class ke is constructor ka use AppCompatSpinner widget ko XML layout file se inflate karne aur initialize karne ke liye kiya jata hai. XML layout file mein, AppCompatSpinner ko define karne ke liye aap android.support.v7.widget.AppCompatSpinner element ka use karte hain, jiske attributes se aap spinner ko customize kar sakte hain. Is constructor ke through aap display mode ko aur popup theme ko bhi specify kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Non-null Context object, jiska use AppCompatSpinner ko initialize karne mein kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jisme XML layout file mein specify kiye gaye attributes hote hain, jinse AppCompatSpinner ko customize kiya ja sakta hai. Ye parameter nullable hai, iska matlab hai ki aap ise optional bhi chhod sakte hain agar aapko kisi specific attribute ka use nahi karna.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ek integer value, jo default style resource ID ko represent karta hai. Iska use agar aap attrs parameter mein koi specific attribute provide nahi karte hain, to AppCompatSpinner apne default style ke liye defStyleAttr parameter ka value use karega.</p>`,
                      },
                      {
                        dataTypeName: `int mode`,
                        des:`<p>Ek integer value, jo spinner ka display mode specify karta hai. Spinner ke do display modes hote hain: MODE_DIALOG (0) aur MODE_DROPDOWN (1). Is parameter se hum AppCompatSpinner ke display mode ko set kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `Resources.Theme popupTheme`,
                        des:`<p>Resources.Theme object, jisse spinner ke popup (dropdown) ka theme specify kiya ja sakta hai. Popup theme ka use dropdown list ke appearance ko customize karne ke liye hota hai. Agar aap null pass karte hain, to default theme use hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

            //



          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getDropDownHorizontalOffset",
              id: "getDropDownHorizontalOffset()",
              dataTypeName: `int`,
              code: `<a href="#getDropDownHorizontalOffset()">getDropDownHorizontalOffset</a>()`,
  
              fullCode: `public int <a href="#getDropDownHorizontalOffset()">getDropDownHorizontalOffset</a>()`,

              des: `Ye method, AppCompatSpinner ke dropdown list ke horizontal offset (distance) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getDropDownHorizontalOffset() method ka use AppCompatSpinner ke dropdown list ke horizontal offset ko retrieve karne ke liye kiya jata hai. Dropdown list ka horizontal offset us point ko represent karta hai, jahaan se dropdown list ka display shuru hota hai, spinner widget ke left-hand side se measured.</p>
  
              <p>Is method ka use karke aap jaan sakte hain ki dropdown list spinner widget ke left-hand side se kitne pixels ki doori par display ho raha hai. Iska use dropdown list ko desired position par adjust karne mein kiya ja sakta hai.</p>

              <p>Ye method ek integer value return karta hai, jo AppCompatSpinner ke dropdown list ka horizontal offset (distance) hota hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getDropDownVerticalOffset",
              id: "getDropDownVerticalOffset()",
              dataTypeName: `int`,
              code: `<a href="#getDropDownVerticalOffset()">getDropDownVerticalOffset</a>()`,
  
              fullCode: `public int <a href="#getDropDownVerticalOffset()">getDropDownVerticalOffset</a>()`,

              des: `Ye method, AppCompatSpinner ke dropdown list ke vertical offset (distance) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getDropDownVerticalOffset() method ka use AppCompatSpinner ke dropdown list ke vertical offset ko jaanane ke liye kiya jata hai. Dropdown list ka vertical offset us point ko represent karta hai, jahaan se dropdown list ka display shuru hota hai, spinner widget ke top-hand side se measured.</p>
  
              <p>Is method ka use karke aap jaan sakte hain ki dropdown list spinner widget ke top-hand side se kitne pixels ki doori par display ho raha hai. Iska use dropdown list ko desired position par adjust karne mein kiya ja sakta hai.</p>

              <p>Ye method ek integer value return karta hai, jo AppCompatSpinner ke dropdown list ka vertical offset (distance) hota hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getDropDownWidth",
              id: "getDropDownWidth()",
              dataTypeName: `int`,
              code: `<a href="#getDropDownWidth()">getDropDownWidth</a>()`,
  
              fullCode: `public int <a href="#getDropDownWidth()">getDropDownWidth</a>()`,

              des: `Ye method, AppCompatSpinner ke dropdown list ka width (width) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getDropDownWidth() method ka use AppCompatSpinner ke dropdown list ka width ko jaanane ke liye kiya jata hai. Dropdown list ka width us horizontal space ko represent karta hai, jisme dropdown list ka content display hota hai.</p>
  
              <p>Is method ka use karke aap jaan sakte hain ki dropdown list kitne pixels ki width mein display ho raha hai. Iska use dropdown list ko desired width par adjust karne mein kiya ja sakta hai.</p>

              <p>Ye method ek integer value return karta hai, jo AppCompatSpinner ke dropdown list ka width (width) hota hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getPopupBackground",
              id: "getPopupBackground()",
              dataTypeName: `Drawable`,
              code: `<a href="#getPopupBackground()">getPopupBackground</a>()`,
  
              fullCode: `public Drawable <a href="#getPopupBackground()">getPopupBackground</a>()`,

              des: `Ye method, AppCompatSpinner ke dropdown list ke background (popup background) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getPopupBackground() method ka use AppCompatSpinner ke dropdown list ke background ko jaanane ke liye kiya jata hai. Dropdown list ka background typically ek drawable resource hota hai, jisse aap XML drawable resource file ya programmatically create kar sakte hain.</p>
  
              <p>Is method ka use karke aap dropdown list ke background ka reference le sakte hain aur usme kisi specific customization, jaise color change ya shape modification, kar sakte hain.</p>

              <p>Ye method ek Drawable object return karta hai, jo AppCompatSpinner ke dropdown list ke background (popup background) ko represent karta hai.</p>
              `,

              parameter: [],
            },

  


            {
              dep: false,
              name: "getPopupContext",
              id: "getPopupContext()",
              dataTypeName: `Context`,
              code: `<a href="#getPopupContext()">getPopupContext</a>()`,
  
              fullCode: `public Context <a href="#getPopupContext()">getPopupContext</a>()`,

              des: `Ye method, AppCompatSpinner ke dropdown list ke popup context (Context) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getPopupContext() method ka use AppCompatSpinner ke dropdown list ke popup context ko jaanane ke liye kiya jata hai. Popup context ek special context hota hai, jo dropdown list ko display karne ke liye use hota hai.</p>
  
              <p>Is method ka use karke aap dropdown list ke popup context ka reference le sakte hain. Popup context ka use kisi specific task ke liye, jaise resources access, theme retrieve karna, ya layout inflate karna, kiya ja sakta hai.</p>

              <p>Ye method ek Context object return karta hai, jo AppCompatSpinner ke dropdown list ke popup context ko represent karta hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getPrompt",
              id: "getPrompt()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getPrompt()">getPrompt</a>()`,
  
              fullCode: `public CharSequence <a href="#getPrompt()">getPrompt</a>()`,

              des: `Ye method, AppCompatSpinner ke prompt text ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getPrompt() method ka use AppCompatSpinner ke prompt text ko jaanane ke liye kiya jata hai. Prompt text ek optional text hota hai, jo spinner ke upar display hota hai, jab koi item select nahi kiya gaya hota hai.</p>
  
              <p>Spinner ke prompt text ka use user ko guide karne ke liye kiya jata hai. Agar aap spinner mein koi default value ya instruction dena chahte hain, jisse user ko bataya jaye ki spinner se kya action lena hai, to aap prompt text ka use kar sakte hain.</p>

              <p>Ye method ek CharSequence object return karta hai, jo AppCompatSpinner ke prompt text ko represent karta hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "onRestoreInstanceState",
              id: "onRestoreInstanceState()",
              dataTypeName: `void`,
              code: `<a href="#onRestoreInstanceState()">onRestoreInstanceState</a>(Parcelable state)`,
  
              fullCode: `public void <a href="#onRestoreInstanceState()">onRestoreInstanceState</a>(Parcelable state)`,

              des: `Ye method, spinner ki state ko restore karne ke liye upyog hota hai, jab activity ya fragment ko recreate hota hai, jaise screen rotation ya configuration changes ke samay.`,
  
              longDes: `
              <p>onRestoreInstanceState(Parcelable state) method ka use AppCompatSpinner ki state ko recreate hone ke baad restore karne ke liye kiya jata hai. Activity ya fragment recreate hote samay, unki state ka Parcelable object (jo onSaveInstanceState() method mein save kiya gaya tha) onRestoreInstanceState() method ke through wapas se milta hai.</p>
  
              <p>Spinner ki state mein normally selected item ka position, prompt text, dropdown list ka open/close status, etc., included hota hai. Is method ke andar hum us Parcelable object (state) ko check karte hain aur usse spinner ki state ko restore karte hain, jisse spinner apne previous state par wapas la sakta hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcelable state`,
                        des:`<p>Parcelable object, jo spinner ki state ko represent karta hai. Is parameter se hum spinner ki previous state ko restore kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "onSaveInstanceState",
              id: "onSaveInstanceState()",
              dataTypeName: `Parcelable`,
              code: `<a href="#onSaveInstanceState()">onSaveInstanceState</a>()`,
  
              fullCode: `public Parcelable <a href="#onSaveInstanceState()">onSaveInstanceState</a>()`,

              des: `Ye method, spinner ki state ko save karne ke liye upyog hota hai, jab activity ya fragment recreate hota hai, jaise screen rotation ya configuration changes ke samay.`,
  
              longDes: `
              <p>onSaveInstanceState() method ka use AppCompatSpinner ki state ko recreate hone ke baad restore karne ke liye kiya jata hai. Activity ya fragment recreate hote samay, is method ko override karke spinner ki state ko Parcelable object mein save kiya jata hai. Is Parcelable object ko onRestoreInstanceState() method ke through wapas retrieve kiya jata hai, jab activity ya fragment recreate hota hai.</p>
  
              <p>Spinner ki state mein normally selected item ka position, prompt text, dropdown list ka open/close status, etc., included hota hai. Is method ke andar hum spinner ki current state ko Parcelable object mein save karke return karte hain.</p>

              <p>Ye method ek Parcelable object return karta hai, jo spinner ki state ko represent karta hai. Is Parcelable object mein spinner ki current state save hoti hai.</p>

              `,

              parameter: [],
            },


            {
              dep: false,
              name: "onTouchEvent",
              id: "onTouchEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#onTouchEvent()">onTouchEvent</a>(MotionEvent event)`,
  
              fullCode: `public boolean <a href="#onTouchEvent()">onTouchEvent</a>(MotionEvent event)`,

              des: `Ye method, spinner par touch (click) events ko handle karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>onTouchEvent(MotionEvent event) method ka use AppCompatSpinner par tap, swipe, ya kisi touch event ko handle karne ke liye kiya jata hai. Is method ke andar hum event type ko check karke desired actions perform kar sakte hain.</p>
  
              <p>Spinner par touch event handle karne ke liye commonly kiya gaya use case, dropdown list ko open/close karna hota hai. Jab spinner par tap kiya jata hai, to dropdown list ko open karna aur jab dropdown list open hai aur phir tap kiya jata hai, to dropdown list ko close karna aam taur par kiya jata hai.</p>

              <p>Ye method ek boolean value return karta hai. Agar event ko handle karne ke liye true return kiya jata hai, to ye indicate karta hai ki event ko successfully handle kiya gaya hai. Agar false return kiya jata hai, to ye indicate karta hai ki event handle nahi kiya gaya hai aur event ko further propagate kiya jana chahiye.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `MotionEvent event`,
                        des:`<p>MotionEvent object, jisse spinner par tap, swipe, ya kisi touch event ko represent kiya ja sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "performClick",
              id: "performClick()",
              dataTypeName: `boolean`,
              code: `<a href="#performClick()">performClick</a>()`,
  
              fullCode: `public boolean <a href="#performClick()">performClick</a>()`,

              des: `Ye method, spinner par "click" event ko simulate (trigger) karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>performClick() method ka use AppCompatSpinner par click event ko manually trigger karne ke liye kiya jata hai. Jab hum kisi specific scenario mein chahate hain ki spinner par click ho jaye, jaise programmatically dropdown list ko open karna ya close karna, to hum is method ka use kar sakte hain.</p>
  
              <p>Spinner par click event simulate karne se, dropdown list open ho sakta hai (agar pehle close tha) ya close ho sakta hai (agar pehle open tha). Isse user ko dropdown list ko open/close karne ke liye click karne ki zarurat nahi hoti, balki hum apne code ke through direct dropdown list ko control kar sakte hain.</p>

              <p>Ye method ek boolean value return karta hai. Agar method ne click event ko successfully simulate kiya hai, to true return hota hai. Agar koi error ya issue se click event simulate nahi ho paya, to false return hota hai.</p>
              `,

              parameter: [],
            },

  


            
            {
              dep: false,
              name: "setAdapter",
              id: "setAdapter()",
              dataTypeName: `void`,
              code: `<a href="#setAdapter()">setAdapter</a>(SpinnerAdapter adapter)`,
  
              fullCode: `public void <a href="#setAdapter()">setAdapter</a>(SpinnerAdapter adapter)`,

              des: `Ye method, AppCompatSpinner ke liye ek custom SpinnerAdapter ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setAdapter(SpinnerAdapter adapter) method ka use AppCompatSpinner ke liye ek custom data source set karne ke liye kiya jata hai. SpinnerAdapter ek interface hai, jisko AppCompatSpinner apne item views ko inflate karne aur display karne ke liye use karta hai.</p>
  
              <p>Spinner adapter, spinner ke items ko data source se bind karta hai, taki spinner un items ko dropdown list mein display kar sake. Spinner adapter ke through aap custom data source ko define kar sakte hain, jisme aap apne data, text, images, etc. ko spinner items ke roop mein represent kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `SpinnerAdapter adapter`,
                        des:`<p>Eak SpinnerAdapter object, jo AppCompatSpinner ke liye data source provide karta hai.</p>`,
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

              des: `Ye method, AppCompatSpinner ke background ko customize karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable(@Nullable Drawable background) method ka use AppCompatSpinner ke background ko apne custom Drawable resource ya Drawable object se set karne ke liye kiya jata hai. Drawable ek graphic resource hota hai, jise aap XML drawable resource file ya programmatically create kar sakte hain.</p>
  
              <p>Is method ke through aap spinner ke background ko apne design ke hisab se modify kar sakte hain, jisse spinner ka appearance aapke UI design ke saath better match kare.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Eak Drawable object, jo AppCompatSpinner ke background ko represent karta hai. Is parameter ke through hum spinner ke background ko customize kar sakte hain.</p>`,
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

              des: `Ye method, AppCompatSpinner ke background ko Drawable resource se set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setBackgroundResource(@DrawableRes int resId) method ka use AppCompatSpinner ke background ko ek Drawable resource se customize karne ke liye kiya jata hai. Drawable resource, ek graphic resource hota hai, jise aap XML drawable resource file ya programmatically create kar sakte hain.</p>
  
              <p>Is method ke through aap spinner ke background ko ek pre-defined Drawable resource se set kar sakte hain, jisse spinner ka appearance aapke UI design ke saath better match kare.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Eak integer value, jo ek valid Drawable resource ID ko represent karta hai. Is parameter ke through hum spinner ke background ko ek Drawable resource se set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

    
            {
              dep: false,
              name: "setDropDownHorizontalOffset",
              id: "setDropDownHorizontalOffset()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownHorizontalOffset()">setDropDownHorizontalOffset</a>(int pixels)`,
  
              fullCode: `public void <a href="#setDropDownHorizontalOffset()">setDropDownHorizontalOffset</a>(int pixels)`,

              des: `Ye method, AppCompatSpinner ke dropdown list ke horizontal offset ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setDropDownHorizontalOffset(int pixels) method ka use AppCompatSpinner ke dropdown list ke horizontal offset ko customize karne ke liye kiya jata hai. Dropdown list ka horizontal offset us point ko represent karta hai, jahaan se dropdown list ka display shuru hota hai, spinner widget ke left-hand side se measured.</p>
  
              <p>Is method ke through aap dropdown list ka horizontal position set kar sakte hain, taki dropdown list ko spinner ke left-hand side se thoda sa alag position par display kiya ja sake. Isse aap dropdown list ko desired position par adjust kar sakte hain, agar aapko spinner ke default dropdown position se kuch alag position par dropdown list display karna hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int pixels`,
                        des:`<p>Ek integer value, jo dropdown list ke horizontal offset ko pixels mein represent karta hai. Is parameter ke through hum dropdown list ka horizontal position (distance from the left side of the spinner) set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
    
            {
              dep: false,
              name: "setDropDownVerticalOffset",
              id: "setDropDownVerticalOffset()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownVerticalOffset()">setDropDownVerticalOffset</a>(int pixels)`,
  
              fullCode: `public void <a href="#setDropDownVerticalOffset()">setDropDownVerticalOffset</a>(int pixels)`,

              des: `Ye method, AppCompatSpinner ke dropdown list ke vertical offset ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setDropDownVerticalOffset(int pixels) method ka use AppCompatSpinner ke dropdown list ke vertical offset ko customize karne ke liye kiya jata hai. Dropdown list ka vertical offset us point ko represent karta hai, jahaan se dropdown list ka display shuru hota hai, spinner widget ke top-hand side se measured.</p>
  
              <p>Is method ke through aap dropdown list ka vertical position set kar sakte hain, taki dropdown list ko spinner ke top-hand side se thoda sa alag position par display kiya ja sake. Isse aap dropdown list ko desired position par adjust kar sakte hain, agar aapko spinner ke default dropdown position se kuch alag position par dropdown list display karna hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int pixels`,
                        des:`<p>Ek integer value, jo dropdown list ke vertical offset ko pixels mein represent karta hai. Is parameter ke through hum dropdown list ka vertical position (distance from the top of the spinner) set kar sakte hain</p>`,
                      },
                    ],
                  },
              ],
            },

    
            {
              dep: false,
              name: "setDropDownWidth",
              id: "setDropDownWidth()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownWidth()">setDropDownWidth</a>(int pixels)`,
  
              fullCode: `public void <a href="#setDropDownWidth()">setDropDownWidth</a>(int pixels)`,

              des: `Ye method, AppCompatSpinner ke dropdown list ka width (width of the popup) ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setDropDownWidth(int pixels) method ka use AppCompatSpinner ke dropdown list ka width customize karne ke liye kiya jata hai. Dropdown list ka width us width ko represent karta hai, jisse dropdown list ka popup display hota hai.</p>
  
              <p>Dropdown list ka default width usually content width hota hai, jisse dropdown list ke items ka content fully visible rehta hai. Lekin, agar aap dropdown list ka width badhana ya kam karna chahte hain, taki dropdown list ka appearance aapke UI design ke saath better match kare, to aap setDropDownWidth(int pixels) method ka use karke dropdown list ka width set kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int pixels`,
                        des:`<p>Ek integer value, jo dropdown list ka width pixels mein represent karta hai. Is parameter ke through hum dropdown list ka width customize kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

    
            {
              dep: false,
              name: "setPopupBackgroundDrawable",
              id: "setPopupBackgroundDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setPopupBackgroundDrawable()">setPopupBackgroundDrawable</a>(Drawable background)`,
  
              fullCode: `public void <a href="#setPopupBackgroundDrawable()">setPopupBackgroundDrawable</a>(Drawable background)`,

              des: `Ye method, AppCompatSpinner ke dropdown list (popup) ke background ko customize karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setPopupBackgroundDrawable(Drawable background) method ka use AppCompatSpinner ke dropdown list (popup) ke background ko apne custom Drawable resource ya Drawable object se set karne ke liye kiya jata hai.</p>
  
              <p>Dropdown list (popup) ek special view hota hai, jise spinner ke item select karne par open kiya jata hai. Is dropdown list ka background aapke UI design ke sath match nahi kar raha ho to aap is method ka use karke background ko customize kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable background`,
                        des:`<p>Ek Drawable object, jo dropdown list (popup) ke background ko represent karta hai. Is parameter ke through hum dropdown list ke background ko customize kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setPopupBackgroundResource",
              id: "setPopupBackgroundResource()",
              dataTypeName: `void`,
              code: `<a href="#setPopupBackgroundResource()">setPopupBackgroundResource</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setPopupBackgroundResource()">setPopupBackgroundResource</a>(@DrawableRes int resId)`,

              des: `Ye method, AppCompatSpinner ke dropdown list (popup) ke background ko ek Drawable resource se set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setPopupBackgroundResource(@DrawableRes int resId) method ka use AppCompatSpinner ke dropdown list (popup) ke background ko ek pre-defined Drawable resource se customize karne ke liye kiya jata hai. Drawable resource, ek graphic resource hota hai, jise aap XML drawable resource file ya programmatically create kar sakte hain.</p>
  
              <p>Dropdown list (popup) ek special view hota hai, jise spinner ke item select karne par open kiya jata hai. Is dropdown list ka background aapke UI design ke sath match nahi kar raha ho to aap is method ka use karke background ko customize kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ek integer value, jo ek valid Drawable resource ID ko represent karta hai. Is parameter ke through hum dropdown list (popup) ke background ko ek Drawable resource se set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "setPrompt",
              id: "setPrompt()",
              dataTypeName: `void`,
              code: `<a href="#setPrompt()">setPrompt</a>(CharSequence prompt)`,
  
              fullCode: `public void <a href="#setPrompt()">setPrompt</a>(CharSequence prompt)`,

              des: `Ye method, AppCompatSpinner ke liye ek prompt text ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setPrompt(CharSequence prompt) method ka use AppCompatSpinner ke liye prompt text set karne ke liye kiya jata hai. Prompt text, ek informative text hota hai, jo spinner ke select kiye gaye item ke placeholder ke roop mein dikhaya jata hai, jab koi item select nahi kiya gaya hota hai.</p>
  
              <p>Spinner ka prompt text usually use cases mein upyog hota hai jab aapko users se specific item ko select karne ke liye encourage karna hota hai, ya phir spinner ke available options ko explain karne ke liye. Jab koi item select nahi kiya gaya hota hai, to prompt text spinner mein display hota hai. Jab koi item select kiya jata hai, to prompt text automatically hide ho jata hai aur selected item ka text dikhaya jata hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence prompt`,
                        des:`<p>Ek CharSequence object, jo spinner ke liye display kiya jane wala prompt text hai. Is parameter ke through hum spinner ke liye prompt text set kar sakte hain.</p>`,
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
  
              des: `Ye method, spinner ke state change hone par uske drawable resources ko update karne ke liye upyog hota hai. `,
  
              longDes: `
                <p>drawableStateChanged() method ka use AppCompatSpinner ke drawable resources ko update karne ke liye kiya jata hai, jab spinner ka state change hota hai. Spinner ke state change hone ke examples hai jab koi item select kiya jata hai, spinner focus ho jata hai, ya spinner enable/disable ho jata hai.</p>
                    `,
  
              parameter: [],
            },
  

            {
              dep: false,
              name: "onDetachedFromWindow",
              id: "onDetachedFromWindow()",
              dataTypeName: `void`,
              code: `<a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              fullCode: `protected void <a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              des: `Ye method, spinner view ko window (UI hierarchy) se detach hone par, uske saath related resources ko release karne ke liye upyog hota hai.`,
  
              longDes: `
                <p>onDetachedFromWindow() method ka use AppCompatSpinner view ko window se detach karne ke baad, uske saath related resources ko release karne ke liye kiya jata hai. Jab bhi kisi view ko window se remove kiya jata hai, ya phir us view ka associated activity ya context destroy ho jata hai, to onDetachedFromWindow() method automatically call hota hai.</p>
                    `,
  
              parameter: [],
            },
  


            {
              dep: false,
              name: "onMeasure",
              id: "onMeasure()",
              dataTypeName: `void`,
              code: `<a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              fullCode: `protected void <a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              des: `Ye method, spinner view ke size (width and height) ko measure karne ke liye upyog hota hai.`,
  
              longDes: `
                <p>onMeasure(int widthMeasureSpec, int heightMeasureSpec) method ka use AppCompatSpinner view ke size (width and height) ko measure karne ke liye kiya jata hai. Jab spinner view UI hierarchy mein add hota hai, ya phir uska size change hota hai, to onMeasure() method automatically call hota hai.</p>

                <p>Is method ke andar aap spinner ke size ko measure karne ka logic implement kar sakte hain. Width aur height ke liye aapko diye gaye measure specifications ke anusaar final size tay karne hote hain, jo view ko display ke liye use kiya jayega.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>Ek integer value, jo spinner ke width ke liye constraints (measure specifications) ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>Ek integer value, jo spinner ke height ke liye constraints (measure specifications) ko represent karta hai.</p>`,
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
  