module.exports.SearchView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SearchView",
      hCode: `public class <a href="#SearchView">SearchView</a>  extends LinearLayoutCompat implements CollapsibleActionView`,
  
      des: 
        `
        <p>Ye class, search functionality ko implement karne ke liye use hoti hai.</p>
        
  
        <p>SearchView class ka use kisi search interface ko display karne, search queries ko handle karne, aur search suggestions ko provide karne ke liye kiya jata hai. Is class ke through aap ek search input field aur search related controls ko implement kar sakte hai.</p>
  
       
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
              name: `SearchView`,
              id: "SearchView()",
              code: `SearchView(@NonNull Context context)`,
              fullCode: `public SearchView(@NonNull Context context)`,

              des: `Is constructor ka upayog, SearchView widget ko ek Context object ke sath create karne ke liye hota hai.`,

              longDes: `
              <p>SearchView(@NonNull Context context) constructor ka upayog, SearchView widget ko ek Context object ke sath create karne ke liye hota hai. Context object, Android environment ki information provide karta hai, jaise ki app ke resources, layouts, etc.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object leta hai, jo SearchView widget ko create karne ke liye use hota hai. Aap ismein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `SearchView`,
              id: "SearchView()",
              code: `SearchView(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public SearchView(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ka upayog, SearchView widget ko ek Context object aur XML attributes ke sath create karne ke liye hota hai.`,

              longDes: `
              <p>SearchView(@NonNull Context context, @Nullable AttributeSet attrs) constructor ka upayog, SearchView widget ko ek Context object aur XML attributes ke sath create karne ke liye hota hai. XML attributes, aapke layout XML file mein define kiye gaye SearchView ke customizations hote hain, jaise hint text, icon, background, etc. Jab aap SearchView widget ko layout XML file mein use karte hain, to ye constructor un attributes ko SearchView ke sath associate karta hai.</p>
              
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object leta hai, jo SearchView widget ko create karne ke liye use hota hai. Aap ismein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object leta hai, jo SearchView ke sath associate kiye gaye XML attributes ko represent karta hai. Agar aap SearchView widget ko XML layout file mein define karte hain, to ye constructor layout XML ke attributes ko associate karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `SearchView`,
              id: "SearchView()",
              code: `SearchView(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public SearchView(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ka upayog, SearchView widget ko ek Context object, XML attributes, aur default style attribute ke sath create karne ke liye hota hai.`,

              longDes: `
              <p>SearchView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) constructor ka upayog, SearchView widget ko ek Context object, XML attributes, aur default style attribute ke sath create karne ke liye hota hai. XML attributes, aapke layout XML file mein define kiye gaye SearchView ke customizations hote hain, jaise hint text, icon, background, etc. Default style attribute, SearchView widget ke liye default styles ko apply karne mein madad karta hai.</p>
              
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object leta hai, jo SearchView widget ko create karne ke liye use hota hai. Aap ismein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object leta hai, jo SearchView ke sath associate kiye gaye XML attributes ko represent karta hai. Agar aap SearchView widget ko XML layout file mein define karte hain, to ye constructor layout XML ke attributes ko associate karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hota hai, jo default style attribute resource ID ko represent karta hai. Isse SearchView ko default styles se apply karne ke liye use kiya jata hai. Agar aap defStyleAttr ko 0 (zero) pass karte hain, to koi default style apply nahi hota hai.</p>`,
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
              name: "clearFocus",
              id: "clearFocus()",
              dataTypeName: `void`,
              code: `<a href="#clearFocus()">clearFocus</a>()`,
  
              fullCode: `public void <a href="#clearFocus()">clearFocus</a>()`,

              des: `Is method ka upayog, SearchView widget ke focus ko clear karne ke liye hota hai.`,
  
              longDes: `
              <p>clearFocus() method, SearchView ke focus ko clear karne ke liye hota hai. Focus, ek UI element (like EditText or Button) ka state hota hai, jisse us element par user interaction ho sakta hai. Jab aap kisi SearchView widget par click karte hain, to focus us SearchView par set ho jata hai, aur usmein text enter karne ke liye keyboard activate ho jata hai.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "getImeOptions",
              id: "getImeOptions()",
              dataTypeName: `int`,
              code: `<a href="#getImeOptions()">getImeOptions</a>()`,
  
              fullCode: `@Attribute(value = "android:imeOptions")</br>public int <a href="#getImeOptions()">getImeOptions</a>()`,

              des: `Ye method, SearchView ke IME (Input Method Editor) options ko retrieve karne ke liye use hota hai. IME options, EditText ya SearchView jaise input fields mein user ke keyboard interactions ko control karne ke liye istemal hote hain.`,
  
              longDes: `
              <p>getImeOptions() method ka use, SearchView ke IME options ko retrieve karne ke liye hota hai. Is method ko use karke aap IME options ki current configuration ko jaan sakte hain. Ye configuration integer value ki form mein hoti hai, jise android:imeOptions XML attribute ya setImeOptions() method ke through set kiya jata hai.</p>

              <p>getImeOptions() method ka return type int hota hai, jisme current IME options ki configuration value hoti hai.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "getInputType",
              id: "getInputType()",
              dataTypeName: `int`,
              code: `<a href="#getInputType()">getInputType</a>()`,
  
              fullCode: `public int <a href="#getInputType()">getInputType</a>()`,

              des: `Ye method, SearchView ke input type ko retrieve karne ke liye use hota hai. Input type, SearchView mein user dwara enter kiye jane wale text ke nature aur restrictions ko define karta hai.`,
  
              longDes: `
              <p>getInputType() method ka use, SearchView ke input type ko retrieve karne ke liye hota hai. Is method ko use karke aap SearchView ke current input type ki configuration ko jaan sakte hain. Ye configuration integer value ki form mein hoti hai, jise android:inputType XML attribute ya setInputType() method ke through set kiya jata hai.</p>

              <p>getInputType() method ka return type int hota hai, jisme current input type ki configuration value hoti hai.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "getMaxWidth",
              id: "getMaxWidth()",
              dataTypeName: `int`,
              code: `<a href="#getMaxWidth()">getMaxWidth</a>()`,
  
              fullCode: `@Attribute(value = "android:maxWidth")</br>public int <a href="#getMaxWidth()">getMaxWidth</a>()`,

              des: `Ye method, SearchView ke maximum width ko retrieve karne ke liye use hota hai. Maximum width, SearchView ko horizontally kitni space tak stretch kiya ja sakta hai, wo define karta hai.`,
  
              longDes: `
              <p>getMaxWidth() method ka use, SearchView ke maximum width ko retrieve karne ke liye hota hai. Is method ko use karke aap SearchView ke current maximum width ki configuration value ko jaan sakte hain.</p>

              <p>getMaxWidth() method ka return type int hota hai, jisme current maximum width ki configuration value hoti hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getQuery",
              id: "getQuery()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getQuery()">getQuery</a>()`,
  
              fullCode: `public CharSequence <a href="#getQuery()">getQuery</a>()`,

              des: `Ye method, SearchView mein enter kiye gaye search query ko retrieve karne ke liye use hota hai. SearchView, user se text input karne ke liye ek search query enter karne ke liye allow karta hai. getQuery() method ka use karke aap us entered search query ko retrieve kar sakte hain.`,
  
              longDes: `
              <p>getQuery() method ka use, SearchView mein enter kiye gaye search query ko retrieve karne ke liye hota hai. Is method ko use karke aap SearchView ke current query ki value ko jaan sakte hain.</p>

              <p>getQuery() method ka return type CharSequence hota hai, jisme current entered search query ki value hoti hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "getQueryHint",
              id: "getQueryHint()",
              dataTypeName: `@Nullable CharSequence`,
              code: `<a href="#getQueryHint()">getQueryHint</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:queryHint")</br>public @Nullable CharSequence <a href="#getQueryHint()">getQueryHint</a>()`,

              des: `Ye method, SearchView ke query hint ko retrieve karne ke liye use hota hai. Query hint, SearchView mein user ko suggest karne ke liye display kiya jata hai, ki wo search bar mein kis tarah ka text enter kar sakta hai.`,
  
              longDes: `
              <p>getQueryHint() method ka use, SearchView ke query hint ko retrieve karne ke liye hota hai. Is method ko use karke aap SearchView ke current query hint ki value ko jaan sakte hain.</p>

              <p>getQueryHint() method ka return type CharSequence hota hai, jisme current query hint ki value hoti hai. Agar koi query hint set nahi kiya gaya hai, to yeh method null return karega.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getSuggestionsAdapter",
              id: "getSuggestionsAdapter()",
              dataTypeName: `CursorAdapter`,
              code: `<a href="#getSuggestionsAdapter()">getSuggestionsAdapter</a>()`,
  
              fullCode: `public CursorAdapter <a href="#getSuggestionsAdapter()">getSuggestionsAdapter</a>()`,

              des: `Ye method, SearchView ke suggestions adapter ko retrieve karne ke liye use hota hai. Suggestions adapter, SearchView mein user ke liye search suggestions ko display karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getSuggestionsAdapter() method ka use, SearchView ke suggestions adapter ko retrieve karne ke liye hota hai. Is method ko use karke aap SearchView ke current suggestions adapter ko retrieve kar sakte hain.</p>

              <p>getSuggestionsAdapter() method ka return type CursorAdapter hota hai. CursorAdapter ek adapter hota hai, jo ListView ya RecyclerView jaise views ke data ko Cursor object se bind karta hai. Iska use suggestions ko display karne ke liye SearchView mein kiya jata hai.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "isIconfiedByDefault",
              id: "isIconfiedByDefault()",
              dataTypeName: `boolean`,
              code: `<a href="#isIconfiedByDefault()">isIconfiedByDefault</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:iconifiedByDefault")</br>public boolean <a href="#isIconfiedByDefault()">isIconfiedByDefault</a>()`,

              des: `Ye method, SearchView ke default iconified (collapsed) state ko retrieve karne ke liye use hota hai. Agar SearchView iconified (collapsed) by default hai, to search bar iconified (collapsed) mode mein open hota hai jab layout create hota hai.`,
  
              longDes: `
              <p>isIconifiedByDefault() method ka use, SearchView ke default iconified state ko retrieve karne ke liye hota hai. Is method ko use karke aap pata kar sakte hain ki SearchView layout create hote waqt iconified (collapsed) mode mein open hoga ya nahi.</p>

              <p>isIconifiedByDefault() method ka return type boolean hota hai, jismein true return hoga agar SearchView iconified (collapsed) by default hai, aur false return hoga agar nahi hai.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "isIconified",
              id: "isIconified()",
              dataTypeName: `boolean`,
              code: `<a href="#isIconified()">isIconified</a>()`,
  
              fullCode: `public boolean <a href="#isIconified()">isIconified</a>()`,

              des: `Ye method, SearchView ke current state ko check karne ke liye use hota hai. Agar SearchView iconified (collapsed) mode mein hai, to yeh method true return karega, aur agar expanded mode mein hai, to false return karega.`,
  
              longDes: `
              <p>isIconified() method ka use, SearchView ke current state ko check karne ke liye hota hai. Is method ko use karke aap pata kar sakte hain ki SearchView iconified mode mein hai ya expanded mode mein hai.</p>

              <p>isIconified() method ka return type boolean hota hai. Agar SearchView iconified mode mein hai, to true return hoga, aur agar expanded mode mein hai, to false return hoga.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "isQueryRefinementEnabled",
              id: "isQueryRefinementEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isQueryRefinementEnabled()">isQueryRefinementEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isQueryRefinementEnabled()">isQueryRefinementEnabled</a>()`,

              des: `Ye method, SearchView ke query refinement ki enable/disable state ko check karne ke liye use hota hai. Query refinement, search suggestions ke liye ki gayi query ko optimize karta hai, jisse user ko accurate search results milte hain.`,
  
              longDes: `
              <p>isQueryRefinementEnabled() method ka use, SearchView ke current query refinement ki state ko check karne ke liye hota hai. Is method ko use karke aap pata kar sakte hain ki SearchView mein query refinement enabled hai ya nahi.</p>

              <p>isQueryRefinementEnabled() method ka return type boolean hota hai. Agar SearchView mein query refinement enabled hai, to true return hoga, aur agar disabled hai, to false return hoga.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "isSubmitButtonEnabled",
              id: "isSubmitButtonEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isSubmitButtonEnabled()">isSubmitButtonEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isSubmitButtonEnabled()">isSubmitButtonEnabled</a>()`,

              des: `Ye method, SearchView ke submit button ki enable/disable state ko check karne ke liye use hota hai. Submit button, SearchView mein text input ke sath submit action perform karne ke liye hota hai, jisse user entered query ko search ke liye submit kiya ja sakta hai.`,
  
              longDes: `
              <p>isSubmitButtonEnabled() method ka use, SearchView ke current submit button ki state ko check karne ke liye hota hai. Is method ko use karke aap pata kar sakte hain ki SearchView mein submit button enabled hai ya nahi.</p>

              <p>isSubmitButtonEnabled() method ka return type boolean hota hai. Agar SearchView mein submit button enabled hai, to true return hoga, aur agar disabled hai, to false return hoga.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "onActionViewCollapsed",
              id: "onActionViewCollapsed()",
              dataTypeName: `void`,
              code: `<a href="#onActionViewCollapsed()">onActionViewCollapsed</a>()`,
  
              fullCode: `public void <a href="#onActionViewCollapsed()">onActionViewCollapsed</a>()`,

              des: `Ye method, SearchView ke iconified (collapsed) state par aane par, view ko reset karne ke liye use hota hai. Jab user search action complete karne ke baad back button ya close icon par click karta hai, to SearchView iconified mode mein wapas jata hai. Is samay onActionViewCollapsed() method call hota hai.`,
  
              longDes: `
              <p>onActionViewCollapsed() method ka use, SearchView ke iconified (collapsed) state par aane par view ko reset karne ke liye hota hai. Is method ka main use case ye hai ki jab user search action complete karta hai, tab aap onActionViewCollapsed() method mein relevant handling karke apne application ke state ko reset kar sakte hain.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "onActionViewExpanded",
              id: "onActionViewExpanded()",
              dataTypeName: `void`,
              code: `<a href="#onActionViewExpanded()">onActionViewExpanded</a>()`,
  
              fullCode: `public void <a href="#onActionViewExpanded()">onActionViewExpanded</a>()`,

              des: `Ye method, SearchView ke expanded state par aane par, view ko customize karne ke liye use hota hai. Jab user search bar ko expand karta hai, tab onActionViewExpanded() method call hota hai.`,
  
              longDes: `
              <p>onActionViewExpanded() method ka use, SearchView ke expanded state par aane par view ko customize karne ke liye hota hai. Is method ka main use case ye hai ki jab user search bar ko expand karta hai, tab aap onActionViewExpanded() method mein relevant handling karke apne application ke state ko customize kar sakte hain.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "onWindowFocusChanged",
              id: "onWindowFocusChanged()",
              dataTypeName: `void`,
              code: `<a href="#onWindowFocusChanged()">onWindowFocusChanged</a>(boolean hasWindowFocus)`,
  
              fullCode: `public void <a href="#onWindowFocusChanged()">onWindowFocusChanged</a>(boolean hasWindowFocus)`,

              des: `Ye method, SearchView ke window focus ki changes par reaction dene ke liye use hota hai. Jab SearchView apne parent window mein focus paata hai ya khota hai, tab onWindowFocusChanged() method call hota hai.`,
  
              longDes: `
              <p>onWindowFocusChanged(boolean hasWindowFocus) method ka use, SearchView ke window focus ki changes par reaction dene ke liye hota hai. Is method ka main use case ye hai ki jab SearchView focus paata hai ya khota hai, tab aap onWindowFocusChanged() method mein relevant handling kar sakte hain, jaise ki search suggestions dismiss karna, background tasks ko pause karna, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean hasWindowFocus`,
                        des:`<p>Ek boolean parameter hai, jiska value true hota hai jab SearchView apne parent window mein focus paata hai, aur false hota hai jab focus khota hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "requestFocus",
              id: "requestFocus()",
              dataTypeName: `boolean`,
              code: `<a href="#requestFocus()">requestFocus</a>(int direction, Rect previouslyFocusedRect)`,
  
              fullCode: `public boolean <a href="#requestFocus()">requestFocus</a>(int direction, Rect previouslyFocusedRect)`,

              des: `Ye method, SearchView ko focus karne ke liye use hota hai. Agar aap SearchView ko focus karna chahte hain, to requestFocus() method ka use karke focus set kar sakte hain.`,
  
              longDes: `
              <p>requestFocus(int direction, Rect previouslyFocusedRect) method ka use, SearchView ko focus karne ke liye hota hai. Is method ko use karke aap SearchView ko programmaticaly focus kar sakte hain.</p>

              <p>requestFocus(int direction, Rect previouslyFocusedRect) method ka return type boolean hota hai. Agar focus set ho jaata hai, to method true return karega, aur agar focus set nahi ho paata hai, to false return karega.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int direction`,
                        des:`<p>Ye parameter View.FOCUS_UP, View.FOCUS_DOWN, View.FOCUS_LEFT, ya View.FOCUS_RIGHT value me se kisi ek ko le sakta hai. Direction, focus ke liye ek relative direction specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `Rect previouslyFocusedRect`,
                        des:`<p>Ye parameter, Rect object hota hai jo pichle focused view ka bounding rectangle represent karta hai. Aap is parameter ko null bhi rakh sakte hain agar pichle focused view ka koi reference nahi hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setIconified",
              id: "setIconified()",
              dataTypeName: `void`,
              code: `<a href="#setIconified()">setIconified</a>(boolean iconify)`,
  
              fullCode: `public void <a href="#setIconified()">setIconified</a>(boolean iconify)`,

              des: `Ye method, SearchView ke iconified (collapsed) mode ya expanded mode ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setIconified(boolean iconify) method ka use, SearchView ke iconified mode ya expanded mode ko set karne ke liye hota hai. Agar aap setIconified(true) ko call karte hain, to SearchView iconified mode mein set ho jata hai, aur agar aap setIconified(false) ko call karte hain, to expanded mode mein set ho jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean iconify`,
                        des:`<p>Ye parameter ek boolean value hai. Agar iska value true hota hai, to SearchView iconified mode mein set ho jata hai, aur agar false hota hai, to expanded mode mein set ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setIconifiedByDefault",
              id: "setIconifiedByDefault()",
              dataTypeName: `void`,
              code: `<a href="#setIconifiedByDefault()">setIconifiedByDefault</a>(boolean iconified)`,
  
              fullCode: `public void <a href="#setIconifiedByDefault()">setIconifiedByDefault</a>(boolean iconified)`,

              des: `Ye method, SearchView ke default state ko set karne ke liye use hota hai. `,
  
              longDes: `
              <p>setIconifiedByDefault(boolean iconified) method ka use, SearchView ke default state ko set karne ke liye hota hai. Agar aap setIconifiedByDefault(true) ko call karte hain, to SearchView by default iconified mode mein open hoga, aur agar aap setIconifiedByDefault(false) ko call karte hain, to by default expanded mode mein open hoga.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean iconified`,
                        des:`<p>Ye parameter ek boolean value hai. Agar iska value true hota hai, to SearchView by default iconified mode mein open hoga, aur agar false hota hai, to expanded mode mein open hoga.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setImeOptions",
              id: "setImeOptions()",
              dataTypeName: `void`,
              code: `<a href="#setImeOptions()">setImeOptions</a>(int imeOptions)`,
  
              fullCode: `public void <a href="#setImeOptions()">setImeOptions</a>(int imeOptions)`,

              des: `Ye method, SearchView ke Input Method Editor (IME) options ko set karne ke liye use hota hai. IME options, user ke text input ko manage karne ke liye ek set of options provide karte hain. `,
  
              longDes: `
              <p>setImeOptions(int imeOptions) method ka use, SearchView ke IME options ko set karne ke liye hota hai. Aap is method ko use karke IME options ko customize kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int imeOptions`,
                        des:`<p>Ye parameter, ek integer value hota hai jisse aap IME options set kar sakte hain. Android platform mein pre-defined constants EditorInfo class mein available hote hain, jinhe imeOptions parameter ke liye use kiya jaata hai. Aap kisi bhi appropriate constant ko imeOptions parameter mein pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setInputType",
              id: "setInputType()",
              dataTypeName: `void`,
              code: `<a href="#setInputType()">setInputType</a>(int inputType)`,
  
              fullCode: `public void <a href="#setInputType()">setInputType</a>(int inputType)`,

              des: `Ye method, SearchView ke text input ke liye InputType ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, SearchView ke text input ke liye InputType ko set karne ke liye use hota hai. InputType, text input ko handle karne ke liye text ki properties ko define karta hai, jaise ki kya text number hona chahiye, kya capital letters hona chahiye, kya multiline text hona chahiye, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int inputType`,
                        des:`<p>Ye parameter, ek integer value hota hai jisse aap InputType set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setMaxWidth",
              id: "setMaxWidth()",
              dataTypeName: `void`,
              code: `<a href="#setMaxWidth()">setMaxWidth</a>(int maxpixels)`,
  
              fullCode: `public void <a href="#setMaxWidth()">setMaxWidth</a>(int maxpixels)`,

              des: `Ye method, SearchView ke maximum width ko set karne ke liye use hota hai. Agar aap setMaxWidth(int maxPixels) ko call karte hain, to SearchView ki width maximum specified pixels tak ho jayegi.`,
  
              longDes: `
              <p>setMaxWidth(int maxPixels) method ka use, SearchView ke maximum width ko set karne ke liye hota hai. Agar aap setMaxWidth(int maxPixels) ko call karte hain, to SearchView ki width maximum specified pixels tak ho jayegi.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int maxpixels`,
                        des:`<p>Ye parameter ek integer value hai, jisse aap maximum width ko pixels mein set kar sakte hain. Positive integer values specify karte hain ki SearchView ki width kitni pixels tak ho sakti hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setOnCloseListener",
              id: "setOnCloseListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnCloseListener()">setOnCloseListener</a>(SearchView.OnCloseListener listener)`,
  
              fullCode: `public void <a href="#setOnCloseListener()">setOnCloseListener</a>(SearchView.OnCloseListener listener)`,

              des: `Ye method, SearchView par close icon par click hone par ek OnCloseListener ko set karne ke liye use hota hai. OnCloseListener, close icon par click hone par koi action perform karne ke liye ek interface provide karta hai.`,
  
              longDes: `
              <p>setOnCloseListener(SearchView.OnCloseListener listener) method ka use, SearchView par close icon par click hone par ek OnCloseListener ko set karne ke liye hota hai. Aap is method ko use karke close icon par click karne par perform karne ke liye custom action define kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `SearchView.OnCloseListener listener`,
                        des:`<p>Ye parameter ek SearchView.OnCloseListener interface type ka object hota hai. Is interface ko implement karke aap close icon par click hone par perform karne ke liye apni custom logic ko define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setOnQueryTextFocusChangeListener",
              id: "setOnQueryTextFocusChangeListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnQueryTextFocusChangeListener()">setOnQueryTextFocusChangeListener</a>(View.OnFocusChangeListener listener)`,
  
              fullCode: `public void <a href="#setOnQueryTextFocusChangeListener()">setOnQueryTextFocusChangeListener</a>(View.OnFocusChangeListener listener)`,

              des: `Ye method, SearchView par query text box ka focus change hone par ek OnFocusChangeListener ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setOnQueryTextFocusChangeListener(View.OnFocusChangeListener listener) method ka use, SearchView par query text box ka focus change hone par ek OnFocusChangeListener ko set karne ke liye hota hai. Aap is method ko use karke query text box ke focus change hone par perform karne ke liye custom action define kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View.OnFocusChangeListener listener`,
                        des:`<p>Ye parameter ek View.OnFocusChangeListener interface type ka object hota hai. Is interface ko implement karke aap query text box ke focus change hone par perform karne ke liye apni custom logic ko define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setOnQueryTextListener",
              id: "setOnQueryTextListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnQueryTextListener()">setOnQueryTextListener</a>(SearchView.OnQueryTextListener listener)`,
  
              fullCode: `public void <a href="#setOnQueryTextListener()">setOnQueryTextListener</a>(SearchView.OnQueryTextListener listener)`,

              des: `Ye method, SearchView par query text ke text change hone aur submit hone ke events par ek OnQueryTextListener ko set karne ke liye use hota hai. `,
  
              longDes: `
              <p>setOnQueryTextListener(SearchView.OnQueryTextListener listener) method ka use, SearchView par query text ke text change hone aur submit hone par ek OnQueryTextListener ko set karne ke liye hota hai. Aap is method ko use karke query text ke text change aur submit hone par perform karne ke liye custom action define kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `SearchView.OnQueryTextListener listener`,
                        des:`<p>Ye parameter ek SearchView.OnQueryTextListener interface type ka object hota hai. Is interface ko implement karke aap query text ke text change aur submit hone par perform karne ke liye apni custom logic ko define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setOnSearchClickListener",
              id: "setOnSearchClickListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnSearchClickListener()">setOnSearchClickListener</a>(View.OnClickListener listener)`,
  
              fullCode: `public void <a href="#setOnSearchClickListener()">setOnSearchClickListener</a>(View.OnClickListener listener)`,

              des: `Ye method, SearchView par search icon par click hone par ek OnClickListener ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setOnSearchClickListener(View.OnClickListener listener) method ka use, SearchView par search icon par click hone par ek OnClickListener ko set karne ke liye hota hai. Aap is method ko use karke search icon par click karne par perform karne ke liye custom action define kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View.OnClickListener listener`,
                        des:`<p>Ye parameter ek View.OnClickListener interface type ka object hota hai. Is interface ko implement karke aap search icon par click karne par perform karne ke liye apni custom logic ko define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setOnSuggestionListener",
              id: "setOnSuggestionListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnSuggestionListener()">setOnSuggestionListener</a>(SearchView.OnSuggestionListener listener`,
  
              fullCode: `public void <a href="#setOnSuggestionListener()">setOnSuggestionListener</a>(SearchView.OnSuggestionListener listener)`,

              des: `Ye method, SearchView par search suggestions ke events par ek OnSuggestionListener ko set karne ke liye use hota hai. `,
  
              longDes: `
              <p>setOnSuggestionListener(SearchView.OnSuggestionListener listener) method ka use, SearchView par search suggestions ke events par ek OnSuggestionListener ko set karne ke liye hota hai. Aap is method ko use karke search suggestions ke events par perform karne ke liye custom action define kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `SearchView.OnSuggestionListener listener`,
                        des:`<p>Ye parameter ek SearchView.OnSuggestionListener interface type ka object hota hai. Is interface ko implement karke aap search suggestions ke events par perform karne ke liye apni custom logic ko define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setQuery",
              id: "setQuery()",
              dataTypeName: `void`,
              code: `<a href="#setQuery()">setQuery</a>(CharSequence query, boolean submit)`,
  
              fullCode: `public void <a href="#setQuery()">setQuery</a>(CharSequence query, boolean submit)`,

              des: `Ye method, SearchView ke query text box mein search query ko set karne ke liye aur use submit karne ke liye use hota hai.`,
  
              longDes: `
              <p>setQuery(CharSequence query, boolean submit) method ka use, SearchView ke query text box mein search query ko set karne ke liye aur use submit karne ke liye hota hai. Aap is method ko use karke SearchView mein predefined search query set kar sakte hain aur use submit kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence query`,
                        des:`<p>Ye parameter ek CharSequence type ka hai, jisse aap search query ko set kar sakte hain. CharSequence ek sequence of characters ko represent karta hai, jaise ki String.</p>`,
                      },
                      {
                        dataTypeName: `boolean submit`,
                        des:`<p>Ye parameter ek boolean value hai, jo indicate karta hai ki search query set hone ke baad usay submit karna hai ya nahi. Agar submit parameter true hai, to search query set karne ke saath saath search operation initiate ho jata hai. Agar submit parameter false hai, to search query set karne ke baad user ko manually search submit karna hoga.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setQueryHint",
              id: "setQueryHint()",
              dataTypeName: `void`,
              code: `<a href="#setQueryHint()">setQueryHint</a>(@Nullable CharSequence hint)`,
  
              fullCode: `public void <a href="#setQueryHint()">setQueryHint</a>(@Nullable CharSequence hint)`,

              des: `Ye method, SearchView ke query text box mein hint text ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setQueryHint(@Nullable CharSequence hint) method ka use, SearchView ke query text box mein hint text ko set karne ke liye hota hai. Aap is method ko use karke query text box mein predefined hint text ko show kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable CharSequence hint`,
                        des:`<p>Ye parameter ek CharSequence type ka hai, jisse aap hint text ko set kar sakte hain. CharSequence ek sequence of characters ko represent karta hai, jaise ki String. Agar aap hint text ko set nahi karna chahte hain, to null bhi pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setQueryRefinementEnabled",
              id: "setQueryRefinementEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setQueryRefinementEnabled()">setQueryRefinementEnabled</a>(boolean enable)`,
  
              fullCode: `public void <a href="#setQueryRefinementEnabled()">setQueryRefinementEnabled</a>(boolean enable)`,

              des: `Ye method, SearchView ke query refinement feature ko enable ya disable karne ke liye use hota hai.`,
  
              longDes: `
              <p>setQueryRefinementEnabled(boolean enable) method ka use, SearchView ke query refinement feature ko enable ya disable karne ke liye hota hai. Agar aap is method ko true ke sath call karte hain, to SearchView mein selected suggestion ke basis par query refinement options show honge. Agar aap is method ko false ke sath call karte hain, to query refinement options ko disable kiya jaayega aur selected suggestion ke basis par koi additional suggestions nahi dikhayi denge.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enable`,
                        des:`<p>Ye parameter ek boolean value hai, jo indicate karta hai ki query refinement feature ko enable ya disable karna hai. Agar enable parameter true hai, to query refinement feature enable ho jayega. Agar enable parameter false hai, to query refinement feature disable ho jayega.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setSearchableInfo",
              id: "setSearchableInfo()",
              dataTypeName: `void`,
              code: `<a href="#setSearchableInfo()">setSearchableInfo</a>(SearchableInfo searchable)`,
  
              fullCode: `public void <a href="#setSearchableInfo()">setSearchableInfo</a>(SearchableInfo searchable)`,

              des: `Ye method, SearchView ko ek searchable activity ke sath associate karne ke liye use hota hai.`,
  
              longDes: `
              <p>setSearchableInfo(SearchableInfo searchable) method ka use, SearchView ko ek searchable activity ke sath associate karne ke liye hota hai. Aap is method ko use karke search suggestions aur search operations ko handle karne ke liye SearchView ko tayyar kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `SearchableInfo searchable`,
                        des:`<p>Ye parameter ek SearchableInfo type ka object hota hai, jisse aap searchable activity ke sath related information ko SearchView se bind kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setSubmitButtonEnabled",
              id: "setSubmitButtonEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setSubmitButtonEnabled()">setSubmitButtonEnabled</a>(boolean enabled)`,
  
              fullCode: `public void <a href="#setSubmitButtonEnabled()">setSubmitButtonEnabled</a>(boolean enabled)`,

              des: `Ye method, SearchView mein search submit button ko enable ya disable karne ke liye use hota hai.`,
  
              longDes: `
              <p>setSubmitButtonEnabled(boolean enabled) method ka use, SearchView mein search submit button ko enable ya disable karne ke liye hota hai. Agar aap is method ko true ke sath call karte hain, to search submit button show hoga. Agar aap is method ko false ke sath call karte hain, to search submit button hide ho jayega.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Ye parameter ek boolean value hai, jo indicate karta hai ki search submit button ko enable ya disable karna hai. Agar enabled parameter true hai, to search submit button show hoga. Agar enabled parameter false hai, to search submit button hide ho jayega.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSuggestionsAdapter",
              id: "setSuggestionsAdapter()",
              dataTypeName: `void`,
              code: `<a href="#setSuggestionsAdapter()">setSuggestionsAdapter</a>(CursorAdapter adapter)`,
  
              fullCode: `public void <a href="#setSuggestionsAdapter()">setSuggestionsAdapter</a>(CursorAdapter adapter)`,

              des: `Ye method, SearchView mein search suggestions ko display karne ke liye ek CursorAdapter ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setSuggestionsAdapter(CursorAdapter adapter) method ka use, SearchView mein search suggestions ko display karne ke liye ek CursorAdapter ko set karne ke liye hota hai. Aap is method ko use karke search suggestions ko SearchView mein dynamic tarike se display kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CursorAdapter adapter`,
                        des:`<p>Ye parameter ek CursorAdapter type ka hai, jisse aap search suggestions ko SearchView mein display karne ke liye set kar sakte hain.</p>`,
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
              name: "onDetachedFromWindow",
              id: "onDetachedFromWindow()",
              dataTypeName: `void`,
              code: `<a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              fullCode: `protected void <a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              des: `Ye method, SearchView view ko uski parent window se detach karne ke liye override kiya jata hai.`,
  
              longDes: `
                <p>onDetachedFromWindow() method ka use, SearchView view ko uski parent window se detach karne ke samay cleanup operations ko perform karne ke liye hota hai. Jab SearchView view destroy hota hai ya uska associated window remove hota hai, tab is method mein aap kisi custom cleanup logic ko define kar sakte hain.</p>`,
  
              parameter: [],
            },



  
            {
              dep: false,
              name: "onLayout",
              id: "onLayout()",
              dataTypeName: `void`,
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              des: `Ye method, SearchView view ke child views ko layout karne ke liye override kiya jata hai.`,
  
              longDes: `
                <p>onLayout(boolean changed, int left, int top, int right, int bottom) method ka use, SearchView ke child views ko layout karne ke liye hota hai. Jab bhi SearchView ka layout update hota hai ya view hierarchy mein koi change hota hai, tab is method mein aap child views ko appropriate positions par layout kar sakte hain.</p>`,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean changed`,
                        des:`<p>Ye parameter ek boolean value hai, jo indicate karta hai ki SearchView ka layout change hua hai ya nahi. Agar changed parameter true hai, to layout change hua hai, aur agar false hai, to layout mein koi change nahi hua hai.</p>`,
                      },
                      {
                        dataTypeName: `int left`,
                        des:`<p>Ye parameter SearchView ke left boundary ka position hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Ye parameter SearchView ke top boundary ka position hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int right`,
                        des:`<p>Ye parameter SearchView ke right boundary ka position hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Ye parameter SearchView ke bottom boundary ka position hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  


  
            {
              dep: false,
              name: "onMeasure",
              id: "onMeasure()",
              dataTypeName: `void`,
              code: `<a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              fullCode: `protected void <a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              des: `Ye method, SearchView view ka size (width aur height) measure karne ke liye override kiya jata hai.`,
  
              longDes: `
                <p>onMeasure(int widthMeasureSpec, int heightMeasureSpec) method ka use, SearchView view ka size measure karne ke liye hota hai. Jab bhi SearchView ka size change hota hai ya view hierarchy mein koi change hota hai, tab is method mein aap SearchView view ka size measure kar sakte hain, jisse view ka appropriate size tayyar ho sakta hai.</p>`,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>Ye parameter view ka width measure karne ke liye ek 32-bit integer value hai, jo width aur width measure mode ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>Ye parameter view ka height measure karne ke liye ek 32-bit integer value hai, jo height aur height measure mode ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  
            {
              dep: false,
              name: "onQueryRefine",
              id: "onQueryRefine()",
              dataTypeName: `void`,
              code: `<a href="#onQueryRefine()">onQueryRefine</a>(@Nullable CharSequence queryText)`,
  
              fullCode: `protected void <a href="#onQueryRefine()">onQueryRefine</a>(@Nullable CharSequence queryText)`,
  
              des: `Is method ka use search query ko refine karne aur validate karne ke liye hota hai.`,
  
              longDes: `
                <p>onQueryRefine(@Nullable CharSequence queryText) method ka use search query ko refine karne ya validate karne ke liye hota hai. Jab users SearchView mein kuch text enter karte hain, to onQueryTextSubmit() method call hota hai jisse app search query ke sath further actions le sakta hai. Lekin, kabhi-kabhi users dwara enter kiya gaya search query app ke requirements ya constraints se match nahi karta ho, aur isko refine ya validate karne ki zarurat hoti hai.</p>`,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable CharSequence queryText`,
                        des:`<p>Ye parameter CharSequence type ka hota hai, jisme search query ka text hota hai. Query text ko refine karne ya validate karne ke liye is parameter ka use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  
            {
              dep: false,
              name: "onRestoreInstanceState",
              id: "onRestoreInstanceState()",
              dataTypeName: `void`,
              code: `<a href="#onRestoreInstanceState()">onRestoreInstanceState</a>(Parcelable state)`,
  
              fullCode: `protected void <a href="#onRestoreInstanceState()">onRestoreInstanceState</a>(Parcelable state)`,
  
              des: `Is method ka use SearchView ki state ko restore karne ke liye hota hai, jaise ki orientation change, app background se foreground me aana ya kisi configuration change ke baad.`,
  
              longDes: `
                <p>onRestoreInstanceState(Parcelable state) method ka use SearchView ki state ko restore karne ke liye hota hai. Agar aap apne app mein SearchView ka use kar rahe hain aur app ke configuration change hone par SearchView ki state ko preserve karna chahte hain (jaise ki user dwara enter kiye gaye text ko restore karna), to aap onRestoreInstanceState() method ka use karke SearchView ki state ko restore kar sakte hain.</p>`,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcelable state`,
                        des:`<p>onRestoreInstanceState() method ek parameter leta hai jo Parcelable type ka hota hai. Ye parameter activity ke instance state ko represent karta hai.</p>`,
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
  
              fullCode: `protected Parcelable <a href="#onSaveInstanceState()">onSaveInstanceState</a>()`,
  
              des: `Is method ka use SearchView ki state ko save karne ke liye hota hai, jisse configuration changes ya app background me jane ke baad bhi SearchView ki state preserve rahe.`,
  
              longDes: `
                <p>onSaveInstanceState() method ka use SearchView ki state ko save karne ke liye hota hai. Agar aap apne app mein SearchView ka use kar rahe hain aur app ke configuration change hone par SearchView ki state ko preserve karna chahte hain (jaise ki user dwara enter kiye gaye text ko restore karna), to aap onSaveInstanceState() method ka use karke SearchView ki state ko Parcelable object mein save kar sakte hain.</p>`,
  
              parameter: [],
            },
  



          ],
        },
     
       
     
  

      },
    });
  };
  