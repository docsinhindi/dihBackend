module.exports.AppCompatDelegate = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatDelegate",
      hCode: `public abstract class <a href="#AppCompatDelegate">AppCompatDelegate</a>`,
  
      des: 
        `
        <p>AppCompatDelegate class ki madad se aap Material Design ki suvidhaon jaise ki ActionBar, Night Mode, DayNight Theme, Contextual Toolbar, Auto mirroring, ityadi ka istemal kar sakte hain. Yeh class AppCompat library ka central component hai aur aapke application ko backwards compatibility pradan karta hai.</p>
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
        constant: {
          name: "Constants",
          success: true,
          method: [
            {
              dep: false,
              name: "FEATURE_ACTION_MODE_OVERLAY",
              id: "",
              dataTypeName: `static final int`,
              code: `FEATURE_ACTION_MODE_OVERLAY = 10`,
              fullCode: `public static final int FEATURE_ACTION_MODE_OVERLAY = 10`,

              des:`FEATURE_ACTION_MODE_OVERLAY ka use ActionMode overlay mode ke liye kiya jata hai. Jab overlay mode enable hota hai, ActionMode contextual action bar screen ke upar overlay ke roop mein show hota hai. Isse action bar ke space par koi overlap nahi hota hai aur action items ko focus rakha jata hai.`,
              
              longDes: `<p>FEATURE_ACTION_MODE_OVERLAY ka use ActionMode overlay mode ke liye kiya jata hai. Jab overlay mode enable hota hai, ActionMode contextual action bar screen ke upar overlay ke roop mein show hota hai. Isse action bar ke space par koi overlap nahi hota hai aur action items ko focus rakha jata hai.</p>
              
              <p>Overlay mode ka use kuch scenarios mein kiya jata hai, jahan par screen space limit hone ki wajah se action bar ke items properly display nahi ho pate. Overlay mode enable karne se action bar screen space ke saath independent ho jata hai aur items ko better visibility provide karta hai.</p>`,
              parameter: [],
            },
          

            {
              dep: false,
              name: "FEATURE_SUPPORT_ACTION_BAR",
              id: "",
              dataTypeName: `static final int`,
              code: `FEATURE_SUPPORT_ACTION_BAR = 108`,
              fullCode: `public static final int FEATURE_SUPPORT_ACTION_BAR = 108`,

              des:`FEATURE_SUPPORT_ACTION_BAR ka use support action bar (v7 appcompat action bar) ke liye kiya jata hai. Is constant ka value Window.FEATURE_ACTION_BAR ke saath match karta hai, jise Android framework Window class ke addFeature() method mein use kiya jata hai.`,
              
              longDes: `<p>FEATURE_ACTION_MODE_OVERLAY ka use ActionMode overlay mode ke liye kiya jata hai. Jab overlay mode enable hota hai, ActionMode contextual action bar screen ke upar overlay ke roop mein show hota hai. Isse action bar ke space par koi overlap nahi hota hai aur action items ko focus rakha jata hai.</p>
              
              <p>Support action bar, pre-Lollipop (Android 5.0) versions ke devices par consistent action bar experience provide karne ke liye hai. Isse application developers ko native action bar functionality ke benefits milte hain, jaise title, subtitle, action items, overflow menu, navigation, ityadi.</p>`,
              parameter: [],
            },
          
          

            {
              dep: false,
              name: "FEATURE_SUPPORT_ACTION_BAR_OVERLAY",
              id: "",
              dataTypeName: `static final int`,
              code: `FEATURE_SUPPORT_ACTION_BAR_OVERLAY = 109`,
              fullCode: `public static final int FEATURE_SUPPORT_ACTION_BAR_OVERLAY = 109`,

              des:`FEATURE_SUPPORT_ACTION_BAR_OVERLAY ka use support action bar overlay mode ke liye kiya jata hai. Jab overlay mode enable hota hai, support action bar screen ke upar overlay ke roop mein show hota hai. Isse action bar ke space par koi overlap nahi hota hai aur action items ko focus rakha jata hai.`,
              
              longDes: `<p>FEATURE_SUPPORT_ACTION_BAR_OVERLAY ka use support action bar overlay mode ke liye kiya jata hai. Jab overlay mode enable hota hai, support action bar screen ke upar overlay ke roop mein show hota hai. Isse action bar ke space par koi overlap nahi hota hai aur action items ko focus rakha jata hai.</p>
              
              <p>Support action bar overlay mode ka use kuch scenarios mein kiya jata hai, jahan par screen space limit hone ki wajah se action bar ke items properly display nahi ho pate. Overlay mode enable karne se action bar screen space ke saath independent ho jata hai aur items ko better visibility provide karta hai.</p>`,
              parameter: [],
            },

          

            {
              dep: false,
              name: "MODE_NIGHT_AUTO",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_AUTO = 0`,
              fullCode: `public static final int MODE_NIGHT_AUTO = 0`,

              des:`MODE_NIGHT_AUTO ka value 0 hai, aur iska use dark mode (night mode) ke automatic behavior ko configure karne ke liye kiya jata hai.`,
              
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Use MODE_NIGHT_AUTO_TIME instead</p></aside>

              <p>MODE_NIGHT_AUTO ka value 0 hai, aur iska use dark mode (night mode) ke automatic behavior ko configure karne ke liye kiya jata hai.</p>
              
              <p>Dark mode (night mode) Android me ek feature hai jisme application ke UI ko dark color scheme mein display kiya jata hai. MODE_NIGHT_AUTO constant ka use karte hue, automatic dark mode behavior ko set kiya jata hai. Isme system ke time, battery saver, ya user preferences ke hisaab se dark mode enable ya disable ho sakta hai.</p>`,
              parameter: [],
            },
            
          

            {
              dep: false,
              name: "MODE_NIGHT_AUTO_BATTERY",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_AUTO_BATTERY = 3`,
              fullCode: `public static final int MODE_NIGHT_AUTO_BATTERY = 3`,

              des:`MODE_NIGHT_AUTO_BATTERY ka value 3 hai, aur iska use automatic dark mode (night mode) behavior ko configure karne ke liye kiya jata hai, jahan dark mode battery saver mode ke saath associate kiya jata hai.`,
              
              longDes: `


              <p>MODE_NIGHT_AUTO_BATTERY ka value 3 hai, aur iska use automatic dark mode (night mode) behavior ko configure karne ke liye kiya jata hai, jahan dark mode battery saver mode ke saath associate kiya jata hai.</p>
              
              <p>Dark mode Android mein ek feature hai jisme application ke UI ko dark color scheme mein display kiya jata hai. MODE_NIGHT_AUTO_BATTERY constant ka use karte hue, automatic dark mode behavior ko set kiya jata hai, jahan dark mode battery saver mode ke saath associate hota hai. Isse dark mode battery saver mode par depend karta hai aur battery saver mode enable hone par dark mode automatically enable ho jata hai.</p>`,
              parameter: [],
            },
            
          

            {
              dep: false,
              name: "MODE_NIGHT_AUTO_TIME",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_AUTO_TIME = 0`,
              fullCode: `public static final int MODE_NIGHT_AUTO_TIME = 0`,

              des:`current samay ke based per dark/night ke automatic switching deprecate karta hai.`,
              
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Automatic switching of dark/light based on the current time is deprecated. Considering using an explicit setting, or MODE_NIGHT_AUTO_BATTERY.</p></aside>

              <p>Night mode jo din ke samay (night me dark, day me light) ke adhaar per dark aur light mode ke between switch karta hai.
              </p>
              
              <p>yah determine karne ke liye calculation ki jaati hai ki yah night hai yaa nhi , location API ka use karta hai ( yadi is app me necessary permissions hai). yah hame accurate sunrise aur sunset ka samay generate karne ke liye allow karta hai. yadi is app ke paas locations API tak pahuchne ki permission nhi hai toh ham hardcoded times ka use karte hai jo less accurate hoga.
              </p>`,
              parameter: [],
            },
            
          

            {
              dep: false,
              name: "MODE_NIGHT_FOLLOW_SYSTEM",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_FOLLOW_SYSTEM = -1`,
              fullCode: `public static final int MODE_NIGHT_FOLLOW_SYSTEM = -1`,

              des:`MODE_NIGHT_FOLLOW_SYSTEM ka value -1 hai, aur iska use automatic dark mode (night mode) behavior ko configure karne ke liye kiya jata hai, jahan dark mode system settings ke saath associate kiya jata hai.`,
              
              longDes: `
              <p>MODE_NIGHT_FOLLOW_SYSTEM ka value -1 hai, aur iska use automatic dark mode (night mode) behavior ko configure karne ke liye kiya jata hai, jahan dark mode system settings ke saath associate kiya jata hai.</p>
              
              <p>Dark mode Android mein ek feature hai jisme application ke UI ko dark color scheme mein display kiya jata hai. MODE_NIGHT_FOLLOW_SYSTEM constant ka use karte hue, automatic dark mode behavior ko set kiya jata hai, jahan dark mode system settings ke saath associate hota hai. Isse dark mode system settings par depend karta hai aur agar system dark mode enable hai, toh dark mode automatically enable ho jata hai, aur agar system light mode enable hai, toh light mode enable ho jata hai.</p>`,
              parameter: [],
            },
            
            {
              dep: false,
              name: "MODE_NIGHT_NO",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_NO = 1`,
              fullCode: `public static final int MODE_NIGHT_NO = 1`,

              des:`MODE_NIGHT_NO ka value 1 hai, aur iska use dark mode (night mode) ko disable karne ke liye kiya jata hai.`,
              
              longDes: `
              <p>MODE_NIGHT_NO ka value 1 hai, aur iska use dark mode (night mode) ko disable karne ke liye kiya jata hai.</p>
              
              <p>Dark mode Android mein ek feature hai jisme application ke UI ko dark color scheme mein display kiya jata hai. MODE_NIGHT_NO constant ka use karte hue, dark mode ko explicitly disable kiya jata hai. Isse application ke UI light mode mein display hoga, chahe system settings dark mode enable ho ya na ho.</p>`,
              parameter: [],
            },
            
            
            {
              dep: false,
              name: "MODE_NIGHT_UNSPECIFIED",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_UNSPECIFIED = -100`,
              fullCode: `public static final int MODE_NIGHT_UNSPECIFIED = -100`,

              des:`night mode ke liye eak unspecified mode`,
              
              longDes: `
              <p>night mode ke liye eak unspecified mode. default night mode ka use karne ki anumati dene ke liye , yah jaydater setLocalNightMode ke saath use kiya jata hai. yadi default aur local night modes dono is value per set hai, toh MODE_NIGHT_FOLLOW_SYSTEM ka default value laagu hota hai.
              </p>`,
              parameter: [],
            },
               
            
            {
              dep: false,
              name: "MODE_NIGHT_YES",
              id: "",
              dataTypeName: `static final int`,
              code: `MODE_NIGHT_YES = 2`,
              fullCode: `public static final int MODE_NIGHT_YES = 2`,

              des:`MODE_NIGHT_YES ka value 2 hai, aur iska use dark mode (night mode) ko enable karne ke liye kiya jata hai.`,
              
              longDes: `
              <p>MODE_NIGHT_YES ka value 2 hai, aur iska use dark mode (night mode) ko enable karne ke liye kiya jata hai.</p>

              <p>Dark mode Android mein ek feature hai jisme application ke UI ko dark color scheme mein display kiya jata hai. MODE_NIGHT_YES constant ka use karte hue, dark mode ko explicitly enable kiya jata hai. Isse application ke UI dark mode mein display hoga, chahe system settings light mode ho ya dark mode ho.</p>`,
              parameter: [],
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
              dataTypeName: `abstract void`,
              code: `<a href="#addContentView()">addContentView</a>(View v, ViewGroup.LayoutParams lp)`,
  
              fullCode: `public abstract void <a href="#addContentView()">addContentView</a>(View v, ViewGroup.LayoutParams lp)`,

              des: `Is method ka use activity ke content view ke saath ek additional view ko bhi add karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Is method ka use activity ke content view ke saath ek additional view ko bhi add karne ke liye kiya jata hai.</p>
  
              <p>Is method ke through, aap ek view ko activity ke content view ke saath jod sakte hain, jisse aap additional functionality ya custom UI elements ko activity mein include kar sakte hain. Isse aap activity ke existing layout ko modify kar sakte hain aur dynamic changes implement kar sakte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `View v`,
                      des:`<p>Yeh parameter view hai jo activity ke content view ke saath add kiya jana hai.</p>`,
                    },
                    {
                      dataTypeName: `ViewGroup.LayoutParams lp`,
                      des:`<p>Yeh parameter ViewGroup.LayoutParams type ka object hai jo view ke layout parameters ko define karta hai, jaise view ki width, height, margins, etc.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "applyDayNight",
              id: "applyDayNight()",
              dataTypeName: `abstract boolean `,
              code: `<a href="#applyDayNight()">applyDayNight</a>()`,
  
              fullCode: `public abstract boolean  <a href="#applyDayNight()">applyDayNight</a>()`,

              des: `Is method ka use day-night mode (light mode aur dark mode) ko apply karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Is method ka use day-night mode (light mode aur dark mode) ko apply karne ke liye kiya jata hai.</p>
  
              <p>Is method ke through, aap day-night mode behavior ko apply kar sakte hain, jisme UI automatic tarike se light mode ya dark mode ke beech switch karta hai. Yeh method system settings, application settings, aur current time ke according day-night mode ko handle karta hai.</p>
              `,
  
              parameter: [],
            },
  
  
            {
              dep: false,
              name: "attachBaseContext",
              id: "attachBaseContext()",
              dataTypeName: `void`,
              code: `<a href="#attachBaseContext()">attachBaseContext</a>(Context context)`,
  
              fullCode: `public void <a href="#attachBaseContext()">attachBaseContext</a>(Context context)`,

              des: `Iska use Context ko attach karne ke liye kiya jata hai, jisse AppCompatDelegate class ko context-aware banaya ja sake.`,

              longDes: `
              
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>use attachBaseContext2 instead.</p></aside>

              <p>Iska use Context ko attach karne ke liye kiya jata hai, jisse AppCompatDelegate class ko context-aware banaya ja sake.</p>
              
              <p>attachBaseContext() method ka use AppCompatDelegate class ke instance ko initialize karne ke liye hota hai. Is method ke through, Context ko delegate class se associate kiya jata hai, jisse delegate class application context aur uske resources tak access kar sake.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context context`,
                      des: `<p>Yeh parameter Context type ka hai aur uss context ko represent karta hai jise attach kiya jana hai.</p>`,
                    },
                  ],
                }, 
              ],
            },

          
            {
              dep: false,
              name: "attachBaseContext2",
              id: "attachBaseContext2()",
              dataTypeName: `@NonNull Context`,
              code: `<a href="#attachBaseContext2()">attachBaseContext2</a>(Context context)`,
  
              fullCode: `@CallSuper</br>public @NonNull Context <a href="#attachBaseContext2()">attachBaseContext2</a>(Context context)`,

              des: `attachBaseContext se call kiya jana chahiye.`,

              longDes: `
              

              <p>attachBaseContext se call kiya jana chahiye./p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context context`,
                      des: `<p>Yeh parameter Context type ka hai aur uss context ko represent karta hai jise attach kiya jana hai.</p>`,
                    },
                  ],
                }, 
              ],
            },


            
  
            {
              dep: false,
              name: "create",
              id: "create(Activity,AppCompatCallback)",
              dataTypeName: `@NonNull AppCompatDelegate`,
              code: `<a href="#create(Activity,AppCompatCallback)">create</a>(@NonNull Activity activity, @Nullable AppCompatCallback callback)`,
  
              fullCode: `public static @NonNull AppCompatDelegate <a href="#create(Activity,AppCompatCallback)">create</a>(@NonNull Activity activity, @Nullable AppCompatCallback callback)`,

              des: `Iska use Activity se AppCompatDelegate ka instance banane ke liye kiya jata hai.`,

              longDes: `<p>Iska use Activity se AppCompatDelegate ka instance banane ke liye kiya jata hai.</p>
              
              <p>create() method ka use AppCompatDelegate class ke instance ko Activity se initialize karne ke liye hota hai. Is method ke through, AppCompatDelegate class ka instance Activity ke context aur resources se associate ho jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Activity activity`,
                      des: `<p>Yeh parameter Activity type ka hai aur uss activity se AppCompatDelegate ka instance banaya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@Nullable AppCompatCallback callback`,
                      des: `<p> Yeh parameter AppCompatCallback type ka hai aur usse delegate class ka callback object represent karta hai.</p>`,
                    },
                  ],
                }, 
              ],
            },

            
            
  
            {
              dep: false,
              name: "create",
              id: "create(Dialog,AppCompatCallback)",
              dataTypeName: `@NonNull AppCompatDelegate`,
              code: `<a href="#create(Dialog,AppCompatCallback)">create</a>(@NonNull Dialog dialog, @Nullable AppCompatCallback callback)`,
  
              fullCode: `public static @NonNull AppCompatDelegate <a href="#create(Dialog,AppCompatCallback)">create</a>(@NonNull Dialog dialog, @Nullable AppCompatCallback callback)`,

              des: `Iska use Dialog se AppCompatDelegate ka instance banane ke liye kiya jata hai.`,

              longDes: `<p>Iska use Dialog se AppCompatDelegate ka instance banane ke liye kiya jata hai.</p>
              
              <p>create() method ka use AppCompatDelegate class ke instance ko Dialog se initialize karne ke liye hota hai. Is method ke through, AppCompatDelegate class ka instance Dialog ke context aur resources se associate ho jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Dialog dialog`,
                      des: `<p>Yeh parameter Dialog type ka hai aur uss dialog se AppCompatDelegate ka instance banaya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@Nullable AppCompatCallback callback`,
                      des: `<p>Yeh parameter AppCompatCallback type ka hai aur usse delegate class ka callback object represent karta hai.</p>`,
                    },
                  ],
                }, 
              ],
            },

            
            
  
            {
              dep: false,
              name: "create",
              id: "create(Context,Activity,AppCompatCallback)",
              dataTypeName: `@NonNull AppCompatDelegate`,
              code: `<a href="#create(Context,Activity,AppCompatCallback)">create</a>(
                @NonNull Context context,
                @NonNull Activity activity,
                @Nullable AppCompatCallback callback
            )`,
  
              fullCode: `public static @NonNull AppCompatDelegate <a href="#create(Context,Activity,AppCompatCallback)">create</a>(
                @NonNull Context context,
                @NonNull Activity activity,
                @Nullable AppCompatCallback callback
            )`,

              des: `Iska use Context, Activity, aur AppCompatCallback se AppCompatDelegate ka instance banane ke liye kiya jata hai.`,

              longDes: `<p>Iska use Context, Activity, aur AppCompatCallback se AppCompatDelegate ka instance banane ke liye kiya jata hai.</p>
              
              <p>create() method ka use AppCompatDelegate class ke instance ko Context aur Activity se initialize karne ke liye hota hai. Is method ke through, AppCompatDelegate class ka instance Activity ke context aur resources se associate ho jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Context context`,
                      des: `<p>Yeh parameter Context type ka hai aur uss context se AppCompatDelegate ka instance banaya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull Activity activity`,
                      des: `<p>Yeh parameter Activity type ka hai aur uss activity se AppCompatDelegate ka instance banaya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@Nullable AppCompatCallback callback`,
                      des: `<p>Yeh parameter AppCompatCallback type ka hai aur usse delegate class ka callback object represent karta hai.</p>`,
                    },
                  ],
                }, 
              ],
            },

            
            
  
            {
              dep: false,
              name: "create",
              id: "create(Context,Window,AppCompatCallback)",
              dataTypeName: `@NonNull AppCompatDelegate`,
              code: `<a href="#create(Context,Window,AppCompatCallback)">create</a>(
                @NonNull Context context,
                @NonNull Window window,
                @Nullable AppCompatCallback callback
            )`,
  
              fullCode: `public static @NonNull AppCompatDelegate <a href="#create(Context,Window,AppCompatCallback)">create</a>(
                @NonNull Context context,
                @NonNull Window window,
                @Nullable AppCompatCallback callback
            )`,

              des: `Iska use Context, Window, aur AppCompatCallback se AppCompatDelegate ka instance banane ke liye kiya jata hai.`,

              longDes: `<p>Iska use Context, Window, aur AppCompatCallback se AppCompatDelegate ka instance banane ke liye kiya jata hai.</p>
              
              <p>create() method ka use AppCompatDelegate class ke instance ko Context aur Window se initialize karne ke liye hota hai. Is method ke through, AppCompatDelegate class ka instance Window ke context aur resources se associate ho jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Context context`,
                      des: `<p>Yeh parameter Context type ka hai aur uss context se AppCompatDelegate ka instance banaya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull Window window`,
                      des: `<p>Yeh parameter Window type ka hai aur uss window se AppCompatDelegate ka instance banaya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@Nullable AppCompatCallback callback`,
                      des: `<p>Yeh parameter AppCompatCallback type ka hai aur usse delegate class ka callback object represent karta hai.</p>`,
                    },
                  ],
                }, 
              ],
            },

            
  
            {
              dep: false,
              name: "createView",
              id: "createView()",
              dataTypeName: `abstract View`,
              code: `<a href="#createView()">createView</a>(
    @Nullable View parent,
    String name,
    @NonNull Context context,
    @NonNull AttributeSet attrs
)`,
  
              fullCode: `public abstract View <a href="#createView()">createView</a>(
    @Nullable View parent,
    String name,
    @NonNull Context context,
    @NonNull AttributeSet attrs
)`,

              des: `Iska use parent view, view name, Context, aur AttributeSet se View ka instance banane ke liye kiya jata hai.`,

              longDes: `<p>Iska use parent view, view name, Context, aur AttributeSet se View ka instance banane ke liye kiya jata hai.</p>
              <p>createView() method ka use AppCompatDelegate class ke subclasses mein kiya jata hai, jaise ki AppCompatViewInflater. Is method ko override karke custom view inflation behavior implement kiya ja sakta hai. Is method ke andar view element name aur attributes se View ka instance banaya jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable View parent`,
                      des: `<p>Yeh parameter View type ka hai aur uss view ko represent karta hai jis ke andar yeh view create ho rahi hai. Yeh parameter optional hai, yani agar aap parent view nahi chahte hai to ise null pass kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `String name`,
                      des: `<p>Yeh parameter String type ka hai aur uss view element ka naam hai jo create karna hai. Isse view ko identify kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull Context context`,
                      des: `<p>Yeh parameter Context type ka hai aur usse view ka associated context provide kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull AttributeSet attrs`,
                      des: `<p>Yeh parameter AttributeSet type ka hai aur usse view ke attributes provide kiye jate hai, jaise ki layout_width, layout_height, background, etc.</p>`,
                    },
                  ],
                },
              ],
            },
    
  
            {
              dep: false,
              name: "findViewById",
              id: "findViewById()",
              dataTypeName: `abstract @Nullable T`,
              code: `&lt;T extends View&gt; <a href="#findViewById()">findViewById</a>(@IdRes int id)`,
  
              fullCode: `public abstract @Nullable T &lt;T extends View&gt; <a href="#findViewById()">findViewById</a>(@IdRes int id)`,

              des: `Iska use specific id se View ko search aur retrieve karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use specific id se View ko search aur retrieve karne ke liye kiya jata hai.</p>

              <p>findViewById() method ka use AppCompatDelegate class ke subclasses mein kiya jata hai, jaise ki AppCompatViewInflater. Is method ko override karke specific id ke corresponding view ko retrieve kiya jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@IdRes int id`,
                      des: `<p>Yeh parameter int type ka hai aur uss view element ka unique identifier hai jise aap retrieve karna chahte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: false,
              name: "getApplicationLocales",
              id: "getApplicationLocales()",
              dataTypeName: `static @NonNull LocaleListCompat`,
              code: `<a href="#getApplicationLocales()">getApplicationLocales</a>()`,
  
              fullCode: `@AnyThread</br>public static @NonNull LocaleListCompat <a href="#getApplicationLocales()">getApplicationLocales</a>()`,

              des: `Iska use application ke locales ko prapt karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use application ke locales ko prapt karne ke liye kiya jata hai.</p>

              <p>Is method ka use multi-language support wale applications mein kiya jata hai. Yeh method application ke locales ko prapt karne ke liye LocaleListCompat object return karta hai.</p>

              <p>LocaleListCompat Android Support Library ka part hai aur multiple locales ko support karne ke liye use kiya jata hai. Yeh class application ke locales ko represent karta hai.</p>

              <p>getApplicationLocales() method multi-threaded environment mein bhi use karne ke liye @AnyThread annotation ke saath declare kiya gaya hai.</p>
              `,
              parameter: [],
            },
  
  
            {
              dep: false,
              name: "getContextForDelegate",
              id: "getContextForDelegate()",
              dataTypeName: `@Nullable Context`,
              code: `<a href="#getContextForDelegate()">getContextForDelegate</a>()`,
  
              fullCode: `public @Nullable Context <a href="#getContextForDelegate()">getContextForDelegate</a>()`,

              des: `Iska use AppCompatDelegate ke subclasses mein context ko retrieve karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use AppCompatDelegate ke subclasses mein context ko retrieve karne ke liye kiya jata hai.</p>

              <p>AppCompatDelegate class ke subclasses, jaise AppCompatActivity aur AppCompatDialog, apne corresponding context ko AppCompatDelegate se retrieve karne ke liye getContextForDelegate() method ka use karte hain.</p>
              `,
              parameter: [],
            },
  
  
  
            {
              dep: false,
              name: "getDefaultNightMode",
              id: "getDefaultNightMode()",
              dataTypeName: `static int`,
              code: `<a href="#getDefaultNightMode()">getDefaultNightMode</a>()`,
  
              fullCode: `public static int <a href="#getDefaultNightMode()">getDefaultNightMode</a>()`,

              des: `Iska use default night mode setting ko retrieve karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use default night mode setting ko retrieve karne ke liye kiya jata hai.</p>

              <p>Is method ka use app ke default night mode setting ko retrieve karne ke liye kiya jata hai. Night mode Android me light theme aur dark theme ke beech switch karne ke liye use hota hai.</p>
              `,
              parameter: [],
            },
  
  
  
            {
              dep: false,
              name: "getDrawerToggleDelegate",
              id: "getDrawerToggleDelegate()",
              dataTypeName: `abstract @Nullable ActionBarDrawerToggle.Delegate`,
              code: `<a href="#getDrawerToggleDelegate()">getDrawerToggleDelegate</a>()`,
  
              fullCode: `public abstract @Nullable ActionBarDrawerToggle.Delegate <a href="#getDrawerToggleDelegate()">getDrawerToggleDelegate</a>()`,

              des: `Iska use ActionBarDrawerToggle ke liye delegate object ko retrieve karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use ActionBarDrawerToggle ke liye delegate object ko retrieve karne ke liye kiya jata hai.</p>

              <p>getDrawerToggleDelegate() method ka use ActionBarDrawerToggle ke liye delegate object ko retrieve karne ke liye hota hai. Delegate object ActionBarDrawerToggle ke internal operations aur navigation drawer ke saath interaction ko handle karta hai.</p>
              `,
              parameter: [],
            },
  
  
  
            {
              dep: false,
              name: "getLocalNightMode",
              id: "getLocalNightMode()",
              dataTypeName: `int`,
              code: `<a href="#getLocalNightMode()">getLocalNightMode</a>()`,
  
              fullCode: `public int <a href="#getLocalNightMode()">getLocalNightMode</a>()`,

              des: `Iska use current activity ya application ke local night mode setting ko retrieve karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use current activity ya application ke local night mode setting ko retrieve karne ke liye kiya jata hai.</p>

              <p>Yeh method current activity ya application ke local night mode setting ko return karta hai.</p>

              <p>Local night mode Android me light theme aur dark theme ke beech switch karne ke liye use hota hai. Jab hum AppCompatDelegate ka instance create karte hain, toh uss instance ke saath ek local night mode setting associate hoti hai. getLocalNightMode() method uss associated local night mode setting ko retrieve karne ke liye hota hai.</p>
              `,
              parameter: [],
            },
  

  
            {
              dep: false,
              name: "getMenuInflater",
              id: "getMenuInflater()",
              dataTypeName: `abstract MenuInflater`,
              code: `<a href="#getMenuInflater()">getMenuInflater</a>()`,
  
              fullCode: `public abstract MenuInflater <a href="#getMenuInflater()">getMenuInflater</a>()`,

              des: `Iska use menu resource ko inflate karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use menu resource ko inflate karne ke liye kiya jata hai.</p>

              <p>MenuInflater class Android framework ka part hai aur XML se menu resource inflate karne ke liye use hota hai. MenuInflater ke instance ke through hum XML se define kiye gaye menu resource ko inflate karke Menu object create kar sakte hain.</p>

              <p>AppCompatDelegate ke subclasses, jaise AppCompatActivity, is method ko override karke apne associated MenuInflater object ko return karte hain. Is tarike se AppCompatDelegate ke subclasses MenuInflater ke instance ka use karke menu resource ko inflate kar sakte hain.</p>
              `,
              parameter: [],
            },
  

  
            {
              dep: false,
              name: "getSupportActionBar",
              id: "getSupportActionBar()",
              dataTypeName: `abstract @Nullable ActionBar`,
              code: `<a href="#getSupportActionBar()">getSupportActionBar</a>()`,
  
              fullCode: `public abstract @Nullable ActionBar <a href="#getSupportActionBar()">getSupportActionBar</a>()`,

              des: `Iska use action bar ko retrieve karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use action bar ko retrieve karne ke liye kiya jata hai.</p>

              <p>ActionBar class Android framework ka part hai aur action bar ko represent karta hai. Action bar, jise toolbar bhi kaha jata hai, ek UI element hai jo app ke title, navigation options, action buttons, etc. ko display karta hai.</p>

              <p>AppCompatDelegate ke subclasses, jaise AppCompatActivity, is method ko override karke apne associated ActionBar object ko return karte hain. Is tarike se AppCompatDelegate ke subclasses action bar ko retrieve kar sakte hain aur uspar operations perform kar sakte hain.</p>
              `,
              parameter: [],
            },
  


            {
              dep: false,
              name: "hasWindowFeature",
              id: "hasWindowFeature()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#hasWindowFeature()">hasWindowFeature</a>(int featureId)`,
  
              fullCode: `public abstract boolean <a href="#hasWindowFeature()">hasWindowFeature</a>(int featureId)`,

              des: `Iska use window feature ki availability ko determine karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use window feature ki availability ko determine karne ke liye kiya jata hai.</p>

              <p>Yeh method specified feature ID ke availability ko check karke boolean value return karta hai. Agar feature available hai, toh true return hota hai, aur agar feature available nahi hai, toh false return hota hai.</p>

              <p>Window features Android framework me window ke behavior aur appearance ko control karne ke liye use hote hain. Kuch common window features hain, jaise action bar, progress bar, title bar, context menu, etc. hasWindowFeature() method ke through hum in features ke availability ko check kar sakte hain.</p>
              
              `,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int featureId`,
                      des: `<p>Is parameter mein hum specify karte hain ki hum kaun sa window feature ke availability ko check karna chahte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "installViewFactory",
              id: "installViewFactory()",
              dataTypeName: `abstract void`,
              code: `<a href="#installViewFactory()">installViewFactory</a>()`,
  
              fullCode: `public abstract void <a href="#installViewFactory()">installViewFactory</a>()`,

              des: `Iska use custom views ke inflation aur rendering process ko control karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use custom views ke inflation aur rendering process ko control karne ke liye kiya jata hai.</p>

              <p>Is method ka purpose hai custom view factory ko set karna, jo AppCompatDelegate ke subclasses ke views ka inflation process handle karta hai. Custom view factory ke through hum views ko customize kar sakte hain, jaise ki unhe modify, extend, ya replace kar sakte hain.</p>

              <p>AppCompatDelegate ke subclasses, jaise AppCompatActivity, is method ko override karke apne custom view factory ko install karte hain. Is tarike se unhe full control mil jata hai views ke inflation process par.</p>

              <p>Custom view factory ka use karke hum views ke inflation aur rendering process par intervene kar sakte hain. Hum apne custom logic ko implement karke views ko customize kar sakte hain, jaise ki view properties ko modify karna, additional functionality add karna, ya phir custom views create karna.</p>
              
              `,
              parameter: [],
            },
  



            {
              dep: false,
              name: "invalidateOptionsMenu",
              id: "invalidateOptionsMenu()",
              dataTypeName: `abstract void`,
              code: `<a href="#invalidateOptionsMenu()">invalidateOptionsMenu</a>()`,
  
              fullCode: `public abstract void <a href="#invalidateOptionsMenu()">invalidateOptionsMenu</a>()`,

              des: `Iska use options menu ko refresh aur update karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use options menu ko refresh aur update karne ke liye kiya jata hai.</p>

              <p>Is method ka purpose hai options menu ko invalid karna, jisse Android system ko pata chale ki menu items ki state aur visibility mein kuch changes ho gayi hai. Jab hum invalidateOptionsMenu() method ko call karte hain, toh Android system onCreateOptionsMenu() method ko phir se invoke karta hai, jisse options menu ko rebuild aur refresh kiya jata hai.</p>

              <p>AppCompatDelegate ke subclasses, jaise AppCompatActivity, is method ko override karke options menu ko invalidate karte hain. Is tarike se hum options menu ko dynamically update kar sakte hain based on the current state of the app.</p>

              <p>Options menu Android apps mein ek common UI element hai, jo app ke toolbar ya action bar mein display hota hai. Is menu mein various menu items hote hain, jinhe user tap karke actions perform kar sakta hai. Jab app ke state ya conditions change ho jate hain, toh hum invalidateOptionsMenu() method ko call karke options menu ko refresh kar sakte hain, jisse updated menu items aur unki visibility ko reflect kiya ja sake.</p>
              `,
              parameter: [],
            },
  



            {
              dep: false,
              name: "isCompatVectorFromResourcesEnabled",
              id: "isCompatVectorFromResourcesEnabled()",
              dataTypeName: `static boolean`,
              code: `<a href="#isCompatVectorFromResourcesEnabled()">isCompatVectorFromResourcesEnabled</a>()`,
  
              fullCode: `public static boolean <a href="#isCompatVectorFromResourcesEnabled()">isCompatVectorFromResourcesEnabled</a>()`,

              des: `Iska use vector drawables ko support karna aur compatibility mode ko enable/disable karne ke liye kiya jata hai.`,

              longDes: `<p>Iska use vector drawables ko support karna aur compatibility mode ko enable/disable karne ke liye kiya jata hai.</p>

              <p>Is method ka purpose hai vector drawables ke compatibility mode resource se enable hone ki condition ko check karna. Agar yeh method true return karta hai, toh vector drawables ke compatibility mode resource se enabled hai. Agar yeh method false return karta hai, toh vector drawables ke compatibility mode resource se disabled hai.</p>

              <p>Vector drawables Android mein graphical assets hote hain jo scalable vector graphics (SVG) format mein define kiye jate hain. Vector drawables flexible hote hain aur high-quality graphics provide karte hain, chahe screen resolution kitni bhi ho.</p>

              <p>Compatibility mode resource se vector drawables ke support ko enable karna ka matlab hai ki app vector drawables ko older Android versions mein bhi render kar sake. Pehle, vector drawables ko XML format mein define karna hota tha, lekin compatibility mode resource enable karne se hum vector drawables ko direct resource file (.xml) ke roop mein define kar sakte hain. Isse app ke performance mein bhi sudhar hota hai.</p>

              <p>isCompatVectorFromResourcesEnabled() method ke use se hum check kar sakte hain ki app vector drawables ke compatibility mode resource se enabled hai ya nahi. Agar enabled hai, toh hum direct .xml resource files mein vector drawables define kar sakte hain aur unhe older Android versions mein bhi render kar sakte hain. Agar disabled hai, toh humein vector drawables ko XML format mein define karna hoga.</p>
              `,
              parameter: [],
            },
  

            {
              dep: false,
              name: "isHandleNativeActionModesEnabled",
              id: "isHandleNativeActionModesEnabled()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#isHandleNativeActionModesEnabled()">isHandleNativeActionModesEnabled</a>()`,
  
              fullCode: `public abstract boolean <a href="#isHandleNativeActionModesEnabled()">isHandleNativeActionModesEnabled</a>()`,

              des: `isHandleNativeActionModesEnabled() method ek abstract method hai, jo yeh check karta hai ki kya native action modes ko handle karne ka support enabled hai ya nahi. Iska use native action modes ko handle karne ke liye kiya jata hai.`,

              longDes: `<p>isHandleNativeActionModesEnabled() method ek abstract method hai, jo yeh check karta hai ki kya native action modes ko handle karne ka support enabled hai ya nahi. Iska use native action modes ko handle karne ke liye kiya jata hai.</p>

              <p>Is method ka purpose hai native action modes ko handle karne ka support enabled hone ki condition ko check karna. Agar yeh method true return karta hai, toh native action modes ke handle karne ka support enabled hai. Agar yeh method false return karta hai, toh native action modes ke handle karne ka support disabled hai.</p>

              <p>Native action modes Android framework ka ek feature hai, jiska use action bar mein contextual actions ko handle karne ke liye kiya jata hai. Jab user long press karta hai kisi specific item par, toh action bar mein ek contextual action bar display hota hai jisme us item ke sath related actions hote hain. Native action modes ka use karke hum in contextual actions ko handle aur perform kar sakte hain.</p>

              <p>isHandleNativeActionModesEnabled() method ke use se hum check kar sakte hain ki app mein native action modes ko handle karne ka support enabled hai ya nahi. Agar enabled hai, toh hum native action modes ko handle karne ke liye appropriate callbacks, event listeners, aur actions ko implement kar sakte hain. Agar disabled hai, toh humein apne custom logic ko implement karke contextual actions ko handle karna hoga.</p>

              <p>AppCompatDelegate ke subclasses, jaise AppCompatActivity, is method ko override karke native action modes ko handle karne ka support enable/disable karte hain. Is tarike se hum native action modes ko customize aur handle kar sakte hain as per the app's requirements.</p>
              `,
              parameter: [],
            },
  
            {
              dep: false,
              name: "onConfigurationChanged",
              id: "onConfigurationChanged()",
              dataTypeName: `abstract void`,
              code: `<a href="#onConfigurationChanged()">onConfigurationChanged</a>(Configuration newConfig)`,
  
              fullCode: `public abstract void <a href="#onConfigurationChanged()">onConfigurationChanged</a>(Configuration newConfig)`,

              des: `onConfigurationChanged() method ek abstract method hai, jo app ki configuration changes ke samay call hota hai. Iska use app ki configuration changes ke handle karne ke liye kiya jata hai.`,

              longDes: `<p>onConfigurationChanged() method ek abstract method hai, jo app ki configuration changes ke samay call hota hai. Iska use app ki configuration changes ke handle karne ke liye kiya jata hai.</p>

              <p>Is method ka purpose hai app ki configuration changes ke samay usmein required updates ko perform karna. Jab app ki configuration changes hoti hai, jaise device orientation change, language change, screen size change, etc., toh onConfigurationChanged() method call hota hai, jisse app us changes ke anusar apne UI, resources, aur state ko update kar sakta hai.</p>

              <p>Configuration changes ke samay newConfig parameter mein updated configuration ki information hoti hai, jaise updated device orientation, updated locale, updated screen size, etc. App onConfigurationChanged() method mein is updated configuration ko use karke UI ko refresh, resources ko reload, aur state ko maintain kar sakta hai.</p>

              <p>AppCompatDelegate ke subclasses, jaise AppCompatActivity, is method ko override karke app ki configuration changes ke handle karne ka logic implement karte hain. Is tarike se app configuration changes ke samay apne UI aur state ko update kar sakte hain aur seamless user experience provide kar sakte hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Configuration newConfig`,
                    des: `<p>Is parameter mein newConfig naam se ek Configuration object hota hai. Is object mein app ki updated configuration ki details hote hain, jaise updated device orientation, updated locale, updated screen size, etc.</p>`,
                  },
                ],
              },
              ],
            },
  

  
            {
              dep: false,
              name: "onCreate",
              id: "onCreate()",
              dataTypeName: `abstract void`,
              code: `<a href="#onCreate()">onCreate</a>(Bundle savedInstanceState)`,
  
              fullCode: `public abstract void <a href="#onCreate()">onCreate</a>(Bundle savedInstanceState)`,

              des: `Is method ka use, activity ka initial setup karne ke liye hota hai, jaise ki layout inflate karna, theme apply karna, action bar configure karna, aur compatibility features ko enable karna.`,

              longDes: `<p>Is method ka use, activity ka initial setup karne ke liye hota hai, jaise ki layout inflate karna, theme apply karna, action bar configure karna, aur compatibility features ko enable karna.</p>

              <p>Yahan Bundle savedInstanceState parameter, activity ke state ka previous snapshot (agar available ho) ko represent karta hai. Iska use activity ko recreate karne ya state restore karne ke liye hota hai, jaise ki orientation change, background se foreground me aane par, ya memory pressure ke wajah se.</p>

              <p>Is method ke andar hum usually layout inflate karte hain, views ko find karte hain, listeners ko set karte hain, data ko populate karte hain, aur activity ke UI aur behavior ko setup karte hain. Ye method activity ke lifecycle ka ek important step hai, jahan pe activity apne UI aur functionality ko initialize aur setup karta hai.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Bundle savedInstanceState`,
                    des: `<p>Is method ke parameter me savedInstanceState naam ka ek Bundle object hai. Ye parameter activity ke state ko restore karne me help karta hai.</p>`,
                  },
                ],
              },
              ],
            },
  


  
            {
              dep: false,
              name: "onDestroy",
              id: "onDestroy()",
              dataTypeName: `abstract void`,
              code: `<a href="#onDestroy()">onDestroy</a>()`,
  
              fullCode: `public abstract void <a href="#onDestroy()">onDestroy</a>()`,

              des: `Is method ka use, activity ke destroy hone se pahle cleanup aur resource release karne ke liye kiya jata hai. Ye method activity ke lifetime ka last stage hai, jahan pe activity se related objects ko destroy karne ka kaam hota hai.`,

              longDes: `<p>Is method ka use, activity ke destroy hone se pahle cleanup aur resource release karne ke liye kiya jata hai. Ye method activity ke lifetime ka last stage hai, jahan pe activity se related objects ko destroy karne ka kaam hota hai.</p>

              <p>Is method me aksar activity ke layout se views aur widgets ko unbind karne, background tasks aur timers ko cancel karne, database connections ko close karne, aur anya resources ko release karne jaise kaam kiye jate hai.</p>

              `,
              parameter: [],
            },
  


  
            {
              dep: false,
              name: "onPostCreate",
              id: "onPostCreate()",
              dataTypeName: `abstract void`,
              code: `<a href="#onPostCreate()">onPostCreate</a>(Bundle savedInstanceState)`,
  
              fullCode: `public abstract void <a href="#onPostCreate()">onPostCreate</a>(Bundle savedInstanceState)`,

              des: `Is method ka use, activity ke onCreate() method ke baad UI elements ko further customize karne ke liye kiya jata hai. Ye method savedInstanceState parameter ko accept karta hai, jo activity ke state ko restore karne me help karta hai, jaise ki screen rotation ke baad previous state restore karna.`,

              longDes: `<p>Is method ka use, activity ke onCreate() method ke baad UI elements ko further customize karne ke liye kiya jata hai. Ye method savedInstanceState parameter ko accept karta hai, jo activity ke state ko restore karne me help karta hai, jaise ki screen rotation ke baad previous state restore karna.</p>

              <p>onPostCreate() method activity ke onCreate() method ke baad call hota hai. Is method ka use karke UI elements ko customize kar sakte hai, jaise ki action bar ko setup karna, toolbar ko configure karna, aur anya UI components ko modify karna.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Bundle savedInstanceState`,
                    des: `<p>Is parameter me savedInstanceState naam ka ek Bundle object hai. Ye parameter activity ke state ko restore karne me help karta hai.</p>`,
                  },
                ],
              },
              ],
            },
  

  
            {
              dep: false,
              name: "onPostResume",
              id: "onPostResume()",
              dataTypeName: `abstract void`,
              code: `<a href="#onPostResume()">onPostResume</a>()`,
  
              fullCode: `public abstract void <a href="#onPostResume()">onPostResume</a>()`,

              des: `Is method ka use, activity ke onResume() method ke baad additional tasks aur operations ko perform karne ke liye kiya jata hai. Ye method activity ke lifecycle ke ek crucial stage hai, jahan pe activity ke visible state me additional tasks execute kiye jate hai.`,

              longDes: `<p>Is method ka use, activity ke onResume() method ke baad additional tasks aur operations ko perform karne ke liye kiya jata hai. Ye method activity ke lifecycle ke ek crucial stage hai, jahan pe activity ke visible state me additional tasks execute kiye jate hai.</p>

              <p>onPostResume() method activity ke onResume() method ke baad call hota hai. Is method ka use karke developers, activity ke resume hone ke baad specific actions, UI updates, ya event handling ko handle kar sakte hai.</p>

              `,
              parameter: [],
            },
  

            {
              dep: false,
              name: "onSaveInstanceState",
              id: "onSaveInstanceState()",
              dataTypeName: `abstract void`,
              code: `<a href="#onSaveInstanceState()">onSaveInstanceState</a>(Bundle outState)`,
  
              fullCode: `public abstract void <a href="#onSaveInstanceState()">onSaveInstanceState</a>(Bundle outState)`,

              des: `Is method ka use, activity ke state ko save karne ke liye kiya jata hai. Ye method outState parameter ko accept karta hai, jisme activity ke state information ko store karne ka kaam hota hai.`,

              longDes: `<p>Is method ka use, activity ke state ko save karne ke liye kiya jata hai. Ye method outState parameter ko accept karta hai, jisme activity ke state information ko store karne ka kaam hota hai.</p>

              <p>outState parameter, ek Bundle object hai jisme key-value pairs ke form me activity ke state information store hoti hai. Is Bundle object me activity ke UI components, variables, aur anya important data ko save kiya ja sakta hai. Is Bundle object ka use karke activity ke state ko screen rotation, app background me jaane par, ya kisi aur reason se restore kiya ja sakta hai.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Bundle outState`,
                    des: `<p>Is parameter me outState naam ka ek Bundle object hai. Ye parameter activity ke state ko save karne me help karta hai.</p>`,
                  },
                ],
              },
              ],
            },
  

            {
              dep: false,
              name: "onStart",
              id: "onStart()",
              dataTypeName: `abstract void`,
              code: `<a href="#onStart()">onStart</a>()`,
  
              fullCode: `public abstract void <a href="#onStart()">onStart</a>()`,

              des: `Is method ka use Activity ki onStart() lifecycle callback ke saath kaam karne ke liye hota hai. Jab Activity visible hone ke pehle, yani Activity ki zindagi cycle ki shuruaat mein, onStart() method call hota hai.`,

              longDes: `<p>Is method ka use Activity ki onStart() lifecycle callback ke saath kaam karne ke liye hota hai. Jab Activity visible hone ke pehle, yani Activity ki zindagi cycle ki shuruaat mein, onStart() method call hota hai.</p>

              <p>onStart() method ko override karke, hum Activity ke onStart() callback mein apne custom logic ko implement kar sakte hain. Is method ka use Activity ke initialization, resources ki loading, network connections shuru karna, ya kisi bhi aur pre-start ka kaam karne ke liye kiya jata hai.</p>

              `,
              parameter: [],
            },
  

            {
              dep: false,
              name: "onStop",
              id: "onStop()",
              dataTypeName: `abstract void`,
              code: `<a href="#onStop()">onStop</a>()`,
  
              fullCode: `public abstract void <a href="#onStop()">onStop</a>()`,

              des: `Is method ka use Activity ki onStop() lifecycle callback ke saath kaam karne ke liye hota hai. Jab Activity visible hona band ho jati hai, yani Activity background mein ya destroy hone ke pehle, onStop() method call hota hai.`,

              longDes: `<p>Is method ka use Activity ki onStop() lifecycle callback ke saath kaam karne ke liye hota hai. Jab Activity visible hona band ho jati hai, yani Activity background mein ya destroy hone ke pehle, onStop() method call hota hai.</p>

              <p>onStop() method ko override karke, hum Activity ke onStop() callback mein apne custom logic ko implement kar sakte hain. Is method ka use Activity ke cleanup, resources release, network connections band karna, ya kisi bhi aur stop-related kaam karne ke liye kiya jata hai.</p>

              `,
              parameter: [],
            },
  

  

            {
              dep: false,
              name: "requestWindowFeature",
              id: "requestWindowFeature()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#requestWindowFeature()">requestWindowFeature</a>(int featureId)`,
  
              fullCode: `public abstract boolean <a href="#requestWindowFeature()">requestWindowFeature</a>(int featureId)`,

              des: `Is method ka use Activity ke window features ko request karne ke liye hota hai. Window features, jaise ki ActionBar, ProgressBar, Custom Title, ya kisi bhi aur window-related functionality, Activity ke window mein add kiye jaa sakte hain.`,

              longDes: `<p>Is method ka use Activity ke window features ko request karne ke liye hota hai. Window features, jaise ki ActionBar, ProgressBar, Custom Title, ya kisi bhi aur window-related functionality, Activity ke window mein add kiye jaa sakte hain.</p>

              <p>requestWindowFeature() method ko use karke, hum Activity ke window mein specific features ko enable kar sakte hain. Yeh method usually onCreate() method ke pehle call kiya jata hai.</p>


              <p>Is method ki return type boolean hoti hai, jo indicate karta hai ki feature request successful tha ya nahi. Agar feature request successful rahi hai, to true return hota hai, warna false.</p>

              <p>Is method ka use karke hum, ActionBar ko enable/disable kar sakte hain (Window.FEATURE_ACTION_BAR), ProgressBar ko enable/disable kar sakte hain (Window.FEATURE_PROGRESS), ya kisi bhi custom window feature ko enable/disable kar sakte hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int featureId`,
                    des: `<p>Is method ka ek parameter hota hai: featureId, jo Window.FEATURE_* constant values mein se ek hota hai. Ye parameter specific feature ko identify karne ke liye use hota hai, jise aap Activity ke window mein add karna chahte hain.</p>`,
                  },
                ],
              },
              ],
            },
  

  

            {
              dep: false,
              name: "setApplicationLocales",
              id: "setApplicationLocales()",
              dataTypeName: `static void`,
              code: `<a href="#setApplicationLocales()">setApplicationLocales</a>(@NonNull LocaleListCompat locales)`,
  
              fullCode: `public static void <a href="#setApplicationLocales()">setApplicationLocales</a>(@NonNull LocaleListCompat locales)`,

              des: `Ye method application-wide locales ko set karne ke liye hota hai.`,

              longDes: `<p>setApplicationLocales() method ka use karke, hum application-wide locales ko set kar sakte hain. Locale ek specific language, country, aur region ko represent karta hai. Jab hum application ke locales ko set karte hain, to ye locales ka use UI resources, text translations, date/time formats, aur any other locale-dependent operations mein hota hai.</p>


              <p>Is method ki implementation application ke specific requirements aur design patterns par depend karti hai. Application ke locales ko set karne ke baad, hum application-wide locale changes ko handle kar sakte hain, UI components ko refresh kar sakte hain, text translations ko update kar sakte hain, aur saare locale-dependent operations ko desired locales ke hisab se handle kar sakte hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull LocaleListCompat locales`,
                    des: `<p>Is method ka ek parameter hota hai: locales, jo LocaleListCompat type ka hota hai. LocaleListCompat multiple locales ko represent karta hai, jisse hum application ke supported locales ko specify kar sakte hain.</p>`,
                  },
                ],
              },
              ],
            },
  

  

            {
              dep: false,
              name: "setCompatVectorFromResourcesEnabled",
              id: "setCompatVectorFromResourcesEnabled()",
              dataTypeName: `static void`,
              code: `<a href="#setCompatVectorFromResourcesEnabled()">setCompatVectorFromResourcesEnabled</a>(boolean enabled)`,
  
              fullCode: `public static void <a href="#setCompatVectorFromResourcesEnabled()">setCompatVectorFromResourcesEnabled</a>(boolean enabled)`,

              des: `Ye method vector drawables ko enable/disable karne ke liye hota hai.`,

              longDes: `<p>setCompatVectorFromResourcesEnabled() method ka use karke, hum vector drawables ko enable/disable kar sakte hain, taki hum XML resources mein vector drawables ka use kar sake aur unhe UI components mein display kar sake.</p>


              <p>Is method ki implementation application ke specific requirements par depend karti hai. Agar setCompatVectorFromResourcesEnabled(true) ko call karte hain, to vector drawables enable ho jate hain, aur hum unhe XML resources mein define karke UI components mein use kar sakte hain. Agar setCompatVectorFromResourcesEnabled(false) ko call karte hain, to vector drawables disable ho jate hain, aur hume XML resources mein alternative image formats, jaise PNG, ka use karna padega.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean enabled`,
                    des: `<p>Is method ka ek parameter hota hai: enabled, jo boolean type ka hota hai. Agar enabled parameter true hai, to vector drawables enable ho jate hain, aur agar false hai, to vector drawables disable ho jate hain.</p>`,
                  },
                ],
              },
              ],
            },
  
  

            {
              dep: false,
              name: "setContentView",
              id: "setContentView(View)",
              dataTypeName: `abstract void`,
              code: `<a href="#setContentView(View)">setContentView</a>(View v)`,
  
              fullCode: `public abstract void <a href="#setContentView(View)">setContentView</a>(View v)`,

              des: `Ye method Activity ka content view ko set karne ke liye hota hai, jisme ek View object pass kiya jata hai.`,

              longDes: `<p>setContentView() method ko use karke, hum Activity ke content view ko directly ek View object se set kar sakte hain. Is method typically onCreate() method ke andar call kiya jata hai, Activity ke UI components ko inflate karne ke liye.</p>

              <p>Is method ki implementation Activity ke specific requirements aur design patterns par depend karti hai. Jab hum setContentView() method ko call karte hain aur View object pass karte hain, to diya gaya View object Activity ke content view ke roop mein set ho jata hai. Isse hum Activity ke UI components ko display kar sakte hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `View v`,
                    des: `<p>Is method ka ek parameter hota hai: v, jo View type ka hai. Ye parameter Activity ke content view ke roop mein set kiya jana hai.</p>`,
                  },
                ],
              },
              ],
            },
  
  

            {
              dep: false,
              name: "setContentView",
              id: "setContentView(View,ViewGroup.LayoutParams)",
              dataTypeName: `abstract void`,
              code: `<a href="#setContentView(View,ViewGroup.LayoutParams)">setContentView</a>(View v, ViewGroup.LayoutParams lp)`,
  
              fullCode: `public abstract void <a href="#setContentView(View,ViewGroup.LayoutParams)">setContentView</a>(View v, ViewGroup.LayoutParams lp)`,

              des: `Ye method Activity ka content view ko set karne ke liye hota hai, jisme ek View object aur ViewGroup.LayoutParams object pass kiya jata hai.`,

              longDes: `<p>setContentView() method ko use karke, hum Activity ke content view ko View object ke saath set kar sakte hain aur usme layout parameters bhi specify kar sakte hain. Is method typically onCreate() method ke andar call kiya jata hai, Activity ke UI components ko inflate karne ke liye.</p>

              <p>Is method ki implementation Activity ke specific requirements aur design patterns par depend karti hai. Jab hum setContentView() method ko call karte hain aur View object aur ViewGroup.LayoutParams object pass karte hain, to diya gaya View object Activity ke content view ke roop mein set ho jata hai aur uske saath layout parameters bhi apply ho jate hain. Isse hum Activity ke UI components ko display kar sakte hain aur unhe desired layout aur positioning ke saath render kar sakte hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `View v`,
                    des: `<p>Ye parameter View type ka hoga, jiske through Activity ke content view ko set karna hai. Is parameter mein hum ek specific UI component ko represent karne wale View object pass karte hain, jaise LinearLayout, RelativeLayout, ya kisi custom view.</p>`,
                  },
                  {
                    dataTypeName: `ViewGroup.LayoutParams lp`,
                    des: `<p>Ye parameter ViewGroup.LayoutParams type ka hoga, jisse hum layout parameters ko define karte hain. Is parameter mein hum layout parameters jaise width, height, margins, gravity, etc. ko specify karte hain.</p>`,
                  },
                ],
              },
              ],
            },

            {
              dep: false,
              name: "setDefaultNightMode",
              id: "setDefaultNightMode()",
              dataTypeName: `static void`,
              code: `<a href="#setDefaultNightMode()">setDefaultNightMode</a>(int mode)`,
  
              fullCode: `public static void <a href="#setDefaultNightMode()">setDefaultNightMode</a>(int mode)`,

              des: `Ye method Android app ke default night mode ko set karne ke liye hota hai.`,

              longDes: `<p>setDefaultNightMode() method ka use karke hum Android app ke default night mode ko set kar sakte hain. Night mode ek feature hai jo app ke UI ko dark theme mein switch karne ki capability provide karta hai. Dark theme mei UI elements ka color scheme dark hota hai, jisse raat ko use karne par bhi better readability aur visually appealing experience milta hai.</p>

              <p>Is method ki implementation app ke specific requirements par depend karti hai. Jab hum setDefaultNightMode() method ko call karte hain aur mode parameter ko pass karte hain, to app ke default night mode ko set kiya jata hai. Default night mode app ke launch time par apply hota hai, aur agar user night mode toggle karta hai, to app ke night mode parivartan ko handle karne ke liye specific code implement karna hota hai.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int mode`,
                    des: `<p>Is method ka ek parameter hota hai: mode, jo int type ka hota hai. Ye parameter night mode ko represent karta hai, jise aap set karna chahte hain. mode parameter ke liye aap AppCompatDelegate.MODE_NIGHT_XXX constant values ka use kar sakte hain.</p>`,
                  },                  
                ],
              },
              ],
            },
  


            {
              dep: false,
              name: "setHandleNativeActionModesEnabled",
              id: "setHandleNativeActionModesEnabled()",
              dataTypeName: `abstract void`,
              code: `<a href="#setHandleNativeActionModesEnabled()">setHandleNativeActionModesEnabled</a>(boolean enabled)`,
  
              fullCode: `public abstract void <a href="#setHandleNativeActionModesEnabled()">setHandleNativeActionModesEnabled</a>(boolean enabled)`,

              des: `Ye method native action modes ko handle karne ke liye enable/disable karta hai.`,

              longDes: `<p>setHandleNativeActionModesEnabled() method ka use karke hum native action modes ko enable/disable kar sakte hain. By default, AppCompat library native action modes ko handle karta hai, taki app ko consistent experience provide kiya ja sake, chahe app lower versions ke APIs par bhi run kar raha ho.</p>

              <p>Is method ki implementation application ke specific requirements aur design patterns par depend karti hai. Agar native action modes handle karne ki zaroorat hai, to setHandleNativeActionModesEnabled(true) ko call karke native action modes ko enable karte hain. Aur agar custom action modes ka use karna hai, to setHandleNativeActionModesEnabled(false) ko call karke native action modes ko disable karte hain aur AppCompat library ke dwara provide kiye gaye custom action modes ka use karte hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean enabled`,
                    des: `<p>Is method ka ek parameter hota hai: enabled, jo boolean type ka hota hai. Agar enabled parameter true hai, to native action modes enable ho jate hain, aur agar false hai, to native action modes disable ho jate hain.</p>`,
                  },                  
                ],
              },
              ],
            },
  

            {
              dep: false,
              name: "setLocalNightMode",
              id: "setLocalNightMode()",
              dataTypeName: `abstract void`,
              code: `<a href="#setLocalNightMode()">setLocalNightMode</a>(int mode)`,
  
              fullCode: `@RequiresApi(value = 17)</br>public abstract void <a href="#setLocalNightMode()">setLocalNightMode</a>(int mode)`,

              des: `Ye method Android app ke local night mode ko set karne ke liye hota hai.`,

              longDes: `<p>setLocalNightMode() method ka use karke hum Android app ke local night mode ko set kar sakte hain. Local night mode specific activity, fragment, or UI component ke liye night mode ko override karne ki flexibility provide karta hai. Isse aap apne app ke alag-alag parts mein different night mode settings apply kar sakte hain.</p>

              <p>Is method ki implementation app ke specific requirements par depend karti hai. setLocalNightMode() method ko call karte waqt, aapko mode parameter mein desired night mode value dena hoga. Ye night mode value, AppCompatDelegate.MODE_NIGHT_XXX constants mein se kisi ek ko represent karega.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int mode`,
                    des: `<p>Is method ka ek parameter hota hai: mode, jo int type ka hota hai. Ye parameter night mode ko represent karta hai, jise aap set karna chahte hain. mode parameter ke liye aap AppCompatDelegate.MODE_NIGHT_XXX constant values ka use kar sakte hain.</p>`,
                  },                  
                ],
              },
              ],
            },
  

            {
              dep: false,
              name: "setOnBackInvokedDispatcher",
              id: "setOnBackInvokedDispatcher()",
              dataTypeName: `void`,
              code: `<a href="#setOnBackInvokedDispatcher()">setOnBackInvokedDispatcher</a>(@Nullable OnBackInvokedDispatcher dispatcher)`,
  
              fullCode: `@CallSuper</br>@RequiresApi(value = 33)</br>public void <a href="#setOnBackInvokedDispatcher()">setOnBackInvokedDispatcher</a>(@Nullable OnBackInvokedDispatcher dispatcher)`,

              des: `Android SDK 33 aur uske upar ke versions mein system back ko handle karne ke liye OnBackPressedDispatcher ko set karta hai.`,

              longDes: `<p>Android SDK 33 aur uske upar ke versions mein system back ko handle karne ke liye OnBackPressedDispatcher ko set karta hai.</p>

              <p>Agar delegate ek Activity dwara hosted hai, toh default dispatcher getOnBackPressedDispatcher ke madhyam se prapt kiya jata hai.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable OnBackInvokedDispatcher dispatcher`,
                    des: `<p>Is delegate par set karne ke liye OnBackPressedDispatcher, ya toh null hoga agar default dispatcher ka upyog karna hai.</p>`,
                  },                  
                ],
              },
              ],
            },
  
            {
              dep: false,
              name: "setSupportActionBar",
              id: "setSupportActionBar()",
              dataTypeName: `abstract void`,
              code: `<a href="#setSupportActionBar()">setSupportActionBar</a>(@Nullable Toolbar toolbar)`,
  
              fullCode: `public abstract void <a href="#setSupportActionBar()">setSupportActionBar</a>(@Nullable Toolbar toolbar)`,

              des: `Ye method Activity ke Toolbar ko set karne aur ActionBar ko configure karne ke liye hota hai.`,

              longDes: `<p>setSupportActionBar() method ka use karke hum Activity ke Toolbar ko set kar sakte hain aur ActionBar ko configure kar sakte hain. Toolbar, ActionBar ke ek enhanced version hai, jise hum custom design aur flexibility ke saath use kar sakte hain.</p>

              <p>Is method ki implementation app ke specific requirements aur design patterns par depend karti hai. Typically, setSupportActionBar() method ko Activity ke onCreate() method mein call kiya jata hai, Toolbar object ko inflate aur configure karne ke baad. Isse ActionBar ke saath Toolbar ka integration ho jata hai.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable Toolbar toolbar`,
                    des: `<p>Is method ka ek parameter hota hai: toolbar, jo Toolbar type ka hota hai. Ye parameter Activity ke Toolbar object ko represent karta hai, jise aap set karna chahte hain. @Nullable annotation batata hai ki toolbar parameter null bhi ho sakta hai.</p>`,
                  },                  
                ],
              },
              ],
            },
  
  
            {
              dep: false,
              name: "setTheme",
              id: "setTheme()",
              dataTypeName: `void`,
              code: `<a href="#setTheme()">setTheme</a>(@StyleRes int themeResId)`,
  
              fullCode: `public void <a href="#setTheme()">setTheme</a>(@StyleRes int themeResId)`,

              des: `Ye method Activity ke theme ko set karne ke liye hota hai.`,

              longDes: `<p>setTheme() method ka use karke hum Activity ke theme ko set kar sakte hain. Theme, Android app ke UI elements, colors, styles, aur appearance ko define karta hai. Har Activity ke liye alag theme set karke hum unko visually aur stylistically customize kar sakte hain.</p>

              <p>Jab hum setTheme() method ko call karte hain aur themeResId parameter mein theme resource ID pass karte hain, to Activity ke theme us specified theme resource ke saath replace ho jata hai. Isse Activity ke UI elements aur appearance us new theme ke anusar render hote hain.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@StyleRes int themeResId`,
                    des: `<p>Is method ka ek parameter hota hai: themeResId, jo int type ka hota hai. Ye parameter Activity ke theme resource ID ko represent karta hai, jise aap set karna chahte hain.</p>`,
                  },                  
                ],
              },
              ],
            },
  
  
  
            {
              dep: false,
              name: "setTitle",
              id: "setTitle()",
              dataTypeName: `abstract void`,
              code: `<a href="#setTitle()">setTitle</a>(@Nullable CharSequence title)`,
  
              fullCode: `public abstract void <a href="#setTitle()">setTitle</a>(@Nullable CharSequence title)`,

              des: `Ye method Activity ke title ko set karne ke liye hota hai`,

              longDes: `<p>setTitle() method ka use karke hum Activity ke title ko set kar sakte hain. Title, Activity ke ActionBar, Toolbar, ya window title bar mein display kiya jata hai. Isse user ko pata chalta hai ki wo kaunsa screen ya context par hai.</p>

              <p>Is method ki implementation Activity ke specific requirements aur design patterns par depend karti hai. Typically, Activity ke onCreate() method mein setTitle() method ko call kiya jata hai, jisse Activity ke title set ho jaye.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable CharSequence title`,
                    des: `<p>Is method ka ek parameter hota hai: title, jo CharSequence type ka hota hai. Ye parameter Activity ke title ko represent karta hai, jise aap set karna chahte hain. @Nullable annotation batata hai ki title parameter null bhi ho sakta hai.</p>`,
                  },                  
                ],
              },
              ],
            },
  
  
  
  
            {
              dep: false,
              name: "startSupportActionMode",
              id: "startSupportActionMode()",
              dataTypeName: `abstract @Nullable ActionMode`,
              code: `<a href="#startSupportActionMode()">startSupportActionMode</a>(@NonNull ActionMode.Callback callback)`,
  
              fullCode: `public abstract @Nullable ActionMode <a href="#startSupportActionMode()">startSupportActionMode</a>(@NonNull ActionMode.Callback callback)`,

              des: `Ye method ActionMode ko start karne ke liye hota hai, jise Support Library ke ActionBar ke saath use kiya jata hai.`,

              longDes: `<p>startSupportActionMode() method ka use karke hum Support Library ke ActionBar ke saath ActionMode ko start kar sakte hain. ActionMode, ActionBar ke context-specific actions ko represent karta hai, jaise contextual menu, multi-selection mode, ya custom action bar actions.</p>

              <p>Is method ki implementation app ke specific requirements par depend karti hai. Hum startSupportActionMode() method ko call karte waqt, hume custom ActionMode.Callback object provide karna hota hai, jisse hum ActionMode ke events aur actions ko handle kar sake.</p>

              `,
              parameter: [
                {                
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull ActionMode.Callback callback`,
                    des: `<p>Is method ka ek parameter hota hai: callback, jo ActionMode.Callback type ka hota hai. Ye parameter ActionMode ke callback object ko represent karta hai, jise aap pass karna chahte hain. @NonNull annotation batata hai ki callback parameter null nahi ho sakta hai.</p>`,
                  },                  
                ],
              },
              ],
            },
  

//
  
          ],
        },
  
      },
    });
  };
  