module.exports.AppCompatMultiAutoCompleteTextView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatMultiAutoCompleteTextView",
      hCode: `public class <a href="#AppCompatMultiAutoCompleteTextView">AppCompatMultiAutoCompleteTextView</a>  extends MultiAutoCompleteTextView implements TintableBackgroundView, EmojiCompatConfigurationView, TintableCompoundDrawablesView`,
  
      des: 
        `
        <p>Ye class, MultiAutoCompleteTextView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatMultiAutoCompleteTextView class, MultiAutoCompleteTextView class ka subclass hai aur AppCompatAutoCompleteTextView class se inherit karti hai. Iska use text input field ke roop mein kiya jata hai, jahan user ko suggestions aur autocompletion ki facility provide karni hoti hai, saath hi multiple items ko autocompletion ke liye select karne ki bhi facility provide karni hoti hai.</p>
  
       
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
              name: `AppCompatMultiAutoCompleteTextView`,
              id: "AppCompatMultiAutoCompleteTextView(Context)",
              code: `<a href="#AppCompatMultiAutoCompleteTextView(Context)">AppCompatMultiAutoCompleteTextView</a>(@NonNull Context context)`,

              fullCode: `public <a href="#AppCompatMultiAutoCompleteTextView(Context)">AppCompatMultiAutoCompleteTextView</a>(@NonNull Context context)`,

              des: `Ye constructor, AppCompatMultiAutoCompleteTextView view ka ek naya instance create karta hai.`,

              longDes: `<p>AppCompatMultiAutoCompleteTextView(@NonNull Context context) constructor, AppCompatMultiAutoCompleteTextView view ka ek naya instance create karta hai, jise aap UI layout mein add karke use kar sakte hain.</p>

              <p>AppCompatMultiAutoCompleteTextView ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Ye class MultiAutoCompleteTextView class ka ek enhanced version hai, jise older Android versions mein bhi consistent tarike se use kiya ja sakta hai. MultiAutoCompleteTextView view, AutoCompleteTextView ki tarah kaam karta hai, lekin yeh multiple items ko select karne ki suvidha bhi deta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap Activity ya Application context ke roop mein pass kar sakte hain. Is parameter ki madad se view ko UI layout se attach hone wale resources aur theme ke liye access milta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatMultiAutoCompleteTextView`,
              id: "AppCompatMultiAutoCompleteTextView(Context,AttributeSet)",
              code: `<a href="#AppCompatMultiAutoCompleteTextView(Context,AttributeSet)">AppCompatMultiAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              fullCode: `public <a href="#AppCompatMultiAutoCompleteTextView(Context,AttributeSet)">AppCompatMultiAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              des: `Ye constructor, AppCompatMultiAutoCompleteTextView view ka ek naya instance create karta hai aur XML layout file mein specify kiye gaye attributes ko apply karta hai.`,

              longDes: `
              <p>ye constructor, AppCompatMultiAutoCompleteTextView view ka ek naya instance create karta hai aur XML layout file mein specify kiye gaye attributes ko apply karta hai.</p>

              <p>AppCompatMultiAutoCompleteTextView ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Ye class MultiAutoCompleteTextView class ka ek enhanced version hai, jise older Android versions mein bhi consistent tarike se use kiya ja sakta hai. MultiAutoCompleteTextView view, AutoCompleteTextView ki tarah kaam karta hai, lekin yeh multiple items ko select karne ki suvidha bhi deta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap Activity ya Application context ke roop mein pass kar sakte hain. Is parameter ki madad se view ko UI layout se attach hone wale resources aur theme ke liye access milta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jise XML layout file mein define kiye gaye attributes ko represent karne ke liye use kiya jata hai. Is parameter ki madad se view ke XML attributes ko apply kiya ja sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `AppCompatMultiAutoCompleteTextView`,
              id: "AppCompatMultiAutoCompleteTextView(Context,AttributeSet,int)",
              code: `<a href="#AppCompatMultiAutoCompleteTextView(Context,AttributeSet,int)">AppCompatMultiAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              fullCode: `public <a href="#AppCompatMultiAutoCompleteTextView(Context,AttributeSet,int)">AppCompatMultiAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, AppCompatMultiAutoCompleteTextView view ka ek naya instance create karta hai, XML layout file mein specify kiye gaye attributes ko apply karta hai, aur default style resource (defStyleAttr) ko bhi apply karta hai.`,

              longDes: `
              <p>ye constructor, AppCompatMultiAutoCompleteTextView view ka ek naya instance create karta hai, XML layout file mein specify kiye gaye attributes ko apply karta hai, aur default style resource (defStyleAttr) ko bhi apply karta hai.</p>

              <p>AppCompatMultiAutoCompleteTextView ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Ye class MultiAutoCompleteTextView class ka ek enhanced version hai, jise older Android versions mein bhi consistent tarike se use kiya ja sakta hai. MultiAutoCompleteTextView view, AutoCompleteTextView ki tarah kaam karta hai, lekin yeh multiple items ko select karne ki suvidha bhi deta hai..</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap Activity ya Application context ke roop mein pass kar sakte hain. Is parameter ki madad se view ko UI layout se attach hone wale resources aur theme ke liye access milta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jise XML layout file mein define kiye gaye attributes ko represent karne ke liye use kiya jata hai. Is parameter ki madad se view ke XML attributes ko apply kiya ja sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hai, jo default style resource ID ko represent karta hai. Agar XML layout file mein koi specific style attribute set nahi kiya gaya hai, to defStyleAttr mein specify kiya gaya default style apply hoga.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view mein EmojiCompat support ka availability check karne ke liye hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method, AppCompatMultiAutoCompleteTextView view mein EmojiCompat support ka availability check karne ke liye hota hai. EmojiCompat, Android Support Library mein available ek feature hai, jo older Android versions mein bhi latest emoji characters ko render karne ka support pradan karta hai.</p>
  
              <p>Is method ka return value true hota hai, agar EmojiCompat enabled hai, aur false hota hai, agar EmojiCompat disabled hai ya phir device pe yeh feature available nahi hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "onCreateInputConnection",
              id: "onCreateInputConnection()",
              dataTypeName: `InputConnection`,
              code: `<a href="#onCreateInputConnection()">onCreateInputConnection</a>(EditorInfo outAttrs)`,
  
              fullCode: `public InputConnection <a href="#onCreateInputConnection()">onCreateInputConnection</a>(EditorInfo outAttrs)`,

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ka ek custom InputConnection object create karne ke liye hota hai, jo keyboard input events ko handle karta hai.`,
  
              longDes: `
              <p>ye method, AppCompatMultiAutoCompleteTextView view ka ek custom InputConnection object create karne ke liye hota hai. InputConnection keyboard input events ko handle karta hai, jaise ki user ke dvara keyboard se text input karna, text ko edit karna, suggestion list se items select karna, etc.</p>
  
              <p>AppCompatMultiAutoCompleteTextView view jab focus hota hai ya phir keyboard input events ki jarurat hoti hai, tab framework is method ko automatically call karta hai. Aap is method ko override karke apne requirements ke hisab se custom InputConnection object ko return kar sakte hain.</p>

              <p>Ye method InputConnection object return karta hai, jiska use keyboard input events ko handle karne ke liye hota hai. Aap is custom InputConnection object ko create karke specific input behavior implement kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `EditorInfo outAttrs`,
                        des:`<p>Ye parameter ek EditorInfo object hai, jisme input connection ke details aur requirements store hote hain, jaise ki inputType, imeOptions, initialSelStart, initialSelEnd, initialCapsMode, etc. Aap is parameter mein required attributes ko set kar sakte hain.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ka background drawable set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable(@Nullable Drawable background) method, AppCompatMultiAutoCompleteTextView view ka background drawable set karne ke liye hota hai. Background drawable, AppCompatMultiAutoCompleteTextView view ke background ko define karta hai. Is method ka use background image ya background color ko set karne ke liye kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap background ke roop mein set karna chahte hain. Is parameter mein aap color drawable (ColorDrawable) ya image drawable (BitmapDrawable) ka use kar sakte hain.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ka background resource set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundResource(@DrawableRes int resId) method, AppCompatMultiAutoCompleteTextView view ka background resource set karne ke liye hota hai. Background resource, AppCompatMultiAutoCompleteTextView view ke background ko define karta hai. Is method ka use background image ya background color resource ko set karne ke liye kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo drawable resource ID ko represent karta hai, jise aap background ke roop mein set karna chahte hain.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ke compound drawables ko set karne ke liye hota hai. Compound drawables, AppCompatMultiAutoCompleteTextView view ke text ke chaaron taraf ek saath additional drawables ko represent karte hain.`,
  
              longDes: `
              <p>ye method, AppCompatMultiAutoCompleteTextView view ke compound drawables ko set karne ke liye hota hai. Compound drawables, AppCompatMultiAutoCompleteTextView view ke text ke chaaron taraf ek saath additional drawables (left, top, right, bottom) ko represent karte hain.</p>

              <p>Compound drawables text ke saath visual elements add karne ke liye istemal kiye jate hain. For example, aap left compound drawable mein ek icon add kar sakte hain, jo text ke left side mein show hoga. Isi tarah se, aap text ke top, right, aur bottom sides mein bhi compound drawables add kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke left side mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke top side mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke right side mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke bottom side mein compound drawable ke roop mein set karna chahte hain.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ke relative compound drawables ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>ye method, AppCompatMultiAutoCompleteTextView view ke relative compound drawables ko set karne ke liye hota hai. Relative compound drawables, AppCompatMultiAutoCompleteTextView view ke text ke chaaron taraf ek saath additional drawables ko represent karte hain, lekin layout direction (LTR ya RTL) ke hisab se. LTR (Left-to-Right) languages mein, left drawable left side pe show hota hai aur right drawable right side pe. RTL (Right-to-Left) languages mein, yeh directions ulte ho jate hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke starting side (left in LTR, right in RTL) mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke top side mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke ending side (right in LTR, left in RTL) mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Ye parameter ek Drawable object hai, jise aap view ke bottom side mein compound drawable ke roop mein set karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setDropDownBackgroundResource",
              id: "setDropDownBackgroundResource()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownBackgroundResource()">setDropDownBackgroundResource</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setDropDownBackgroundResource()">setDropDownBackgroundResource</a>(@DrawableRes int resId)`,

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ke drop-down list (suggestion list) ka background resource set karne ke liye hota hai.`,
  
              longDes: `
              <p>ye method, AppCompatMultiAutoCompleteTextView view ke drop-down list (suggestion list) ka background resource set karne ke liye hota hai. Jab AppCompatMultiAutoCompleteTextView view ke liye suggestions show hote hain (jisay user select kar sakta hai), tab ek drop-down list open hoti hai. Is drop-down list ka background design ya color ko customize karne ke liye, hum is method ka use karte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo drawable resource ID ko represent karta hai, jise aap drop-down list ka background resource ke roop mein set karna chahte hain.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view mein Emoji Compatibility feature ko enable ya disable karne ke liye hota hai.`,
  
              longDes: `
              <p>ye method, AppCompatMultiAutoCompleteTextView view mein Emoji Compatibility feature ko enable ya disable karne ke liye hota hai. Emoji Compatibility feature ka use emojis ke sahi tarike se rendering ko ensure karne ke liye hota hai. Older Android versions mein, emojis ka rendering sometimes inconsistent ho sakta hai, lekin Emoji Compatibility support ke saath, emojis ko uniform tarike se display kiya jata hai, taki unke designs sahi tarah se dikhayi dein.</p>
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ke liye custom KeyListener ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>ye  method, AppCompatMultiAutoCompleteTextView view ke liye custom KeyListener ko set karne ke liye hota hai. KeyListener, keyboard events (jaise key press, key release) ko handle karne ke liye use hota hai. Default behavior mein, AppCompatMultiAutoCompleteTextView view key events ko automatically handle karta hai, lekin kisi specific behavior ya custom handling ke liye aap apna khud ka KeyListener implement kar sakte hain aur use setKeyListener() method ke through set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable KeyListener keyListener`,
                        des:`<p>Ye parameter ek KeyListener object hai, jise aap AppCompatMultiAutoCompleteTextView view ke liye custom KeyListener set karne ke liye use kar sakte hain. Agar aap default behavior chahte hain, to null pass kar sakte hain.</p>`,
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

              des: `Ye method, AppCompatMultiAutoCompleteTextView view ke text ka appearance (style) set karne ke liye hota hai.`,
  
              longDes: `
              <p>ye method, AppCompatMultiAutoCompleteTextView view ke text ka appearance (style) set karne ke liye hota hai. Is method mein aap ek specific style resource file (XML file) ka reference provide karte hain, jiska use AppCompatMultiAutoCompleteTextView view ke text ke appearance ko customize karne ke liye kiya jata hai. Style resource file mein aap text color, text size, font family, textStyle (bold, italic, etc.), text alignment, background, aur bahut se other text attributes ko define kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap method ko call kar rahe hain. Context, view ko inflate karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo style resource file ka ID represent karta hai, jiska use AppCompatMultiAutoCompleteTextView view ke text ka appearance set karne ke liye kiya jayega.</p>`,
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
  
              des: `Ye method, AppCompatMultiAutoCompleteTextView view ke drawable state ko handle karne ke liye hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, AppCompatMultiAutoCompleteTextView view ke drawable state ko handle karne ke liye hota hai. Jab bhi AppCompatMultiAutoCompleteTextView view ke drawable resources (jaise background, compound drawables, etc.) ka state change hota hai, yani unme koi update hoti hai, to ye method automatically call hota hai. Is method ke andar aap drawable resources ke state changes ko detect kar sakte hain aur unke updates ke anusar view ko refresh ya redraw kar sakte hain.</p>

                <p>Drawable resources ke state change hoti hai, jab view par focus aata hai, view pressed (clicked) hota hai, view enabled ya disabled hota hai, view active state mein hota hai, etc. In sabhi changes ko handle karne ke liye drawableStateChanged() method ka use hota hai.</p>
                    `,
  
              parameter: [],
            },
  

          ],
        },
  
  

      },
    });
  };
  