module.exports.ActionBar = (req, res) => {
  console.log("okh");
  res.send({
    name: "ActionBar",
    hCode: `public abstract class <a href="#ActionBar">ActionBar</a>`,

    des: 

      `
      <p>Action bar application ke graphical user interface (GUI) ka ek important component hai, jo navigation options, actions, aur application ka branding (title/logo) ko display karta hai. Action bar screen ke top portion mein hota hai.</p>
      
      <p>Activity ke andar ek primary toolbar hai jo activity title, application-level navigation affordances aur anya interactive items ko display kar sakta hai.</p>
      

      <p>jab activity AppCompat ki AppCompat theme (yaa iske descendant themes me se eak) ka use karti hai, toh activity bar kisi activity ki window ke top per dikhayii deti hai, otherwise aap requestFeature(FEATURE_SUPPORT_ACTION_BAR) per call karke yaa windowActionBar property ke saath eak custom theme me declare karke action bar add kar sakte hai.</p>

      <p>Action bar ko application layout ke kisi bhi Toolbar widget se represent kiya jaa sakta hai. Application Activity ko signal de sakti hai ki kaunsa Toolbar Activity ke action bar ke roop mein upyog kiya jaana chahiye. Is feature ka upyog karne waali Activities ko .NoActionBar themes mein se koi ek upyog karna chahiye, windowActionBar attribute ko false set karna chahiye ya fir window feature ka request naa karna chahiye.</p>

      <p>Agar aapke activity mein options menu hai, to aap kuchh items ko 'action items' ke roop mein seedhe action bar se accessible bana sakte hain. Aap action bar ke various characteristics ko bhi modify kar sakte hain ya use completely remove bhi kar sakte hain.</p>
      

      <p>Navigation button (pahle 'Home' ke naam se jaana jaata tha) application icon ke occupied space ko take over karta hai. Jitne zyaada apps branding express karna chahte hain, utne hi zyaada unhein action bar aur other application chrome mein apne brand colors ka use karna chahiye ya phir unke standard title text ki jagah logo ka use karna chahiye.</p>
      

      <p>Apne activity se aap ActionBar ka instance retrieve kar sakte hain by calling getSupportActionBar() method.</p>
    

      <p>Kuchh cases mein, action bar ko ek aur bar overlay kar sakti hai, jismein ActionMode ka use hota hai. Jaise ki jab user aapke activity mein ek ya zyaada items select karta hai, aap action mode ko enable kar sakte hain jo selected items ke liye specific actions offer karta hai, aur action bar ko temporarily replace karta hai. UI ke alag-alag parts mein hone ke baawjood, ActionMode APIs action bar ke APIs se distinct aur independent hote hain.</p>
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
      nestedType: {
        name: "Nested Types",
        success: true,

        method: [
          {
            name: `public class ActionBar.LayoutParams extends ViewGroup.MarginLayoutParams`,
            des: `Action bar ke custom views ke saath jude har ek child layout ki information ko store karne ke liye use ki jaane waali per-child layout information.`,
            dep: false,
            longDes: ``,
          },
          {
            name: `public interface ActionBar.OnMenuVisibilityListener`,
            des: `Action bar menus dikhaye jaate hain ya chhupaye jaate hain tab events receive karne ke liye listener.`,
            dep: false,
            longDes:  ``,
          },

          {
            name: `public interface ActionBar.OnNavigationListener`,
            des: "Action bar navigation mode deprecated hai aur inline toolbar action bar dawara supported nhi hai.",
            dep: true,
            longDes:  ``,
          },
          {
            name: "public abstract class ActionBar.Tab",
            des: "action bar navigation mode depractaed hai aur inline  toolbar action bar dawara supported nhi hai.",
            dep: true,
            longDes:  ``,
          },
          {
            name: "public interface ActionBar.TabListener",
            des: "action bar navigation mode deprecated hai aur inline toolbar action bar dawara supported nhi hai.",
            dep: true,
            longDes:  ``,
          },
        ],
      },
      constant: {
        name: "Constants",
        success: true,
        method: [
          {
            dep: false,
            name: "DISPLAY_HOME_AS_UP",
            id: "",
            dataTypeName: `static final int`,
            code: `DISPLAY_HOME_AS_UP = 4`,
            fullCode: `public static final int DISPLAY_HOME_AS_UP = 4`,
            des:`Ye constant home button ke roop mein Action Bar mei upasthit hota hai. Home button typically back button ke roop mein kaam karta hai, jisse user pichhle screen par laut sakta hai.`,
            longDes: `<p>Ye constant home button ke roop mein Action Bar mei upasthit hota hai. Home button typically back button ke roop mein kaam karta hai, jisse user pichhle screen par laut sakta hai.</p>`,
            parameter: [
              {
                name: "See also",
                success: true,

                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "DISPLAY_SHOW_CUSTOM",
            id: "",
            dataTypeName: `static final int`,
            code: `DISPLAY_SHOW_CUSTOM = 16`,
            fullCode: `public static final int DISPLAY_SHOW_CUSTOM = 16`,
            des: `Agar koi custom view set kiya gaya hai, to use dikhayein.`,
            longDes: `<p>Ye constant ActionBar mein custom view ko display karne ke liye istemal hota hai. Custom view se hum apne according action bar ko customize kar sakte hain. Custom view hum apne layout XML file se inflate kar sakte hain aur usko action bar mein set kar sakte hain. Isse hum action bar ke appearance, layout, aur functionality ko apne requirements ke hisab se modify kar sakte hain.</p>`,
            parameter: [
              {
                name: "See also",
                success: true,

                parameter: [
                  {
                    dataTypeName: `setCustomView`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: `DISPLAY_SHOW_HOME`,
            id: "",
            dataTypeName: `static final int`,
            code: `DISPLAY_SHOW_HOME = 2`,
            fullCode: `public static final int DISPLAY_SHOW_HOME = 2`,
            des: `Home button typically action bar ke left-hand side par display hota hai aur isse user ko application ke main screen ya root screen tak pahuchne ka shortcut provide kiya jata hai.`,
            longDes: `<p>Ye constant ActionBar mein home button ko display karne ke liye istemal hota hai. Home button typically action bar ke left-hand side par display hota hai aur isse user ko application ke main screen ya root screen tak pahuchne ka shortcut provide kiya jata hai. Isme logo aur icon shamil hai.</p>`,
            parameter: [
              {
                name: "See also",
                success: true,

                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: `DISPLAY_SHOW_TITLE`,
            id: "",
            dataTypeName: `static final int`,
            code: `DISPLAY_SHOW_TITLE = 8`,
            fullCode: `public static final int DISPLAY_SHOW_TITLE = 8`,
            des: `Is property ko set karne se agar activity title aur subtitle available hain to unhe action bar mein dikhaya jaayega.`,
            longDes: `<p>Is property ko set karne se agar activity title aur subtitle available hain to unhe action bar mein dikhaya jaayega.</p>`,
            parameter: [
              {
                name: "See also",
                success: true,

                parameter: [
                  {
                    dataTypeName: `setTitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setTitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setSubtitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setSubtitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: `DISPLAY_USE_LOGO`,
            id: "",
            dataTypeName: `static final int`,
            code: `DISPLAY_USE_LOGO = 1`,
            fullCode: `public static final int DISPLAY_USE_LOGO = 1`,
            des: `Agar logo available hai toh icon ke bajaye logo ka use karein.`,
            longDes: `<p>Ye constant ActionBar mein logo ka istemal karne ke liye istemal hota hai. Logo typically action bar ke left-hand side par display hota hai aur isse application ka branding aur recognition promote kiya jata hai.</p>`,
            parameter: [
              {
                name: "See also",
                success: true,

                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: `NAVIGATION_MODE_LIST`,
            id: "",
            dataTypeName: `static final int`,
            code: `NAVIGATION_MODE_LIST = 1`,
            fullCode: `public static final int NAVIGATION_MODE_LIST = 1`,
            des: `Action bar navigation modes ko deprecated mana gaya hai aur inline toolbar action bars mein support nahi kiya jata.`,
            longDes: `<p>Ye constant ActionBar ke navigation mode ko represent karta hai. NAVIGATION_MODE_LIST navigation mode, ActionBar mein ek drop-down list (spinner) ke roop mein navigation options ko display karta hai.</p>`,
            parameter: [],
          },

          {
            dep: true,
            name: `NAVIGATION_MODE_STANDARD`,
            id: "",
            dataTypeName: `static final int`,
            code: `NAVIGATION_MODE_STANDARD = 0`,
            fullCode: `public static final int NAVIGATION_MODE_STANDARD = 0`,
            des: `Action bar navigation modes ko deprecated mana gaya hai aur inline toolbar action bars mein support nahi kiya jata.`,
            longDes: `<p>Ye constant ActionBar ke navigation mode ko represent karta hai. NAVIGATION_MODE_STANDARD navigation mode, ActionBar mein standard navigation elements ko display karta hai. Isme typically back button (up button) aur action bar ke title/text shaamil hote hain.</p>`,
            parameter: [],
          },

          {
            dep: true,
            name: `NAVIGATION_MODE_TABS`,
            id: "",
            dataTypeName: `static final int`,
            code: `NAVIGATION_MODE_TABS = 2`,
            fullCode: `public static final int NAVIGATION_MODE_TABS = 2`,
            des: `Action bar navigation modes ko deprecated mana gaya hai aur inline toolbar action bars mein support nahi kiya jata.`,
            longDes: `</p>Ye constant ActionBar ke navigation mode ko represent karta hai. NAVIGATION_MODE_TABS navigation mode, ActionBar mein tabbed navigation ko display karta hai. Ismein ActionBar ke upper portion mein tab buttons hote hain, jinhe tabbed navigation ke options represent karte hain. User tab buttons par tap karke different screens ya sections ke beech switch kar sakta hai.</p>`,
            parameter: [],
          },
        ],
      },

      publicConstructor: {
        name: "Public Constructor",
        success: false,

        method: [
          {
            dep: false,
            name: `ActionBar`,
            id: "",
            code: `ActionBar()`,
            fullCode: `public ActionBar()`,
            des: `ActionBar() constructor ek ActionBar class ka constructor hai. Is constructor ka upyog ActionBar object banane ke liye kiya jata hai.`,
            longDes: `<p>ActionBar() constructor ka upyog karke, hum ActionBar class ka ek naya object create kar sakte hain, jise hum ActionBar ke methods aur properties ko access karne aur customize karne ke liye istemal kar sakte hain.</p>`,
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
            name: "addOnMenuVisibilityListener",
            id: "addOnMenuVisibilityListener()",
            dataTypeName: `abstract void`,
            code: `<a href="#addOnMenuVisibilityListener()">addOnMenuVisibilityListener</a>(  
    ActionBar.OnMenuVisibilityListener listener
)`,

            fullCode: `public abstract void <a href="#addOnMenuVisibilityListener()">addOnMenuVisibilityListener</a>(
  ActionBar.OnMenuVisibilityListener listener
)`,
            des: `Menu visibility change events ka response dene wale listener ko add karein.`,

            longDes: `
            <p>yah method ActionBar ke menu visibility ke changes ko monitor karne ke liye use kiya jata hai.</p>

            <p>Is method ke jariye, hum ActionBar ke menu visibility ke changes ko track karne ke liye ek listener object add kar sakte hain. Listener object, ActionBar.OnMenuVisibilityListener interface ko implement karta hai, jisme onMenuVisibilityChanged() method define hota hai.</p>

            <p>Jab ActionBar ke menu visibility mein koi change hota hai, jaise ki menu open ya close hone par, to registered listener ke onMenuVisibilityChanged() method ko invoke kiya jata hai. Is method ke through hum us visibility change ka pata laga sakte hain aur sambandhit actions perform kar sakte hain.</p>
            `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.OnMenuVisibilityListener listener`,
                    des:`<p>Add karna hai ek new listener jo menu visibility change events ke responses ko handle kare</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "addTab",
            id: "addTab(Tab)",
            dataTypeName: `abstract void`,
            code: `<del><a href="#addTab(Tab)">addTab</a></del>(ActionBar.Tab tab)`,

            fullCode: `public abstract void <del><a href="#addTab(Tab)">addTab</a></del>(ActionBar.Tab tab)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ke jariye hum ActionBar ke object mein ek Tab object ko add kar sakte hain. Tab object ActionBar.Tab interface ko implement karta hai aur ek specific tab ko represent karta hai ActionBar mein.</p>

              <p>Jab addTab() method ko call kiya jata hai, to specified Tab object ActionBar ke list of tabs mein add ho jata hai. Isse, Tab ActionBar ke navigation bar mein display ho jata hai aur user uspar click karke us tab ke content tak navigate kar sakta hai.</p>

              <p>Yadi yah pehla tab hai jo joda ja raha hai, to yah "selected tab" ban jayega.</p>`,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab tab`,
                    des: `<p>Jodne ke liye tab</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "addTab",
            id: "addTab(Tab,int)",
            dataTypeName: `abstract void`,
            code: `<del><a href="#addTab(Tab,int)">addTab</a></del>(ActionBar.Tab tab, int position)`,

            fullCode: `public abstract void <del><a href="#addTab(Tab,int)">addTab</a></del>(ActionBar.Tab tab, int position)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ke jariye hum ActionBar ke object mein ek Tab object ko specified position par add kar sakte hain. Tab object ActionBar.Tab interface ko implement karta hai aur ek specific tab ko represent karta hai ActionBar mein.</p>

              <p>Jab addTab() method ko call kiya jata hai, to specified Tab object ActionBar ke list of tabs mein specified position par add ho jata hai. Isse, Tab ActionBar ke navigation bar mein display ho jata hai aur user uspar click karke us tab ke content tak navigate kar sakta hai.</p>`,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab tab`,
                    des: `<p>Jodne ke liye tab</p>`,
                  },
                  {
                    dataTypeName: `int position`,
                    des: `<p>Tab ki new position</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "addTab",
            id: "addTab(Tab,boolean)",
            dataTypeName: `abstract void`,
            code: `<del><a href="#addTab(Tab,boolean)">addTab</a></del>(ActionBar.Tab tab, boolean setSelected)`,

            fullCode: `public abstract void <del><a href="#addTab(Tab,boolean)">addTab</a></del>(ActionBar.Tab tab, boolean setSelected)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ke jariye hum ActionBar ke object mein ek Tab object ko add kar sakte hain. Tab object ActionBar.Tab interface ko implement karta hai aur ek specific tab ko represent karta hai ActionBar mein.</p>

              <p>Jab addTab() method ko call kiya jata hai, to specified Tab object ActionBar ke list of tabs mein add ho jata hai. Agar setSelected parameter true hai, to uss Tab ko selected state mein set kiya jata hai, jisse woh tab initially highlight ho jata hai.</p>`,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab tab`,
                    des: `<p>Jodne ke liye tab.</p>`,
                  },
                  {
                    dataTypeName: `boolean setSelected`,
                    des:`<p>Yadi joda gaya tab selected tab ban na chahiye to "True".</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "addTab",
            id: "addTab(Tab,int,boolean)",
            dataTypeName: `abstract void`,
            code: `<del><a href="#addTab(Tab,int,boolean)">addTab</a></del>(ActionBar.Tab tab, int position, boolean setSelected)`,

            fullCode: `public abstract void <del><a href="#addTab(Tab,int,boolean)">addTab</a></del>(ActionBar.Tab tab, int position, boolean setSelected)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein</p></aside>
              <p>Is method ke jariye hum ActionBar ke object mein ek Tab object ko specified position par add kar sakte hain. Tab object ActionBar.Tab interface ko implement karta hai aur ek specific tab ko represent karta hai ActionBar mein.</p>

              <p>Jab addTab() method ko call kiya jata hai, to specified Tab object ActionBar ke list of tabs mein specified position par add ho jata hai. Agar setSelected parameter true hai, to uss Tab ko selected state mein set kiya jata hai, jisse woh tab initially highlight ho jata hai.</p>`,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab tab`,
                    des: `<p>Jodne ke liye tab.</p>`,
                  },
                  {
                    dataTypeName: `int position`,
                    des: `<p>Tab ki new position</p>`,
                  },
                  {
                    dataTypeName: `boolean setSelected`,
                    des: `<p>Yadi joda gaya tab selected tab ban na chahiye to "True".</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getCustomView",
            id: "getCustomView()",
            dataTypeName: `abstract View`,
            code: `<a href="#getCustomView()">getCustomView</a>()`,

            fullCode: `public abstract View <a href="#getCustomView()">getCustomView</a>()`,
            des: `getCustomView() ek method hai jo ActionBar se custom view ko retrieve karne ke liye use kiya jata hai.`,
            longDes: `<p>Is method ka upyog karke hum ActionBar ke object se custom view ko prapt kar sakte hain. Custom view ek user-defined view hota hai jo ActionBar ke right side ya center me display kiya ja sakta hai. Isse hum ActionBar ke appearance ko customize kar sakte hain.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `View`,
                    des: `<p>The current custom view</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getDisplayOptions",
            id: "getDisplayOptions()",
            dataTypeName: `abstract int`,
            code: `<a href="#getDisplayOptions()">getDisplayOptions</a>()`,

            fullCode: `public abstract int <a href="#getDisplayOptions()">getDisplayOptions</a>()`,
            des: `Is method ka upyog karke hum ActionBar ke object se display options ko prapt kar sakte hain. Display options, ActionBar ke appearance aur behavior ke liye various flags ya constants ka set hota hai.`,
            longDes: `<p>Is method ka upyog karke hum ActionBar ke object se display options ko prapt kar sakte hain. Display options, ActionBar ke appearance aur behavior ke liye various flags ya constants ka set hota hai.</p>
            <p>getDisplayOptions() method ka upyog karke, hum ActionBar ke display options ko retrieve kar sakte hain aur usko analyze karke ActionBar ke current state, jaise ki visibility, home button ka presence, custom view ka presence, etc., ko determine kar sakte hain. Isse hum ActionBar ke behavior ko customize aur navigation flow ko control kar sakte hain.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>display options ka current set</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getElevation",
            id: "getElevation()",
            dataTypeName: `float`,
            code: `<a href="#getElevation()">getElevation</a>()`,

            fullCode: `public float <a href="#getElevation()">getElevation</a>()`,
            des: `Action bar ki Z-axis elevation ko pixel mein prapt karein.`,
            longDes: `<p>Elevation ek floating point value hai jo ActionBar ko z-axis (vertical axis) par elevate (uchit sthan par rakhne) karne ke liye istemal hota hai. Yeh elevation ActionBar ka visual depth aur shadow effect define karta hai, jisse ActionBar aur uske content ko material design guidelines ke anuroop 3D-like look prapt hota hai.</p>
            
            <p>Jab getElevation() method ko call kiya jata hai, to ye method current elevation value ko return karta hai. Ye value pixels mein hoti hai aur ActionBar ka elevation level darshata hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `float`,
                    des: `<p>Pixels mein "Elevation" ki value</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getHeight",
            id: "getHeight()",
            dataTypeName: `abstract int`,
            code: `<a href="#getHeight()">getHeight</a>()`,

            fullCode: `public abstract int <a href="#getHeight()">getHeight</a>()`,
            des: `ActionBar ki current height prapt karein.`,
            longDes: `<p>Jab getHeight() method ko call kiya jata hai, to ye method current height value ko return karta hai. Ye value pixels mein hoti hai aur ActionBar ki vertical dimension ko darshata hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>ActionBar ki height</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getHideOffset",
            id: "getHideOffset()",
            dataTypeName: `int`,
            code: `<a href="#getHideOffset()">getHideOffset</a>()`,

            fullCode: `public int <a href="#getHideOffset()">getHideOffset</a>()`,
            des: `Action bar ka current vertical offset return karein.`,
            longDes: `<p>Hide offset ActionBar ke chhupane ya dikhai na dikhane ke sthan par uska vertical displacement ko represent karta hai. Jab ActionBar hide ho jati hai, yani visibility zero ho jati hai, tab hide offset uski vertical displacement ko darshata hai.</p>
            
            <p>Jab getHideOffset() method ko call kiya jata hai, to ye method current hide offset value ko return karta hai. Hide offset pixels mein hoti hai aur ActionBar ke chhupane ka displacement darshati hai.</p>

            <p>getHideOffset() method ka upyog karke, hum ActionBar ke hide offset value ko retrieve kar sakte hain aur usko analyze karke ActionBar ke chhupane ya dikhai na dikhane ke behavior ko samajh sakte hain. Isse hum ActionBar ke animation aur transition effects ko customize kar sakte hain aur uski behavior ko control kar sakte hain.</p>`,

            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>ye method current hide offset value ko return karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "getNavigationItemCount",
            id: "getNavigationItemCount()",
            dataTypeName: `abstract int`,
            code: `<del><a href="#getNavigationItemCount()">getNavigationItemCount</a></del>()`,

            fullCode: `public abstract int <del><a href="#getNavigationItemCount()">getNavigationItemCount</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>
              <p>Is method ka upyog karke hum ActionBar ke object se navigation items ki sankhya ko prapt kar sakte hain. Navigation items ActionBar ke navigation mode ke hisaab se display kiye jaate hain, jaise ki tabs, dropdown menu, spinner, etc.<p>

              <p>Jab getNavigationItemCount() method ko call kiya jata hai, to ye method current navigation items ki sankhya ko return karta hai. Ye sankhya navigation items ke count ko darshata hai.<p>`,

            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>ye method current navigation items ki sankhya ko return karta hai</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "getNavigationMode",
            id: "getNavigationMode()",
            dataTypeName: `abstract int`,
            code: `<del><a href="#getNavigationMode()">getNavigationMode</a></del>()`,

            fullCode: `public abstract int <del><a href="#getNavigationMode()">getNavigationMode</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Navigation mode ActionBar ke navigation system ko define karta hai, jaise ki tab navigation, dropdown navigation, list navigation, etc. Navigation mode ActionBar ke layout aur behavior ko influence karta hai.</p>

              <p>Jab getNavigationMode() method ko call kiya jata hai, to ye method current navigation mode ko represent karne wali integer value return karta hai. Hum is value ke through navigation mode ke flags aur constants ko decode kar sakte hain aur ActionBar ke navigation system ko identify kar sakte hain.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>current navigation mode</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "getSelectedNavigationIndex",
            id: "getSelectedNavigationIndex()",
            dataTypeName: `abstract int`,
            code: `<del><a href="#getSelectedNavigationIndex()">getSelectedNavigationIndex</a></del>()`,

            fullCode: `public abstract int <del><a href="#getSelectedNavigationIndex()">getSelectedNavigationIndex</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ka upyog karke hum ActionBar ke object se currently selected navigation item ka index prapt kar sakte hain. Navigation item ActionBar ke navigation mode ke hisaab se display kiye jaate hain, jaise ki tabs, dropdown menu, spinner, etc.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>ye method currently selected navigation item ka index return karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "getSelectedTab",
            id: "getSelectedTab()",
            dataTypeName: `abstract @Nullable ActionBar.Tab`,
            code: `<a href="#getSelectedTab()">getSelectedTab</a>()`,

            fullCode: `public abstract @Nullable ActionBar.Tab <del><a href="#getSelectedTab()">getSelectedTab</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ka upyog karke hum ActionBar ke object se currently selected tab ka reference prapt kar sakte hain. ActionBar ke navigation mode tab-based ho sakta hai, jahan par hum tab ke through navigation aur content switch kar sakte hain.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable ActionBar.Tab`,
                    des: `<p>ye method currently selected tab ka object return karta hai yaa fir null return karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getSubtitle",
            id: "getSubtitle()",
            dataTypeName: `abstract @Nullable CharSequence`,
            code: `<del><a href="#getSubtitle()">getSubtitle</a></del>()`,

            fullCode: `public abstract @Nullable CharSequence <a href="#getSubtitle()">getSubtitle</a>()`,
            des: `Standard mode mein current ActionBar subtitle ko return karein.`,
            longDes: `
              <p>Is method ka upyog karke hum ActionBar ke object se currently set ki gayi subtitle ko prapt kar sakte hain. Subtitle ActionBar ke title ke nichle hisse mein additional text provide karne ke liye istemal hota hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable CharSequence`,
                    des: `<p>Current ActionBar subtitle ya null return karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "getTabAt",
            id: "getTabAt()",
            dataTypeName: `abstract ActionBar.Tab`,
            code: `<del><a href="#getTabAt()">getTabAt</a></del>(int index)`,

            fullCode: `public abstract ActionBar.Tab <del><a href="#getTabAt()">getTabAt</a></del>(int index)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ka upyog karke hum ActionBar ke object se specific index par sthit tab ka reference prapt kar sakte hain. ActionBar ke navigation mode tab-based ho sakta hai, jahan par hum tab ke through navigation aur content switch kar sakte hain.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int index`,
                    des: `<p>Index 0 se shuru hota hai aur ActionBar ke navigation mode aur tab count ke anusar badhta hai.</p>`,
                  },
                ],
              },
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "getTabCount",
            id: "getTabCount()",
            dataTypeName: `abstract int`,
            code: `<del><a href="#getTabCount()">getTabCount</a></del>()`,

            fullCode: `public abstract int <del><a href="#getTabCount()">getTabCount</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ka upyog karke hum ActionBar ke object se tab count ko prapt kar sakte hain. Tab count ActionBar mein maujood tab items ki sankhya ko darshata hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int`,
                    des: `<p>ye method current tab count ki integer value return karta hai. Ye count tab items ke sankhya ko darshata hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getThemedContext",
            id: "getThemedContext()",
            dataTypeName: `Context`,
            code: `<a href="#getThemedContext()">getThemedContext</a>()`,

            fullCode: `public Context <a href="#getThemedContext()">getThemedContext</a>()`,
            des: `"Action bar mein dikhne wale views ke liye anukool theme ke sath ek Context ko return karta hai.`,
            longDes: `
              <p>Is method ka upyog karke hum ActionBar ke object se themed context prapt kar sakte hain. Themed context, ActionBar ke current theme ke hisaab se customized attributes, styles, colors, aur resources ko shamil karta hai.</p>

              <p>Jab getThemedContext() method ko call kiya jata hai, to ye method ActionBar ke themed context ka reference return karta hai. Ye context object, original context ke saath ActionBar ke theme-related modifications ko carry karta hai.</p>
              
              <p>getThemedContext() method ka upyog karke, hum ActionBar ke themed context ko retrieve kar sakte hain aur usko ActionBar ke UI elements ko customize karne, theme-specific resources ko access karne, ya theme-dependent behavior implement karne ke liye istemal kar sakte hain. Isse hum ActionBar ke appearance ko theme ke anusar adapt kar sakte hain aur consistent visual experience pradan kar sakte hain.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Context`,
                    des: `<p>ye method ActionBar ke themed context ka reference Return karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getTitle",
            id: "getTitle()",
            dataTypeName: `abstract @Nullable CharSequence`,
            code: `<a href="#getTitle()">getTitle</a>()`,

            fullCode: `public abstract @Nullable CharSequence <a href="#getTitle()">getTitle</a>()`,
            des: `Standard mode mein current ActionBar title ko return karein.`,
            longDes: `
              <p>Is method ka upyog karke hum ActionBar ke object se currently set ki gayi title ko prapt kar sakte hain. Title ActionBar ke main heading text ko represent karta hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable CharSequence`,
                    des: `<p>Current ActionBar title ya null Return karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "hide",
            id: "hide()",
            dataTypeName: `abstract void`,
            code: `<a href="#hide()">hide</a>()`,

            fullCode: `public abstract void <a href="#hide()">hide</a>()`,
            des: `Agar ActionBar dikh raha hai to use hide karein.`,
            longDes: `
              <p>Jab hide() method ko call kiya jata hai, to ActionBar apne visible state se invisible state mein chala jata hai. Iska arth hai ki ActionBar UI element user ke view se hide ho jata hai.</p>
             
              <p>hide() method ke dwara ActionBar ko hide karne se, screen space bachta hai aur content area expand ho sakta hai. Isse hum user interface ko optimize kar sakte hain aur focus area ko bada sakte hain.</p>`,
            parameter: [],
          },

          {
            dep: false,
            name: "isHideOnContentScrollEnabled",
            id: "isHideOnContentScrollEnabled()",
            dataTypeName: `boolean`,
            code: `<a href="#isHideOnContentScrollEnabled()">isHideOnContentScrollEnabled</a>()`,

            fullCode: `public boolean <a href="#isHideOnContentScrollEnabled()">isHideOnContentScrollEnabled</a>()`,
            des: `Return karein ki kya action bar ko nested scrolling child ke saath scroll karne ke saath bahar se gayab karne ke liye configure kiya gaya hai ya nahi.`,
            longDes: `
              <p>Jab isHideOnContentScrollEnabled() method ko call kiya jata hai, to ye method boolean value return karta hai. Agar ActionBar ke hide on content scroll feature enabled hai, to true return kiya jata hai, aur agar disabled hai, to false return kiya jata hai.</p>

              <p>Hide on content scroll feature ka upyog ActionBar ke sath scrollable content ke saath ActionBar ko hide karna ke liye kiya jata hai. Jab user content ko scroll karta hai, ActionBar automatically hide ho jati hai taki content ko pura screen space mil sake. Jab user content ko scroll band karta hai, ActionBar wapas dikhayi deti hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean`,
                    des: `<p>ye method boolean value return karta hai. Agar ActionBar ke hide on content scroll feature enabled hai, to true return kiya jata hai, aur agar disabled hai, to false return kiya jata hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setHideOnContentScrollEnabled`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "isShowing",
            id: "isShowing()",
            dataTypeName: `abstract boolean`,
            code: `<a href="#isShowing()">isShowing</a>()`,

            fullCode: `public abstract boolean <a href="#isShowing()">isShowing</a>()`,
            des: `ye method boolean value return karta hai. Agar ActionBar visible hai, yani dikh rahi hai, to true return kiya jata hai. Aur agar ActionBar invisible hai, yani hide hai, to false return kiya jata hai.`,
            longDes: `<p>Jab isShowing() method ko call kiya jata hai, to ye method boolean value return karta hai. Agar ActionBar visible hai, yani dikh rahi hai, to true return kiya jata hai. Aur agar ActionBar invisible hai, yani hide hai, to false return kiya jata hai.</p>`,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean`,
                    des: `<p>Agar ActionBar show ho raha hai to true return karein, nahi to false.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "newTab",
            id: "newTab()",
            dataTypeName: `abstract ActionBar.Tab`,
            code: `<del><a href="#newTab()">newTab</a></del>()`,
            fullCode: `public abstract ActionBar.Tab <del><a href="#newTab()">newTab</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Jab newTab() method ko call kiya jata hai, to ye method ek naya ActionBar.Tab object return karta hai. Ye naya tab object ActionBar ke tab navigation system mein ek naya tab represent karta hai.</p>
              
              <p>newTab() method ke dwara prapt kiye gaye tab object ko hum further customization ke liye istemal kar sakte hain. Hum usme tab ka title, icon, event listeners, content view, ya koi bhi additional properties set kar sakte hain.</p>
              `,
            parameter: [
              {
                name: "Returns",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab`,
                    des: `<p>ye method ek naya ActionBar.Tab object return karta hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `addTab`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "removeAllTabs",
            id: "removeAllTabs()",
            dataTypeName: `abstract void`,
            code: `<del><a href="#removeAllTabs()">removeAllTabs</a></del>()`,
            fullCode: `public abstract void <del><a href="#removeAllTabs()">removeAllTabs</a></del>()`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Is method ka upyog ActionBar se sabhi tabs ko remove ke liye kiya jata hai.</p>

              <p>ActionBar me tabs ka upyog navigation ke liye kiya jata hai. Tabs, ActionBar ke title ke niche display hote hai aur multiple screens ya categories me navigation ko allow karte hai.</p>
              
              <p>Jab hum removeAllTabs method ko implement karte hai, tab ActionBar se sabhi tabs remove ho jate hai. Yani, sabhi tabs ActionBar se hat jate hai aur koi tab navigation available nahi rehti hai.</p>`,
            parameter: [],
          },

          {
            dep: false,
            name: "removeOnMenuVisibilityListener",
            id: "removeOnMenuVisibilityListener()",
            dataTypeName: `abstract void`,
            code: `<a href="#removeOnMenuVisibilityListener()">removeOnMenuVisibilityListener</a>(
    ActionBar.OnMenuVisibilityListener listener
)`,

            fullCode: `public abstract void <a href="#removeOnMenuVisibilityListener()">removeOnMenuVisibilityListener</a>(
    ActionBar.OnMenuVisibilityListener listener
)`,
            des: `Jab removeOnMenuVisibilityListener() method ko call kiya jata hai, to ye method diye gaye listener ko ActionBar se hata deta hai.`,
            longDes: `<p>Jab removeOnMenuVisibilityListener() method ko call kiya jata hai, to ye method diye gaye listener ko ActionBar se hata deta hai. Iska arth hai ki ab ActionBar menu visibility changes ke events par listener ko notify nahi karega.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.OnMenuVisibilityListener listener`,
                    des: `<p>Ek aisa listener hatana jo pehle se joda gaya tha.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "removeTab",
            id: "removeTab()",
            dataTypeName: `abstract void`,
            code: `<del><a href="#removeTab()">removeTab</a></del>(ActionBar.Tab tab)`,
            fullCode: `public abstract void <del><a href="#removeTab()">removeTab</a></del>(ActionBar.Tab tab)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

              <p>Ye method ActionBar me se ek Tab ko hataane ke liye use hota hai. Ye method tab parameter ko accept karta hai, jo ActionBar.Tab data type ka hai. Is parameter ke through, hum specific tab ko identify kar sakte hai jise hataana hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab tab`,
                    des: `<p>wah tab jo remove karna hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "selectTab",
            id: "selectTab()",
            dataTypeName: `abstract void`,
            code: `<del><a href="#selectTab()">selectTab</a></del>(ActionBar.Tab tab)`,
            fullCode: `public abstract void <del><a href="#selectTab()">selectTab</a></del>(ActionBar.Tab tab)`,
            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,
            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

            <p>Jab selectTab() method ko call kiya jata hai, to ye method diye gaye tab ko ActionBar mein select kar deta hai. Iska arth hai ki specified tab ko active tab bana diya jata hai, jisse tab ka content aur visual state ActionBar mein dikhega.</p>
            
            <p>Note: Agar aap index ke dwara select karna chahte hain, to setSelectedNavigationItem ka upyog karen.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ActionBar.Tab tab`,
                    des: `<p>select karne ke liye Tab.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setBackgroundDrawable",
            id: "setBackgroundDrawable()",
            dataTypeName: `abstract void`,
            code: `<a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable d)`,

            fullCode: `public abstract void <a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable d)`,
            des: `ActionBar ka background set karen.`,
            longDes: `<p>Jab setBackgroundDrawable() method ko call kiya jata hai, to ye method diye gaye Drawable ko ActionBar ke background mein set kar deta hai. Isse ActionBar ka background visual appearance change hota hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable Drawable d`,
                    des: `<p>Background drawable.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setStackedBackgroundDrawable`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setSplitBackgroundDrawable`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setCustomView",
            id: "setCustomView(int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setCustomView(int)">setCustomView</a>(int resId)`,

            fullCode: `public abstract void <a href="#setCustomView(int)">setCustomView</a>(int resId)`,
            des: `Is method ka upyog ActionBar me ek custom view ko set karne ke liye kiya jata hai. resId ek integer parameter hai, jisme custom view ka resource ID hota hai.`,
            longDes: `<p>Is method ka upyog ActionBar me ek custom view ko set karne ke liye kiya jata hai. resId ek integer parameter hai, jisme custom view ka resource ID hota hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int resId`,
                    des: `<p>ActionBar mein inflate karne ke liye ek layout ka resource ID.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setCustomView",
            id: "setCustomView(view)",
            dataTypeName: `abstract void`,
            code: `<a href="#setCustomView(view)">setCustomView</a>(View view)`,

            fullCode: `public abstract void <a href="#setCustomView(view)">setCustomView</a>(View view)`,
            des: `Is method ka upyog ActionBar me ek custom view ko set karne ke liye kiya jata hai. view ek View object hai, jisme custom view hota hai.`,
            longDes: `<p>Is method ka upyog ActionBar me ek custom view ko set karne ke liye kiya jata hai. view ek View object hai, jisme custom view hota hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `View view`,
                    des: `<p>ActionBar mein inflate karne ke liye ek View ka Object.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setCustomView",
            id: "setCustomView(view,layoutParams)",
            dataTypeName: `abstract void`,
            code: `<a href="#setCustomView(view,layoutParams)">setCustomView</a>(View view, ActionBar.LayoutParams layoutParams)`,

            fullCode: `public abstract void <a href="#setCustomView(view,layoutParams)">setCustomView</a>(View view, ActionBar.LayoutParams layoutParams)`,
            des: `Is method ka upyog ActionBar me ek custom view ko set karne ke liye kiya jata hai.`,
            longDes: `<p>setCustomView(View view, ActionBar.LayoutParams layoutParams) method ActionBar par ek custom view ko set karne ke liye upyog kiya jata hai. Is method mein do parameters hote hain, ek view parameter jo ek View object hota hai jo ActionBar par set kiya jana hai, aur ek layoutParams parameter jo view ke layout parameters ko specify karta hai.</p>
            
            <p>Custom view ko dikhane ke liye DISPLAY_SHOW_CUSTOM display option set hona chahiye.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `View view`,
                    des: `<p>ActionBar me jagah dene ke liye custom navigation view.</p>`,
                  },
                  {
                    dataTypeName: `ActionBar.LayoutParams layoutParams`,
                    des: `<p>Is custom view ko ActionBar me kaise layout kiya jaana chahiye.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayHomeAsUpEnabled",
            id: "setDisplayHomeAsUpEnabled()",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayHomeAsUpEnabled()">setDisplayHomeAsUpEnabled</a>(boolean showHomeAsUp)`,

            fullCode: `public abstract void <a href="#setDisplayHomeAsUpEnabled(boolean showHomeAsUp)">setDisplayHomeAsUpEnabled</a>(boolean showHomeAsUp)`,
            des: `Is method ka upyog karke hum ActionBar mein "Home" button ka visibility control kar sakte hain, jisse user ko back navigation functionality provide kar sakte hain.`,
            longDes: `<p>Is method ka upyog karke hum ActionBar mein "Home" button ka visibility control kar sakte hain, jisse user ko back navigation functionality provide kar sakte hain.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean showHomeAsUp`,
                    des: `<p>Ek boolean value jo home/up button ki dikhawat ko enable (true) ya disable (false) karne ke liye use hoti hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayOptions",
            id: "setDisplayOptions(int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayOptions(int)">setDisplayOptions</a>(int options)`,

            fullCode: `public abstract void <a href="#setDisplayOptions(int)">setDisplayOptions</a>(int options)`,
            des: `ye method diye gaye options parameter ke anusar ActionBar ke display options ko set kar deta hai.`,
            longDes: `<p>Iska upyog ActionBar ke display options ko set karne ke liye kiya jata hai. Is method mein ek int type ka options parameter liya jata hai.

            options parameter mein display options ke flags pass kiye jate hain, jaise ki ActionBar.DISPLAY_SHOW_HOME, ActionBar.DISPLAY_SHOW_TITLE, ActionBar.DISPLAY_USE_LOGO, etc. In flags ki madad se, ActionBar ke alag-alag elements ko show/hide karne ya customize karne ka control milta hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int options`,
                    des: `<p>options parameter mein display options ke flags pass kiye jate hain, jaise ki ActionBar.DISPLAY_SHOW_HOME, ActionBar.DISPLAY_SHOW_TITLE, ActionBar.DISPLAY_USE_LOGO, etc.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayOptions",
            id: "setDisplayOptions(int,int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayOptions(int,int)">setDisplayOptions</a>(int options, int mask)`,

            fullCode: `public abstract void <a href="#setDisplayOptions(int,int)">setDisplayOptions</a>(int options, int mask)`,
            des: `setSelectedDisplayOptions ka upyog karke chune hue display options ko set karein.`,
            longDes: `<p>Iska upyog ActionBar ke display options ko set karne ke liye kiya jata hai, sath hi ek mask ka bhi istemal hota hai. Is method mein do parameters liye jate hain: options aur mask, dono int type ke hote hain.</p>
            
            <p>options parameter mein display options ke flags pass kiye jate hain, jaise ki ActionBar.DISPLAY_SHOW_HOME, ActionBar.DISPLAY_SHOW_TITLE, ActionBar.DISPLAY_USE_LOGO, aadi. In flags ki madad se, ActionBar ke alag-alag elements ko show/hide karne ya customize karne ka control milta hai.</p>

            <p>mask parameter ek bitwise mask hai, jiska upyog kiya jata hai existing display options ko filter karne ke liye. Yani, options mein diye gaye flags ke sirf un bits ko consider karega jiske corresponding bits mask mein 1 hai. Isse sirf un options ka effect hoga jo mask mein set hai, aur dusre options ki sthiti par koi asar nahi padega.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int options`,
                    des: `<p>ActionBar mein DEFINE kiye gaye DISPLAY_ constants dvara define kiye gaye bits ke ek combination.</p>`,
                  },
                  {
                    dataTypeName: `int mask`,
                    des: `<p>Ek bit mask jo declare karta hai ki kaun se display options badle jana chahiye.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayShowCustomEnabled",
            id: "setDisplayShowCustomEnabled()",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayShowCustomEnabled()">setDisplayShowCustomEnabled</a>(boolean showCustom)`,

            fullCode: `public abstract void <a href="#setDisplayShowCustomEnabled()">setDisplayShowCustomEnabled</a>(boolean showCustom)`,
            des: `setDisplayShowCustomEnabled ka upyog karke, ek custom view ko display karna chahiye ya nahi, yeh set karein.`,
            longDes:
             `<p> Iska upyog ActionBar mein custom view ko dikhane ya chhupane ke liye kiya jata hai. Is method mein ek boolean type ka showCustom parameter liya jata hai.</p>
            
            <p>showCustom parameter ki madad se, ActionBar mein custom view ko dikhane ya chhupane ka nirnay liya jata hai. Agar showCustom parameter true hai, to ActionBar mein custom view dikhaya jayega. Agar showCustom parameter false hai, to custom view chhupaya jayega.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean showCustom`,
                    des: `<p>Agar showCustom parameter true hai, to ActionBar mein custom view dikhaya jayega. Agar showCustom parameter false hai, to custom view chhupaya jayega.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayShowHomeEnabled",
            id: "setDisplayShowHomeEnabled()",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayShowHomeEnabled()">setDisplayShowHomeEnabled</a>(boolean showHome)`,

            fullCode: `public abstract void <a href="#setDisplayShowHomeEnabled()">setDisplayShowHomeEnabled</a>(boolean showHome)`,
            des: `Iska upyog ActionBar mein home button ko dikhane ya chhupane ke liye kiya jata hai.`,
            longDes: `
            <p>Iska upyog ActionBar mein home button ko dikhane ya chhupane ke liye kiya jata hai. Is method mein ek boolean type ka showHome parameter liya jata hai.

            Is method ka upyog ActionBar mein home button ki visibility ko control karne ke liye kiya jata hai. Agar showHome parameter ki value true hai, to ActionBar mein home button dikhaya jayega. Agar showHome parameter ki value false hai, to home button chhupaya jayega.</p>
            
            <p>Home button commonly navigation ke liye istemal hota hai, jahan par user parent activity ya parent navigation hierarchy mein wapas ja sakta hai. Is method ka use karke, ActionBar mein home button ki dikhayi jane wali sthiti ko customize kiya ja sakta hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean showHome`,
                    des: `<p>home ko dikhana hai to true, otherwise false.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayShowTitleEnabled",
            id: "setDisplayShowTitleEnabled()",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayShowTitleEnabled()">setDisplayShowTitleEnabled</a>(boolean showTitle)`,

            fullCode: `public abstract void <a href="#setDisplayShowTitleEnabled()">setDisplayShowTitleEnabled</a>(boolean showTitle)`,
            des: `Kya activity title/subtitle display karna chahiye, yeh set karein. Iske liye setDisplayShowTitleEnabled ka upyog karein.`,
            longDes: `
            <p>Iska upyog ActionBar mein title ko dikhane ya chhupane ke liye kiya jata hai. Is method mein ek boolean type ka showTitle parameter liya jata hai.

            Is method ka upyog ActionBar mein title ki visibility ko control karne ke liye kiya jata hai. Agar showTitle parameter ki value true hai, to ActionBar mein title dikhaya jayega. Agar showTitle parameter ki value false hai, to title chhupaya jayega.</p>
            </br>
            <p>ActionBar ke title typically screen ke content ka short description hota hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean showTitle`,
                    des: `<p>Agar title/subtitle maujood hai to use dikhana hai to true.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setDisplayUseLogoEnabled",
            id: "setDisplayUseLogoEnabled()",
            dataTypeName: `abstract void`,
            code: `<a href="#setDisplayUseLogoEnabled()">setDisplayUseLogoEnabled</a>(boolean useLogo)`,

            fullCode: `public abstract void <a href="#setDisplayUseLogoEnabled()">setDisplayUseLogoEnabled</a>(boolean useLogo)`,
            des: `Iska upyog ActionBar mein logo ka istemal karne ke liye kiya jata hai.`,
            longDes: `
            <p>Iska upyog ActionBar mein logo ka istemal karne ke liye kiya jata hai. Is method mein ek boolean type ka useLogo parameter liya jata hai.

            Is method ka upyog ActionBar mein logo ki visibility ko control karne ke liye kiya jata hai. Agar useLogo parameter ki value true hai, to ActionBar mein logo dikhaya jayega. Agar useLogo parameter ki value false hai, to logo chhupaya jayega.</p>
            </br>
            <p>Logo typically application ka symbol hota hai, jise ActionBar mein dikhaya jata hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean useLogo`,
                    des: `<p>Agar activity logo upayog karna hai to true aur activity icon upayog karna hai to false.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setElevation",
            id: "setElevation()",
            dataTypeName: `void`,
            code: `<a href="#setElevation()">setElevation</a>(float elevation)`,

            fullCode: `public void <a href="#setElevation()">setElevation</a>(float elevation)`,
            des: `ActionBar ke Z-axis elevation ko pixels mein set karein. Iske liye setElevation method ka upyog karein.`,
            longDes: `
            <p>Iska upyog ActionBar ke elevation (udghatan) ko set karne ke liye kiya jata hai. Is method mein ek float type ka elevation parameter liya jata hai.</p>

            <p>Elevation ek visual property hai jo UI element ke z-index aur depth ko represent karta hai. ActionBar ka elevation uski physical height ya depth ko indicate karta hai. Higher elevation values UI element ko visually "upar" aur dusre elements se "aage" dikhate hain.</p>

            <p>Is method ko use karke, ActionBar ke elevation ko customize kiya ja sakta hai. Agar elevation parameter ki value 0 se badi hai, to ActionBar ki elevation set hogi aur visual depth effect hoga. Agar elevation parameter ki value 0 hai, to elevation disable hogi aur ActionBar flat appearance dikhayegi.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `float elevation`,
                    des: `<p>Elevation value pixels mein.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHideOffset",
            id: "setHideOffset()",
            dataTypeName: `void`,
            code: `<a href="#setHideOffset()">setHideOffset</a>(int offset)`,

            fullCode: `public void <a href="#setHideOffset()">setHideOffset</a>(int offset)`,
            des: `ActionBar ka current hide offset set karein. Iske liye setHideOffset method ka upyog karein.`,
            longDes: `
            <p>Iska upyog ActionBar ke hide offset ko set karne ke liye kiya jata hai. Is method mein ek int type ka offset parameter liya jata hai.</p>
            
            <p>Hide offset ActionBar ke hide/show behavior ko control karta hai. Hide offset ActionBar ko batata hai ki kitna distance scroll karna hai jab ActionBar ko hide karne ki kriya shuru karni hai. Jab scroll distance hide offset se jyada hota hai, ActionBar hide ho jati hai.</p>

            <p>Is method ko use karke, ActionBar ke hide offset ko customize kiya ja sakta hai. Agar offset parameter ki value 0 se badi hai, to hide offset set hogi aur ActionBar scroll karne par hide hogi. Agar offset parameter ki value 0 hai, to ActionBar immediate hide ho jayegi jab scroll karenge.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int offset`,
                    des: `<p>Agar offset parameter ki value 0 se badi hai, to hide offset set hogi aur ActionBar scroll karne par hide hogi. Agar offset parameter ki value 0 hai, to ActionBar immediate hide ho jayegi jab scroll karenge.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHideOnContentScrollEnabled",
            id: "setHideOnContentScrollEnabled()",
            dataTypeName: `void`,
            code: `<a href="#setHideOnContentScrollEnabled()">setHideOnContentScrollEnabled</a>(boolean hideOnContentScroll)`,

            fullCode: `public void <a href="#setHideOnContentScrollEnabled()">setHideOnContentScrollEnabled</a>(boolean hideOnContentScroll)`,
            des: `ActionBar ko content scroll par chhupana enable karein. Iske liye setHideOnContentScrollEnabled method ka upyog karein.`,
            longDes: `
            <p>Iska upyog ActionBar ko content scroll par hide karne ke liye kiya jata hai. Is method mein ek boolean type ka hideOnContentScroll parameter liya jata hai.</p>
            
            <p>hideOnContentScroll parameter ki madad se, ActionBar ko content scroll par hide karne ka nirnay liya jata hai. Agar hideOnContentScroll parameter true hai, to ActionBar content scroll karne par hide ho jayegi. Agar hideOnContentScroll parameter false hai, to ActionBar content scroll par hide nahi hogi.</p>
            
            <p>Is method ko use karke, ActionBar ka hide on content scroll behavior ko customize kiya ja sakta hai. Agar hideOnContentScroll parameter ki value true hai, to ActionBar scroll karne par hide ho jayegi. Agar hideOnContentScroll parameter ki value false hai, to ActionBar scroll ke dauran bhi visible rahegi.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean hideOnContentScroll`,
                    des: `<p>Agar hideOnContentScroll parameter ki value true hai, to ActionBar scroll karne par hide ho jayegi. Agar hideOnContentScroll parameter ki value false hai, to ActionBar scroll ke dauran bhi visible rahegi.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHomeActionContentDescription",
            id: "setHomeActionContentDescription(CharSequence)",
            dataTypeName: `void`,
            code: `<a href="#setHomeActionContentDescription(CharSequence)">setHomeActionContentDescription</a>(@Nullable CharSequence description)`,

            fullCode: `public void <a href="#setHomeActionContentDescription(CharSequence)">setHomeActionContentDescription</a>(@Nullable CharSequence description)`,
            des: `Iska upyog ActionBar ke home button ke content description ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Iska upyog ActionBar ke home button ke content description ko set karne ke liye kiya jata hai. Is method mein ek CharSequence type ka description parameter liya jata hai, jo home button ke liye content description text ko represent karta hai.</p>
            
            <p>Home button commonly application ke main screen ya navigation hierarchy ke liye istemal hota hai. Is method ka use karke, home button ke content description ko customize kiya ja sakta hai. Content description, visually impaired users ke liye accessible information provide karne ke liye bahut mahatvapurna hota hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable CharSequence description`,
                    des: `<p>Agar description parameter non-null hai, to ActionBar ke home button ka content description set ho jati hai.</p>`,
                  },
                ],
              },

              {
                name: "see also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setHomeAsUpIndicator`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setHomeAsUpIndicator`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHomeActionContentDescription",
            id: "setHomeActionContentDescription(int)",
            dataTypeName: `void`,
            code: `<a href="#setHomeActionContentDescription(int)">setHomeActionContentDescription</a>(@StringRes int resId)`,

            fullCode: `public void <a href="#setHomeActionContentDescription(int)">setHomeActionContentDescription</a>(@StringRes int resId)`,
            des: `is method ka upyog ActionBar me home action ke liye content description ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p> Is method ka upyog ActionBar ke home action button ke liye content description set karne ke liye kiya jata hai.

            Is method me ek @StringRes anotation ke saath ek integer parameter resId liya jata hai. Yeh resId parameter, string resource ka identifier hota hai jo content description ke liye use kiya jayega.</p>
            
            <p>Content description, ek text hai jo visually impaired users ke liye upyogi hota hai. Jab visually impaired user apne device par touch karke ActionBar ke home action button tak pahuchte hai, to unhe is content description ke madhyam se pata chalta hai ki yeh button kis kaam ke liye hai.</p>

            <p>Yadi hum setHomeActionContentDescription method ko resId parameter ke saath call karte hai, to ActionBar me home action button ka content description update ho jata hai. Isse visually impaired users ko pata chalta hai ki yeh button kis kaam ke liye hai, jaise "Home", "Navigate Up", "Go back" aadi.</p>
            `,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@StringRes int resId`,
                    des: `<p>Is method me ek @StringRes anotation ke saath ek integer parameter resId liya jata hai. Yeh resId parameter, string resource ka identifier hota hai jo content description ke liye use kiya jayega.</p>`,
                  },
                ],
              },

              {
                name: "see also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setHomeAsUpIndicator`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setHomeAsUpIndicator`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHomeAsUpIndicator",
            id: "setHomeAsUpIndicator(Drawable)",
            dataTypeName: `void`,
            code: `<a href="#setHomeAsUpIndicator(Drawable)">setHomeAsUpIndicator</a>(@Nullable Drawable indicator)`,

            fullCode: `public void <a href="#setHomeAsUpIndicator(Drawable)">setHomeAsUpIndicator</a>(@Nullable Drawable indicator)`,
            des: `Is method ka upyog ActionBar ke home action button ke liye custom indicator (Drawable) set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke home action button ke liye custom indicator (Drawable) set karne ke liye kiya jata hai.

            Is method me @Nullable annotation ke saath ek Drawable parameter indicator liya jata hai. Yeh parameter, custom indicator Drawable ko represent karta hai, jo home action button ke jagah par display hoga.</p>
            
            <p>Home action button, ActionBar par left side me typically display kiya jata hai aur iska default indicator usually ek back arrow hota hai. Lekin setHomeAsUpIndicator method ka upyog karke hum is default indicator ko apne pasandeeda Drawable se badal sakte hai. Yani, hum custom icon, image, ya koi dusra Drawable use kar sakte hai home action button ke indicator ke roop me.</p>
            
            <p>Jab hum setHomeAsUpIndicator method ko indicator parameter ke saath call karte hai, tab ActionBar me home action button ka indicator update ho jata hai. Custom Drawable, home action button ke jagah par dikhayi dene lagta hai.</p>
            
            <p>Agar aap is method mein null pass karte hain, to theme se default drawable ka use hoga</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable Drawable indicator`,
                    des: `<p>Yeh parameter, custom indicator Drawable ko represent karta hai, jo home action button ke jagah par display hoga, ya theme ke default ko use karne ke liye null.</p>`,
                  },
                ],
              },

              {
                name: "see also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayHomeAsUpEnabled`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setHomeActionContentDescription`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHomeAsUpIndicator",
            id: "setHomeAsUpIndicator(int)",
            dataTypeName: `void`,
            code: `<a href="#setHomeAsUpIndicator(int)">setHomeAsUpIndicator</a>(@DrawableRes int resId)`,

            fullCode: `public void <a href="#setHomeAsUpIndicator(int)">setHomeAsUpIndicator</a>(@DrawableRes int resId)`,
            des: `Is method ka upyog ActionBar ke home action button ke liye Drawable resource ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p> Is method ka upyog ActionBar ke home action button ke liye Drawable resource ko set karne ke liye kiya jata hai.

            Is method me @DrawableRes annotation ke saath ek integer parameter resId liya jata hai. Yeh resId parameter, Drawable resource ka identifier hota hai, jise home action button ke indicator ke roop me use kiya jayega.</p>

            <p>Home action button, ActionBar par typically left side me display kiya jata hai aur iska default indicator usually ek back arrow hota hai. Lekin setHomeAsUpIndicator method ka upyog karke hum is default indicator ko custom Drawable resource se badal sakte hai. Yani, hum apne pasandeeda icon, image, ya koi dusra Drawable resource use kar sakte hai home action button ke indicator ke roop me.</p>
            
            <p>Jab hum setHomeAsUpIndicator method ko resId parameter ke saath call karte hai, tab ActionBar me home action button ka indicator update ho jata hai. Custom Drawable resource, home action button ke jagah par dikhayi dene lagta hai.</p>

            <p>Agar aap is method mein 0 pass karte hain, to theme se default drawable ka use hoga.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@DrawableRes int resId`,
                    des: `<p>Yeh resId parameter, Drawable resource ka identifier hota hai, jise home action button ke indicator ke roop me use kiya jayega.</p>`,
                  },
                ],
              },

              {
                name: "see also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayHomeAsUpEnabled`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setHomeActionContentDescription`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setHomeButtonEnabled",
            id: "setHomeButtonEnabled()",
            dataTypeName: `void`,
            code: `<a href="#setHomeButtonEnabled()">setHomeButtonEnabled</a>(boolean enabled)`,

            fullCode: `public void <a href="#setHomeButtonEnabled()">setHomeButtonEnabled</a>(boolean enabled)`,
            des: `Is method ka upyog ActionBar ke home button ko enabled ya disabled karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke home button ko enabled ya disabled karne ke liye kiya jata hai.</p>
            
            <p>Is method me ek boolean parameter enabled liya jata hai. Agar hum enabled parameter ko true pass karte hai, to home button enable ho jata hai, yaani user is button ko press karke kisi action ko trigger kar sakta hai. Aur agar hum enabled parameter ko false pass karte hai, to home button disable ho jata hai, yaani user is button ko press nahi kar sakta hai.</p>
            
            <p>Home button, ActionBar par typically left side me display kiya jata hai. Is button ka default behavior hota hai ki jab user is button ko press karta hai, to wo home screen par ya parent activity par navigate karne ka kaam karta hai. Lekin setHomeButtonEnabled method ka upyog karke hum is default behavior ko sakriya ya asakriya kar sakte hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean enabled`,
                    des: `<p>home button ko enable karne ke liye true, aur home button ko disable karne ke liye false.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setIcon",
            id: "setIcon(Drawable)",
            dataTypeName: `abstract void`,
            code: `<a href="#setIcon(Drawable)">setIcon</a>(Drawable icon)`,

            fullCode: `public abstract void <a href="#setIcon(Drawable)">setIcon</a>(Drawable icon)`,
            des: `Is method ka upyog ActionBar ke icon ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke icon ko set karne ke liye kiya jata hai.

            Is method me icon parameter ke roop me ek Drawable object liya jata hai, jo ActionBar ke icon ke roop me display kiya jayega.</p>

            </p>ActionBar, typically application ke title ke saath ek icon bhi display karta hai. Yeh icon application ke branding ko represent karta hai aur user ko application ko identify karne me madad karta hai.</p>

            </p>Jab hum setIcon method ko icon parameter ke saath implement karte hai, tab ActionBar me icon set ho jata hai. Yani, hum apne pasandeeda Drawable object ka upyog karke ActionBar ke icon ko customize kar sakte hai.</p>
            `,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Drawable icon`,
                    des: `<p>Is method me icon parameter ke roop me ek Drawable object liya jata hai, jo ActionBar ke icon ke roop me display kiya jayega.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayUseLogoEnabled`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayShowHomeEnabled`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setIcon",
            id: "setIcon(int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setIcon(int)">setIcon</a>(@DrawableRes int resId)`,

            fullCode: `public abstract void <a href="#setIcon(int)">setIcon</a>(@DrawableRes int resId)`,
            des: `Is method ka upyog ActionBar ke icon ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke icon ko set karne ke liye kiya jata hai, jahan resId parameter ke roop me ek Drawable resource ka identifier liya jata hai.</p>

            <p>ActionBar typically application ke title ke saath ek icon bhi display karta hai. Yeh icon application ke branding ko represent karta hai aur user ko application ko identify karne me madad karta hai.</p>

            <p>Jab hum setIcon method ko resId parameter ke saath implement karte hai, tab ActionBar me icon set ho jata hai. Hum ek Drawable resource ka identifier provide karte hai, jisse ActionBar ke icon ke roop me use kiya jata hai.</p>
            `,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@DrawableRes int resId`,
                    des: `<p>Icon ke roop mein dikhane ke liye drawable ka resource ID.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayUseLogoEnabled`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayShowHomeEnabled`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "setListNavigationCallbacks",
            id: "setListNavigationCallbacks()",
            dataTypeName: `abstract void`,

            code: `<del><a href="#setListNavigationCallbacks()">setListNavigationCallbacks</a></del>(
    SpinnerAdapter adapter,
    ActionBar.OnNavigationListener callback
)`,

            fullCode: `public abstract void <del><a href="#setListNavigationCallbacks()">setListNavigationCallbacks</a></del>(
    SpinnerAdapter adapter,
    ActionBar.OnNavigationListener callback
)`,

            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

            <p>Is method ka upyog ActionBar me ek dropdown navigation (spinner) ko set karne ke liye kiya jata hai, jahan adapter aur callback parameter liye jate hai.</p>

            <p>Jab hum setListNavigationCallbacks method ko implement karte hai, tab ActionBar me ek dropdown navigation (spinner) set ho jata hai, jisme adapter dvara provide kiye gaye items display hote hai. callback object ke madhyam se navigation item ke chunav aur uske events ko handle kiya ja sakta hai.</p>
            
            
            `,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `SpinnerAdapter adapter`,
                    des: `<p>adapter: Ek SpinnerAdapter object, jise ActionBar ke dropdown navigation ke data source ke roop me use kiya jayega. SpinnerAdapter, dropdown me dikhane ke liye items ko provide karta hai.</p>`,
                  },
                  {
                    dataTypeName: `ActionBar.OnNavigationListener callback`,
                    des: `<p>callback: Ek ActionBar.OnNavigationListener object, jo dropdown navigation item ke chunav ke samay callback events handle karne ke liye use kiya jayega. Yeh object ActionBar ke navigation events ko sunega aur corresponding actions ko perform karega.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setLogo",
            id: "setLogo(Drawable)",
            dataTypeName: `abstract void`,
            code: `<a href="#setLogo(Drawable)">setLogo</a>(Drawable logo)`,

            fullCode: `public abstract void <a href="#setLogo(Drawable)">setLogo</a>(Drawable logo)`,
            des: `Is method ka upyog ActionBar ke logo ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke logo ko set karne ke liye kiya jata hai.

            Is method me logo parameter ke roop me ek Drawable object liya jata hai, jo ActionBar ke logo ke roop me display kiya jayega.</p>
            
            <p>ActionBar typically application ke title ke saath ek logo bhi display karta hai. Yeh logo application ke branding aur identity ko represent karta hai.</p>
            `,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Drawable logo`,
                    des: `<p>Is method me logo parameter ke roop me ek Drawable object liya jata hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayUseLogoEnabled`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayShowHomeEnabled`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setLogo",
            id: "setLogo(int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setLogo(int)">setLogo</a>(@DrawableRes int resId)`,

            fullCode: `public abstract void <a href="#setLogo(int)">setLogo</a>(@DrawableRes int resId)`,
            des: `Is method ka upyog ActionBar ke logo ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke logo ko set karne ke liye kiya jata hai, jahan resId parameter ke roop me ek Drawable resource ka identifier liya jata hai.</p>

            <p>ActionBar typically application ke title ke saath ek logo bhi display karta hai. Yeh logo application ke branding aur identity ko represent karta hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@DrawableRes int resId`,
                    des: `<p>is parameter me eak Drawable resource ka identifier liya jata hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setDisplayUseLogoEnabled`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayShowHomeEnabled`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "setNavigationMode",
            id: "setNavigationMode()",
            dataTypeName: `abstract void`,

            code: `<del><a href="#setNavigationMode()">setNavigationMode</a></del>(int mode)`,

            fullCode: `public abstract void <del><a href="#setNavigationMode()">setNavigationMode</a></del>(int mode)`,

            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

            <p>Is method ka upyog ActionBar ke navigation mode ko set karne ke liye kiya jata hai.

            Is method me mode parameter ke roop me ek integer value liya jata hai, jo navigation mode ko specify karta hai. Navigation mode ke liye hum ActionBar.NAVIGATION_MODE_STANDARD, ActionBar.NAVIGATION_MODE_LIST, ya ActionBar.NAVIGATION_MODE_TABS constants ka upyog kar sakte hai.</p>

            <p>Navigation mode, ActionBar ke navigation style ko represent karta hai. Yeh mode ActionBar me kis tarah ke navigation elements display honge, jaise dropdown navigation, tab navigation, ya standard navigation.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int mode`,
                    des: `<p>Is method me mode parameter ke roop me ek integer value liya jata hai, jo navigation mode ko specify karta hai. Navigation mode ke liye hum ActionBar.NAVIGATION_MODE_STANDARD, ActionBar.NAVIGATION_MODE_LIST, ya ActionBar.NAVIGATION_MODE_TABS constants ka upyog kar sakte hai.</p>`,
                  },
                ],
              },
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `NAVIGATION_MODE_STANDARD`,
                    des: ``,
                  },
                  {
                    dataTypeName: `NAVIGATION_MODE_LIST`,
                    des: ``,
                  },
                  {
                    dataTypeName: `NAVIGATION_MODE_TABS`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: true,
            name: "setSelectedNavigationItem",
            id: "setSelectedNavigationItem()",
            dataTypeName: `abstract void`,

            code: `<del><a href="#setSelectedNavigationItem()">setSelectedNavigationItem</a></del>(int position)`,

            fullCode: `public abstract void <del><a href="#setSelectedNavigationItem()">setSelectedNavigationItem</a></del>(int position)`,

            des: `Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.`,

            longDes: `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

            <p>Is method ka upyog ActionBar me currently selected navigation item ko set karne ke liye kiya jata hai.

            Is method me position parameter ke roop me ek integer value liya jata hai, jo selected navigation item ke position ko specify karta hai.</p>

            <p>ActionBar me navigation items, jaise tabs, dropdown items, ya menu items hote hai. Jab hum setSelectedNavigationItem method ko position parameter ke saath implement karte hai, tab hum ActionBar me specified position ke corresponding navigation item ko select karte hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int position`,
                    des: `<p>Is method me position parameter ke roop me ek integer value liya jata hai, jo selected navigation item ke position ko specify karta hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setSplitBackgroundDrawable",
            id: "setSplitBackgroundDrawable()",
            dataTypeName: `void`,
            code: `<a href="#setSplitBackgroundDrawable()">setSplitBackgroundDrawable</a>(Drawable d)`,

            fullCode: `public void <a href="#setSplitBackgroundDrawable()">setSplitBackgroundDrawable</a>(Drawable d)`,
            des: `Is method ka upyog ActionBar ke split mode (jab ActionBar screen ke dono taraf alag-alag dikhta hai) ke background ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke split mode (jab ActionBar screen ke dono taraf alag-alag dikhta hai) ke background ko set karne ke liye kiya jata hai.</p>

            <p>Is method me d parameter ke roop me ek Drawable object liya jata hai, jo split background ke roop me ActionBar me display kiya jayeg</p>
            
            <p>Split mode me, ActionBar screen ke dono taraf alag-alag dikhta hai, typically landscape orientation me ya large screen devices par. setSplitBackgroundDrawable method ka upyog karke hum split mode me ActionBar ke background ko customize kar sakte hai, jisse design consistency maintain ho sake.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Drawable d`,
                    des: `<p>Is method me d parameter ke roop me ek Drawable object liya jata hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setStackedBackgroundDrawable",
            id: "setStackedBackgroundDrawable()",
            dataTypeName: `void`,
            code: `<a href="#setStackedBackgroundDrawable()">setStackedBackgroundDrawable</a>(Drawable d)`,

            fullCode: `public void <a href="#setStackedBackgroundDrawable()">setStackedBackgroundDrawable</a>(Drawable d)`,
            des: `Is method ka upyog ActionBar ke stacked mode (jab ActionBar me title aur subtitle ek saath dikhte hai) ke background ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar ke stacked mode (jab ActionBar me title aur subtitle ek saath dikhte hai) ke background ko set karne ke liye kiya jata hai.</p>

            <p>Is method me d parameter ke roop me ek Drawable object liya jata hai, jo stacked background ke roop me ActionBar me display kiya jayega.</p>

            <p>Stacked mode me, ActionBar me title aur subtitle ek saath dikhte hai, typically portrait orientation me ya jab ActionBar me kam space available hota hai. setStackedBackgroundDrawable method ka upyog karke hum stacked mode me ActionBar ke background ko customize kar sakte hai.</p>
            `,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Drawable d`,
                    des: `<p>Is method me d parameter ke roop me ek Drawable object liya jata hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setSubtitle",
            id: "setSubtitle(int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setSubtitle(int)">setSubtitle</a>(int resId)`,

            fullCode: `public abstract void <a href="#setSubtitle(int)">setSubtitle</a>(int resId)`,
            des: `Is method ka upyog ActionBar me subtitle ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar me subtitle ko set karne ke liye kiya jata hai.</p>

            <p>ActionBar me title ke saath subtitle bhi display kiya ja sakta hai. Subtitle, additional information ya context ko provide karne ke liye use kiya jata hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int resId`,
                    des: `<p>Subtitle string ka resource ID jo set karna hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setSubtitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setSubtitle",
            id: "setSubtitle(CharSequence)",
            dataTypeName: `abstract void`,
            code: `<a href="#setSubtitle(CharSequence)">setSubtitle</a>(CharSequence subtitle)`,

            fullCode: `public abstract void <a href="#setSubtitle(CharSequence)">setSubtitle</a>(CharSequence subtitle)`,
            des: `Is method ka upyog ActionBar me subtitle ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar me subtitle ko set karne ke liye kiya jata hai.

            Is method me subtitle parameter ke roop me ek CharSequence object liya jata hai, jo subtitle ke text ko represent karta hai.</p>
            
            <p>ActionBar me title ke saath subtitle bhi display kiya ja sakta hai. Subtitle, additional information ya context ko provide karne ke liye use kiya jata hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `CharSequence subtitle`,
                    des: `<p>Is method me subtitle parameter ke roop me ek CharSequence object liya jata hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setSubtitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setTitle",
            id: "setTitle(int)",
            dataTypeName: `abstract void`,
            code: `<a href="#setTitle(int)">setTitle</a>(@StringRes int resId)`,

            fullCode: `public abstract void <a href="#setTitle(int)">setTitle</a>(@StringRes int resId)`,
            des: `Is method ka upyog ActionBar me title ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar me title ko set karne ke liye kiya jata hai.</p>

            <p>ActionBar me title application ka naam ya screen ka heading represent karta hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@StringRes int resId`,
                    des: `<p>Title string ka resource ID jo set karna hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setTitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setTitle",
            id: "setTitle(CharSequence)",
            dataTypeName: `abstract void`,
            code: `<a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,

            fullCode: `public abstract void <a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,
            des: `Is method ka upyog ActionBar me title ko set karne ke liye kiya jata hai.`,
            longDes: `
            <p>Is method ka upyog ActionBar me title ko set karne ke liye kiya jata hai.

            Is method me title parameter ke roop me ek CharSequence object liya jata hai, jo title ke text ko represent karta hai.</p>

            <p>ActionBar me title application ka naam ya screen ka heading represent karta hai.</p>`,
            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `CharSequence title`,
                    des: `<p>Is method me title parameter ke roop me ek CharSequence object liya jata hai.</p>`,
                  },
                ],
              },
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `setTitle`,
                    des: ``,
                  },
                  {
                    dataTypeName: `setDisplayOptions`,
                    des: ``,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "show",
            id: "show()",
            dataTypeName: `abstract void`,
            code: `<a href="#show()">show</a>()`,

            fullCode: `public abstract void <a href="#show()">show</a>()`,
            des: `Is method ka upyog ActionBar ko visible karne ke liye kiya jata hai.`,
            longDes: `
            <p> Is method ka upyog ActionBar ko visible karne ke liye kiya jata hai.

            Jab hum show method ko implement karte hai, tab ActionBar display ho jata hai. Yani, ActionBar screen par dikhayi deta hai.</p>
            </br>
            <p>Agar aap View.SYSTEM_UI_FLAG_FULLSCREEN ke through ActionBar ko chhupa rahe hain, to aapko seedhe is function ko call nahi karna chahiye.</p>`,
            parameter: [],
          },
        ],
      },

    },
  });
};
